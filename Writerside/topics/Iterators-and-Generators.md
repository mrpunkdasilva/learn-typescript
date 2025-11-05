# Iterators and Generators

## Iterators
Iterators são objetos que retornam uma sequencia de valores e eles são usados com coleções

Um iterator define a função chamada next que retorna um objeto com valores e propriedades feitas: 
- O valor da propriedade retorna o próximo valor na sequencia 
- A propriedade feita é setada para true quando a sequencia é completa 

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

function createProductIterator() {
    const hat = new Product("Hat", 100);
    const boots = new Product("Boots", 100);
    const umbrella = new Product("Umbrella", 23);
    let lastVal;

    return {
        next() {
            switch (lastVal) {
                case undefined:
                    lastVal = hat;
                    return { value: hat, done: false };
                case hat:
                    lastVal = boots;
                    return { value: boots, done: false };
                case boots:
                    lastVal = umbrella;
                    return { value: umbrella, done: false };
                case umbrella:
                    return { value: undefined, done: true };
            }
        }
    }
}

let iterator = createProductIterator();
let result = iterator.next();

while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}
```



## Generator

É uma forma mais fácil de criar porque usamos a keyword `yield`  e a ideia é que escrever iterators pode ser não muito legal porque  o código tem que se manter o estado dos dados sendo carregado da atual posição em sequencia por cada vez na função next 


Funções Generator são denotadas com asterisco:

```javascript
function* createProductIterator() {
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}
```

Podemos usar Generator com Spread Operator: 

```javascript
[...createProductIterator()].forEach(p => console.log(p.toString()))
```
