### Split string to lines

```js
const splitStringToLines = (s: string) => s.split(/(?<!\\)\n/)
```

```js
splitStringToLines('one\ntwo\\ntwo\nthree\\\\nthree')

// ['one', 'two\\ntwo', 'three\\\\nthree']
```

Lookbehind -> IOS 16.4+ \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion#browser_compatibility
