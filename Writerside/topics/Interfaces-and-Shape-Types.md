# Interfaces and Shape Types

## Shape Types
- Um *shape type* é um tipo definido com `type` que descreve a **forma** de um objeto (suas propriedades e métodos).
- Exemplo:
```ts
type Person = {
  name: string;
  getDetails(): string;
};
```

---

## Classes implementando Shape Types
- Uma classe pode usar `implements` para declarar que segue o contrato de um *shape type*.
- Exemplo:
```ts
class Employee implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {
    // nenhuma lógica extra necessária
  }

  getDetails() {
    return `${this.name} works in ${this.dept}`;
  }
}
```
Aqui, `Employee` garante que terá `name` e `getDetails`, conforme exigido pelo tipo `Person`.

---

## Interfaces estendendo Shape Types
- Interfaces podem herdar propriedades de um *shape type* usando `extends`.
- Exemplo:
```ts
type NamedObject = {
  name: string;
};

interface Person extends NamedObject {
  getDetails(): string;
}
```

Nesse caso:
- `Person` herda `name` de `NamedObject`.
- Adiciona `getDetails`.
- Classes que implementam `Person` precisam definir **ambos**.

---

## Diferença prática
- **Shape types (`type`)**: descrevem a forma de um objeto, podem ser usados para alias de tipos complexos, uniões, interseções.
- **Interfaces**: descrevem contratos e podem ser estendidas ou implementadas por classes.
- Muitas vezes são intercambiáveis, mas **interfaces** são mais voltadas para contratos de classes, enquanto **types** são mais flexíveis para composições.

