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