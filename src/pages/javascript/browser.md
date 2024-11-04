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

### intersecrion observer

```js
const element = document.querySelector('#el')

const options = {
  root: null, // or element.parentElement (need to be scrollable)
  rootMargin: '200px', // or '0 0 50px 0' // or '-100px'
  threshold: 1.0, // trigger on 100% of element // 0.5 half
}

const observer = new IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
    console.log('enter')
  } else {
    console.log('leave')
  }
}, options)

observer.observe(element)

// ...

observer.unobserve(element)

// trigger on 100px of element:
// rootMargin: '-100px', threshold: 0
```
