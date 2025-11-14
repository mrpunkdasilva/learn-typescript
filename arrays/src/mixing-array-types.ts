function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});