# Using Conditional Types

Tipos condicionais são expressões que contem generic type parameters que são usados para selecionar um novo tipo, como mostra a baixo uma condicional de tipo básica :


```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;
let mismatchCheck: resultType<false> = "String Value"
```

Os tipos condicionais tem um generic type parameter e uma expressão ternaria que seleciona um result type:

![image_3.png](image_3.png)

Um tipo condicional é um placeholder para um dos tipos dos possiveis resultados com base na condição, que senão escolhido o generic type parameter é usado o que permite a expressão ser usada usando um dos result types selecionados

No código, o tipo condicional `resultType<T>` é um placeholder para os tipos `string` e `number`, significa que o argumento para o generic type `T`vai determinar o resultado da conditional type aplicada para qualquer que seja o valor, string ou number

O generic type parameter `T` é a restrição que é possivel somente aceitando boolean values e a expressão vai ser avaliada como true se o argumento provido para T é o tipo literal de valor true. O resultado é que `resultType<T>`retorna string quando T é true 

```ts 
let firstVal: resultType<true> = "String Value";
let stringTypeCheck: string = firstVal;
```

O compilador resolve a conditional type e sabe que a type annotation para `firstVal` é string, permitindo um valor literal de string atribuido a `firstVal`. Quando o generic type argumenté falso a conditional retorna como number

```ts 
let secondVal: resultType<false> = 100;
let numberTypeCheck: number = secondVal
```

