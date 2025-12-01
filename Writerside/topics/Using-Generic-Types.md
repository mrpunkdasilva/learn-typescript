# Using Generic Types

## Understanding the Problem

O melhor jeito de entender como os tipos genericos trabalham e porque eles são uteis e isso para funcionar um cenario
comum é mostrado quando tipos regulares se tornam dificeis de gerenciar

**Nossos data-types iniciais:**

```ts 
export class Person {
    constructor(public name: string, public city: string) {
    }
}

export class Product {
    constructor(public name: string, public price: number) {
    }
}

export class City {
    constructor(public name: string, public population: number) {
    }
}

export class Employee {
    constructor(public name: string, public role: string) {
    }
}
```

**Definindo a classe para gerenciar a collection de objetos Person:**

```ts 
import {Person, Product} from "./dataTypes";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];

let products = [
    new Product("Running Shoes", 100), new Product("Hat", 25)
];

[...people, ...products].forEach(item => console.log(`Item: ${item.name}`));


class PeopleCollection {
    private items: Person[] = [];

    constructor(initialItems: Person[]) {
        this.items.push(...initialItems);
    }

    add(newItem: Person) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): Person {
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
```
