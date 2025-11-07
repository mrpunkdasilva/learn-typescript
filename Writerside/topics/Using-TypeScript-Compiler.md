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