# Defining Multiple Type Parameters

Podemos definir mais de um tipo na parametrização das classes genericas, ou seja, definirmos além do `T`

> O `T` pode ser substituido por qualquer coisa, mas o popular é usar `T`


**A definição segue a mesma lógica então basta definirmos uma virgula e incluir o parametro que queremos:**

```ts 
class DataCollection<T extends { name: string }, U> 
```

<note>

No exemplo abaixo, fazemos não só a definição múltipla dos parametros como também podemos fazer a restrição dos
parametros que no caso foi uma restrição com shape e fizemos para o parametros `T`, mas poderiamos como já foi visto ter
feito a restrição com value

</note>





**Código completo:**

```ts 
import {City, Person, Product} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];

class DataCollection<T extends { name: string }, U> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
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

let peopleData = new DataCollection<Person, City>(people);
let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
```

