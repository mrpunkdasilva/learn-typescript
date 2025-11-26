# Extending Interfaces


Extendemos com o keyword `extends`, funciona parecido com classes e o resultado é uma interface que contem as propriedades e metodos herdados da interface pai, agora com novas features


1. **Definimos a interface:**

```ts 
interface Person {
    name: string;
    getDetails(): string;
}
```

2. **Usamos ela:**

```ts 
interface DogOwner extends Person {
    dogName: string;
    getDogDetails(): string;
}
```


- **Código Completo**

* O extends permite que uma interface herde as propriedades e métodos de outra.
* Isso significa que qualquer classe que implemente a interface estendida precisa fornecer todos os membros da interface base + os da interface filha.
* Objetos criados a partir dessa classe podem ser tratados como instâncias de ambas as interfaces, já que possuem o mesmo shape.


```ts 
interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner extends Person {
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

class Customer implements DogOwner {
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
data.forEach(item => console.log(item.getDetails()))
```


