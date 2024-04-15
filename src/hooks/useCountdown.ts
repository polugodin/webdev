import { useEffect, useRef, useState } from 'react'

const getCounterTime = (counter: number) => {
  const minutes = String(Math.floor((counter % (60 * 60)) / 60)).padStart(2, '0')
  const seconds = String(Math.floor(counter % 60)).padStart(2, '0')
  return `${minutes}:${seconds}`
}

export function useCountdown(total: number) {
  const [counter, setCounter] = useState(total)
  const intervalId = useRef<ReturnType<typeof setInterval>>()

  const play = () => {
    intervalId.current = setInterval(() => {
      setCounter((counter) => counter - 1)
    }, 1000)
  }
  const pause = () => clearInterval(intervalId.current)
  const restart = () => {
    pause()
    setCounter(total)
    play()
  }

  useEffect(() => {
    if (counter === 0) {
      pause()
    }
  }, [counter])

  useEffect(() => {
    play()

    return pause
  }, [])

  return {
    time: getCounterTime(counter),
    isDone: counter === 0,
    play,
    pause,
    restart,
  }
}
