# Working with Tuples

Tuplas são arrays de tamanho fixo, onde cada elemento do array pode ter diferentes types

- Sendo um dado estruturado provido pelo TypeScript
- O compiler implementa a tupla no modo raiz do JavaScript, ou seja, usando array normal

```ts 
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);
```

Tuplas são definidas usando colchetes (square brackets) contento o tipo de cada elemento por virgulas

```typescript
let hat: [string, number] = ["Hat", 100];

let gloves: [string, number] = ["Gloves", 75];
```

<warning>

Tuples devem ser definidas com type annotations, senão ele vai assumir que é um array normal

</warning>


> Os elementos de uma tupla são acessadas por meio de index e o sistema funciona da mesma forma que um array normal

## Processing Tuples

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

hat.forEach((h: string | number) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`)
    } else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
```


## Using Tuple Types

Usamos assim um tuple com type annotation: 

> let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];
let products: [string, number][] = [["Hat", 100], ["Gloves", 75]];
let tupleUnion: ([string, number] | boolean)[] = [true, false, hat, ...products];

tupleUnion.forEach((elem: [string, number] | boolean) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem: string | number) => {
            if (typeof tupleElem === "string") {
                console.log(`String Value: ${tupleElem}`);
            } else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    } else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
})
```




