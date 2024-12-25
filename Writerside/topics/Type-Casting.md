# Type Casting

Para fazermos o casting podemos usar o `any`:

Neste exemplo temos a variavel `date2`: 
- que não definimos um tipo com notação então ela pegaria o tipo por inferencia usando o tipo do dado que foi atribuído a ela 
- que neste caso está vindo da variavel `founding` que é do tipo `Date`, 
- logo quando usamos `founding as any`  estamos fazendo um casting para dizer que o tipo é `any` e não `Date`
```typescript
let founding = new Date("Jan 1, 2012")
let date1 = founding
let date2 = founding as any;
```

Podemos seguir este mesmo principio para constantes:
- o tipo da constante é 79 mas pe trocado por number
```typescript
const humid3 = 79 as number;
```