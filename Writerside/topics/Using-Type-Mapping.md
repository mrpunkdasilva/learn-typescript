# Using Type Mapping

Tipos mapeados são criados aplicando uma transformação para a propriedade de um tipo existente. O melhor caminho para entender como tipos mapeados funcioname e para criar um que processe um tipo mas não faz nenhuma mudança, como mostrado a baixo:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type MappedProduct = {
    [P in keyof Product]: Product[P]
};

let p: MappedProduct = {name: "Kayak", price: 275};
console.log(`Mapped type: ${p.name}, ${p.price}`)
```


![Um tipo mapeado]({C4DC426F-9701-455A-832F-C8E0F7E0E6A7}.png)


A propriedade name selector define o type parameter, nomeado `P` no exemplo e usa a keyword `in` para enumerar os tipos numa união de valores literais. O type union pode ser expresso diretamente como `"name" | "price"` ou obter usando `keyof`


