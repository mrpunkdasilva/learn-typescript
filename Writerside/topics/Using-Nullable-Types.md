# Using Nullable Types

- null -> usado para representar algo que não existe ou é invalido e somente pode ser atribuido com o valor `null`

- undefined -> usado quando a variavel foi definida mas não foi atribuida nada nela ainda e só pode receber o valor `undefined`


```typescript
function calculateTax(amount: number, format: boolean): string | number {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue: string | number = calculateTax(0, false);

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

## Restringindo atribuições nulas

Podemos definir uma compile option para tratar a questão de quando definimos uma atribuição nula, ou seja, quando não vai ser admitido a atribuição do tipo `null`, sendo essa a option:

> "strictNullChecks": true

Ou seja, o código acima ao adicionar a option, daria este erro:

```
src/index.ts(3,9): error TS2322: Type 'null' is not assignable to type 'string | number'.
```

Para contornar isso podemos usar a type union anterior com o null, ou seja, temos isto:

```typescript
function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
let taxValue: string | number | null = calculateTax(0, false);
switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("Value is null");
        } else {
            console.log(typeof taxValue);
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
```

Isso acaba com o erro que teriamos com a questão da restrição nula



## Removendo o null da union com uma assertion

Para removermos o null que foi adiciona ao type union anterior podemos fazer o seguinte:

> Uma assertion não nula deve ser usada somente quando sabemos que o valor `null` não pode ocorrer
> Um erro de tempo de execução pode ser causado se você aplicar a assertion e o valoor `null` pode ocorrer
> Uma maneira segura de fazer isso funcionar é um type guard

```typescript
function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

let taxValue: string | number = calculateTax(100, false)!;

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("Value is null");
        } else {
            console.log(typeof taxValue);
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}
```

A assertion não nula é feita aqui:

> `let taxValue: string | number = calculateTax(100, false)!;`
> 
> Ela é feita com o sinal de exclamação (!)


