# Inferring Types of Functions

O compilador pode também inferir tipos em generic types que aceita functions, como mostrado no código abaixo:


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<T,
    Func extends (T) => any>(data: T[], func: Func): Result<Func>[] {
    return data.map(item => func(item));
}

let selectName = (p: Product) => p.name;
let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
let names: string[] = processArray(products, selectName);

names.forEach(name => console.log(`Name: ${name}`))
```


O tipo condicional `Result<T>` usa a palavra-chave `infer` para obter o tipo de retorno de uma função que aceita um objeto do tipo `T` e produz um resultado `any`. O uso da inferência de tipos permite que funções que processam um tipo específico sejam utilizadas, garantindo que o resultado da função `processArray` seja um tipo específico, baseado no resultado da função fornecida como parâmetro `func`

A função selectName retorna o valor string da propriedade name de um objeto Product, e a inferência significa que `Result<(args: Product) => string>` é corretamente identificado como string, permitindo que `processArray` retorne um `string[]`.


## Tipos condicionais embutidos com inferência

| Nome                   | Descrição                                                                 |
|-------------------------|---------------------------------------------------------------------------|
| **Parameters<T>**       | Seleciona os tipos de cada parâmetro da função, expressos como uma tupla. |
| **ReturnType<T>**       | Seleciona o tipo de retorno da função (equivalente a `Result<T>`).        |
| **ConstructorParameters<T>** | Seleciona os tipos de cada parâmetro de uma função construtora, como tupla. |
| **InstanceType<T>**     | Retorna o tipo resultante de uma função construtora.                      |

---

```ts
import {City, Person, Product, Employee} from "./dataTypes";

function makeObject<T extends new (...args: any) => any>(
    constructor: T,
    ...args: ConstructorParameters<T>
): InstanceType<T> {
    return new constructor(...args as any[]);
}

let prod: Product = makeObject(Product, "Kayak", 275);
let city: City = makeObject(City, "London", 8136000);

[prod, city].forEach(item => console.log(`Name: ${item.name}`));
```

