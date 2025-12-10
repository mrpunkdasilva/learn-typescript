# Using an Index Type for the Collection&lt;T&gt; Class

Usando um index type permite mudar a classe `Collection<T>` então qualqquer tipo de objeto e não apenas esses que define
a propriedade `name`, como mostrado nas mudança da classe abaixo, que usa um index type query para restringir a
propriedade do construtor `propertyName` para os nomes de propriedades definidas pelo generic type parameter `T`,
provendo a chave pelo qual objetos podem ser guardados no `Map`:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

//type shapeType = { name: string };

class Collection<T, K extends keyof T> implements Iterable<T> {
    private items: Map<T[K], T>;

    constructor(initialItems: T[] = [], private propertyName: K) {
        this.items = new Map<T[K], T>();
        this.add(...initialItems);
    }

    add(...newItems: T[]): void {
        newItems.forEach(newItem =>
            this.items.set(newItem[this.propertyName], newItem));
    }

    get(key: T[K]): T {
        return this.items.get(key);
    }

    get count(): number {
        return this.items.size;
    }

    [Symbol.iterator](): Iterator<T> {
        return this.items.values();
    }
}

let productCollection: Collection<Product, "name">
    = new Collection(products, "name");
console.log(`There are ${productCollection.count} products`);

let itemByKey = productCollection.get("Hat");
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`)
```

A class foi reescrita com um type parameter generico `K` que é restrito para `keyof T` que é o data type de objetos
guardados pela collection. Uma nova instância de `Collection<T, K>` é então criado deste modo:

```
let productCollection: Collection<Product, "name">
    = new Collection(products, "name")
```

**Tabela – Tipos usados pela classe `Collection<T, K>`:**

| Nome             | Descrição                                                                                                                                                                            | Exemplo com `Collection<Product, "name">` |
|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------|
| **T**            | Tipo dos objetos armazenados na classe de coleção. É fornecido pelo primeiro argumento genérico.                                                                                     | `Product`                                 |
| **K**            | Nome da propriedade usada como chave. É restrito às propriedades definidas por `T`. É fornecido pelo segundo argumento genérico.                                                     | `"name"`                                  |
| **T[K]**         | Tipo da propriedade escolhida como chave, obtido pelo **operador de acesso indexado**. É usado para definir o tipo da chave no `Map` e para restringir parâmetros.                   | `Product["name"]` → `string`              |
| **propertyName** | Nome da propriedade usada como chave, necessário como valor literal em tempo de execução (JavaScript), já que as informações genéricas do TypeScript não existem mais nesse momento. | `"name"`                                  |

---

<note>

### Observações

- No **primeiro**, a chave usada é `"name"`, então os produtos são indexados pelo nome.
- No **segundo**, a chave muda para `"price"`, e o compilador infere os tipos automaticamente. Assim, os produtos passam
  a ser indexados pelo preço (`number`).

</note>


**Exemplo:**

```ts
let productCollection = new Collection(products, "price");
console.log(`There are ${productCollection.count} products`);

let itemByKey = productCollection.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
```

---


**Comparação entre `Collection<Product, "name">` e `Collection<Product, "price">`:**

| Aspecto        | `Collection<Product, "name">`                          | `Collection<Product, "price">`                        |
|----------------|--------------------------------------------------------|-------------------------------------------------------|
| **T**          | `Product`                                              | `Product`                                             |
| **K**          | `"name"`                                               | `"price"`                                             |
| **T[K]**       | `Product["name"]` → `string`                           | `Product["price"]` → `number`                         |
| **propertyName** | `"name"` (valor literal usado em tempo de execução)   | `"price"` (valor literal usado em tempo de execução)  |
| **Indexação**  | Os produtos são armazenados e recuperados pelo **nome** | Os produtos são armazenados e recuperados pelo **preço** |
| **Exemplo de uso** | `collection.get("Running Shoes")` retorna o produto com esse nome | `collection.get(100)` retorna o produto com preço 100 |

---

<note>

### Observação
- No caso de `"name"`, a chave é uma **string**, e os produtos são identificados pelo nome.  
- No caso de `"price"`, a chave é um **number**, e os produtos são identificados pelo preço.  
- O compilador garante a **segurança de tipos**: se a chave for `"name"`, o retorno será `string`; se for `"price"`, o retorno será `number`.

</note>





