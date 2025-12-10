# Using an Index Type for the Collection&lt;T&gt; Class

Usando um index type permite mudar a classe `Collection<T>` então qualqquer tipo de objeto e não apenas esses que define
a propriedade `name`, como mostrado nas mudança da classe abaixo, que usa um index type query para restringir a
propriedade do construtor `propertyName` para os nomes de propriedades definidas pelo generic type parameter `T`,
provendo a chave pelo qual objetos podem ser guardados no `Map`:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type shapeType = { name: string };

class Collection<T, K extends keyof T> implements Iterable<T> {
    private items: Map<T[K], T>;

    constructor(initialItems: T[] = [], private propertyName: K) {
        this.items = new Map<T[K], T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem =>
            this.items.set(newItem[this.propertyName], newItem));
    }

    get(key: T[K]): T {
        return this.items.get(key);
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product, "name">
    = new Collection(products, "name");
console.log(`There are ${productCollection.count} products`);

let itemByKey = productCollection.get("Hat");
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`)
```

A class foi reescrita com um type parameter generico `K` que é restrito para `keyof T` que é o data type de objetos
guardados pela collection. Uma nova instância de `Collection<T, K>` é então criado deste modo:

...
let productCollection: Collection<Product, "name">
    = new Collection(products, "name")
```




