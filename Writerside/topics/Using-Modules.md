# Modules

- **Objetivo**: dividir aplicações em múltiplos arquivos para facilitar manutenção.  
- **Export/Import**:  
  - `export` → disponibiliza funções/valores.  
  - `import` → usa funções/valores de outro arquivo.  

**Exemplo:**
```ts
// calc.ts
export function sum(...vals: number[]): number {
  return vals.reduce((total, val) => total + val);
}

// index.ts
import { sum } from "./calc";
console.log(sum(100, 200, 300)); // 600
```

---

### Configuração no `tsconfig.json`
- O compilador usa a opção **`target`** e **`module`** para decidir como gerar código.  
- **Node.js** suporta **CommonJS** por padrão.  
- Versões mais novas (ES2015+) usam `import`/`export` diretamente, mas podem dar erro no Node sem configuração extra.

**Exemplo de configuração:**
```json
{
  "compilerOptions": {
    "target": "es2018",
    "outDir": "./dist",
    "rootDir": "./src",
    "noEmitOnError": true,
    "module": "commonjs"
  }
}
```

---

### Tipos de módulo (opção `module`)
| Valor       | Descrição                                                                 |
|-------------|----------------------------------------------------------------------------|
| **none**    | Desativa módulos.                                                          |
| **commonjs**| Padrão do Node.js.                                                         |
| **amd**     | Usado pelo loader RequireJS.                                               |
| **system**  | Usado pelo loader SystemJS.                                                |
| **umd**     | Universal, funciona em vários ambientes.                                   |
| **es2015/es6** | Usa padrão de módulos ES2015 (import/export).                           |
| **esnext**  | Usa recursos de módulos propostos para versões futuras.                    |

---

### Resolução de módulos
- **classic** → busca módulos apenas no projeto.  
- **node** → busca também em `node_modules`.  
- Configurado com `moduleResolution: "classic"` ou `"node"`.

---

> Resumindo:  
> - Para **Node.js**, use `"module": "commonjs"`.  
> - Para **apps web com bundlers** (React, Angular, Vue), use `"module": "es2015"` ou `"esnext"`.  
