# Passing on the Generic Type Parameter

O jeito mais simples é implementar os métodos e propriedades da interface sem mudar o tipo do parametro, criando uma classe generico que direciona a implementação da interface:


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type  shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;

    get(name: string): T;

    count: number;
}

class ArrayCollection<DataType extends shapeType> implements Collection<DataType> {
    private items: DataType[] = [];

    add(...newItems): void {
        this.items.push(...newItems);
    }

    get(name: string): DataType {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }
}

let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
```

