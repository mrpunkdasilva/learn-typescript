# Working with Classes and Interfaces

## Using Constructor Functions

```ts 
type Person = {
    id: string,
    name: string,
    city: string
};

type Employee = {
    id: string,
    name: string,
    dept: string,
    city: string,
    writeDept: () => void
}

let Employee = function (id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};

Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
let data: (Person | Employee)[] =
    [{id: "bsmith", name: "Bob Smith", city: "London"},
        {id: "ajones", name: "Alice Jones", city: "Paris"},
        {id: "dpeters", name: "Dora Peters", city: "New York"},
        salesEmployee];

data.forEach(item => {
    if ("dept" in item) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
```

Quando trabalhamos com prototypes o jeito antigo e e contraintuitiva que teriamos que usar sem o ES6+ é fazendo uso de uma função anonima que vai servir como constructor: 

```ts 
let Employee = function (id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
};
```

Isso assim era feito quando não tinhamos a abordagem de classes como outras linguagens


## Using Classes


```typescript
type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    id: string;
    name: string;
    dept: string;
    city: string;

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
let data: (Person | Employee)[] =
    [{id: "bsmith", name: "Bob Smith", city: "London"},
        {id: "ajones", name: "Alice Jones", city: "Paris"},
        {id: "dpeters", name: "Dora Peters", city: "New York"},
        salesEmployee];

data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
```


A saida disso será assim:

```ts 
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
```


| Keyword / Função     | Uso / Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------------|
| `class`              | Declara uma classe.                                                             |
| `constructor`        | Método especial chamado na criação do objeto (`new`).                           |
| `new`                | Cria uma instância da classe.                                                   |
| `this`               | Referência ao objeto atual dentro da classe.                                    |
| `extends`            | Define herança, permitindo que uma classe derive de outra.                      |
| `super`              | Chama o construtor ou métodos da classe pai.                                    |
| `implements`         | Faz a classe seguir um contrato definido por uma interface.                     |
| `public`             | Modificador de acesso padrão (propriedade/método acessível em qualquer lugar).  |
| `private`            | Propriedade/método acessível apenas dentro da própria classe.                   |
| `protected`          | Propriedade/método acessível dentro da classe e subclasses.                     |
| `readonly`           | Define propriedade que só pode ser atribuída no construtor (imutável depois).   |
| `static`             | Define membros da classe que pertencem à própria classe, não às instâncias.     |
| `abstract`           | Define classe ou método abstrato (deve ser implementado em subclasses).          |
| `override`           | Indica que um método sobrescreve um da classe pai (TS 4.3+).                    |
| `instanceof`         | Verifica se um objeto é instância de uma classe (usado para *type narrowing*).  |
| `get` / `set`        | Define propriedades acessoras (getter e setter).                                |
| `#` (private fields) | Sintaxe moderna para campos privados em classes (`#id`).                        |





### Using the Access Control Keywords

| Keyword    | Descrição                                                                 | Exemplo                                                                 |
|------------|----------------------------------------------------------------------------|-------------------------------------------------------------------------|
| `public`   | Permite acesso livre à propriedade ou método. É o padrão quando nenhum keyword é usado. | ```ts class Employee { public name: string; }``` |
| `private`  | Restringe o acesso apenas à classe que define a propriedade ou método.     | ```ts class Employee { private dept: string; }``` |
| `protected`| Restringe o acesso à classe que define e às suas subclasses (herança).     | ```ts class Employee { protected city: string; }``` |


```ts 
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
```


