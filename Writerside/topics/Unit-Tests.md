# Unit Tests

Alguns frameworks de testes unitários proveem suporte para TS, mas isso não é um morango

Isso quer dizer que, suportar TS para testes unitários significa permitir tests sejam definidos no TS e também
automaticamente compilado o código TS antes de testar. Testes unitarios são feitos para executar pequenas partes da
aplicação e isso pode ser feito somente com o JavaScript deste os ambiente de tempo de execução JavaScript não tem
conhecimento das features do TS

Isso implica que as features TS não podem ser testadas

> Vamos estar usando o [Jest](https://jestjs.io/)

## Adicionando o package do Jest ao projeto

```sh
npm install --save-dev jest@24.7.1
npm install --save-dev @types/jest
npm install --save-dev ts-jest@24.0.2
```

| Comando                                | Função                                                                                                            |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| npm install --save-dev jest@24.7.1     | 	Instala o Jest (versão 24.7.1) como dependência de desenvolvimento. O Jest é o framework de testes.              
| npm install --save-dev @types/jest	    | Instala as definições de tipos do Jest para TypeScript, permitindo autocompletar e validação de tipos nos testes. 
| npm install --save-dev ts-jest@24.0.2	 | Instala o ts-jest, que é um preprocessor para permitir que o Jest entenda e execute arquivos .ts diretamente.     


## Configurando o framework de testes

Para configurar o Jest, adicionar um arquivo nomeado `jest.config.js` na pasta raiz do projeto com o conteúdo abaixo:

```javascript
module.exports = {
    "roots": ["src"],
    "transform": {"^.+\\.tsx?$": "ts-jest"}
}
```


## Métodos de asserção do Jest:

| Método               | Descrição                                                                 |
|----------------------|----------------------------------------------------------------------------|
| **toBe(value)**      | Verifica se o resultado é igual ao valor especificado (não precisa ser o mesmo objeto). |
| **toEqual(object)**  | Verifica se o resultado é o mesmo objeto/estrutura que o valor especificado. |
| **toMatch(regexp)**  | Verifica se o resultado corresponde à expressão regular fornecida.          |
| **toBeDefined()**    | Verifica se o resultado está definido.                                     |
| **toBeUndefined()**  | Verifica se o resultado não está definido.                                 |
| **toBeNull()**       | Verifica se o resultado é `null`.                                          |
| **toBeTruthy()**     | Verifica se o resultado é avaliado como verdadeiro (*truthy*).             |
| **toBeFalsy()**      | Verifica se o resultado é avaliado como falso (*falsy*).                   |
| **toContain(substring)** | Verifica se o resultado contém a substring especificada.               |
| **toBeLessThan(value)** | Verifica se o resultado é menor que o valor especificado.               |
| **toBeGreaterThan(value)** | Verifica se o resultado é maior que o valor especificado.            |


## Iniciando o framework

```sh
npx jest --watchAll
```