import {City, Person, Product, Employee} from "./dataTypes";

type  shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;

    get(name: string): T;

    count: number;
}