'use client'
import { FC, ReactNode, useEffect } from 'react'
import { animated, useSpring, useSpringValue } from '@react-spring/web'
interface TransitionWrapperProps {
  children: ReactNode
}

const TOP_OFFSET = 6

const TransitionWrapper: FC<TransitionWrapperProps> = ({ children }) => {
  const [style, api] = useSpring(() => {
    return {
      from: {
        opacity: 1,
        transform: 'translateY(0)',
      },
      config: {
        duration: 500,
        mass: 5,
        friction: 120,
        tension: 60,
      },
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        api.start({
          opacity: 1,
          transform: 'translateY(-100%)',
        })
      } else {
        api.start({
          opacity: 1,
          transform: 'translateY(0px)',
        })
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [api])

  return (
    <animated.div className={'h-fit fixed top-0 w-full z-10 transition-transform'} style={{ ...style }}>
      {children}
    </animated.div>
  )
}

export default TransitionWrapper
