# Using the unknow type

TS também suporta um tipo desconhecido (unknown) que é uma maneira alternativa segura para o uso do `any`

Um valor desconhecido só pode ser atribuido a `any` ou a si proprio, a menos que seja usada uma asserção de tipo ou um type guard 

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
    default:
        let value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult;

console.log(`Number value: ${myNumber.toFixed(2)}`);
```

Um valor de tipo unknow não pode ser atribuido a outro tipo sem uso da type assertion:, senão produz esse erro:

```
src/index.ts(18,5): error TS2322: Type 'unknown' is not assignable to type 'number'.
```

Assim para resolver isso, como foi falado, devemos usar a type assertion:

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
    default:
        let value: never = taxValue;
        console.log(`Unexpected type for value: ${value}`);
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult as number;

console.log(`Number value: ${myNumber.toFixed(2)}`);
```

