import {City, Person, Product, Employee} from "./dataTypes";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P]
};

let p1: SelectProperties<Product, "name"> = {name: "Kayak"};
let p2: Pick<Product, "name" | "price"> = {name: "Lifejacket", price: 48.95};

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`)