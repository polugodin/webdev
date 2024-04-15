import { PropsWithChildren } from 'react'
import { isProd } from '@/src/utils/isProd'
import { ClientRender } from './ClientRender'
import { ClientRenderWithDisclosure } from './ClientRenderWithDisclosure'

interface ClientRenderDevProps extends PropsWithChildren {
  disclosure?: boolean
}

export function ClientRenderDev({ children, disclosure = false }: ClientRenderDevProps) {
  if (isProd) {
    return children
  }
  return (
    <>
      {disclosure ? (
        <ClientRenderWithDisclosure>{children}</ClientRenderWithDisclosure>
      ) : (
        <ClientRender>{children}</ClientRender>
      )}
    </>
  )
}
