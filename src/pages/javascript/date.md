### Convert to and from timestamp

`Unix` timestamp: `seconds` since the Unix epoch (January 1, 1970, 00:00:00 UTC).\
`JavaScript` Date: `milliseconds` since the Unix epoch.

```js
const toTimestamp = (date) => Math.floor(date.getTime() / 1000)
const fromTimestamp = (timestamp) => new Date(timestamp * 1000)
```

### Constants

```js
export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
```

### Format date

```js
// date in current location
export const formatDate = new Intl.DateTimeFormat().format

// timezone
export const formatDateTimeNY = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
}).format

Intl.supportedValuesOf('timeZone').forEach((x) => console.log(x))
```

### Create date

```js
// date -> UTC time 00:00
new Date('2024-08-20')
new Date(2024, 0, 1) // month 0-11

// date + time -> local time
new Date('2024-08-20T10:00')
new Date(2024, 0, 1, 10)
new Date('2024-08-20T10:00:00')
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

### Check if date is valid

```js
const isDateValid = (day, month, year) => {
  const nextDate = new Date(year, month - 1, day)

  if (
    nextDate.getMonth() + 1 === month &&
    nextDate.getDate() === day &&
    nextDate.getFullYear() === year
  ) {
    return true
  }

  return false
}
```
