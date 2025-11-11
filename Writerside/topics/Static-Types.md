# Static Types

É quando definimos o tipo do valor da variavel

Esses tipos podem ser por exemplo os _built-in types_ que são os tipos primitivos que temos tanto no TS quanto no JS

| Tipo        | Descrição                                                                 |
|-------------|----------------------------------------------------------------------------|
| **number**  | Representa valores numéricos.                                              |
| **string**  | Representa dados de texto.                                                 |
| **boolean** | Pode ter os valores `true` ou `false`.                                     |
| **symbol**  | Representa valores constantes únicos, usado como chaves em coleções.       |
| **null**    | Só pode receber o valor `null`, indicando referência inexistente ou inválida. |
| **undefined** | Indica que a variável foi definida mas não recebeu valor.                 |
| **object**  | Representa valores compostos, formados por propriedades e valores.         |



## Criando tipos estáticos com a type annotation (notação de tipos)


```javascript
function calculateTax(amount: number): number {
    return amount * 1.2;
}
```

Usamo o `:` e depois informamos o tipo (string, number, etc)


Mas temos que entender que existem alguns tipos de notação com base onde ela está:

No TypeScript, os **tipos** podem aparecer em diferentes lugares do código, e a notação muda conforme o contexto:

---

### 1. **Parameter type**  
Define o tipo dos **parâmetros** de uma função.  
```ts
function soma(a: number, b: number) {
  return a + b;
}
```
- Aqui, `a: number` e `b: number` são **parameter types**.

---

### 2. **Return type**  
Define o tipo do **valor retornado** por uma função.  
```ts
function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}
```
- O `: string` depois dos parênteses indica o **return type** da função.

---

### 3. **Variable type**  

Define o tipo de uma **variável**.  

```ts
let idade: number = 25;
let ativo: boolean = true;
```
- `idade: number` e `ativo: boolean` são **variable types**.


**Resumindo em tabela:**

| Tipo de notação   | Onde aparece | Exemplo |
|-------------------|--------------|---------|
| **parameter type** | Nos parâmetros da função | `function soma(a: number, b: number)` |
| **return type**    | Após os parênteses da função | `function saudacao(nome: string): string` |
| **variable type**  | Na declaração de variáveis | `let idade: number = 25` |


