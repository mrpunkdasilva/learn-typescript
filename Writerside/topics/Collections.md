# Collections

De forma geral, o comum dentro das collections do JavaScript usamos objects e arrays:

- Arrays: `let cards = ["card1", "card2"];`
- Objects: `let user = {name: "Vampeta"}`;


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

let data = {
    hat: new Product("Hat", 100)
}

data.boots = new Product("Boots", 100);
Object.keys(data).forEach(key => console.log(data[key].toString()))
```

## Armazenando dados pela chave com `Object`

> `Object.keys(object)` usado para retornar um array contendo os nomes definidos apropriadamente pelo objeto
> `Object.values(object)` esse método é usado para retornar um array com todos os valores do objeto

Assim conseguimos pegar a chave do objeto sem saber qual ela é exatamente e  acessar o valor da propriedade do objeto pela chave e assim armazenar deste modo:

```javascript
Object.keys(data).forEach(key => console.log(data[key].toString()))
```

## Armazenando dados por um Map

