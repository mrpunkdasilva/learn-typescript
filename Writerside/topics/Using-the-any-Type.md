# Using the any Type


Tem que tomar cuidado para usar e o melhor é nem usar porque ela trás de volta a liberdade que tem no JS que o TS por motivo de existência vai contra

- Uso como type annotation:
```js
function calculateTax(amount: any): any {
    return (amount * 1.2).toFixed(2);
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
```

O uso implicito também pode gerar problemas, como por exemplo quando não definimos nenhum tipo estatico para uma variavel ela receber por default any, caso só seja criada, ou retornos de funções ou parametros senão definidos os tipos podem ser consumidos como any:

```js
function calculateTax(amount): any {
    return `$${(amount * 1.2).toFixed(2)}`;
}
let price = 100;
let taxAmount = calculateTax(price);
let halfShare = taxAmount / 2;
let personVal = calculateTax("Bob");
console.log(`Price: ${price}`);
console.log(`Full amount in tax: ${taxAmount}`);
console.log(`Half share: ${halfShare}`);
console.log(`Name: ${personVal}`)
```

> Desabilitando o any implicito
> Basta usar essa compile option no `tsconfig.json`: `"noImplicitAny": true`
> {style="note"}




