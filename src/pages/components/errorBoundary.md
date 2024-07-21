```shell
yarn add react-error-boundary
```

```tsx
import { ErrorBoundary as ErrorBoundaryComponent, FallbackProps } from 'react-error-boundary'

function Fallback({ error }: FallbackProps) {
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  )
}

export function ErrorBoundary({ children }: React.PropsWithChildren) {
  return <ErrorBoundaryComponent FallbackComponent={Fallback}>{children}</ErrorBoundaryComponent>
}
```

https://www.npmjs.com/package/react-error-boundary

https://github.com/bvaughn/react-error-boundary#readme
