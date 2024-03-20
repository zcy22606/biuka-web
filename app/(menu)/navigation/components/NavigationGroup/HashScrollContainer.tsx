'use client'
import { FC, ReactNode, useEffect, useRef } from 'react'

interface HashScrollContainerProps {
  children: ReactNode
  id: string
}

const HashScrollContainer: FC<HashScrollContainerProps> = ({ children, id }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollHandle = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const bottomOffset = document.body.clientHeight - rect.bottom
        if (rect.top > 0 && rect.top < 100) {
          window.location.hash = `#${ref.current.id}`
          const target = document.querySelector(`a[href='#${ref.current.id}']`)
          if (target) {
            target.classList.add('bg-primary')
          }
        } else {
          const target = document.querySelector(`a[href='#${ref.current.id}']`)
          const hash = decodeURIComponent(window.location.hash)
          if (target && hash && hash !== `#${ref.current.id}`) {
            target.classList.remove('bg-primary')
          }
        }
      }
    }

    if (ref.current) {
      const target = document.querySelector(`a[href='#${ref.current.id}']`)
      const hash = decodeURIComponent(window.location.hash)
      if (target && hash === `#${ref.current.id}`) {
        target.classList.add('bg-primary')
      }
    }

    // window.addEventListener('scroll', scrollHandle)
    // return () => {
    //   window.removeEventListener('scroll', scrollHandle)
    // }
  }, [])

  return (
    <div ref={ref} id={id}>
      {children}
    </div>
  )
}

export default HashScrollContainer
