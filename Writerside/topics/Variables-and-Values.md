# Variables and Values

Podemos declara por inferencia:
```typescript
let foo = 12;
foo = "12"
```
## Um tipo como um conjunto de valores permitidos
Com isso o tipo por inferencia ficou como `number` logo ao tentarmos atribuirmos um valor de string a variavel `foo` será nós avisado que isto está incorreto;
- O erro será de **assinatura de tipo**, ou seja, é quando por inferencia pensa que aquela mulher no tinder é do tipo mulher, mas quano chega lá é do tipo mulher feijoada, vem com linguiça

No TS quando criamos uma constante e atribuimos um valor ele pega esse valor e assume como o tipo da variavel:
```typescript
const humidity = 79
```
- O tipo de `humidity` é `79`, meio estranho eu sei, mas ele faz essa assumição específica aqui
- A `const` não pode ser retribuída e o tipo de `humidity` é tipo de valor imutável

Por exemplo, não poderíamos fazer isto:
- já que a variavel `temperature` não é do tipo `79`;
```typescript
humidity = temperature;  
```

Seguindo isso também serviria para as variaveis mutaveis:
```typescript
let temperature = 79 as 79
```
Com esse `as` dizemos que o tipo é `79` e não um número:
- Ao tentarmos atribuir um valor do tipo númerico não conseguimos, já que o tipo esperado é `79`
```typescript
temperature = 12 // Isto resultara também em erro de assinatura de tipo
```

Temos outro tipo de loucura no TS que é criarmos uma `let` em que definimos que o que ela aceita é um valor especifico:
```typescript
let temperature = 79 as const;
```
- Isso faz com que o tipo dessa variavel seja somente do tipo `79`, que não é um number e sim `79`

---

## Tipo implicito: `any` e anotações de tipo
Neste exemplo vemos o uso do `any` quando apenas declaramos uma variavel ou queremos que ela  assuma um valor flexivel e que fuja do bom senso de usar uma linguagem tipada por algum motivo sem sentido e hediondo usamos o `any`;

```typescript
// between 500 and 1000
const RANDOM_WAIT_TIME =
  Math.round(Math.random() * 500) + 500
 
let startTime = new Date()
let endTime
```

No caso acima o tipo `any` foi assumido de forma implicita, mas podemos usala de forma explicita com usando: type annotations ou anotação de tipo:
- Para definirmos um tipo usamos o sinal de ":" (dois pontos) e passamos o tipo;
```typescript
let endTime: any
```

