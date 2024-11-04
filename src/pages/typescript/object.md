### Flatten object keys

```ts
type FlattenObjectKeys<T extends Record<string | number, unknown>, Key = keyof T> = Key extends
  | string
  | number
  ? T[Key] extends Record<string | number, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never

const object = {
  a: {
    b: 1,
    c: {
      x: 2,
    },
  },
  d: 3,
}

type Keys = FlattenObjectKeys<typeof object>
// type Keys = "d" | "a.b" | "a.c.x"
```

### Prefixed object

```ts
type PrefixedObject<O extends Record<string, string>, KP extends string, VP extends string> = {
  [K in keyof O as K extends string ? `${KP}${K}` : never]: `${VP}${O[K]}`
}

const getPrefixedObject = <O extends Record<string, string>, KP extends string, VP extends string>(
  object: O,
  keyPrefix: KP,
  valuePrefix: VP,
) =>
  Object.fromEntries(
    Object.entries(object).map(([key, value]) => [keyPrefix + key, valuePrefix + value]),
  ) as PrefixedObject<O, KP, VP>

const o = { x: 'y' } as const
const o2 = { ...getPrefixedObject(o, 'key_', 'value_') } as const
// const o2: {
//   readonly key_x: "value_y";
// }
```
