# Explicitly Providing Generic Type Parameters for Index Types


O método `getValue` foi invocado sem generic type arguments, permitindo o compilador inferir os tipos dos argumentos da função. Explicitamente os tipos de argumentos revela um aspecto de uso:



```typescript
import {City, Person, Product, Employee} from "./dataTypes";

function getValue<T, K extends keyof T>(item: T, keyname: K) {
    console.log(`Value: ${item[keyname]}`);
}

let p = new Product("Running Shoes", 100);
getValue<Product, "name">(p, "name");
getValue(p, "price");

let e = new Employee("Bob Smith", "Sales");
getValue(e, "name");
getValue(e, "role")
```

Pode parecer que a propriedade exigida pelo exemplo é especificada duas vezes, mas `name` tem dois usos diferentes na declaração modificada, como na imagem:

![{2CA1A827-9214-4BAB-A53F-0CF1824B345C}.png]({2CA1A827-9214-4BAB-A53F-0CF1824B345C}.png)


Como um generic type argument, `name` é um tipo de valor literal que especifica um dos tipos  `keyof Product` e é usado pelo TSC para o type checking. Como um argumento da função, `name` é um valor `string` que é usado pelo JavaScript runtime quando o código é executado




