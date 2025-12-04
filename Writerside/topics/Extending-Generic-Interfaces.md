# Extending Generic Interfaces

Intefaces genericas podem ser extendidas apenas como interfaces regulares e as opções para lidar com esses tipos de parametros são os mesmos quando extendidos de uma classe generica, como mostra o código abaixo um conjunto de interfaces que extendem a interface 1`Collection<T>`:



```ts 
import {City, Person, Product, Employee} from "./dataTypes";

type  shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;

    get(name: string): T;

    count: number;
}

interface SearchableCollection<T extends shapeType> extends Collection<T> {
    find(name: string): T | undefined;
}

interface ProductCollection extends Collection<Product> {
    sumPrices(): number;
}

interface PeopleCollection<T extends Product | Employee> extends Collection<T> {
    getNames(): string[];
}
```



