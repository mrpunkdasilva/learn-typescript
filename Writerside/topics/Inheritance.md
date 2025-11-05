# Inheritance

No JavaScript os objetos tem links para outros objetos, conhecidos como **prototypes**, cada um deles tem suas propriedades e métodos

Prototypes são objetos, e tem suas próprias propriedades, objetos formam um corrente de herança (_inheritance chain_), que segue funcionalidades complexas para serem definidas uma vez e usada consistentemente

```javascript
let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};
console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
console.log(`toString: ${hat.toString()}`);
```

![A imagem representa o objeto e o  prototipo](A imagem representa o objeto e o  prototipo.png)

## Inspecionando e Modificando o prototype de um objeto

Object é um prototype para muitos objetos, mas isso também prove alguns metodos que são usados diretamente, pela herança e que também será usado para obter informação sobre o prototype


Alguns métodos:

| Nome do Método | Descrição da Função |
| :--- | :--- |
| **`getPrototypeOf`** | Retorna o **protótipo** (o objeto ou `null`) do objeto especificado. |
| **`setPrototypeOf`** | **Altera o protótipo** (o objeto interno `[[Prototype]]`) de um objeto especificado para outro objeto ou `null`. |
| **`getOwnPropertyNames`** | Retorna um *array* contendo os **nomes de todas as propriedades próprias** (não herdadas) e enumeráveis ou não enumeráveis de um objeto. |


**Exemplo:**

```javascript
let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};

let hatPrototype = Object.getPrototypeOf(hat);
console.log(`Hat Prototype: ${hatPrototype}`);
let bootsPrototype = Object.getPrototypeOf(boots);

console.log(`Boots Prototype: ${bootsPrototype}`)
console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
console.log(`toString: ${hat.toString()}`);
```


**_Os objetos derivam do mesmo prototype:_**

![image.png](image.png)

Podemos definir novas propriedades e métodos para os prototypes, enovos valores podem ser adicionados para propriedades existentes:

```javascript
let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};
let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}
let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}
console.log(hat.toString());
console.log(boots.toString())
```