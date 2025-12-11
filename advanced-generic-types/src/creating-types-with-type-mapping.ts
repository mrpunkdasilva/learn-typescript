import {City, Person, Product, Employee} from "./dataTypes";

type CustomMapped<K extends keyof any, T> = {
    [P in K]: T
};

let p1: CustomMapped<"name" | "city", string> = {name: "Bob", city: "London"};
let p2: Record<"name" | "city", string> = {name: "Alice", city: "Paris"};

console.log(`Custom mapped type: ${p1.name}, ${p1.city}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.city}`)