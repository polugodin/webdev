import { useEffect, useRef } from 'react'

export const useUpdateEffect = (effect: () => void | (() => void), deps: React.DependencyList) => {
  const isInitialRender = useRef(true)

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      return
    }

    return effect()
  }, deps)
}
