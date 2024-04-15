import { useCallback, useRef, useState } from 'react'

export function useStateRef<T>(init: T) {
  const [state, setState] = useState(init)

  const ref = useRef<T>(init)

  const setValue = useCallback((value: ((prev: T) => T) | T) => {
    ref.current = value instanceof Function ? value(ref.current) : value
    setState(value)
  }, [])

  return [state, setValue, ref] as const
}

export function useStateRefCurrPrev<T>(init: T) {
  const [state, setState] = useState(init)

  const ref = useRef<{
    previous?: T
    current: T
  }>({ current: init })

  const setValue = useCallback((value: ((prev: T) => T) | T) => {
    ref.current.previous = ref.current.current
    ref.current.current = value instanceof Function ? value(ref.current.current) : value
    setState(value)
  }, [])

  return [state, setValue, ref.current] as const
}
