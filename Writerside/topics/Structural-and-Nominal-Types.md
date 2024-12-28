# Structural and Nominal Types

## Static vs Dynamic 

- **Estático**: vai fazer a checagem de tipo na hora da compilação ou não 
- **Dinamica**: vai fazer a checagem de tipo em tempo de execução

O TS tem como seu tipo de checagem o **estático**

## Ducking Typing
É um tipo de tipagem que é feito usando o teste do pato:
    
> “If it looks like a duck, swims like a duck, and quacks like a duck, then it’s probably is a duck”.

Ou seja, ele vai tipar o que aquilo parece ser, é muito usado para sistemas com tipagem dinamica

## Tipagem "fraca" e "forte"
No contexto do TS o caminho comum é usar a tipagem forte.

## Nominal vs Structural
- O **nominal** é o sistema de tipagem que foca em **nomes**
  - Como por exemplo no código abaixo, o sistema nominal, ele vai verificar se a equivalencia de tipo de `myCar` é a mesma de `checkCar' (exemplo no Java):
```java
public class Car {
  String make;
  String model;
  int make;
}

public class CarChecker {
  // takes a `Car` argument, returns a `String`
  public static String checkCar(Car car) {  }
}

Car myCar = new Car();

// TYPE CHECKING
// -------------
// Is `myCar` type-equivalent to
//     what `checkCar` wants as an argument?
CarChecker.checkCar(myCar);
```

- Agora o **Structural** foca num sistema de tipagem de estrutura ou tipo: 
  - Se olharmos o exemplo abaixo, em TS, vemos que a structural irá focar se o objeto tem ou não a mesma estrutura que se quer:
```typescript
class Car {
  make: string
  model: string
  year: number
  isElectric: boolean
}
 
class Truck {
  make: string
  model: string
  year: number
  towingCapacity: number
}
 
const vehicle = {
  make: "Honda",
  model: "Accord",
  year: 2017,
}
 
function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}
 
printCar(new Car()) // Fine
printCar(new Truck()) // Fine
printCar(vehicle) // Fine
```

