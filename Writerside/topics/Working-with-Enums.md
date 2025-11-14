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

Como o Enum não é iteravel, podemos usar deste modo para iterar sobre ele, já que criando um array com os valores dele
teremos isso:

```typescript
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}`);
})
```

Como o Enum é implementado usando valores numeros do JS um Enum pode ser atribuído a um número e exibido como um valor
numérico:

```ts 
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum Product { Hat, Gloves, Umbrella }

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`)
```

O compilador enforça a checagem de type para enums, que significa que você vai receber um error se você tentar comprar
valores de diferentes enums, a menos que eles tenham o mesmo valor numérico

Enums proveem um array-indexer de estilo sintatito que pode ser usado para obter o nome do valor, como isso:

```ts 
let productName: string = Product[productValue];
```

## Using a Specific Enum Values

Ótimo trecho! Vamos organizar e explicar o que está acontecendo com **Enums no TypeScript** quando usamos valores
específicos ou expressões:

---

### 1. Valores padrão

Por padrão, o compilador atribui números sequenciais começando em **0**:

```ts
enum Product {
    Hat,       // 0
    Gloves,    // 1
    Umbrella   // 2
}
```

No arquivo de declaração (`index.d.ts`), isso aparece como:

```ts
declare enum Product {
    Hat = 0,
    Gloves = 1,
    Umbrella = 2
}
```

---

### 2. Valores constantes definidos pelo programador

Você pode atribuir manualmente um valor a um item do enum. O compilador continua incrementando a partir desse valor:

```ts
enum Product {
    Hat,         // 0
    Gloves = 20, // definido manualmente
    Umbrella     // 21 (gerado automaticamente)
}
```

No `.d.ts`:

```ts
declare enum Product {
    Hat = 0,
    Gloves = 20,
    Umbrella = 21
}
```

<warning>

**Atenção**: o compilador só olha para o **último valor numérico** para calcular o próximo. Ele não verifica duplicatas,
então você pode acabar com valores repetidos sem perceber.

</warning>



---

### Usando expressões

O compilador também consegue avaliar **expressões simples** para definir valores:

```ts
enum OtherEnum { First = 10, Two = 20 }

enum Product {
    Hat = OtherEnum.First + 1,   // 11
    Gloves = 20,                 // definido manualmente
    Umbrella = Hat + Gloves      // 31
}
```

No `.d.ts`:

```ts
declare enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
```

Ou seja:

- `Hat` usa o valor de outro enum (`OtherEnum.First + 1`).
- `Umbrella` é calculado como `Hat + Gloves`.
- O compilador resolve essas expressões em tempo de compilação.




## Using String Enums

Por padrão o compilador usa numeros para representar os enums, mas podemos usar valores strings para enums: 

<note>

Um enum pode conter ambos valores string e number, porem essa não é uma abordagem muito utilizada 

</note>


```ts 
function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

enum OtherEnum { First = 10, Two = 20 }

enum Product { Hat = OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves }

let productValue: Product = 0;
let productName: string = Product[productValue];

console.log(`Value: ${productValue}, Name: ${productName}`);

enum City { London = "London", Paris = "Paris", NY = "New York"}

console.log(`City: ${City.London}`)
```


## Understanding the Limitations of Enums




