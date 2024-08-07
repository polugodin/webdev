### Generate array with length

```js
Array(7).fill(null).map((_, i) => i)
// 0, 1, 2, 3, 4, 5, 6]

[...Array(7).keys()]
// [0, 1, 2, 3, 4, 5, 6]

Array.from({ length: 7 }, (_, i) => i)
// [0, 1, 2, 3, 4, 5, 6]
```

### Unique elements

```ts
function getUniqueElements<T>(array: T[]): T[] {
  return Array.from(new Set(array))
}
```

### Unique array with operations

```ts
export function ArrayUnique<T>(initialElements: T[]) {
  const elements = new Set<T>(initialElements)

  return {
    add(items: T[]) {
      items.forEach((item) => elements.add(item))
      return this
    },
    del(items: T[]) {
      items.forEach((item) => elements.delete(item))
      return this
    },
    getArray(): T[] {
      return Array.from(elements)
    },
  }
}
```
