# Creating an Iterable Class

Classes que define uma propriedade `Symbol.iterator` podendo implementar a interface `Iterable<T>`, que permite iteração sem necessariamente chamar o metodo ou ler a propriedade:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
type shapeType = { name: string };

class Collection<T extends shapeType> implements Iterable<T> {
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

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
```



A nova propriedade implementa a interface `Iterable<T>` 

```ts 
[Symbol.iterator](): Iterator<T> {
    return this.items.values();
}
```

Indicando que isso define ua propriedade `Symbol.iterator` que retorna um objeto `Iterator<T>` para ser usado para iterações: 

```ts 
[...productCollection].forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
```

