# Using Functions

## Redefinindo funções

No TS se queremos redefinir uma função algo como polimorfismo, onde temos o mesmo nome da função mas a sua assinatura é
diferente. Ou seja, o número de parametros é diferente podemos simplesmente deixar o mesmo nome da função e mudarmos a
quantidade de parametros:

```typescript
function calculateTax(amount) {
    return amount * 1.2;
}

function calculateTax(amount, discount) {
    return calculateTax(amount) - discount;
}

let taxValue = calculateTax(100);
console.log(`Total Amount: ${taxValue}`);
```

> O que estamos fazendo se chama, sobrecarga de função

O que disso que temos é que temos uma mesma função podendo ser executada de formas diferentes com base na

## Using function parameters

```typescript
function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);

console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);

console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);

console.log(`3 args: ${taxValue}`)
```

<warning>

Teremos o compilador reportar esse problema ao tentar executar:

> error TS2554: Expected 2 arguments, but got 1.
>
>  error TS2554: Expected 2 arguments, but got 3.

```typescript
function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);

console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);

console.log(`1 arg: ${taxValue}`);
taxValue = calculateTax(100, 10, 20);

console.log(`3 args: ${taxValue}`)
```

</warning>

## Optional parameters

Para termos parametros opcionais usamos o simbolo de interrogação (?):

> function calculateTax(amount, discount?) {

Assim podemos criar um fallback caso ele não exista:

> return (amount * 1.2) - (discount || 0);

```ts 
function calculateTax(amount, discount?) {
    return (amount * 1.2) - (discount || 0);
}

let taxValue = calculateTax(100, 0);

console.log(`2 args: ${taxValue}`);
taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);

//taxValue = calculateTax(100, 10, 20);
//console.log(`3 args: ${taxValue}`)
```

<note>

É bom usar os parametros opcionais por último assim caso ele não venha evita a ordem que serem usados dar problema

</note>

## Using parameter with a default value

Podemos definir valores default (padrão) para parametros assim temos um fallback já no código caso não seja passado

```ts 
function calculateTax(amount, discount = 0) {
    return (amount * 1.2) - discount;
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);
//taxValue = calculateTax(100, 10, 20);
//console.log(`3 args: ${taxValue}`);
```

Assim temos que valores default tornam esse parametro optional, já que se não for definido ele usara o fallback

## Using a rest parameter

A contra partida de parametros opcionais é o rest parameters, que permite uma função aceitar um número variavel de
argumentos extras que são agrupados juntos e apresentados juntos

Uma função pode ter somente um rest parameter

```ts
function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);

taxValue = calculateTax(100, 10, 20);
console.log(`3 args: ${taxValue}`)
```

O rest parameters é criado com o três pontos (ellipsis) `...` antes do nome do parametro:

> function calculateTax(amount, discount = 0, ...extraFees) {

- Os parametros seguem a ordem deles conforme a ordem
- Qualquer argumento adicional que não tenha parametro correspondente vai para o rest parameter
- O parametro sempre será um array
    - Senão tiver argumentos extras, será passado um array vazio `[]`
    - Se houver, conterá todos os valores adicionais

## Applying type annotations to function parameters

Por padrão o compiler define o type dos parameters como null, mas podemos deixar tudo mais específico

Para isso basta fazermos o normal e definirmos um type com dois pontos e o type na frente do nome dop parametro:

> function calculateTax(amount: number, discount: number = 0, ...extraFees: number[])

Para um parametro defaul o type annotation vem antes:

> discount: number = 0

E para um rest parameter, costuma ser apenas um array de algum type:

> ...extraFees: number[]

```ts 
function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(100, 0);
console.log(`2 args: ${taxValue}`);

taxValue = calculateTax(100);
console.log(`1 arg: ${taxValue}`);

taxValue = calculateTax(100, 10, 20)
console.log(`3 args: ${taxValue}`);

taxValue = calculateTax(100, 10, 20, 1, 30, 7);
console.log(`6 args: ${taxValue}`)
```

## Controlling null parameters values

Para controlar para que não usar valores null ou undefined

```ts 
function calculateTax(amount: number, discount: number = 0, ...extraFees: number[]) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

let taxValue = calculateTax(null, 0);

console.log(`Tax value: ${taxValue}`);
```

## Understanding Function Results

O compilador do TS para os retornos tenta inferir o tipo automaticamente, com base no código

- Se uma função retornar mais de um valor o compilador irá usar o type union para os tipos inferidos

<note>

As declarações como essas dos tipos de retorno ficam dentro do arquivo de declaração ou os arquivos `.d.ts` e lá vai
estar definido a type union da função por exemplo

</note>

### Disabling implicit returns

Para desabilitarmos o retorno implicito e assim forçar para que todo retorno tenha seu type declarado devemos adicionar
uma compiler option que vai fazer com que tenhamos isso:

> "noImplicitReturns": true

- `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "es2018",
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "strictNullChecks": true,
    "noImplicitReturns": true
  }
}
```


