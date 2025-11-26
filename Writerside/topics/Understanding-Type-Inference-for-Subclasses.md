# Understanding Type Inference for Subclasses

## O problema da inferência automática
- Quando você cria um array com objetos de classes diferentes, o compilador **não assume automaticamente** que todos eles compartilham o mesmo **superclasse**.  
- Em vez disso, ele analisa os **shapes** (estruturas de propriedades) dos objetos e cria um **union type** com os tipos presentes.


```ts 
class Person {
    constructor(public id: string, public name: string,
        public city: string) { }
}

class Employee extends Person {
    constructor(public readonly id: string, public name: string,
            private dept: string, public city: string) {
        super(id, name, city);
    }
    
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

class Customer extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number) {
        super(id, name, city);
    }
}

class Supplier extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public companyName: string) {
        super(id, name, city);
    }
}

let data = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
        new Customer("ajones", "Alice Jones", "London", 500)];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => {
    console.log(`Person: ${item.name}, ${item.city}`);
    if (item instanceof Employee) {
        item.writeDept();
    } else if (item instanceof Customer) {
        console.log(`Customer ${item.name} has ${item.creditLimit} limit`);
    } else if (item instanceof Supplier) {
        console.log(`Supplier ${item.name} works for ${item.companyName}`);
    }
});
```

O compilador infere:

```ts
declare let data: (Employee | Customer)[];
```

<note> 

Ou seja, o array só aceita `Employee` ou `Customer`.  
Quando você tenta adicionar um `Supplier`, ocorre erro de compilação.

</note>

---

## Por que isso acontece
- O compilador não “pensa em hierarquia de classes” como em C# ou Java.  
- Ele só vê que o array contém objetos de tipos diferentes e cria um **union**.  
- Como `Employee` e `Customer` compartilham apenas as propriedades da classe `Person`, o compilador considera que o array é equivalente a `Person[]`.  
- Mas, como a inferência foi feita apenas com os dois primeiros elementos, o `Supplier` não foi incluído.

---

## Solução: usar anotação explícita
Para indicar ao compilador que o array deve aceitar **qualquer objeto que seja um `Person` ou uma subclasse**, você precisa declarar o tipo explicitamente:

```ts
let data: Person[] = [
  new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
  new Customer("ajones", "Alice Jones", "London", 500)
];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));
```

Agora o compilador entende que o array pode conter **Employee, Customer, Supplier** ou qualquer outra subclasse de `Person`.



