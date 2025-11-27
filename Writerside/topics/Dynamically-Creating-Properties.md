# Dynamically Creating Properties


## Diferença entre JavaScript e TypeScript
- **JavaScript**: permite adicionar propriedades a um objeto simplesmente atribuindo valores a nomes de chave novos.  
  ```js
  let obj = {};
  obj.novaProp = "valor"; // funciona sem problemas
  ```
- **TypeScript**: exige que todas as propriedades estejam definidas na interface ou classe. Se você tentar adicionar uma propriedade não declarada, o compilador gera erro.  

---

## O papel do *index signature*
- Um *index signature* permite que você defina dinamicamente propriedades em um objeto, mas ainda com **tipagem segura**.  
- Sintaxe:
  ```ts
  [key: string]: TipoDoValor;
  ```

---

## Exemplo

```ts
interface Product {
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(public name: string, public category: string, public price: number) {}
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }
    [propertyName: string]: Product; // index signature
}

let group = new ProductGroup(["shoes", new SportsProduct("Shoes", "Running", 90.50)]);
group.hat = new SportsProduct("Hat", "Skiing", 20);

Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
```

### O que acontece:
- `ProductGroup` recebe tuplas `[string, Product]` e cria propriedades dinamicamente.  
- O index signature `[propertyName: string]: Product;` garante que qualquer chave adicionada terá como valor um `Product`.  
- Assim, `group.hat` é válido e tipado corretamente.  

---

## Por que isso é importante
- Sem index signature, o compilador trataria as propriedades criadas dinamicamente como `any`, o que quebra a segurança de tipos.  
- Com `noImplicitAny` ou `strict` ativados, isso geraria erro.  
- O index signature evita esse problema e mantém o código seguro e flexível.




