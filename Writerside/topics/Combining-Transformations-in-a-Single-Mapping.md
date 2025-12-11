# Combining Transformations in a Single Mapping

O código abaixo mostra como mapeamentos podem ser combinados para criar uma cadeia de transformação, mas mapeamentos podem aplicar mudanças para propriedades:


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type CustomMapped<T, K extends keyof T> = {
    readonly [P in K]?: T[P]
};

type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let p1: CustomMapped<Product, "name"> = {name: "Kayak"};
let p2: BuiltInMapped<Product, "name" | "price">
    = {name: "Lifejacket", price: 48.95};

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);
```


Para customizar type mappings, o ponto de interrogação e a palavra-chave `readonly`podendo ser aplicado no mesma transformação que pode ser restringida para permitir propriedades para serem selecionadas pelo name

Mapeamentos podem também ser encadeados juntos, como mostrado pela combinação de `Pick` e `Partial` e `Readonly` mapeados

