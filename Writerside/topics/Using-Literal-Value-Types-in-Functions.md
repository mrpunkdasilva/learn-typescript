# Using Literal Value Types in Functions

Valores de tipos literais são mais uteis quando são usadas com funções, permitindo parameters ou retornos para serem restritos para um conjunto especifico de valores:

```ts 
function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);

console.log(`Price: ${total}`);7
```



