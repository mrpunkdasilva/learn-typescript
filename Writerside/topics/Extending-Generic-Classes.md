# Extending Generic Classes

## Adding Extra Features to the Existing Type Parameters
Esse exemplo mostra como **subclassificar uma classe genérica** em TypeScript e adicionar funcionalidades extras sem perder a tipagem forte.

---

1. **Classe base genérica**  
   ```ts
   class DataCollection<T extends { name: string }> {
       protected items: T[] = [];
   
       constructor(initialItems: T[]) {
           this.items.push(...initialItems);
       }
   
       collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
           let results = [];
   
           this.items.forEach(item => {
               let match = targetData.find(d => d[targetProp] === item[itemProp]);
               if (match !== undefined) {
                   results.push({ ...match, ...item });
               }
           });
   
           return results;
       }
   }
   ```
   - `DataCollection<T>` aceita qualquer tipo `T` que tenha uma propriedade `name`.  
   - Possui métodos para armazenar itens e combinar (`collate`) com outros dados.

2. **Subclasse que adiciona funcionalidade**  
   ```ts
   class SearchableCollection<T extends { name: string }> extends DataCollection<T> {
   
       constructor(initialItems: T[]) {
           super(initialItems);
       }
   
       find(name: string): T | undefined {
           return this.items.find(item => item.name === name);
       }
   }
   ```
   - `SearchableCollection<T>` herda de `DataCollection<T>`.  
   - Adiciona o método `find`, que busca um item pelo `name`.  
   - Usa `protected` na propriedade `items` para permitir acesso dentro da subclasse.

3. **Uso prático**  
   ```ts
   let peopleData = new SearchableCollection<Person>(people);
   let foundPerson = peopleData.find("Bob Smith");
   if (foundPerson !== undefined) {
       console.log(`Person ${foundPerson.name}, ${foundPerson.city}`);
   }
   ```
   - Instanciamos `SearchableCollection<Person>`.  
   - Usamos `find` para localizar uma pessoa pelo nome.  
   - Saída:  
     ```
     Person Bob Smith, London
     ```

---

## Pontos importantes
- **Extensão de classes genéricas**: a subclasse deve usar parâmetros de tipo compatíveis com a classe base.  
- **Uso de `protected`**: permite que subclasses acessem os membros, mas mantém encapsulamento contra código externo.  
- **Flexibilidade**: você pode criar subclasses que adicionam métodos específicos sem duplicar lógica da classe base.  




---




**Código completo:**

```ts 
import { City, Person, Product, Employee } from "./dataTypes";

let people = [new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")];
let products = [new Product("Running Shoes", 100), new Product("Hat", 25)];

let cities = [new City("London", 8136000), new City("Paris", 2141000)];
let employees = [new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")];

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
        let results = [];

        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });

        return results;
    }
}

class SearchableCollection<T extends { name: string }> extends DataCollection<T> {
    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(name: string): T | undefined {
        return this.items.find(item => item.name === name);
    }
}
```


