# Using an Abstract Class


Classes abstratas não podem ser instanciadas diretamente e são usadas para descrever funcionalidades comuns que devem ser implmenetadas pelas subclasses, forçando as subclasses a aderirem um formato especifico mas permitindo que tenhamos uma implementação especifica de metodos pela classe:

```ts 
abstract class Person {
    constructor(
        public id: string,
        public name : string,
        public city: string
    ) {
    }

    getDetails() : string {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }

    abstract getSpecificDetails() : string;
}

class Employee extends Person {
    constructor(
        public readonly id: string,
        public name: string,
        private dep : string
    ) {
        super(id, name, city);
    }

    getSpecificDetails(): string {
        return `$works in ${this.dep}`;
    }
}

class Customer extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number) {
        super(id, name, city);
    }
    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}
class Supplier extends Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public companyName: string) {
        super(id, name, city);
    }
    getSpecificDetails() {
        return `works for ${this.companyName}`;
    }
}

let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
        new Customer("ajones", "Alice Jones", "London", 500)];

data.push(new Supplier("dpeters", "Dora Peters", "New York", "Acme"));

data.forEach(item => console.log(item.getDetails()));
```


> 1. Define que a classe é abstrata:
> 
> `abstract class Person {}`
> 
> 2. Define que o método é abstrato:
> 
> `abstract getSpecificDetails() : string;`




