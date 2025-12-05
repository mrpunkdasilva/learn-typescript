# Advanced Generic Types

 
## Using Generic Collections

TS prove suporte para usar JS collections com generic type parameters, permitindo uma classe generica para uso seguro de collections, como descrito em na tabela e algumas dessas JS collections podem ser revisadas em [JavaScript - Collections](Collections.md):


_Tabela com as coleções de tipos genericos:_

| Nome              | Descrição                                                                 |
|-------------------|---------------------------------------------------------------------------|
| **Map<K, V>**     | Representa um mapa cujas chaves são do tipo `K` e os valores do tipo `V`. |
| **ReadonlyMap<K, V>** | Representa um mapa que **não pode ser modificado**.                     |
| **Set<T>**        | Representa um conjunto cujos valores são do tipo `T`.                     |
| **ReadonlySet<T>**| Representa um conjunto que **não pode ser modificado**.                   |


- Abaixo temos como uma classe generica podendo usa o type parameter com a collection:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
type shapeType = { name: string };

class Collection<T extends shapeType> {
    private items: Set<T>;

    constructor(initialItems: T[] = []) {
        this.items = new Set<T>(initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem => this.items.add(newItem));
    }

    get(name: string): T {
        return [...this.items.values()].find(item => item.name === name);
    }

    get count(): number {
        return this.items.size;
    }
}
```



A classe `Collection<T>` tem mudado para `Set<T>` para guardar os itens, que é usado pelo generic type parameter para a collection. O TSC usar o type parameter para prevenir outros tipos de dados para serem adicionados



```ts 
import {Product} from "./dataTypes";

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
}

let productCollection: Collection<Product> = new Collection(products);
console.log(`There are ${productCollection.count} products`);

let p = productCollection.get("Hat");
console.log(`Product: ${p.name}, ${p.price}`);
```


Classes genericas não prove generic type parameters para collections e pode ser especificar tipos concretos. No exemplo, um Map é usado para guardar objetos usando a propriedade `name` como chave. A propriedade `name` pode ser usado para salvar e  é para a restrição aplicada para o type parameter nomeado `T`

