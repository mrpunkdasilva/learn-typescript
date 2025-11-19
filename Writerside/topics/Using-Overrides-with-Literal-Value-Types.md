# Using Overrides with Literal Value Types


Pode usar a sobrecarga de função para mapear entradas especificas para saidas especificas

Aqui o compilador entende:
- Se `input = 1`, o retorno é literalmente 1.
- Se input = 2 ou 3, o retorno é "Hello" ou true.
- Se input = 4, o retorno é City.London.

Isso cria uma relação precisa entre parâmetro e resultado, sem precisar de type guards. No .d.ts gerado, o compilador infere:

```ts
declare let first: 1;
declare let second: true | "Hello";
declare let third: City.London;
```


