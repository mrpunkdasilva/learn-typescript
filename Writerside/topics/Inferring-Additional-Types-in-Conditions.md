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

Esse código não vai compilar porque o generic parameter não está corretamente capturando o relacionamento entre os tipos. Se a função `total` recebe um array do parametro `data` e retorna o valor da propriedade especifica pelo valor do `propName`  para esse objeto. O parametro `propName` é restringido usando `keyof` que é um problema quando um array é usado porque `keyof` retorna uma união dos nomes das propriedades definidos pelo objeto array do JS e não as propriedades do tipo contido no array que pode ser visto essa mensagem de erro de compilação:


```
src/index.ts(12,48): error TS2345: Argument of type '"price"' is not assignable to 
parameter of type 'number | "length" | "toString" | "toLocaleString" | "pop" | "push" |  
"concat" | "join" | "reverse" | "shift" | "slice" | "sort" | "splice" | "unshift" | 
"indexOf" | "lastIndexOf" | ... 14 more ... | "includes"' . 
```
 
O TS tem a keyword `infer` podem ser usado para inferir tipos que não são 

