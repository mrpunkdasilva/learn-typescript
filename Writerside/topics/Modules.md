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

### Exemplo

Criamos um arquivo `tax.js` na pasta:

```javascript
export default function (price) {
    return Number(price) * 1.2;
}
```

A função definida no arquivo recebe um preço e aplica 20% de taxa. A função é simples e a exportação se dá pelas keywords que são importantes: `export defaul`
- O `export` é usado para denotar que features que poderão ser usadas fora do módulo
- Por padrão o conteúdo de um arquivo JavaScript são privados e devem ser compartilhados de forma explicita usando a keyword `export` antes deles serem usados no resto da aplicação
- Agora a outra parte o `default` é usado para especificar que somente será exportado aquela função no arquivo `tax.js`

## Usando Módulos

Basta usarmos a keyword: `import calcTax from "./tax";`

```javascript
import calcTax from "./tax";

class Product {
    constructor(name, price) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
    }
}

let product = new Product("Hat", 100);
let taxedPrice = calcTax(product.price);

console.log(`Name: ${ product.name }, Taxed Price: ${taxedPrice}`);
```

