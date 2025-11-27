# Defining an Abstract Interface Implementation

Criando uma implementação de uma interface abstrata

```ts
interface Person {
    name: string;

    getDetails(): string;

    dogName?: string;

    getDogDetails?(): string;
}

abstract class AbstractDogOwner implements Person {
    abstract name: string;
    abstract dogName?: string;

    abstract getDetails();

    getDogDetails(): string {
        if (this.dogName) {
            return `${this.name} has a dog called ${this.dogName}`;
        }
    }
}

class DogOwningCustomer extends AbstractDogOwner {
    constructor(public readonly id: string, public name: string,
                public city: string, public creditLimit: number,
                public dogName) {
        super();
    }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}

let alice = new DogOwningCustomer("ajones", "Alice Jones", "London", 500, "Fido");

if (alice.getDogDetails) {
    console.log(alice.getDogDetails());
}
```


