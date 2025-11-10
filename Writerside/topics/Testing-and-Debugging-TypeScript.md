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

É possivel usarmos o proprio debugger que vem junto ao NodeJS, temos que usar:

- **Iniciar depuração**  
  Execute:  
  ```bash
  node inspect dist/index.js
  ```  
  Isso abre o depurador embutido do Node, carrega o arquivo compilado e pausa a execução antes da primeira linha. Você verá o prompt `debug>`.

- **Continuar execução**  
  No prompt, digite:  
  ```bash
  c
  ```  
  (abreviação de *continue*). O programa segue até o próximo *breakpoint* ou instrução `debugger`.

- **Avaliar expressões**  
  Use:  
  ```bash
  exec("expressao")
  ```  
  Exemplo:  
  ```bash
  exec("message")
  ```  
  Mostra o valor da variável `message`. As expressões precisam estar entre aspas.

- **Ajuda**  
  Digite:  
  ```bash
  help
  ```  
  Lista os comandos disponíveis, como avançar (`n`), entrar em função (`s`), definir *breakpoints* (`sb`) e inspecionar a pilha de chamadas.

- **Sair**  
  Pressione **Ctrl+C duas vezes**:  
  - A primeira interrompe o comando atual.  
  - A segunda encerra o depurador e volta ao prompt normal.



