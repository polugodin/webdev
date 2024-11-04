import { Tilt, TiltOptions } from '../Tilt'

const defaultOptions: TiltOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  duration: 1000, // Duration of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
}

export const TiltDemo = () => {
  return (
    <div className='mt-8 grid place-items-center'>
      <Tilt
        options={defaultOptions}
        className='size-[160px] bg-green-700/80 rounded-xl flex justify-center items-center text-6xl'
      >
        🏞️
      </Tilt>
    </div>
  )
}
