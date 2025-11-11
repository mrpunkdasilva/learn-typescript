# Using Type Assertions

O type assertions é uma maneira de dizer ao compilador um tipo especifico para um valor

> Esse é um bom jeito de "burlar" o union type para que definamos que o valor será exatamente `number` por exemplo e não `string|number`, lembrando que o tipo a ser asertado deve ser um dos tipos da union
> {style="note"}


```ts
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}


let taxNumber = calculateTax(100, false) as number;
let taxString = calculateTax(100, true) as string;

console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
```

<note>

O `as` é a keyword para fazer a assertation e o `number` é o tipo alvo que queremos

</note>


<warning>

Temos uma sintaxe alternativa para a assertation, mas é não é usada quando mexemos com TSX por exemplo, por ela ter uma sintaxe como elemento do HTML:

```typescript
let taxString = <string> calculateTax(100, true);
```

</warning>


