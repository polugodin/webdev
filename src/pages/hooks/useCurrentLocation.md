```ts
import { useMemo } from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import { LOCATIONS } from '@src/router'

export const useCurrentLocation = () => {
  const { pathname } = useLocation()

  const currentLocation = useMemo(
    () => Object.values(LOCATIONS).find((l) => !!matchPath(l, pathname)),
    [pathname],
  )

  return currentLocation
}
```
