abstract class Person {
    constructor(public id: string, public name: string,
                public city: string) {
    }

    getDetails(): string {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }

    abstract getSpecificDetails(): string;
}

class Employee extends Person {
    constructor(public readonly id: string, public name: string,
                private dept: string, public city: string) {
        super(id, name, city);
    }

    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}

class Customer {
    constructor(public readonly id: string, public name: string,
                public city: string, public creditLimit: number) {
    }
}

let data: (Person | Customer)[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500)];

data.forEach(item => {
    if (item instanceof Person) {
        console.log(item.getDetails());
    } else {
        console.log(`Customer: ${item.name}`);
    }
})