# Using TypeScript Compiler

> [https://github.com/mrpunkdasilva/learn-typescript/blob/9ef0a68b44f22c7a7be5944a44f15e51504ac838/tools](https://github.com/mrpunkdasilva/learn-typescript/blob/9ef0a68b44f22c7a7be5944a44f15e51504ac838/tools)


Para instalar o TypeScript:

```sh
npm i -D typescript
```

Precisamos ter o arquivo de configuração do TypeScript criado na pasta raiz do projeto:

- `tsconfig.json` 
```json
{
    "compilerOptions": {
        "target": "es2018",
        "outDir": "./dist",
        "rootDir": "./src"
    }
}
```


- `package.json`
```json
{
  "name": "tools",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "tsc-watch": "^2.1.2",
    "typescript": "^3.5.1"
  }
}
```

## Project Structure


| Item               | Função                                                                 |
|--------------------|------------------------------------------------------------------------|
| **dist**           | Contém o código compilado gerado pelo compilador.                      |
| **node_modules**   | Armazena os pacotes necessários para a aplicação e ferramentas.        |
| **src**            | Contém os arquivos de código-fonte que serão compilados pelo TypeScript.|
| **package.json**   | Lista as dependências principais do projeto e metadados.               |
| **package-lock.json** | Registra todas as dependências exatas e suas versões.               |
| **tsconfig.json**  | Define as configurações do compilador TypeScript.                      |



## Entendo o arquivo de configuração do TypeScript Compiler 

O TSC (_TypeScript Compiler_) possui diversas configurações possiveis a serem feitas e todas são feitas no arquivo de configuração que temos (`tsconfig.json`)

As configs básicas que temos são:

| Configuração       | Função                                                                 |
|--------------------|------------------------------------------------------------------------|
| **compilerOptions** | Agrupa as opções e configurações que o compilador irá usar.            |
| **files**           | Especifica arquivos exatos a serem compilados (sobrescreve busca padrão). |
| **include**         | Seleciona arquivos para compilação por padrão/padrão de busca.         |
| **exclude**         | Exclui arquivos da compilação por padrão/padrão de busca.              |
| **compileOnSave**   | Quando `true`, pede ao editor para compilar ao salvar (nem todos suportam). |


 Podemos exibir a lista de arquivos para compilação que podemos usar:
 ```sh
tsc --listFiles
 ```