# Using Linter

Linter é uma ferramenta para checar o código dos arquivo para verificar e validar se estão seguindo as regras que foram descritas para evitar problemas

- Para instalar o linter do TS:

> npm install --save-dev tslint@5.16.0


Aqui está uma versão em português, simplificada e direta, sobre o uso do **TSLint** e suas regras:

---

### Conjuntos de regras predefinidas
| Nome               | Descrição                                                                 |
|--------------------|----------------------------------------------------------------------------|
| **tslint:recommended** | Conjunto sugerido pela equipe do TSLint, indicado para uso geral em projetos TypeScript. |
| **tslint:latest**      | Estende o recomendado, incluindo regras mais recentes.                   |
| **tslint:all**         | Inclui todas as regras, podendo gerar muitos erros.                      |

---

### Executando o linter
```bash
npx tslint --project tsconfig.json --config tslint.json
```
- **--project**: usa o `tsconfig.json` para localizar os arquivos.  
- **--config**: define o arquivo de configuração (`tslint.json`).  

---

### Exemplos de erros comuns
- **eofline**: exige que o arquivo termine com uma nova linha.  
- **prefer-const**: recomenda usar `const` em vez de `let` quando o valor não muda.  
- **no-console**: não permite chamadas a `console.log`.  
- **no-debugger**: não permite uso da palavra-chave `debugger`.  

---

### Desabilitando regras no projeto
No arquivo `tslint.json`:
```json
{
  "extends": ["tslint:recommended"],
  "linterOptions": {
    "format": "verbose"
  },
  "rules": {
    "eofline": false,
    "no-console": false,
    "prefer-const": false
  }
}
```
- `false` desativa a regra.  
- É possível configurar regras específicas ou desligar todas.  

---

### Desabilitando regras em uma linha específica
```ts
// tslint:disable-next-line no-debugger
debugger;
```
- Aplica apenas à próxima instrução.  
- Também existe `tslint:disable` para desativar regras em todo o arquivo.  

---

### Observações
- Linters ajudam a detectar erros reais e manter consistência.  
- Podem gerar conflitos quando usados para impor estilo pessoal (indentação, chaves, espaços).  
- Melhor prática: usar linting para problemas que afetam manutenção e deixar estilo para o editor/formatador automático.  

