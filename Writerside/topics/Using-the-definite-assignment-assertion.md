# Using the definite assignment assertion

Se a option de `strictNullChecks` estiver ativada o compilador vai reportar um erro se a variavel é usada antes de atribuir valor

Isso é uma feature útil, mas pode existir tempos onde o valor é atribuido no caminho e isso não é visivel para o compilador:

```typescript
function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue: string | number | null;
eval("taxValue = calculateTax(100, false)");
if (taxValue !== null) {
    let nonNullTaxValue: string | number = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${taxValue.charAt(0)}`);
            break;
    }
} else {
    console.log("Value is not a string or a number");
}
```

A função `eval()` recebe uma string e executa esse conteúdo da string como statement do JavaScript (ele entende que é um código), mas o problema é que o compilador não enxerga que por exemplo o `taxValue recebe valor com o uso do `eval()`

```typescript
eval("taxValue = calculateTax(100, false)");
```

Assim o código acima dara erro: 

```
src/index.ts(12,5): error TS2454: Variable 'taxValue' is used before being assigned.
src/index.ts(13,9): error TS2322: Type 'string | number | null' is not assignable to type 
'string | number'.
  Type 'null' is not assignable to type 'string | number'.
src/index.ts(13,44): error TS2454: Variable 'taxValue' is used before being assigned.
src/index.ts(14,20): error TS2454: Variable 'taxValue' is used before being assigned.
```

A definição da assignment assertion diz para o TS que o valor será atribuido antes da variavel ser usada:

```ts
function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue!: string | number | null;

eval("taxValue = calculateTax(100, false)");

if (taxValue !== null) {
    let nonNullTaxValue: string | number = taxValue;
    switch (typeof taxValue) {
        case "number":
            console.log(`Number Value: ${taxValue.toFixed(2)}`);
            break;
        case "string":
            console.log(`String Value: ${taxValue.charAt(0)}`);
            break;
    }
} else {
    console.log("Value is not a string or a number");
}
```

O definitive assignment assertion é o ponto de exclamação (!) e ele é usado depois do nome da variavel a ser usada

Assim, o código acima retornara com o sucesso o esperado:

```
Number Value: 120.00
```


