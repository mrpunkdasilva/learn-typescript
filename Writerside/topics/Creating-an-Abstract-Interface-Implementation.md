# Creating an Abstract Interface Implementation

Uma classe abstrada pode prover uma implementação parcial de uma interface que pode ser completa pelas subclasses. A classe abstrata tem o mesmo conjunto de opções para lidar com o tipo de parametros como as classes regulares, como mostrado abaixo classes abstradas que passam no interface do generic type argument:  


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type  shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;

    get(name: string): T;

    count: number;
}

abstract class ArrayCollection<T extends shapeType> implements Collection<T> {
    protected items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }

    abstract get(searchTerm: string): T;

    get count(): number {
        return this.items.length;
    }
}

class ProductCollection extends ArrayCollection<Product> {
    get(searchTerm: string): Product {
        return this.items.find(item => item.name === name);
    }
}

class PersonCollection extends ArrayCollection<Person> {
    get(searchTerm: string): Person {
        return this.items.find(item => item.name === name || item.city === name);
    }
}

let peopleCollection: Collection<Person> = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));

let productCollection: Collection<Product> = new ProductCollection();
productCollection.add(new Product("Running Shoes", 100), new Product("Hat", 25));
[peopleCollection, productCollection].forEach(c => console.log(`Size: ${c.count}`));
```


A classe `ArrayCollection<T>` é abstrata e provê uma implementação parcial da interface `Collection<T>`, deixando as subclasses proverem  o metodo `get`



