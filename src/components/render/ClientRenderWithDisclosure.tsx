import { PropsWithChildren, useEffect, useState } from 'react'
import { Disclosure } from '../Disclosure'

export function ClientRenderWithDisclosure({ children }: PropsWithChildren) {
  const [render, setRender] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (render) {
      setOpen(true)
    }
  }, [render])

  useEffect(() => setRender(true), [])

  return <>{render ? <Disclosure open={open}>{children}</Disclosure> : null}</>
}
