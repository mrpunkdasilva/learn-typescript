import {City, Person, Product, Employee} from "./dataTypes";

type MappedProduct = {
    [P in keyof Product]: Product[P]
};

let p: MappedProduct = {name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`)