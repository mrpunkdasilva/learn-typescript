let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
};
let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}
let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}
console.log(hat.toString());
console.log(boots.toString())