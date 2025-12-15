import {City, Person, Product, Employee} from "./dataTypes";

type Filter<T, U> = T extends U ? never : T;

function FilterArray<T, U>(data: T[],
                           predicate: (item) => item is U): Filter<T, U>[] {
    return data.filter(item => !predicate(item)) as any;
}

let dataArray = [new Product("Kayak", 275), new Person("Bob", "London"),
    new Product("Lifejacket", 27.50)];

function isProduct(item: any): item is Product {
    return item instanceof Product;
}

let filteredData: Person[] = FilterArray(dataArray, isProduct);
filteredData.forEach(item => console.log(`Person: ${item.name}`));