### Format date
```js
export const formatDate = new Intl.DateTimeFormat().format;

export const formatDateTime = new Intl.DateTimeFormat(undefined, {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: '2-digit',
}).format;
```