# Working with Enums

Enums são uma coleção de valores que são acessadas pelos nome

Assim basta declaramos com: 

> enum Name { Value1, Value2 } 

```ts
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella }
let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

products.forEach((prod: [Product, number]) => {
    switch (prod[0]) {
        case Product.Hat:
            writePrice("Hat", calculateTax(prod[1]));
            break;
        case Product.Gloves:
            writePrice("Gloves", calculateTax(prod[1]));
            break;
        case Product.Umbrella:
            writePrice("Umbrella", calculateTax(prod[1]));
            break;
    }
});
```

### Understanding how Enums works

Eles são implementados pelo compilador e, em tempo de execução, viram código JavaScript padrão.

Cada valor de um enum recebe automaticamente um número inteiro sequencial, começando em 0 por padrão.

Podemos trabalhar com os valores de um Enum dentro de um array:

```ts 
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella }
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
})
```

Como o Enum não é iteravel, podemos usar deste modo para iterar sobre ele, já que criando um array com os valores dele teremos isso:

```typescript
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
})
```

