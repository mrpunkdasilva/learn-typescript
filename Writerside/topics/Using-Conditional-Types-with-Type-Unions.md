# Using Conditional Types with Type Unions

Conditional types podem ser usados com type unions permitindo tipos serem facilmente selecionados ou excluidos do set
quea união contém, como mostrado abaixo:

## Código

```ts 
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

Quando a conditional type é provida com um type unioon o TSC distribui as condições para cada tipo da união, criando o
que é conhecido como um tipo `distributive conditional`. Esse efeito é aplicado quando um conditional types é usado como
um tipo, como este exemplo:

```ts 
type filteredUnion = Filter<Product | Person, Product>
```

O TSC aplica o conditional type para cada tipo na união separadamente e então cria uma união de resultados, como esse:

```ts 
type filteredUnion = Filter<Product, Product> | Filter<Person, Product>
```

A conditional type `Filter<T, U>` faz com que nunca quando o primeiro parametro é o mesmo do segundo, produzindo esse resultado:

```` ts 
type filtered = never | Person;
````

E não é possivel ter um union ter um union com `never`, o compilador omite isso da união, com o resultado que equivalencia de tipos:


```typescript
type filteredUnion = Person
```


Os filtros do conditional type saem algum tipo que não pode ser atribuido para `Person` e retorna os tipos faltantes na união. O método `FilterArray<T>` faz o trabalho da filtragem de um array usando uma função predicato e retorna o tipo `Filter<T, U>`










