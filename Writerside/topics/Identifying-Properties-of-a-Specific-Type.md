# Identifying Properties of a Specific Type

Um requisito comum é limitar um parâmetro de tipo de forma que ele possa ser usado apenas para especificar uma
propriedade que tenha um tipo específico. Por exemplo, a classe `Collection<T>` no código definiu um método `total` que
aceita um nome de propriedade e que deve ser restrito a propriedades do tipo number. Esse tipo de restrição pode ser
alcançado combinando os recursos descritos nas seções anteriores

## Código

```typescript
import {City, Person, Product, Employee} from "./dataTypes";

type unionOfTypeNames<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
};
type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];

function total<T, P extends propertiesOfType<T, number>>(data: T[],
                                                         propName: P): number {
    return data.reduce((t, item) => t += Number(item[propName]), 0);
}

let products = [new Product("Kayak", 275), new Product("Lifejacket", 48.95)];
console.log(`Total: ${total(products, "price")}`);
```

o método para identificar a propriedade é incomum, então vamos quebrar o statement em duas partes para facilitar a
explicação. O primeiro passo é usar um type mapping que tem uma conditional statement:

```typescript
type unionOfTypeNames<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
}
```

A conditional statement checa o tipo de cada propriedade, se a propriedade não tem o tipo alvo então o tipo é trocado
para `never`. Se uma propriedade tem um tipo esperado, então o tipos é mudado para o valor literal que é a propriedade "name". Isso significa que mapping `unionOfTypeNames<Product, number>` produz o seguinte tipo mapeado:

```typescript
{
    name: never,
        price
:
    "price"
}
```

Esse tipo mapeado prove a entrada para o segundo estágio no processo, que é para o operador de indexação de acesso para obter uma união de tipos de propriedades definidas pelo mapped type, como esse:

```ts 
type propertiesOfType<T, U> = unionOfTypeNames<T, U>[keyof T];
```

- O operador de acesso indexado ([keyof T]) percorre todas as propriedades de T
- O resultado é uma união dos tipos dessas propriedades
- Assim, propertiesOfType<T, U> gera um tipo que representa a união dos tipos das propriedades filtradas pelo mapeamento
  unionOfTypeNames<T, U>

Para o tipo mapeado criado pela `unionOfTypeName<Product, number>`, o operador de aceso indexado produz a seguinte união:

```
never | "price"
```

Como notado previamente, `never` é automaticamente removido de uniões, deixando uma união de tipos de valores literais, sendo as propriedades de tipos requeridos. A união dos nomes das propriedades pode ser então usando para restringir generic type parameters:

```typescript
function total<T, P extends propertiesOfType<T, number>>(
    data: T[],
    propName: P
): number {
    return data.reduce((t, item) => t += Number(item[propName]), 0);
}
```


O parametro `propName` da função `total`  pode ser usado somente com os nomes das propriedades númericas no tipo `T`, como isso:

```ts 
console.log(`Total: ${total(products, "price")}`);
```
















