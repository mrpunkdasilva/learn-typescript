# Type Guarding Generic Types


## O problema

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];

class DataCollection<T> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    filter<V extends T>(): V[] {
        return this.items.filter(item => item instanceof V) as V[];
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
let filteredProducts = mixedData.filter<Product>();
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`))
```

- Aqui, o método `filter` tenta usar `instanceof V`.  
- Mas `V` é apenas um **parâmetro de tipo** — e parâmetros de tipo não existem em tempo de execução.  
- O compilador remove os genéricos ao transpilar para JavaScript, então não há como usar `instanceof` com `V`.  
- Resultado: erro `TS2693: 'V' only refers to a type, but is being used as a value here`.

---

## A solução em: Type Predicate

```ts
import {City, Person, Product, Employee} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];
let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];

class DataCollection<T> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    filter<V extends T>(predicate: (target) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[];
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);

function isProduct(target): target is Product {
    return target instanceof Product;
}

let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`))
```

### O que mudou:
- O método `filter` agora recebe uma **função predicado** como argumento.  
- Essa função usa a sintaxe `target is V`, que informa ao compilador que, se retornar `true`, o objeto é do tipo `V`.  
- Em tempo de execução, o predicado usa recursos reais do JavaScript (`instanceof Product`) para verificar o tipo.  
- Assim, o compilador entende o narrowing e o runtime consegue executar a verificação.

