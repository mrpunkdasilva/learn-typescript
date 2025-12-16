# Using Conditional Types in Type Mappings


## Código

```typescript
import {City, Person, Product, Employee} from "./dataTypes";

type changeProps<T, U, V> = {
    [P in keyof T]: T[P] extends U ? V : T[P]
};
type modifiedProduct = changeProps<Product, number, string>;

function convertProduct(p: Product): modifiedProduct {
    return {name: p.name, price: `$${p.price.toFixed(2)}`};
}

let kayak = convertProduct(new Product("Kayak", 275));
console.log(`Product: ${kayak.name}, ${kayak.price}`);
```