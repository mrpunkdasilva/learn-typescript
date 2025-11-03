# JavaScript Primer

## Tipos Primitivos

| Nome | Descrição |
|------|-----------|
| **number** | Usado para representar valores numéricos. JavaScript não diferencia entre inteiros e valores de ponto flutuante. |
| **string** | Usado para representar dados de texto. |
| **boolean** | Pode ter valores `true` e `false`. |
| **symbol** | Usado para representar valores constantes únicos, como chaves em coleções. |
| **null** | Pode receber apenas o valor `null` e é usado para indicar uma referência inexistente ou inválida. |
| **undefined** | Usado quando uma variável foi definida mas não foi atribuído um valor. |
| **object** | Usado para representar valores compostos, formados a partir de propriedades e valores individuais. |

## Comparação de Igualdade Abstrata (==)

A comparação `x == y` produz `true` ou `false` seguindo estas regras:

1. Se `Type(x)` é o mesmo que `Type(y)`, então:
   - Retorna o resultado da Comparação de Igualdade Estrita `x === y`

2. Se `x` é `null` e `y` é `undefined`, retorna `true`

3. Se `x` é `undefined` e `y` é `null`, retorna `true`

4. Se `Type(x)` é Number e `Type(y)` é String, retorna o resultado da comparação `x == ToNumber(y)`

5. Se `Type(x)` é String e `Type(y)` é Number, retorna o resultado da comparação `ToNumber(x) == y`

6. Se `Type(x)` é Boolean, retorna o resultado da comparação `ToNumber(x) == y`

7. Se `Type(y)` é Boolean, retorna o resultado da comparação `x == ToNumber(y)`

8. Se `Type(x)` é String, Number ou Symbol e `Type(y)` é Object, retorna o resultado da comparação `x == ToPrimitive(y)`

9. Se `Type(x)` é Object e `Type(y)` é String, Number ou Symbol, retorna o resultado da comparação `ToPrimitive(x) == y`

10. Retorna `false`

## Comparação de Igualdade Estrita (===)

A comparação `x === y` produz `true` ou `false` seguindo estas regras:

1. Se `Type(x)` é diferente de `Type(y)`, retorna `false`

2. Se `Type(x)` é Number, então:
   - Se `x` é NaN, retorna `false`
   - Se `y` é NaN, retorna `false`
   - Se `x` é o mesmo valor Number que `y`, retorna `true`
   - Se `x` é +0 e `y` é -0, retorna `true`
   - Se `x` é -0 e `y` é +0, retorna `true`
   - Retorna `false`

3. Retorna `SameValueNonNumber(x, y)`

> **Nota:** Este algoritmo difere do Algoritmo SameValue no tratamento de zeros com sinal e NaNs.
> {style="note"}


### Desviando da coerção de tipo

```javascript
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);
if (hatPrice === bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}
let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total Price: ${totalPrice}`);
let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);
```


## Trabalhando com funções 

```javascript
let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);
function sumPrices(first, second, third) {
    return first + second + third;
}
let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice}`)
```

Como por padrão vai fazer com que a coersão ou alguma especificidade do tipo, aconteça ou seja que com tipos como string, boolean, object a função vai ser invocada

> O tipo do parametro da função é determinada pelo valor que é usado na invocação dela

## Strict Mode

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

É uma forma de escrever JavaScript diferente com suas próprias regras e claro com regras do ECMA, mas tento suas diferenças 

- Uma das questões é que ele elimina os erros silênciosos por throw errors
- Proibe algumas sintaxes como as que vão ser definidas nas versões futuras do ECMAScript



## Entendo `this` in Arrow Functions 

Arrow Functions são diferentes das funções comuns:
- Não possuem os valores do seu _this_  e herança 

```javascript
let myObject = {
    greeting: "Hi, there",
    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}
greeting = "Hello";
let writer = myObject.getWriter();
writer("It is raining today");
let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");
```