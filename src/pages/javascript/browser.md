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
  }
  window.addEventListener('beforeunload', beforeUnload)
  return () => {
    window.removeEventListener('beforeunload', beforeUnload)
  }
}, [])
```

### intersecrion observer

https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

```js
const element = document.querySelector('#el')

const options = {
  root: document.querySelector('#scrollArea'),
  // Used as the viewport for checking visibility
  // Defaults to the browser viewport if not specified or if null

  rootMargin: '200px', // or '0 0 50px 0' // or '-100px'
  threshold: 1.0, // trigger on 100% visible element // 0.5 half // default 0 - 1px visible
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

const intersectionCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let elem = entry.target

      if (entry.intersectionRatio >= 0.75) {
        intersectionCounter++
      }
    }
  })
}
```
