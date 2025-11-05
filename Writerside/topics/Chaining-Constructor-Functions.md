# Chaining Constructor Functions

Usando o método `setPrototypeOf` para criar uma encadeamento de prototypes customizados é fácil mas definir isso
corretamente assim como os funções construtoras dá trabalho

1. Vai fazer a chamar o metodo que permite criar um novo objeto para ser passado para o próximo construtor com esse valor:

> Product.call(this,name,price);

2. Agora seria linkar os dois prototypes:

> Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype)


_**Diagrama mostrando as heranças que acontecem:**_

![image_2.png](image_2.png)