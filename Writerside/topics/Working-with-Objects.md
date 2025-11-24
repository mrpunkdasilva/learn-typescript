# Working with Objects

Para trabalharmos com objetos podemos fazer de alguns jeitos alguns deles são:
- Sintaxe litera
- Função construtora
- Classes

## Type Annotation

```typescript
let products: { name: string, price: number }[]
```


| Parte da anotação          | Significado                                      | Exemplo válido                          |
|-----------------------------|--------------------------------------------------|-----------------------------------------|
| `let products`              | Declara uma variável chamada `products`          | `let products = [...]`                  |
| `{ name: string, price: number }` | Define o formato de cada objeto no array        | `{ name: "Laptop", price: 3500 }`       |
| `name: string`              | Propriedade obrigatória `name` deve ser texto    | `"Laptop"`                              |
| `price: number`             | Propriedade obrigatória `price` deve ser número  | `3500`                                  |
| `[]`                        | Indica que é um array de objetos nesse formato   | `[ { name: "Laptop", price: 3500 } ]`   |


### Using Optional Properties for Irregular Shapes

As propriedades opcionais fazem um tipo mais flexível, permitindo que combine objetos que não tem essas propriedades:

```typescript
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products: { name: string, price?: number, waterproof?: boolean }[]
    = [hat, gloves, umbrella];

products.forEach(prod =>
    console.log(`${prod.name}: ${prod.price} Waterproof: ${ prod.waterproof }`));
```

### Including Methods

Já que objetos são atributos e metodos, com a type annotation fazemos a criação dos métodos com arrow functions ou funções anonimas, mas o mais comum seria as arrow functions

Basta definirmos criar uma chave contendo uma função: 

```typescript
let umbrella = { name: "Umbrella", price: 30,
        hasFeature: (feature) => feature === Feature.Waterproof };
```


```typescript
enum Feature { Waterproof, Insulated }

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30,
        hasFeature: (feature) => feature === Feature.Waterproof };
let products: { name: string, price?: number,
        hasFeature?(Feature): boolean }[]
    = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `Waterproof: ${prod.hasFeature(Feature.Waterproof)}`));
```

### Using type aliases for shape types

Um type alias pode ser usado para ser passao na type annotation no objeto, fazendo isso ser mais fácil e reutilizavel

- Definição:

```ts 
type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
};
```

- Uso:

```typescript
let products: Product[] = [hat, gloves, umbrella];
```

```typescript
enum Feature { Waterproof, Insulated }

type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
};

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30,
        hasFeature: (feature) => feature === Feature.Waterproof };
let products: Product[] = [hat, gloves, umbrella];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${ prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false" }`));
```


## Dealing with Excess Properties

o TSC é bom fazendo a inferencia de tipo o que significa que você não precisa fazer a type annotation:

```ts 
enum Feature { Waterproof, Insulated }

type Product = {
    name: string,
    price?: number,
    hasFeature?(Feature): boolean
}

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30,
        hasFeature: (feature) => feature === Feature.Waterproof };

let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored"};
let darkShades: Product = { name: "Sunglasses", price: 54, finish: "flat"};
let products: Product[] = [hat, gloves, umbrella, mirrorShades, darkShades];

products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    + `${ prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : "false" }`))
```

Teremos esse erro ao rodar a compilação:

```
: error TS2322: Type '{ name: string; price: number; finish: string; }' 
is not assignable to type 'Product'
   Object literal may only specify known properties, and 'finish' does not exist in type 
'Product'
```

O que temos é um exemplo clássico do **excess property checking** do TypeScript

| Conceito                        | Explicação                                                                 | Exemplo/Observação |
|---------------------------------|-----------------------------------------------------------------------------|--------------------|
| **mirrorShades**                | Objeto literal **sem anotação de tipo**. O compilador aceita propriedades extras porque ele faz *type inference*. | Pode ter `finish` sem erro. |
| **darkShades**                  | Objeto literal **com anotação de tipo** (`Product`). O compilador verifica se todas as propriedades batem com o tipo. | `finish` gera erro porque não existe em `Product`. |
| **Excess Property**             | Propriedade que não faz parte da forma (shape) definida pelo tipo.          | `finish` é excess property em `Product`. |
| **Erro do compilador**          | Ocorre quando um objeto literal com anotação de tipo tem propriedades extras. | “Object literal may only specify known properties…” |
| **Soluções possíveis**          | - Remover a propriedade extra<br>- Remover a anotação de tipo<br>- Ajustar o tipo para incluir a propriedade | Dependendo da intenção do código. |
| **Configuração alternativa**    | `"suppressExcessPropertyErrors": true` no `tsconfig.json`.                  | Desabilita a checagem de excess properties. |
| **Efeito da configuração**      | O compilador deixa de reportar erros para propriedades extras em objetos literais com anotação de tipo. | Pode mascarar erros reais. |


- O TypeScript trata objetos literais com anotação de tipo de forma mais rígida, justamente para evitar erros sutis.  
- Se você considera essa checagem contraintuitiva, pode desativá-la com `"suppressExcessPropertyErrors": true`, mas isso reduz a segurança do tipo.  


#### Using Shape Type Unions

```ts
type Product = {
    id: number,
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}`))
```


#### Understanding Union Property Types

Com o union types podemos criar objetos mais complexos de forma que atributos possuam union types:

- Criando o union type:

```ts 
type UnionType = {
    id: number | string,
    name: string
};
```


```ts 
type Product = {
    id: number,
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

type UnionType = {
    id: number | string,
    name: string
};

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
```


#### Using Type Guards for Objects

Como o JS só retorna `object` quando usamos `typeof` não dá para saber de que tipo exatamente é esse objeto

Assim o TS fornece a criação de type guards personalizados


```ts
type Product = {
    id: number,
    name: string,
    price?: number
};

type Person = {
    id: string,
    name: string,
    city: string
};

let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

dataItems.forEach(item => console.log(`ID: ${item.id}, Type: ${typeof item}`))
```


#### Type Guarding by Checking Properties

