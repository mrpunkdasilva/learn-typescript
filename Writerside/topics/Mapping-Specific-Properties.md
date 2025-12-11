# Mapping Specific Properties

O index type query para um tipo mapeado pode ser expressado como um generic type parameter que pode então ser usado para selecionar uma propriedade especifica para mapear pelo nome, como mostrado abaixo:


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P]
};

let p1: SelectProperties<Product, "name"> = {name: "Kayak"};
let p2: Pick<Product, "name" | "price"> = {name: "Lifejacket", price: 48.95};

console.log(`Custom mapped type: ${p1.name}`);
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`)
```


O `SelectProperties` mapeia definindo um tipo de parametro generico adicional nomeado `K` que é restringido usando `Keyof` que somente tipos que correspondem propriedades definidas por type parameter `T` podendo ser especificado. 

O novo type parameter é usado no mapeamento do seletor de nome com o resultado que propriedades individuais podendo ser selecionada para inclusão no mapped type, deste modo:

```typescript
let p1: SelectProperties<Product, "name"> = { name: "Kayak" };
```

Esse mapeamento seleciona o name property definida pela classe `Product`. Múltiplas propriedades podendo ser expressadas como um type union e o TS prove o built-in `Pick<T, K>` mapeado que performa a mesma função:

```ts 
let p2: Pick<Product, "name"| "price"> = { name: "Lifejacket", price: 48.95};
```













