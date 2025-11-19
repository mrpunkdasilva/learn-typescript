# Using Literal Value Types

Um tipo de valor literal especifica um conjunto especifico de valores e permite somente esses valores

O efeito é tratar um conjunto de valores como um tipo distinto, que é uma feature útil mas pode ser dificil para entender porque isso borra a separação entre tipos e valores 

Essa feature é muito fácil de entender com um exemplo:

```ts 
let restrictedValue: 1 | 2 | 3 = 3;
console.log(`Value: ${restrictedValue}`);
```

Então se tentarmos usar um valor que não está no range desse conjunto de valores teremos problemas: 

```ts
let restrictedValue: 1 | 2 | 3 = 100;
console.log(`Value: ${restrictedValue}`);
```

A combinação desses valoes é tratada como um tipo distinto e cada combinação de valores literais é um tipo diferente, mas é um valor de um tipo pode ser atribuido para um tipo diferente como um dos permitidos:

```typescript
let restrictedValue: 1 | 2 | 3 = 1;
let secondValue: 1 | 10 | 100 = 1;

restrictedValue = secondValue;
secondValue = 100;
restrictedValue = secondValue;

console.log(`Value: ${restrictedValue}`);
```

### Mixing Value Types in a Literal Value Type

Um valor de tipo literal pode ser combinado de diversas formas e uma das combinações por exemplo é usando enums:

```ts 
function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
}

enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }

function getMixedValue(): 1 | "Hello" | true | City.London {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}

console.log(`Value: ${getMixedValue()}`);
```






