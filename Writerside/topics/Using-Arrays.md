# Using Arrays

## Working with Arrays

Para trabalharmos com arrays é simples, basta especificarmos o array type depois do nome:

- Definimos o array type `number[]` com o nome do tipo e colchetes []

```typescript
let prices: number[] = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];
```

<note>

Podemos usar a notação de array para conter múltiplos tipos como a union type por exemplo e basta usarmos parenteses `()`

```typescript
let array : (number | string)[];
```

</note>


## Performing Operations on Typed Arrays

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices: number[] = [100, 75, 42];
let names: string[] = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price: number, index: number) => {
    writePrice(names[index], calculateTax(price));
})
```


<note>

**Temos uma outra sinxtas para aarrays**

Está sintaxe pode ser escrita da seguinte forma:

```typescript
let prices : Array<number> = [100, 45, 560];
```

Que é o mesmo que escrevermos assim:


```typescript
let prices : number[] = [100, 45, 560];
```


<warning>

O problema reside em não podermos usar essa sintaxe em arquivos TSX, justamente por causa que ele pode confundir os brackets como tag (`Array<number>`). Assim é melhor optar pela sintaxe do square bracket (colchetes) 

</warning>



</note>


## Using inferred typing for arrays

