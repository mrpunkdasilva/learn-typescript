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


---


Esse trecho mostra um ponto muito importante sobre **modificadores de acesso no TypeScript**:  

---

<warning>

Atenção
- Os keywords `private` e `protected` **não existem em JavaScript puro**.  
- Eles são apenas **regras de compilação** aplicadas pelo TypeScript para ajudar na segurança e organização do código.  
- No código JavaScript gerado, todas as propriedades continuam acessíveis.  
- Portanto, **não confie nesses modificadores para proteger dados sensíveis em tempo de execução** eles servem apenas para **type checking** durante o desenvolvimento.

</warning>


```ts
type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public id: string;      // acessível em qualquer lugar
    public name: string;    // acessível em qualquer lugar
    private dept: string;   // restrito à classe (em TS, mas acessível em JS)
    public city: string;    // acessível em qualquer lugar

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
salesEmployee.writeDept(); // imprime: "Fidel Vega works in Sales"
```

---

O TypeScript gera algo assim:

```js
class Employee {
    constructor(id, name, dept, city) {
        this.id = id;
        this.name = name;
        this.dept = dept;   // continua acessível em JS
        this.city = city;
    }
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
salesEmployee.writeDept();
```

<note>

Note que **não há nada que realmente impeça o acesso a `dept`** em tempo de execução:
```js
console.log(salesEmployee.dept); // "Sales" (mesmo sendo private em TS)
```

</note>




### O que é `strictPropertyInitialization`

- É uma opção de configuração no `tsconfig.json`.  
- Quando ativada (`true`), o compilador exige que **toda propriedade declarada em uma classe** receba um valor:  
  - **diretamente na declaração**  
  - ou **dentro do construtor**.  
- Evita que propriedades fiquem como `undefined` sem intenção.

---

#### Dependência de `strictNullChecks`
- Para funcionar, também é necessário habilitar `strictNullChecks: true`.  
- Isso faz com que o compilador trate `null` e `undefined` como tipos distintos e não atribuíveis a outros tipos sem verificação explícita.

---

#### Exemplo sem inicialização (gera erro)
```ts
class Employee {
  id: string;   // Erro: não inicializada
  name: string; // Erro: não inicializada
}
```

Com `strictPropertyInitialization: true`, o compilador reclama porque `id` e `name` não recebem valores.

---

#### Exemplo corrigido
```ts
class Employee {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;     // inicializada no construtor
    this.name = name; // inicializada no construtor
  }
}
```

Ou inicializando diretamente:
```ts
class Employee {
  id: string = "default";
  name: string = "unknown";
}
```

---

#### Exceções
- Você pode usar o **definite assignment assertion** (`!`) para dizer ao compilador que a propriedade será inicializada em algum momento, mesmo que ele não consiga verificar:

```ts
class Employee {
  id!: string; // compilador aceita, mas cuidado: runtime pode ter undefined
  name!: string;
}
```



## Defining Read-Only Properties

O TS oferece a feature de criar propriedades constantes que pode ser usado para criar instancia de propriedades que os valores atribuidos pelo construtor mas não pode ser mudado de outras formas 

```ts 
type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public readonly id: string;
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

salesEmployee.writeDept();
salesEmployee.id = "fidel";
```

<note>

A keyword deve ser vir antes do nome da propriedade

```ts 
public readonly id: string;
```

</note>


Assim quando tentamos editar uma read only property:

> salesEmployee.id = "fidel";

Teremos o seguinte erro de build:

> error TS2540: Cannot assign to 'id' because it is a read-only 
property


<warning>

O keyword readonly é forçado pelo compilador do TS e não existe no JS então não vai afetar no código final gerado, logo é melhor não usar essa feature para proteger dados e operações sensiveis 

</warning>



## Simplifying Class Constructors

No JS puro as classes usam construtores para criar a instância das propriedades dinamicamente mas no TS as propriedades precisam estar explicitamente definidas

A abordagem do TS é a mais familiar que encontramos entre as que os programadores usam mas isso pode ser verboso e repetitivo então no TS temos uma melhoria dessa abordagem para ser mais _sintax sugar_ que é apenas definirmos os parametros no constructor, já que não precisamos de  nenhum statement para fazer essa atribuição dos valores no construtor:

```ts 
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
```
    
Basta fazermos deste modo:

```ts 
 constructor(public readonly id: string, public name: string,
            private dept: string, public city: string) {
        // no statements required
    }
```


<note>

Para simplificar ainda mais, podemos usar os access control keywords aplicados no parametro como foi mostrado no código:

```ts 
 constructor(public readonly id: string, public name: string,
            private dept: string, public city: string) {
        // no statements required
    }
```

</note>





