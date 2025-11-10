# Useful compiler options

| Opção                         | Função                                                                 |
|-------------------------------|------------------------------------------------------------------------|
| **allowJs**                   | Inclui arquivos `.js` na compilação.                                   |
| **allowSyntheticDefaultImports** | Permite importar módulos sem `default export`.                        |
| **baseUrl**                   | Define a pasta raiz para resolver módulos.                            |
| **checkJs**                   | Verifica erros em arquivos `.js`.                                      |
| **declaration**               | Gera arquivos `.d.ts` com informações de tipos.                        |
| **downlevelIteration**        | Suporte a iteradores em versões antigas de JS.                        |
| **emitDecoratorMetadata**     | Inclui metadados de *decorators* no JS emitido.                        |
| **esModuleInterop**           | Facilita importação de módulos CommonJS.                              |
| **experimentalDecorators**    | Ativa suporte a *decorators*.                                          |
| **forceConsistentCasingInFileNames** | Garante que nomes em `import` respeitem maiúsculas/minúsculas.     |
| **importHelpers**             | Usa helpers para reduzir código gerado.                               |
| **isolatedModules**           | Trata cada arquivo como módulo separado (compatível com Babel).        |
| **jsx**                       | Define como JSX/TSX será processado.                                   |
| **jsxFactory**                | Define a função usada para criar elementos JSX.                       |
| **lib**                       | Seleciona bibliotecas padrão usadas pelo compilador.                   |
| **module**                    | Define o formato de módulos (ex.: `commonjs`, `esnext`).               |
| **moduleResolution**          | Define como módulos são resolvidos (`classic` ou `node`).              |
| **noEmit**                    | Não gera saída JS, apenas verifica erros.                             |
| **noImplicitAny**             | Impede uso implícito do tipo `any`.                                   |
| **noImplicitReturns**         | Exige que todas as funções retornem valor.                            |
| **noUnusedParameters**        | Alerta sobre parâmetros não usados.                                   |
| **outDir**                    | Define a pasta de saída dos arquivos compilados.                      |
| **paths**                     | Define caminhos personalizados para resolver módulos.                 |
| **resolveJsonModule**         | Permite importar arquivos `.json` como módulos.                       |
| **rootDir**                   | Define a pasta raiz dos arquivos TypeScript.                          |
| **skipLibCheck**              | Ignora checagem de arquivos de declaração para acelerar compilação.    |
| **sourceMap**                 | Gera *source maps* para depuração.                                    |
| **strict**                    | Ativa verificações estritas de tipos.                                 |
| **strictNullChecks**          | Impede `null`/`undefined` em tipos não compatíveis.                   |
| **suppressExcessPropertyErrors** | Evita erro quando objeto tem propriedades extras.                     |
| **target**                    | Define versão de JS gerada (ex.: `es5`, `es2018`).                    |
| **typeRoots**                 | Define pasta raiz para arquivos de declaração de tipos.                |
| **types**                     | Lista arquivos de declaração a incluir na compilação.                 |


