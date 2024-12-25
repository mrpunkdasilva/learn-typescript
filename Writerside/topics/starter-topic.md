# Learn TypeScript Fundamentals

## What is TypeScript?

**TypeScript** é um superset tipado do JavaScript, ou seja, é como o C++ para o C, uma melhoria da linguagem, mas de forma geral continua sendo JavaScript. Já que ele compila o código para  JavaScript.

> Este superset é open source e criado pela Microsoft.

Ele possui **três partes**:
- Linguagem (**Language**) -->  a linguagem de programação em si
- Linguagem Servidor (**Language Server**) --> serve para ver em tempo construção validações de tipos, lint, hint, etc 
- **Compiler** (Compilador) --> é o que torna o TypeScript para JavaScript limpo

## Why?

Em um exemplo simples, se tivermos que adicionar por exemplo uma nova milf ao sistema com a função:

```javascript
let milfStorage;

function addNewMilf(newMilf) {
    milfStorage.push(newMilf);
}
```

Logo de cara temos dois grandes problemas: 
- qual o tipo de `milfStorage`? O que ela guarda? O que ela pode receber?
- o parametro `newMilf` é de que tipo? ele aceita ser o que?

São perguntas que no momento que estamos desenvolvendo talvez não pensamos, mas quando outra pessoa for olhar o código ou até mesmo você quando estiver para usar ou desenvolvendo mais esse sistema vai se deparar com um grande problema de não saber muito probvavelmente os tipos daquele objeto, ou mesmo, qual foi o erro que deu para não salvar os dados.

Logo esse superset, nasce principalmente para salvar vidas dos desenvolvedores, já que se usarmos **TS** teremos algo assim:

```typescript
let milfStorage: String[] = new String();

function addNewMilf(newMilf: string) : void {
    milfStorage.push(newMilf);
}
```

Com isso o que temos é uma melhoria não só na legibilidade, mas também em tempo de build, já que se algo sintaticamente estiver errado a build vai parar e o language server do TS vai nos avisar qual foi o erro.

