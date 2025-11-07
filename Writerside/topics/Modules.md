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

> Não precisamos passar a extensão do arquivo se ele for `js` (o mesmo acontece com todas as outras ramificações que temos como `.ts` ou `.jsx`), basta passarmos o caminho do arquivo

### Entendendo localização de módulos

Quando temos módulos definidos no **próprio** projeto preciamos passar o path relativo:
- `import calcTax from "./tax";`

Quando o módulo é **externo** não precisamos:
- `import React, { Component } from "react";`

> Isso acontece porque a ferramenta de build vai buscar em `node_modules` o módulo a ser importado


### Exportando feature nomeadas de um módulo:

| Tipo de Exportação     | Código de Exportação                                      | Código de Importação                                      | Observação                                                                 |
|------------------------|-----------------------------------------------------------|------------------------------------------------------------|----------------------------------------------------------------------------|
| Exportação nomeada     | `export function calculateTax(price) { ... }`             | `import { calculateTax } from "./tax";`                    | Usa chaves `{}` para importar pelo nome definido                          |
| Exportação default     | `export default function calcTaxandSum(...) { ... }`      | `import calcTaxAndSum from "./tax";`                       | Pode ser importado com qualquer nome, sem `{}`                            |
| Exportação combinada   | `export default ...` + `export function ...`              | `import calcTaxAndSum, { calculateTax } from "./tax";`     | Combina exportação default e nomeada                                      |
| Múltiplas nomeadas     | `export function printDetails(...)`<br>`export function applyDiscount(...)` | `import { printDetails, applyDiscount } from "./utils";` | Permite agrupar várias funções relacionadas no mesmo módulo               |

 


