# Adding Support for Another Type

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
