# Tuples
As tuplas são um tipo especial de lista, ela são ordenadas e cada item significa ou tem uma convenção diferentes:
> A inferencia não trabalha bem com tuplas
> ```typescript
> let myCar = [2002, "Toyota", "Corolla"]
> const [year, make, model] = myCar
> ```

Com Isso precisamos definir o estado do tipo da tupla na declaração:
```typescript
let myCar: [number, string, string] = [
  2002,
  "Toyota",
  "Corolla",
]
// ERROR: not the right convention
myCar = ["Honda", 2017, "Accord"]
```

Para tornar-mos uma tupla apenas de leitura, o que é muito comum para as tuplas, deixar elas apenas para leituras
- Para isto usamos a keyword: `readonly`:
```typescript
const roNumPair: readonly [number, number] = [4, 5];
roNumPair.length;

// Isso vai resultar em um erro, já que esse tipo de operação não existe quando usamos readonly
roNumPair.push(6) // [4, 5, 6]
// Ao tentarmos excluir um item, vai retornar na mesma questão da linha acima
roNumPair.pop() // [4, 5]
```
