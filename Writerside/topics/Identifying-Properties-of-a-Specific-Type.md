# Identifying Properties of a Specific Type


Um requisito comum é limitar um parâmetro de tipo de forma que ele possa ser usado apenas para especificar uma propriedade que tenha um tipo específico. Por exemplo, a classe `Collection<T>` no código definiu um método `total` que aceita um nome de propriedade e que deve ser restrito a propriedades do tipo number. Esse tipo de restrição pode ser alcançado combinando os recursos descritos nas seções anteriores



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

o método para identificar a propriedade é incomum, então vamos quebrar o statement em duas partes para facilitar a explicação. O primeiro passo é usar um type mapping que tem uma conditional statement:

```typescript
type unionOfTypeNames<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;    
}
```

