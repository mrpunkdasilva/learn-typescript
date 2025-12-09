# Using the Index Type Query

A palavra reservada `keyof` conhecida como operador _index type query_ retorna uma union de nomes de propriedades
de um tipo, usando tipos de valores literais, abaixo mostra como podemos aplicar o `keyof` para a classe `Product`:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let myVar: keyof Product = "name";
myVar = "price";
myVar = "someOtherName"
```

A notação de tipo para a `myVar` é `keyof Product`, que vai ser a união das propriedades definidas pela classe `Product`
no `dataTypes`, assim o que teremos criado será isso:

```js 
export class Product {
    constructor(public

    name: string
,
    public price: number
) {
}
}
```

Atribuir qualquer outro valor para `myVar`, que o final statement atribuido para produzir um erro de compilação:

```
src/index.ts(34,1): error TS2322: Type '"someOtherName"' is not assignable to type '"name" | 
"price"'.
```

A palavra-chave `keyof` pode ser usada para restringir parametros de tipo generico de modo que eles só possam ser
tipados para corresponder às propriedades de outro tipo

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role")
```




