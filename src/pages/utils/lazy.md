```tsx
import { Suspense, lazy } from 'react'

export function lazyComponent<Props>(
  componentImport: Parameters<typeof lazy>[0],
  fallback: React.ReactNode
) {
  const Component = lazy(componentImport)
  return function LazyComponent(props: Props) {
    return (
      <Suspense fallback={fallback}>
        <Component {...props} />
      </Suspense>
    )
  }
}
```

### usage

```tsx
const MyComponentFallback = () => 'Loading...'

const MyComponentLazy = lazyComponent(() => import('./MyComponent'), <MyComponentFallback />)

const MyComponentLazy2 = lazyComponent<MyComponentProps>(
  () => import('./MyComponent'),
  <MyComponentFallback />
)
```
