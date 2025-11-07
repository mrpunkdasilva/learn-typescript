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



