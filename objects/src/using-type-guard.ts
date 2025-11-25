function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue = calculateTax(100, false);

if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
} else if (typeof taxValue === "string") {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}


