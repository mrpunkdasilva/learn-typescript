# Using Generic Iterators

Como explicado  no [JavaScript - Collections](Collections.md), iterators permite uma sequencia de valores para ser enumerados e suporte para iteradores é uma feature comum para classes que operam com outros tipos, como collections. TS prove as interfaces listadas na tabela abaixo, descrevendo iterators e os seus resultados:

| Nome                  | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| **Iterator<T>**       | Interface que descreve um iterador cujo método `next` retorna objetos `IteratorResult<T>`. |
| **IteratorResult<T>** | Interface que descreve o resultado produzido por um iterador, contendo as propriedades `done` e `value`. |
| **Iterable<T>**       | Interface que define um objeto com a propriedade `Symbol.iterator` e que suporta iteração direta (ex.: em `for...of`). |
| **IterableIterator<T>** | Interface que combina `Iterator<T>` e `Iterable<T>`, descrevendo um objeto que possui `Symbol.iterator`, além de definir o método `next` e retornar resultados. |





