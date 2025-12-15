import
{
    City, Person, Product, Employee
}
    from
        "./dataTypes";

type resultType<T extends boolean> = T extends true ? string : number;
type references = "London" | "Bob" | "Kayak";
type nestedType<T extends references>
    = T extends "London" ? City : T extends "Bob" ? Person : Product;

let firstVal: nestedType<"London"> = new City("London", 8136000);
let secondVal: nestedType<"Bob"> = new Person("Bob", "London");
let thirdVal: nestedType<"Kayak"> = new Product("Kayak", 275);
