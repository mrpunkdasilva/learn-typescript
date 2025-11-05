let Product = function(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.toString = function() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
}

Product.process = (...products) =>
    products.forEach(p => console.log(p.toString()));
Product.process(new Product("Hat", 100, 1.2), new Product("Boots", 100));

