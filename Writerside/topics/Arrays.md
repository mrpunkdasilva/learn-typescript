# Arrays
No TS o jeito mais comum de descrever Arrays é com `[]`, mas tem o uso do `Array<T>`.

**Implicitamente:**
```typescript
const fileExtensions = ["js", "ts"]
```

**Explicitamente:**
```typescript
const cars = [
    {
        make: "Toyota",
        model:
            "Corolla",
        year:
            2002,
    }
]
const files = string[]
```
- Ou seja: `type[]` > `string[]`
