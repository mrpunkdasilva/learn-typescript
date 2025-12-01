# Creating Generic Classes

As classes genericas são classes que tem um paramero que é de tipo generico (qualquer tipo) e como é passado por
parametro seria uma classe generica parametrica:


**Criamos a classe parametrizando com o generic type parameter:**

> DataCollection === Nome da classe
> <> === delimitar o parametro do tipo generico
> T === Generic Type Parameter

```ts 
class DataCollection<T> { }
```

**Assim no construtor, por exemplo teremos a entrada de valores recebendo um array generico que vai ser do tipo especificado na passagem do argumento na classe:**

```ts 
constructor(initialItems: T[]) {
    this.items.push(...initialItems);
}
```

**Agora podemos fazer a passagem do argumento do tipo real do objeto que vai implementar essa classe generica:**

- Assim temos que o objeto `peopleData` vai ser implementado a usando a classe generica parametrizada como do tipo Person, ou seja: Será recebido, armazenado e retornado um objeto de instancia de `Person`

```ts 
let peopleData = new DataCollection<Person>(people);
```

**Código completo:**

```ts 
import {Person, Product} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type dataType = Person | Product;

class DataCollection<T> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    // getNames(): string[] {
    //     return this.items.map(item => item.name);
    // }
    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);
//console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

//if (firstPerson instanceof Person) {
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
//}
```

