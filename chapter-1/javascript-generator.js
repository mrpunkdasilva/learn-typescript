class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

function* createProductIterator() {
    yield new Product("Hat", 100);
    yield new Product("Boots", 100);
    yield new Product("Umbrella", 23);
}

let iterator = createProductIterator();
let result = iterator.next();

while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}