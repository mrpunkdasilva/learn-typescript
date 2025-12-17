# Inferring Additional Types in Conditions

Pode existir uma tensão entre a necessidade para aceitar um intervalo mais amplos de tipos por meio de um parametro de tipo generico e a necessidade de conhecer os detalhes desses tipos. Como no exemplo abaixo, mostra uma função que aceita um array ou um único objeto de um determinado tipo:


```typescript
import {City, Person, Product, Employee} from "./dataTypes";

function getValue<T, P extends keyof T>(data: T, propName: P): T[P] {
    if (Array.isArray(data)) {
        return data[0][propName];
    } else {
        return data[propName];
    }
}

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];

console.log(`Array Value: ${getValue(products, "price")}`);
console.log(`Single Total: ${getValue(products[0], "price")}`);
```


