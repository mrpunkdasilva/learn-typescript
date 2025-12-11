import {City, Person, Product, Employee} from "./dataTypes";

type CustomMapped<T, K extends keyof T> = {
    readonly [P in K]?: T[P]
};

type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let p1: CustomMapped<Product, "name"> = {name: "Kayak"};
let p2: BuiltInMapped<Product, "name" | "price">
    = {name: "Lifejacket", price: 48.95};

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);