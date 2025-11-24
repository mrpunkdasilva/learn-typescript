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

## Including Methods



