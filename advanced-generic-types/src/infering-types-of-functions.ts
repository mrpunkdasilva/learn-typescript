import {City, Person, Product, Employee} from "./dataTypes";

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T,
    Func extends (T) => any>(data: T[], func: Func): Result<Func>[] {
    return data.map(item => func(item));
}

let selectName = (p: Product) => p.name;
let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
let names: string[] = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`))