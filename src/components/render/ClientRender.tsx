import { PropsWithChildren, useEffect, useState } from 'react'

export function ClientRender({ children }: PropsWithChildren) {
  const [render, setRender] = useState(false)

  useEffect(() => setRender(true), [])

  if (!render) {
    return null
  }

  return <>{render ? children : null}</>
}
