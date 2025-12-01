# Applying a Type Parameter to a Method

## O problema anterior:

O método collate dependia de um segundo parâmetro genérico (U).

Esse parâmetro era definido na classe, o que obrigava a escolher o tipo de U no momento da criação do objeto DataCollection.

Isso limitava a flexibilidade, já que só era possível usar um único tipo para collate em toda a instância.


## Solução:

O parâmetro U foi movido para o método collate.

Assim, cada chamada de collate pode usar um tipo diferente.

Isso torna a classe mais reutilizável e flexível.


```ts
import {City, Person, Product, Employee} from "./dataTypes";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

let employees = [
    new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")
];

class DataCollection<T extends { name: string }> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({...match, ...item});
            }
        });
        return results;
    }
}

let peopleData = new DataCollection<Person>(people);
let collatedData = peopleData.collate<City>(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));

let empData = peopleData.collate<Employee>(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
```
