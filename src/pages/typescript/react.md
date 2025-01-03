### React TypeScript Cheatsheet

https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example

### Component props

```tsx
React.ComponentProps<typeof View>

React.ComponentProps<'input'>
```

### Mouse event

```tsx
React.MouseEvent

React.MouseEvent<HTMLSpanElement>
```

### Typed

```tsx
export const typedMemo: <T>(c: T) => T = memo
```
