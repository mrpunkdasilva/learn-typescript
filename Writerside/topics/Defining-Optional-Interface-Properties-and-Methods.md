# Defining Optional Interface Properties and Methods


Para deixarmos propriedades e metodos opcionais basta usarmos o question mark (?):

- Definindo o atributo e o metodo na interface
```ts 
dogName?: string;
getDogDetails?(): string;
```


```ts 
interface Person {
    name: string;

    getDetails(): string;

    dogName?: string;

    getDogDetails?(): string;
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
                public city: string, public creditLimit: number,
                public dogName) {
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
let data: Person[] = [new Employee("fvega", "Fidel Vega", "Sales", "Paris"), alice];

data.forEach(item => {
    console.log(item.getDetails());
    if (item.getDogDetails) {
        console.log(item.getDogDetails());
    }
});
```

---

## O problema
- Você pode ter um array com objetos de diferentes classes que implementam a mesma interface (`Person`).  
- Algumas dessas classes podem **não implementar todos os métodos adicionais** (como `getDogDetails`).  
- O compilador permite acessar o método porque ele está declarado na interface, mas em tempo de execução o objeto pode não ter esse método → resultando em `undefined`.

---

## Por que usar checagem condicional
- O compilador não sabe se todos os objetos realmente têm `getDogDetails`.  
- Usar `if (item.getDogDetails)` garante que o método só será chamado se existir.  
- Isso evita erros de runtime como `TypeError: item.getDogDetails is not a function`.

