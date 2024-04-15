import { useEffect, useRef, useState } from 'react'
import { usePreviousSimple, usePrevious, usePreviousRef } from '../usePrevious'

export function UsePreviousDemo() {
  const [counter, setCounter] = useState(0)
  const [emoji, setEmoji] = useState(['🥦', '🌶️', '🥑', '🍋'])
  const logRef = useRef<HTMLPreElement>(null)

  const changeEmoji = () => setEmoji((p) => [...p.slice(1), p[0]])

  const previousSimple = usePreviousSimple(counter)
  const previousState = usePrevious(counter)
  const previousRef = usePreviousRef(counter)

  const setLog = (text: string) => {
    logRef.current.innerText = text
  }

  useEffect(() => {
    logRef.current.innerText = `useEffect ([emoji] changed):
{
  counter: ${counter},
  previousSimple: ${previousSimple},
  previousState: ${previousState},
  previousRef: ${previousRef}
}`
  }, [emoji])

  return (
    <div>
      <div>
        Counter: {counter}{' '}
        <button className="text-sky-600" onClick={() => setCounter((p) => p + 1)}>
          increase
        </button>
      </div>

      <div>
        Emoji: {emoji[0]}{' '}
        <button className="text-sky-600" onClick={changeEmoji}>
          change emoji
        </button>
      </div>

      <pre className="!p-0 mt-2 font-mono">{`render:
{
  counter: ${counter},
  previousSimple: ${previousSimple},
  previousState: ${previousState},
  previousRef: ${previousRef}
}`}</pre>

      <pre ref={logRef} className="!p-0 mt-2 font-mono text-green-700 dark:text-green-400" />
    </div>
  )
}
