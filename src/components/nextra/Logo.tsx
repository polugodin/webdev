import { useState } from 'react'
import styles from './Logo.module.scss'

export function Logo() {
  const [symbols] = useState('WebDev'.split(''))
  return (
    <span className="font-black tracking-wide">
      {symbols.map((s, index) => (
        <span className={styles.logo} style={{ animationDelay: `${index * 150}ms` }} key={index}>
          {s}
        </span>
      ))}
    </span>
  )
}
