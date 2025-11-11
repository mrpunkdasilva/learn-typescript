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