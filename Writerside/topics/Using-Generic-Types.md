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

## Adding Support for Another Type

O problema que temos agora com a `PeopleCollection` é que ela só aceita objetos de `Person`, assim se eu quiser ter as
mesmas operações para uma collection responsavel por `Product` a primeira abordagem não muito boa seria duplicar as
features que temos na collection de `PeopleCollection`  para algo como `ProductCollection`, mas isso não é uma abordagem
boa, então a melhor forma seria criar uma classe generica para receber tanto `Person` como `Product`:

```ts 
import {Person, Product} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

type dataType = Person | Product;

class DataCollection {
    private items: dataType[] = [];

    constructor(initialItems: dataType[]) {
        this.items.push(...initialItems);
    }

    add(newItem: dataType) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): dataType {
        return this.items[index];
    }
}

let peopleData = new DataCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

if (firstPerson instanceof Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}
```

**Fazemos isso com o type union de `Person` e `Product`:**

```ts 
type dataType = Person | Product;
```

**E depois definimos que a propriedade `items` vai receber um array desse type:**

```ts 
private
items: dataType[] = []
```

**E todos os tipos de retorno e entrada dos metodos serão `datatype` assim conseguimos garantir um tipo que aceitara
tanto `Person`como `Product`:**

```ts
class DataCollection {
    private items: dataType[] = [];

    constructor(initialItems: dataType[]) {
        this.items.push(...initialItems);
    }

    add(newItem: dataType) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): dataType {
        return this.items[index];
    }
}   
```

<note>

Podemos também ter de certa forma um type guard para sabermos com que tipo de dados estamos lidando:

```ts 
let peopleData = new DataCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);

if (firstPerson instanceof Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}
```

</note>

## Creating Generic Classes

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

