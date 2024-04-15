import { PropsWithChildren, useLayoutEffect, useRef, useState } from 'react'
import { cn } from '@/src/utils/cn'

interface DisclosureProps extends PropsWithChildren {
  open: boolean
  transitionDuration?: number
  mount?: boolean
  afterHide?: () => void
  className?: string
  overflowVisibleWhenOpen?: boolean
}

export const Disclosure = ({
  children,
  open,
  transitionDuration = 250,
  mount = false,
  afterHide,
  className,
  overflowVisibleWhenOpen = false,
}: DisclosureProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [render, setRender] = useState(open || mount)

  const handleTransitionEnd = () => {
    if (open) {
      if (containerRef.current) {
        containerRef.current.style.height = 'auto'
        if (overflowVisibleWhenOpen) {
          containerRef.current.style.overflow = 'visible'
        }
      }
    } else {
      if (!mount) {
        setRender(false)
      }
      afterHide?.()
    }
  }

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (open) {
      !mount && setRender(true)
      setTimeout(() => {
        container.style.height = `${container.scrollHeight}px`
      })
    }

    if (!open) {
      container.style.overflow = 'hidden'

      if (container.style.height === 'auto') {
        container.style.height = `${container.scrollHeight}px`
        setTimeout(() => {
          container.style.height = '0px'
        })
      } else {
        container.style.height = '0px'
      }
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      onTransitionEnd={handleTransitionEnd}
      className={cn('h-0', className)}
      style={{
        transitionProperty: 'height',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: `${transitionDuration}ms`,
      }}
    >
      {(render || open) && children}
    </div>
  )
}
