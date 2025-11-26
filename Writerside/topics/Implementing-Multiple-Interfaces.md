# Implementing Multiple Interfaces

Uma classe pode implementar mais de uma 1 interface: 

```ts
interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

class Employee implements Person {
    constructor(public readonly id: string, public name: string,
            private dept: string, public city: string) {
        // no statements required
    }
    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}

class Customer implements Person, DogOwner {
    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number,
            public dogName ) {
        // no statements required
    }
    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
    getDogDetails() {
        return `${this.name} has a dog named ${this.dogName}`;
    }
}

let alice = new Customer("ajones", "Alice Jones", "London", 500, "Fido");
let dogOwners: DogOwner[] = [alice];

dogOwners.forEach(item => console.log(item.getDogDetails()));

let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];

data.forEach(item => console.log(item.getDetails()));
```


As interfaces são listadas apos a keyword `implement`:

```ts 
class Customer implements Person, DogOwner {}
```

A classe `Customer` implementa as interfaces `Person` e `DogOwner` que significa que um objeto `Person`atribuido para uma variavel nomeada `alice` pode ser adicionada para array tipados para objetos `Person` e `DogOwner`



<note>

- Uma classe pode implementar várias interfaces ao mesmo tempo.  
- Porém, isso só é possível se **não houver conflito de tipos** entre as propriedades exigidas por essas interfaces.  
- Se duas interfaces definirem a mesma propriedade com **tipos diferentes**, a classe não consegue satisfazer ambas.

---

### Exemplo sem conflito
```ts
interface Person {
  id: string;
  name: string;
}

interface DogOwner {
  dogName: string;
}

class Customer implements Person, DogOwner {
  id: string;
  name: string;
  dogName: string;

  constructor(id: string, name: string, dogName: string) {
    this.id = id;
    this.name = name;
    this.dogName = dogName;
  }
}
```
Aqui funciona porque não há sobreposição de propriedades com tipos diferentes.

---

### Exemplo com conflito
```ts
interface Person {
  id: string;  // string
}

interface DogOwner {
  id: number;  // number
}

class Customer implements Person, DogOwner {
  id: string; // Erro: não pode ser string e number ao mesmo tempo
}
```

O compilador gera erro porque `id` não pode ser ao mesmo tempo `string` e `number`.

</note>