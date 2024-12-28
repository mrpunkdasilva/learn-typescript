# Objects
Podemos usar os objetos que já temos no JS, mas tipando eles assim:
- Aqui definimos os tipos apenas, nada inicializado:
```typescript
let car: {
  make: string;
  model: string;
  year: number;
};
```
> O ponto e virgula no final de cada propriedade é opcional e depende da code base do projetoo;

- Agora veremos como seria um objeto numa função:
```typescript
function showInfoCar(car: { 
    make: string; model: string; year: number; 
}) : string {
    return `${make} | ${model} | ${number}`;
}
```

- Podemos também definir que determinada propriedade é opcional, usando o operador `?` depois do nome da propriedade:
```typescript
function showInfoCar(car: { 
    make: string; 
    model: string; 
    year: number;
    chargeVoltage?: number;
}) : string {
    return `
    ${make}   | 
    ${model}  | 
    ${number} | 
    ${(typeof car.chargeVoltage === "number")? "Car Voltage: " + car.chargeVoltage : "" }
    `;
}
```
- Está notação serve também para argumentos em funções, assim podemos ou não passarmos o atributo `car` no objeto:
````typescript
function showInfoCar(car?: { 
    make: string; 
    model: string; 
    year: number;
    chargeVoltage?: number;
}) : string {
    if (!car) {
        console.log("Don't passed car");
        return;
    }
    
    return `
        ${make}   | 
        ${model}  | 
        ${number} | 
        ${(typeof car.chargeVoltage === "number")? "Car Voltage: " + car.chargeVoltage : "" }
    `;
}
````

## Assinaturas Indexadas
Esses tipo de estrutura de dados é o que chamamos também de dicionários, são estruturas onde temos um index 

No caso de dicionarios o comum é usar uma string para servir de indexador:
```typescript
const phones = {
  home: { country: "+1", area: "211", number: "652-4515" },
  work: { country: "+1", area: "670", number: "752-5856" },
  fax: { country: "+1", area: "322", number: "525-4357" },
}
```

Delarando com notação de tipos:
```typescript
const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  }
} = {}
```