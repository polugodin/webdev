### Conditional property assignment
```js
{
  ...(true ? { prop: 'value' } : undefined)
}
```

### Deep clone
```js
const clone = structuredClone(object)
```
https://developer.mozilla.org/en-US/docs/Web/API/structuredClone#browser_compatibility
