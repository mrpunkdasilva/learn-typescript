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

```javascript
class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    toString () {
        return `toString: Name ${this.name} ; Price: ${this.price}`
    }
}

let data = new Map();

data.set("hat", new Product("Hat", 100));
data.set("boots", new Product("Boots", 100));

[...data.keys()].forEach(key => console.log(data.get(key).toString()));
```

> Confira a API do Map: [clique aqui]()


Alguns métodos importantes:

| Método   | Função                                                                 | Exemplo                          |
|:--------:|:----------------------------------------------------------------------:|:--------------------------------:|
| `set()`  | Armazena um valor com a chave especificada.                           | `map.set('nome', 'Gustavo')`     |
| `get()`  | Recupera o valor armazenado com a chave especificada.                 | `map.get('nome')`                |
| `keys()` | Retorna um iterador para as chaves no Map.                            | `for (let k of map.keys())`      |
| `values()`| Retorna um iterador para os valores no Map.                          | `for (let v of map.values())`    |
| `entries()`| Retorna um iterador para os pares chave/valor como arrays.         | `for (let e of map.entries())`   |


### Vantagens do Map

- Não contem nenhuma chave por padrão, só tem o que foi definido
- As chaves podem ser qualquer valor, de qualquer tipo, desde built in como objetos complexos
- As cheaves dentro do map são ordenados de forma simples, o objeto Map itera suas entradas chaves e valor na ordem em que foram inseridas
- Podemos pegar o número de items dentro do Map com a propriedade `size`
- Diretamente iterável
- Funciona melhor em cenarios em que precisamos armazenar e remover por chave-valor
- Não tem suporte para serialização ou analise sintática, mas pode ser implementado: [veja mais na discussion do StackOverflow](https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map)


## Usando Symbols para chaves do Map

A principal vantagem de usar um Map é que qualquer valor pode ser uma chave (_key_), incluindo **[Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)**

Cada valor de um Symbol é único e imutavel e idealmente escolhido para um identificador de objetos

```javascript
class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}
class Supplier {
    constructor(name, productids) {
        this.name = name;
        this.productids = productids;
    }
}
let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let products = new Map();

[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));

let suppliers = new Map();

suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Shoes", zoomProducts.map(p => p.id)));
suppliers.get("acme").productids.forEach(id =>
        console.log(`Name: ${products.get(id).name}`));
```