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

- Mesmo não definindo o type o TS consegue inferir de que tipo é aquele valor

```typescript
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
```

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [100, 75, 42];
let names = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
```



## Avoiding problems with inferred array types

O compilador infere o array type usando o valor usado para popular o array quando ele é criado

Isso pode causar erros se os valores usados para popular um array, assim pode gerar erros acidentalmente de mixed types. Como no exemplo abaixo:

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [100, 75, 42, "20"];
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
```

Logo temos este erro:

> error TS2345: Argument of type 'string | number' is not assignable to 
parameter of type 'number'



## Avoiding problems with empty arrays 


Uma outra questão para usar type annotations para arrays é que o compilador vai inferir o tipo para arrays que são criados vazios:

```typescript
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

let prices = [];
prices.push(...[100, 75, 42, "20"]);

let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];

prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
```

Como é inicializado vazio o compilador infere que é um array de any:

```typescript
let prices = [];
prices.push(...[100, 75, 42, "20"]);
```

No arquivo de declaration teremos isso:

> declare let prices: any[];


## Understanding the never array type pitfall

No TypeScript, quando você cria um array vazio ([]), o compilador tenta inferir o tipo dos elementos que poderão ser adicionados.

Se strictNullChecks está desativado, o compilador assume que null e undefined podem ser atribuídos a outros tipos. Nesse caso, um array vazio pode ser inferido como algo mais flexível, como any[].

Se strictNullChecks está ativado, o compilador não permite que null e undefined sejam usados livremente. Isso muda a inferência: um array vazio passa a ser inferido como never[].

### O que significa never[]
O tipo never indica que nenhum valor válido pode existir.

Portanto, um array inferido como never[] não aceita nenhum elemento.

Se você tentar adicionar algo, o compilador gera erro, como no exemplo:

```typescript
let arr = []; // inferido como never[]
arr.push("texto"); // Erro: 'string' não é atribuível a 'never'
```


### Por que isso acontece
O compilador não tem pistas sobre o tipo dos elementos do array vazio.

Com strictNullChecks: true, ele não pode assumir any ou tipos permissivos.

Então, para garantir segurança, ele usa never, forçando você a declarar explicitamente o tipo ou inicializar o array com valores.


### Como resolver

- Declarar o tipo do array:

```ts
let arr: string[] = [];
arr.push("texto"); // ok
```

- Inicializar com valores:

```ts
let arr = [1, 2, 3]; // inferido como number[]
arr.push(4); // ok
```

