interface Person {
    name: string;
    getDetails(): string;
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

class Customer implements Person {
    constructor(public readonly id: string, public name: string,
            public city: string, public creditLimit: number) {
        // no statements required
    }

    getDetails() {
        return `${this.name} has ${this.creditLimit} limit`;
    }
}

let data: Person[] = [
        new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
        new Customer("ajones", "Alice Jones", "London", 500)];

data.forEach(item => console.log(item.getDetails()));