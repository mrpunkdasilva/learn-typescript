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