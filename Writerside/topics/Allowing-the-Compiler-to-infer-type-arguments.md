# Allowing the Compiler to infer type arguments

O TSC possui uma habilidade de já conseguir fazer a inferência os tipos de argumentos genericos, baseado na forma como objetos são criados ou metodos são invocados.

Isso pode ser um caminho útil para escrever um código conciso mas requer atenção e você deve ter certeza que você inicializa  objetos com os tipos que você deveria ter especificado  explicitamente

Assim no exemplo, instancias da classe `DataCollection<T>` e invoca a o metodo `collate` sem o type arguments, deixando o compilador inferir o tipo:

```ts 
import { City, Person, Product, Employee } from "./dataTypes";

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
                results.push({ ...match, ...item });
            }
        });

        return results;
    }
}

export let peopleData = new DataCollection(people);
export let collatedData = peopleData.collate(cities, "city", "name");

collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));

export let empData = peopleData.collate(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
```

O compilador é hábil para inferir o type arguments baseado no argumento passeado no construtor para `DataCollection<T>` e o primeiro argumento passado para o método `collate`. Para checar os tipos inferidos pelo compilador, se examinaros o arquivos de declaration teremos:

```js 
export declare let peopleData: DataCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let empData: (Person & Employee)[];
```


<note>

</note>
