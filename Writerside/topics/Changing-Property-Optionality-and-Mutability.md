# Changing Property Optionality and Mutability

## Conceitos principais

- **`?` (question mark)**  
  Torna as propriedades **opcionais**.  
  ```ts
  type MakeOptional<T> = {
      [P in keyof T]?: T[P];
  };
  ```

- **`-?` (minus + question mark)**  
  Remove a opcionalidade, tornando as propriedades **obrigatórias**.  
  ```ts
  type MakeRequired<T> = {
      [P in keyof T]-?: T[P];
  };
  ```

- **`readonly`**  
  Torna as propriedades **somente leitura**.  
  ```ts
  type MakeReadOnly<T> = {
      readonly [P in keyof T]: T[P];
  };
  ```

- **`-readonly`**  
  Remove a restrição de somente leitura, tornando as propriedades **mutáveis**.  
  ```ts
  type MakeReadWrite<T> = {
      -readonly [P in keyof T]: T[P];
  };
  ```

---

## Exemplo de transformação em cadeia

```ts
type optionalType = MakeOptional<Product>;     // propriedades opcionais
type requiredType = MakeRequired<optionalType>; // propriedades obrigatórias
type readOnlyType = MakeReadOnly<requiredType>; // propriedades readonly
type readWriteType = MakeReadWrite<readOnlyType>; // propriedades mutáveis novamente

let p: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
```

Resultado:  
- As propriedades passam por uma sequência de transformações: opcionais → obrigatórias → readonly → read-write.  
- No final, `readWriteType` volta a ter propriedades mutáveis.

---

## Tipos mapeados **nativos** do TypeScript 

| Nome        | Descrição                                                                 |
|-------------|---------------------------------------------------------------------------|
| **Partial<T>** | Torna todas as propriedades opcionais.                                   |
| **Required<T>** | Torna todas as propriedades obrigatórias.                               |
| **Readonly<T>** | Adiciona `readonly` às propriedades.                                    |
| **Pick<T, K>**  | Cria um novo tipo selecionando apenas propriedades específicas.         |
| **Record<K, T>**| Cria um tipo novo a partir de chaves e valores, sem transformar outro. |

---

## Exemplo com tipos nativos

```ts
type optionalType = Partial<Product>;
type requiredType = Required<optionalType>;
type readOnlyType = Readonly<requiredType>;
type readWriteType = MakeReadWrite<readOnlyType>;

let p: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);
```

Esse código produz a mesma saída que os tipos personalizados, mas usando os **mapeamentos embutidos** do TypeScript.

