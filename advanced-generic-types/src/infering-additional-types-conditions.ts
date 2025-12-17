import {City, Person, Product, Employee} from "./dataTypes";

type targetKeys<T> = T extends (infer U)[] ? keyof U : keyof T;

function getValue<T, P extends targetKeys<T>>(data: T, propName: P): T[P] {
    if (Array.isArray(data)) {
        return data[0][propName];
    } else {
        return data[propName];
    }
}

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);