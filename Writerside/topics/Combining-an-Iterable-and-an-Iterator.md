# Combining an Iterable and an Iterator

A interface `IterableIterator<T>` pode descrever objetos que podem ser iterados e que também define a propriedade`Symbol.iterator`

Objetos que implementam essa interface pode ser enumerada de forma mais elegante como mostrado no código abaixo:

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

    values(): IterableIterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);
[...productCollection.values()].forEach(p =>
    console.log(`Product: ${p.name}, ${p.price}`))
```

O método `values` retorna o objeto `IterableIterator`, o  que é possível porque o resultado do método `Map` definetodos os membros especificados pela interface

A interface combinada permite que o resultado do método `values` seja iterado diretamente e o exemplo utiliza o operador spread para preencher um array e em seguida enumera seu conteúdo com o metodo `forEach`

