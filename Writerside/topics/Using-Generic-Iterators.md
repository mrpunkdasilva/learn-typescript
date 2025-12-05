# Using Generic Iterators

Como explicado no [JavaScript - Collections](Collections.md), iterators permite uma sequencia de valores para ser
enumerados e suporte para iteradores é uma feature comum para classes que operam com outros tipos, como collections. TS
prove as interfaces listadas na tabela abaixo, descrevendo iterators e os seus resultados:

| Nome                    | Descrição                                                                                                                                                       |
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Iterator<T>**         | Interface que descreve um iterador cujo método `next` retorna objetos `IteratorResult<T>`.                                                                      |
| **IteratorResult<T>**   | Interface que descreve o resultado produzido por um iterador, contendo as propriedades `done` e `value`.                                                        |
| **Iterable<T>**         | Interface que define um objeto com a propriedade `Symbol.iterator` e que suporta iteração direta (ex.: em `for...of`).                                          |
| **IterableIterator<T>** | Interface que combina `Iterator<T>` e `Iterable<T>`, descrevendo um objeto que possui `Symbol.iterator`, além de definir o método `next` e retornar resultados. |

O uso das interfaces Iterator<T> e IteratorResult<T> para prover acesso para o conteúdo de `Map<string, T>` usado para
guardar objetos pela classe `Collection<T>`:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
type shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Map<string, T>;

    constructor(initialItems: T[] = []) {
        this.items = new Map<string, T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.set(newItem.name, newItem));
    }

    get(name: string): T {
        return this.items.get(name);
    }

    get count(): number {
        return this.items.size;
    }

    values(): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

let iterator: Iterator<Product> = productCollection.values();
let result: IteratorResult<Product> = iterator.next();

while (!result.done) {
    console.log(`Product: ${result.value.name}, ${result.value.price}`);
    result = iterator.next();
}
```

O método values definido pela classe Collection<T> retorna um Iterator<T>. 

```ts
    values(): Iterator<T> {
        return this.items.values();
    }
```

Quando esse método é invocado em um objeto `Collection<Product>`, o iterador retornado produzirá objetos `IteratorResult<Product>` através de seu método next. 

```ts 
let iterator: Iterator<Product> = productCollection.values();
let result: IteratorResult<Product> = iterator.next();
```

A propriedade result de cada objeto `IteratorResult<Product>` retornará um Product, permitindo que os objetos gerenciados pela coleção sejam iterados.









