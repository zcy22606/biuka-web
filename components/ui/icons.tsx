import { FC, ReactNode } from 'react'
import { icons } from 'lucide-react'
import { cn } from '@/lib/utils'
interface IconsProps {
  name: keyof typeof icons
  className?: string
  strokeWidth?: number
}

const Icons: FC<IconsProps> = ({ name, className, strokeWidth }) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return <IconComponent className={cn('w-4 h-4', className)} strokeWidth={strokeWidth || 2.5} />
}

export default Icons
