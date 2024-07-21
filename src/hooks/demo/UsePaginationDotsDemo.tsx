import { useState } from 'react'
import { usePaginationDots } from '../usePaginationDots'
import { cn } from '@/src/utils/cn'

export const UsePaginationDotsDemo = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const numOfPages = 11

  const dots = usePaginationDots({ numOfPages, pageIndex })

  const handleNext = () => pageIndex < numOfPages - 1 && setPageIndex((p) => p + 1)
  const handlePrevious = () => pageIndex > 0 && setPageIndex((p) => p - 1)

  return (
    <div>
      <div className="w-[300px] max-w-full mx-auto">
        <div className="flex justify-center text-3xl gap-2 font-mono">
          <button onClick={handlePrevious}>{'<'}</button>
          <span>
            {`${pageIndex + 1}`.padStart(2, '0')}/{numOfPages}
          </span>
          <button onClick={handleNext}>{'>'}</button>
        </div>

        <div className="flex justify-center mt-5">
          <div className="flex">
            {dots.map((dot, index) => (
              <div
                key={index}
                className={cn('w-[12px] h-[8px] flex justify-center transition-[width]', {
                  'w-0': dot.isHidden,
                })}
              >
                <span
                  className={cn(
                    'size-[8px] transition-all bg-gray-200 dark:bg-gray-700 rounded-full',
                    {
                      'bg-green-600 dark:bg-green-400': dot.isActive,
                      'scale-[0.65]': dot.isSmall,
                      'scale-0': dot.isHidden,
                    }
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
