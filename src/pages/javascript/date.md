### Convert to and from timestamp

`Unix` timestamp: `seconds` since the Unix epoch (January 1, 1970, 00:00:00 UTC).\
`JavaScript` Date: `milliseconds` since the Unix epoch.

```js
const toTimestamp = (date) => Math.floor(date.getTime() / 1000)
const fromTimestamp = (timestamp) => new Date(timestamp * 1000)
```

### Format date

```js
// date in current location
export const formatDate = new Intl.DateTimeFormat().format

// date and time in New York
export const formatDateTimeNY = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
}).format
```
