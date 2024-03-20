'use client'
import { FC, ReactNode } from 'react'
import { navList } from './constants'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { NavbarMenu } from './navbar-menu'
import { ModeToggle } from '@/components/ModeToggle'
import TransitionWrapper from './TransitionWrapper'
import { cn } from '@/lib/utils'

interface NavbarProps {
  className?: string
}

const Navbar: FC<NavbarProps> = props => {
  return (
    <TransitionWrapper>
      <div className={cn('h-16 flex justify-between items-center px-10 shadow-sm w-full bg-background', props.className)}>
        <Link href={'/'}>LOGO</Link>
        <div className="container flex justify-center">
          <NavbarMenu />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </TransitionWrapper>
  )
}

export default Navbar
