# Defining Generic Interfaces

Interfaces podem ser definidas com generic type parameters, permitindo funcionalidades para serem definidas sem especificar individualmente os tipos:

```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type  shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;

    get(name: string): T;

    count: number;
}
```

A interface `Colletion<T>` tem um generic type parameter nomeado `T`, seguindo a mesma sintaxe para a classe type parameters. O type parameter é usado para adicionar e obter um metodo e isso é para restringir para ter certeza que somente tipos que tenha o mesmo nome possam ser usadas

Uma interface com um parâmetro de tipo genérico descreve um conjunto de operações abstratas, mas não especifica sobre quais tipos elas podem ser realizadas, deixando a escolha dos tipos específicos para interfaces derivadas ou classes de implementação



