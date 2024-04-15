import { useEffect, useRef, useState } from 'react'

export function usePreviousSimple<T>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export function usePrevious<T>(value: T) {
  const [values, setValues] = useState<{
    previous?: T
    current?: T
  }>({})

  useEffect(() => {
    setValues((p) => ({
      previous: p.current,
      current: value,
    }))
  }, [value])

  return values.previous
}

export function usePreviousRef<T>(value: T) {
  const ref = useRef<{
    previous?: T
    current?: T
  }>({})

  useEffect(() => {
    ref.current = {
      previous: ref.current.current,
      current: value,
    }
  }, [value])

  return ref.current.previous
}
