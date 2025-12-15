# Using Conditional Types in Generic Classes

Tipos condicionais podem ser usados para expressar o relacionamento entre uma sobrecarga de tipos de parametros de
função e o resultado produzido como mostrado no código abaixo e isso é mais conciso alternativamente para um tipo de
sobrecarga de função assim conditional type podem ser dificeis de entender

## Código

```typescript 
import {Product} from "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;

class Collection<T> {
    private items: T[];

    constructor(...initialItems: T[]) {
        this.items = initialItems || [];
    }

    total<P extends keyof T, U extends boolean>(propName: P, format: U)
        : resultType<U> {
        let totalValue = this.items.reduce((t, item) =>
            t += Number(item[propName]), 0);
        return format ? `$${totalValue.toFixed()}` : totalValue as any;
    }
}

let data = new Collection<Product>(new Product("Kayak", 275), new Product("Lifejacket",
    48.95));

let firstVal: string = data.total("price", true);
console.log(`Formatted value: ${firstVal}`);

let secondVal: number = data.total("price", false);
console.log(`Unformatted value: ${secondVal}`);
```

A classe `Collection<T>` usa um array para guardar objetos é especifico pelo generic type parameter nomeao `T`. O metodo
`total` define dois generic type parameters: `P` que especifica uma propriedade para usar para criar o `total` e `U` que
especifica qualquer resultado que deve ser formatado

O resultado do método `total` é uma conditional type que é resolvida usando o valor provido para o type parameter `U`

```ts 
total < P
extends
keyof
T, U
extends
boolean > (propName
:
P, format
:
U
):
resultType < U > {}
```

O uso de conditional type significa que o resultado do metodo `total` é determinado pelo argumento provido para o type
parameter `U`. Assim o compiler pode inferir `U` do valor provido para o argumento `format`, o método invocado deste
modo:

```ts 
let firstVal: string = data.total("price", true);
```

Quando o argumento para o parametro `format` é `true`, a conditioanl type resolve para setar o result type do método
`total` para uma string. Isso combina o data type produzido pela implementação do método

```ts 
return format ? `$${totalValue.toFixed()}` : totalValue as any;
```




