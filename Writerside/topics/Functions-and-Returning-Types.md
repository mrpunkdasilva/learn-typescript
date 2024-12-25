# Functions and Returning Types

Para mexermos com funções e retornos é bom usarmos `type annotations`, onde definimos explicitamente os tipos, assim eles não recebem o tipo por inferencia, os parametros e o retorno das funções recebem o tipo padrão que é o `any`:
- Ao definirmos este código os parametros e o retorno da função tomam o tipo de `any`:
```typescript
function add(a, b) {
  return a + b
}
```
- Agora está é uma boa prática e que faz sentido, ou seja, definirmos os tipo:
  - Com a type annotations: que é basicamente colocar : (dois pontos) e em seguida o tipo: `thing : type`; 
  - Assim temos uma noção clara do que a função não só espera receber, mas o que ela retorna também
```typescript
function add(a : number, b : number) : number {
  return a + b 
}
```