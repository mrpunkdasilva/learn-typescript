# Restricting the Generic Type Parameter

A terceira abordagem é um misto entre os dois exemplos anteriores, provendo uma variavel de tipo generico mas restringindo isso para especificar ops tipos. Isso permite funcionalidades que dependem de features de classes particulares sem fixar o tipo de type parameter completamente  


* DataCollection<T> exige que T tenha uma propriedade name.
* SearchableCollection<T> restringe ainda mais: T deve ser Employee, Person ou a união Employee | Person.
* Isso é válido porque tanto Employee quanto Person possuem name.

```ts
import {City, Person, Product, Employee} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

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

class SearchableCollection<T extends Employee | Person> extends DataCollection<T> {
    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(searchTerm: string): T[] {
        return this.items.filter(item => {
            if (item instanceof Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            } else if (item instanceof Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}

let employeeData = new SearchableCollection<Employee>(employees);
employeeData.find("Sales").forEach(e =>
    console.log(`Employee ${e.name}, ${e.role}`));
```

Quando uma subclasse herda de uma classe genérica, o parâmetro de tipo que ela especifica precisa ser atribuível ao parâmetro da superclasse.

Isso significa que a subclasse só pode usar um tipo mais restrito (compatível com a restrição definida na classe base).