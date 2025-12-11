import {City, Person, Product, Employee} from "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;
let mismatchCheck: resultType<false> = "String Value"