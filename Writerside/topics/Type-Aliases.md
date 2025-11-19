# Type Aliases

Quando você tem uma combinação de tipos complexa e repetitiva, pode criar um alias com type.

Isso dá um nome para o tipo e evita repetir a estrutura complicada várias vezes.

**Exemplo:** 

```ts
enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }

type comboType = [string, number | true, 1 | 2 | 3 | City.London][];

function getValue(input: comboType): comboType {
    return [["Apples", 100, 2], ["Oranges", true, 3]];
}

let result: comboType = getValue([["Bananas", true, 1]]);
console.log(`Result: ${result}`);
```

Aqui: `comboType` é um alias para “um array de tuplas” onde cada tupla tem:

- Um `string`
- Um `number` ou `true`
- Um literal `1 | 2 | 3` ou `City.London`

Sem alias, isso seria muito difícil de escrever e manter. Com alias, basta usar comboType.