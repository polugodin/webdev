import { cn } from '@/src/utils/cn'
import styles from './CssGlassDemo.module.css'

export const CssGlassDemo = () => {
  return (
    <div className='relative p-3 max-w-40 mx-auto mt-2'>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-3 h-full rounded bg-gradient-to-b from-cyan-500 to-green-500 rotate-12' />
      </div>

      <div className={cn(styles.glass, 'p-2')}>glass</div>
    </div>
  )
}
