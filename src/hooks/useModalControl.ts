import { useCallback, useEffect, useState } from 'react'

export default function useModalControl<T>() {
  const [isOpen, setIsOpen] = useState(false)
  const [isRender, setIsRender] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const unmount = useCallback(() => setIsRender(false), [])
  const openWithData = useCallback((data: T) => {
    setData(data)
    open()
  }, [])

  useEffect(() => {
    if (isOpen) {
      setIsRender(true)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isRender) {
      setData(null)
      setIsLoading(false)
    }
  }, [isRender])

  return {
    isOpen,
    isRender,
    isLoading,
    data,
    open,
    close,
    unmount,
    setIsLoading,
    setData,
    openWithData,
  }
}
