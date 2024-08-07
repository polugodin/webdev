### Language

```js
navigator.language.slice(0, 2)
```

### debugger

```js
setTimeout(() => {
  debugger
}, 3000)
```

### before unload event

```tsx
useEffect(() => {
  function beforeUnload(event: BeforeUnloadEvent) {
    event.preventDefault()
    event.returnValue = true // deprecated?
  }
  window.addEventListener('beforeunload', beforeUnload)
  return () => {
    window.removeEventListener('beforeunload', beforeUnload)
  }
}, [])
```
