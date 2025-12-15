import {Product} from "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;

class Collection<T> {
    private items: T[];

    constructor(...initialItems: T[]) {
        this.items = initialItems || [];
    }

    total<P extends keyof T, U extends boolean>(propName: P, format: U)
        : resultType<U> {
        let totalValue = this.items.reduce((t, item) =>
            t += Number(item[propName]), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue as any;
    }
}

let data = new Collection<Product>(new Product("Kayak", 275), new Product("Lifejacket",
    48.95));

let firstVal: string = data.total("price", true);
console.log(`Formatted value: ${firstVal}`);

let secondVal: number = data.total("price", false);
console.log(`Unformatted value: ${secondVal}`);