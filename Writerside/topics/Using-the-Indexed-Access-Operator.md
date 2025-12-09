# Using the Indexed Access Operator

## O que é o operador de acesso indexado?
- Sintaxe: `Tipo["propriedade"]`
- Ele retorna o **tipo da propriedade** especificada dentro de um tipo ou classe.
- Exemplo:  
  ```ts
  type priceType = Product["price"]; // retorna number
  ```

## Exemplos do texto

```ts
function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

type priceType = Product["price"];          // number
type allTypes = Product[keyof Product];     // string | number

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");       // imprime "Running Shoes"
getValue(p, "price");                       // imprime 100

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");                        // imprime "Bob Smith"
getValue(e, "role");                        // imprime "Sales"
```

- `Product["price"]` → retorna `number`, pois essa é a tipagem da propriedade `price`.
- `Product[keyof Product]` → retorna `string | number`, união dos tipos das propriedades `name` e `price`.

Os tipos retornados pelo operador de acesso indexado são chamados de **lookup types**.

```ts
function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
    return item[keyname];
}

let p = new Product("Running Shoes", 100);
console.log(getValue<Product, "name">(p, "name")); // string
console.log(getValue(p, "price"));                 // number

let e = new Employee("Bob Smith", "Sales");
console.log(getValue(e, "name"));                  // string
console.log(getValue(e, "role"));                  // string
```

Aqui, o operador `T[K]` diz ao compilador que o retorno da função terá o **tipo da propriedade** passada como argumento.  
- Se `K = "name"`, o retorno é `string`.  
- Se `K = "price"`, o retorno é `number`.


