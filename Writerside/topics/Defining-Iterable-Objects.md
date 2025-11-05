# Defining Iterable Objects

Funções standalone (funções independentes), para iterators e generators podem ser muito uteis, mas o mais o comum requisito é para um objeto para prover uma sequencia de parte de alguma funcionalidade

**Exemplo:** 

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }

    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }

    *getGenerator() {
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat", 100),
    new Product("Boots", 80), new Product("Gloves", 23));

console.log(`Total price: ${winter.getTotalPrice()}`);

[...winter.getGenerator()].forEach(p => console.log(`Product: ${p}`))
```

## Definindo Default Iterator

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}
class GiftPack {
    constructor(name, prod1, prod2, prod3) {
        this.name = name;
        this.prod1 = prod1;
        this.prod2 = prod2;
        this.prod3 = prod3;
    }
    getTotalPrice() {
        return [this.prod1, this.prod2, this.prod3]
            .reduce((total, p) => total + p.price, 0);
    }
    *[Symbol.iterator]() {
        yield this.prod1;
        yield this.prod2;
        yield this.prod3;
    }
}

let winter = new GiftPack("winter", new Product("Hat", 100),
    new Product("Boots", 80), new Product("Gloves", 23));
console.log(`Total price: ${ winter.getTotalPrice() }`);
[...winter].forEach(p => console.log(`Product: ${ p }`))
```

> A propriedade `Symbol.iterator` é usada oara denotada o iterator padrão para um objeto
> 
> Assim que consigo usar desse jeito:
> `[...winter].forEach(p => console.log(`Product: ${ p }`))`
> Sem precisar fazer assim:
> `[...winter.getGenerator()].forEach(p => console.log(`Product: ${ p }`));`