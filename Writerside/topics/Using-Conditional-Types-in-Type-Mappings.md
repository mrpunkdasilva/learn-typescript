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

O `changeProps<T,U,V>` seleciona as propriedades do tipo `U` e muda eles para o tipo `V` no tipo mapeado. Esse statement aplica o mapeamento para a classe `Product`, especificando que propriedades `numbers` deve ser feita para propriedades `strings`

```ts 
type modifiedProduct = changeProp<Product, number, string>;
```


O mapped type define propriedades como `name` e `price`, ambos são tipados como `string`. O tipo `modifiedProduct` é usado como o resultado do produto `convertProduct` que aceita um objeto `Product` e retorna um objeto que conforme o shape do mapped type formatando a propriedade `price`







