### Flatten object keys
```ts
type FlattenObjectKeys<T extends Record<string | number, unknown>, Key = keyof T> = Key extends
  | string
  | number
  ? T[Key] extends Record<string | number, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

const object = {
  a: {
    b: 1,
    c: {
      x: 2,
    }
  },
  d: 3,
}

type Keys = FlattenObjectKeys<typeof object>
// type Keys = "d" | "a.b" | "a.c.x"
```
