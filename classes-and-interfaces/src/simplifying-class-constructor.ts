type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    constructor(public readonly id: string, public name: string,
            private dept: string, public city: string) {
        // no statements required
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
//salesEmployee.id = "fidel";