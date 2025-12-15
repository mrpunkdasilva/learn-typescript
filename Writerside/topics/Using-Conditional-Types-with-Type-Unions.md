# Using Conditional Types with Type Unions

Conditional types podem ser usados com type unions permitindo tipos serem facilmente selecionados ou excluidos do set quea união contém, como mostrado abaixo:


## Código

```ts 
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
```


Quando a conditional type é provida com um type unioon o TSC distribui as condições para cada tipo da união, criando o que é conhecido como um tipo `distributive conditional`. Esse efeito é aplicado quando um conditional types é usado como um tipo, como este exemplo:

```ts 
type filteredUnion = Filter<Product | Person, Product>
```


