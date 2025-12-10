# Using a Generic Type Parameter with a Mapped Type

Tipos mapeados se tornam mais uteis quando eles definem um generic type parameter, como mostrado abaixo, que permite a transformação eles descrevem para ser aplicada para a ampla variedade de tipos:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type Mapped<T> = {
    [P in keyof T]: T[P]
};

let p: Mapped<Product> = {name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`);

let c: Mapped<City> = {name: "London", population: 8136000};
console.log(`Mapped type: ${c.name}, ${c.population}`);
```

O type `Mapped<T>` define um generic type parameter nomeado `T` que é o tipo para ser transformado. O type parameter é usado no nome e type selectors, significa que qualquer tipo pode ser mapeado usando um generic type parameter, mostrado abaixo, o `Mapped<T>` mapped type é usado no `Product` e `City`


