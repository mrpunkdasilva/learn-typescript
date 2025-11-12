# Using Type Union

Podemos unir o que se é igual formar seu proprio tipo:

> Para fazer a union type usamos o caractere de bar ou pipe (|)

```js
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true)
```

A função `calculateTax` não retorna `number` e nem `string` e sim retorna `string|number `

Ou seja, só podemos usar os metodos que são presentes nos dois tipos, no caso, o código acima dara problema porque o método que eles compartilhar (`string` e `number`) na verdade é o `toString`

E podemos usar o `switch`:

```typescript
function calculateTax(amount: number, format: boolean): string | number {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue = calculateTax(100, false);

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
}
```


