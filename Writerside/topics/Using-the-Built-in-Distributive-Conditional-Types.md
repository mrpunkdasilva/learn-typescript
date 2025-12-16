# Using the Built-in Distributive Conditional Types

| Nome             | Descrição                                                                 | Exemplo                                                                 |
|------------------|---------------------------------------------------------------------------|-------------------------------------------------------------------------|
| **Exclude<T, U>** | Exclui de `T` os tipos que podem ser atribuídos a `U`.                   | `Exclude<"a" | "b" | "c", "a">` → `"b" | "c"`                           |
| **Extract<T, U>** | Seleciona de `T` apenas os tipos que podem ser atribuídos a `U`.          | `Extract<"a" | "b" | "c", "a" | "c">` → `"a" | "c"`                     |
| **NonNullable<T>** | Exclui `null` e `undefined` de `T`.                                     | `NonNullable<string | null | undefined>` → `string`                     |

---

## Exemplos práticos

```ts
// Exclude
type WithoutA = Exclude<"a" | "b" | "c", "a">;
// Resultado: "b" | "c"

// Extract
type OnlyAC = Extract<"a" | "b" | "c", "a" | "c">;
// Resultado: "a" | "c"

// NonNullable
type NotNull = NonNullable<string | null | undefined>;
// Resultado: string
```

---

## Em resumo
Esses tipos embutidos são extremamente úteis para manipular uniões de tipos:  
- **Exclude** → remove tipos indesejados.  
- **Extract** → mantém apenas os tipos desejados.  
- **NonNullable** → garante que `null` e `undefined` não estejam presentes.  

Eles simplificam tarefas comuns que, sem eles, exigiriam a criação de tipos condicionais personalizados.  

---

### Comparação: Tipos embutidos vs. tipos condicionais manuais

| Tipo embutido      | Equivalente manual com tipo condicional | Exemplo de uso | Resultado |
|--------------------|-----------------------------------------|----------------|-----------|
| **Exclude<T, U>**  | `T extends U ? never : T`              | `Exclude<"a" | "b" | "c", "a">` | `"b" | "c"` |
| **Extract<T, U>**  | `T extends U ? T : never`              | `Extract<"a" | "b" | "c", "a" | "c">` | `"a" | "c"` |
| **NonNullable<T>** | `T extends null | undefined ? never : T` | `NonNullable<string | null | undefined>` | `string` |

---

### Explicação
- **Exclude**: remove de `T` os tipos que também estão em `U`
- **Extract**: mantém apenas os tipos de `T` que também estão em `U`
- **NonNullable**: elimina `null` e `undefined` de `T`

Esses tipos embutidos são atalhos convenientes que evitam escrever manualmente expressões condicionais repetitivas
