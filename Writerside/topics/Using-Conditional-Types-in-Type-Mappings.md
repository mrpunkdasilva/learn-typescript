# Using Conditional Types in Type Mappings

Conditional types podem ser combinados com type mappings, permitindo diferentes transformações para ser aplicada para as propriedades no tipo que pode prover grande flexibilidade que usar outro feature sozinha, como mostrado no código abaixo um type mapping que usa um conditional type


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






