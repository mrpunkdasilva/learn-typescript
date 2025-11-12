# Using the Never Type

O TS prove o tipo `never` para situações em onde um type guard, tenha uma maneira de lidar com todos os tipos possiveis de tipos para um valor

Assim é possivel lidar com tipos inesperados que possam por algum mótivo, por exemplo se cair no `default` do switch do type guard:

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
```

