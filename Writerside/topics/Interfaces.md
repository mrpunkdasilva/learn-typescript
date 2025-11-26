# Using Interfaces

Uma inteface descreve o que uma classe deve possuir

> Essa feature é do TS

1. Definição:

```ts 
interface Person {
    name: string;

    getDetails(): string;
}
```

2. Uso:

```ts 
class Employee implements Person {
```

3. Implementação

```ts 
class Employee implements Person {
    constructor(public readonly id: string, public name: string,
                private dept: string, public city: string) {
        // no statements required
    }

    getDetails() {
        return `${this.name} works in ${this.dept}`;
    }
}
```

- **Código completo:**

```ts 
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
7
data.forEach(item => console.log(item.getDetails()));
```

<note>

Na interface podemos definir dois tipos de elemenos:

- interface property
- interface method

```ts 
interface Person {
    name: string;

    getDetails(): string;
}
```

</note>



<warning>

Podemos usar múltiplas interfaces a bel gosto, mas sabendo que elas são mergeadas pelo compilador para formar uma única
interface

    Isso é uma feature particular e uma que pode ser útil

</warning>