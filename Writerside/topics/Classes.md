# Classes

Classes no JavaScript foi adicionado para ser uma transição para mais de desenvolvedores de outras linguagens como Java e C#

Por detras dos panos, classes no JavaScript são implementadas usando prototypes, o que significa que temos diferenças na implementação em comparação com C# ou Java

> Classes são definidas com a keyword: `class`


## Exemplo:

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
let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);
console.log(hat.toString());
console.log(boots.toString())
```



