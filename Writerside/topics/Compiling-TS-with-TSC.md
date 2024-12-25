# Compiling TS with TSC

O  **TSC** (TypeScript Compiler) é o compilador do TypeScript.

## Anatomia do Projeto
- `package.json` - vai ser onde as dependencias do projeto ficaram
- `tsconfig.json` - vai ser onde ficaram as configuração do compilador do TS
- `src/index.ts` - será onde vai ficar o programa

**_package.json_**
```json
{
  "name": "welcome-to-ts",
  "license": "NOLICENSE",
  "devDependencies": {
    "typescript": "^5.2.0"
  },
  "scripts": {
    "dev": "tsc --watch --preserveWatchOutput"
  }
}
```

- Para compilarmos usamos o `tsc` como visto no `scripts` e 
  - usando a flag `--watch --preserveWatchOutput` servira para ficar observando (ou seja, assim que houver uma atualização o compilador irá rebuildar automaticamente) e para preservar a saida de TS -> JS 

_**tsconfig.json**_
```json
{
  "compilerOptions": {
    "outDir": "dist",
    "target": "ES2015",
    "moduleResolution": "node",
    "module": "commonjs"
  },
  "include": ["src"]
}
```

### Running

- Com o arquivo: 

```javascript
/**
 * Create a promise that resolves after some time
 * @param n number of milliseconds before promise resolves
 */
function timeout(n: number) {
  return new Promise((res) => setTimeout(res, n));
}

/**
 * Add two numbers
 * @param a first number
 * @param b second
 */
export async function addNumbers(a: number, b: number) {
  await timeout(500);
  return a + b;
}

class Foo {
  static #bar = 3;
  static getValue() {
    return Foo.#bar;
  }
}

//== Run the program ==//
(async () => {
  console.log(await addNumbers(Foo.getValue(), 4));
})();
```

- Agora vamos rodar, para isso use: `npm run dev` ativar o script para ficar observando o arquivo para automatico rebuild a cada alteração

- Então bastar irmos agora para o terminal e digitar `node dist/index.js` que é a pasta e o arquivo que o compilador gerou ao compilarmos e assim o node vai executar esse arquivo JavaScript

> Para compilar chamando diretamente o compilador (TSC) usamos: `[gerenciador de pacote] tsc`
> - `npm tsc`
> - `yarn tsc`
