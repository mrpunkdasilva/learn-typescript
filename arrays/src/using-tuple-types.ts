function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];
let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem: string | number) => {
            if (typeof tupleElem === "string") {
                console.log(`String Value: ${tupleElem}`);
            } else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    } else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
})