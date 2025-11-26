type Person = {
    name: string;
    getDetails(): string;
};

class Employee implements Person {
  constructor(
    public readonly id: string,
    public name: string,
    private dept: string,
    public city: string
  ) {
    // nenhuma lógica extra necessária
  }

  getDetails() {
    return `${this.name} works in ${this.dept}`;
  }
}

type NamedObject = {
  name: string;
};

interface Person extends NamedObject {
  getDetails(): string;
}