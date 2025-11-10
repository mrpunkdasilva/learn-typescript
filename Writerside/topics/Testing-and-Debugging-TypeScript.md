# Testing and Debugging TypeScript

## Debuggingd de código TS

### Primeiro devemos preparar o ambiente para debugging

Para isso adicionaremos uma compiler option chamada `sourceMap` como `true` para que o compilador passar compilando os
arquivos TS e também fazendo um mapa dos arquivos, que tem a extensão de **map**, ao longo de todos os arquivos JS da
pasta `dir`

- `tsconfig.jdon`

```json
{
  "compilerOptions": {
    "target": "es2018",
    "outDir": "./dist",
    "rootDir": "./src",
    "noEmitOnError": true,
    "module": "commonjs",
    "sourceMap": true
  }
}
```

### Adicionando breakpoints

Os breaktpoints é um simbolo que colocamos em determinada linha para dizer que ali será um ponto de parada para a
plicação na hora que estiver debugando assim conseguimos saber o seu valor em tempo real, por exemplo

> Usamos a keyword `debugger` ou o breakpoint de forma visual que é implementado na sua IDE

```typescript
import {sum} from "./calc";

let printMessage = (msg: string): void => console.log(`Message: ${msg}`);
let message = ("Hello, TypeScript");

printMessage(message);

debugger;

let total = sum(100, 200, 300);
console.log(`Total: ${total}`);
```

### Usando o Debugger integrado do NodeJS

