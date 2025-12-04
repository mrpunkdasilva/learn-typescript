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

O `ArrayCollection< DataType>` usa a keyword  para declarar que está em conformidade para a interface. A interface tem um generic type parameter então o `ArrayColletion<DataType>` define um parametro compativel. Deste o type parameter para a interface é necessario ter um propriedade `name` então deve ter o type parameter para a classe e usar o mesmo nome para o type alias para a interface e a classe tento assim certeza da consistência 

A classe `ArrayCollection<DataType>` requer um tipo de argumento quando um objeto é criado e pode ser operado na interface interface `Collection<T>`, deste modo:


```ts 
let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
```

Assim temos o type argument resolve o tipo generico para a classe e a interface isso implementa um objeto `ArrayCollection<Person>` implementando a interface `Collection<Person>`

