function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);

taxValue = calculateTax(100, 10, 20)
console.log(`3 args: ${taxValue}`);

taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`)
