let Product = function (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function (name, price, taxRate) {
    Product.call(this,name,price);
    this.taxRate = taxRate;
}

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.toTaxString = function () {
    return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString("Hat", 100, 1.2);

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

console.log(hat.toTaxString());
console.log(boots.toString());


