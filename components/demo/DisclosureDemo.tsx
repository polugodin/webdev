import { useState } from 'react'
import { Disclosure } from '@/components/Disclosure'

export const DisclosureDemo = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-[200px] max-w-full mx-auto border border-black dark:border-white">
      <button className="p-2 w-full" onClick={() => setOpen((p) => !p)}>
        Toggle
      </button>
      <Disclosure open={open}>
        <div className="p-2 border-t border-black dark:border-white text-center">
          📦
          <br />
          Some content
          <br />
          📦
        </div>
      </Disclosure>
    </div>
  )
}
