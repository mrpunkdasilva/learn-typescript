# Constraining Generic Type Values

## O problema 

Por padrão, um parâmetro genérico (<T>) pode ser qualquer tipo.

Isso significa que o compilador não sabe se T terá certas propriedades (como name).

Se você tentar acessar item.name dentro de um método, o compilador reclama porque não há garantia de que T possua essa propriedade.


> Por default o compilador infere que o tipo é any por exemplo no caso do metodo `getNames` que temos 

Uma das formas de restringir as classes genericas é:

- **Definindo `extends` após o parametro definimos uma restrição, de forma que temos dois niveis de restrições:**

  1. Na criação do objeto:

Só é possivel instanciar `DataCollection<T>` com tipos  que sejam atribuiveis a `Person | Product`

  2. No uso do objeto:

Se passarmos que `T` será `Person` então só vai trabalhar com teste tipo logo teremos só determinados metodos do tipo informado










**Código completo:**

```ts 
import {Person, Product} from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

class DataCollection<T extends (Person | Product)> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    add(newItem: T) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let peopleData = new DataCollection<Person>(people);
let firstPerson = peopleData.getItem(0);
console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
console.log(`Person Names: ${peopleData.getNames().join(", ")}`);

let productData = new DataCollection<Product>(products);
let firstProduct = productData.getItem(0);
console.log(`First Product: ${firstProduct.name}, ${firstProduct.price}`);
console.log(`Product Names: ${productData.getNames().join(", ")}`);
```