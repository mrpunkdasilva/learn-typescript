type Person = {
    id: string,
    name: string,
    city: string
};


class Employee {
    public id: string;
    public name: string;
    private dept: string;
    public city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }

    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}


let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
console.log(`Dept value: ${salesEmployee.dept}`);