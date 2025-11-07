# Modules

Como as aplicações vão crescendo e se tornando inviaveis para serem feitas em um só arquivo precisamos então de módulos, ou seja, organizar o código em diferentes arquivos/pastas

> NodeJS só suporta até o momento standard modules como uma feature experimental
> {style="note"}
                 
1. Instale o package: 

```sh
npm install esm@3.2.2
```


2. Agora é rodar:

```sh
npx nodemon --require esm index.js
```

3. A saída será essa:

![saida do terminal usando npx nodemon --require esm](saida do terminal usando npx nodemon --require esm)

## Criando um módulo JavaScript

Primeiro temos que entender que cada arquivo JavaScript é um módulo próprio

Ou seja, `app.js` e `user-controller.js` são dois módulos separados que não conversam:

![two modules that they dont talk](two modules that they dont talk)

