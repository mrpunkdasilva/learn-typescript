# Using target version

Como o TS é um superset, é como pegarmos alguma versão do JS e termos novas features, ou seja. Com o TS conseguimos usar diversas versões target (alvo) do JS para trabalharmos

| Valor      | Descrição                                                                 |
|------------|----------------------------------------------------------------------------|
| **es3**    | Terceira edição (1999). Base da linguagem. É o valor padrão se não definido.|
| **es5**    | Quinta edição (2009). Foco em consistência. *(Não houve ES4)*.              |
| **es6**    | Sexta edição. Introduziu classes, módulos, arrow functions e promises.      |
| **es2015** | Equivalente ao ES6.                                                        |
| **es2016** | Sétima edição. Incluiu `Array.includes` e operador de exponenciação.        |
| **es2017** | Oitava edição. Novos recursos para objetos e palavras-chave assíncronas.    |
| **es2018** | Nona edição. Introduziu operadores *spread/rest* e melhorias em strings e async. |
| **esNext** | Recursos previstos para a próxima edição. Pode variar entre versões do TS.  |


Para mudarmos basta irmos na propertie do `tsconfig.json` de `target`:

> "target": "es5",

```json
{
    "compilerOptions": {
        "target": "es5",
        "outDir": "./dist",
        "rootDir": "./src",
        "noEmitOnError": true
    }
}
```



