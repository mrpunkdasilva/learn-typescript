# THE DANGER OF CONDITIONAL TYPES

Tipos condicionais são uma feature avançada que deve ser usada cuidadosamente. Escrever conditional types pode ser um processo torturante e pode por vezes se sentir como está perdendo o controle do compiler devido a uma série de expressões para obter um resultado que você quer

À medida que a complexidade de um tipo condicional aumenta, também aumenta o perigo de não capturar corretamente todas as permutações de tipos e acabar criando um resultado excessivamente permissivo criando um buraco na checagem de tipo ou deixando muito restritivo, causando erros para usos válidos

Quando usamos conditional types, lembre-se que você somente descreve combinações de tipos para o TSC e que o tipo de informação vai ser removido durante a compilação. E como um conditional type se torna mais complexo e juntamente mais combinações, você deve tomar um momento para considerar se existe um jeito mais simples para chegar no mesmo resultado



