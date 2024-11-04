### Closest scrollable element

returns closet parent with overflow `auto` or `scroll`

```ts
export function getClosestScrollableElement(
  element: HTMLElement,
  settings?: {
    axis?: 'x' | 'y' | 'both' // default: any axis
  },
) {
  let parent = element.parentElement
  while (parent && parent !== document.documentElement) {
    const parentStyle = getComputedStyle(parent)
    const overflows = ['auto', 'scroll']

    if (settings?.axis) {
      if (
        (settings.axis === 'x' && overflows.includes(parentStyle.overflowX)) ||
        (settings.axis === 'y' && overflows.includes(parentStyle.overflowY)) ||
        (settings.axis === 'both' &&
          overflows.includes(parentStyle.overflowX) &&
          overflows.includes(parentStyle.overflowY))
      ) {
        return parent
      }
    } else if (
      overflows.includes(parentStyle.overflowX) ||
      overflows.includes(parentStyle.overflowY)
    ) {
      return parent
    }

    parent = parent.parentElement
  }
  return document.documentElement
}
```
