import { useEffect, useState } from 'react'

interface UsePaginationDotsProps {
  numOfPages: number
  pageIndex: number
  dotsMax?: number
}

export const usePaginationDots = ({
  numOfPages,
  pageIndex,
  dotsMax = 5,
}: UsePaginationDotsProps) => {
  const isOverflow = numOfPages > dotsMax

  const [dots, setDots] = useState(
    isOverflow
      ? { from: 0, to: dotsMax - 1, active: pageIndex }
      : { from: 0, to: numOfPages - 1, active: pageIndex }
  )

  useEffect(() => {
    if (pageIndex !== dots.active) {
      const isFromAndToNotChanged =
        (dots.from === 0 ? pageIndex >= dots.from : pageIndex > dots.from) &&
        (dots.to === numOfPages - 1 ? pageIndex <= dots.to : pageIndex < dots.to)

      if (isFromAndToNotChanged) {
        setDots((p) => ({ ...p, active: pageIndex }))
        return
      }

      const isPageIndexMovedToLeft = pageIndex < dots.active

      if (isPageIndexMovedToLeft) {
        setDots({
          from: pageIndex === 0 ? 0 : pageIndex - 1,
          to: pageIndex === 0 ? pageIndex + dotsMax - 1 : pageIndex - 1 + dotsMax - 1,
          active: pageIndex,
        })
        return
      } else {
        setDots({
          from:
            pageIndex === numOfPages - 1 ? pageIndex - (dotsMax - 1) : pageIndex - (dotsMax - 2),
          to: pageIndex === numOfPages - 1 ? pageIndex : pageIndex + 1,
          active: pageIndex,
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex])

  return Array(numOfPages)
    .fill(null)
    .map((_, index) => ({
      isHidden: isOverflow && (index < dots.from || index > dots.to),
      isSmall:
        isOverflow &&
        index !== 0 &&
        index !== numOfPages - 1 &&
        (index === dots.from || index === dots.to),
      isActive: index === dots.active,
    }))
}
