import { FC, ReactNode } from 'react'
import { navigationData } from './constants'
import Link from 'next/link'
interface SidebarProps {}

const Sidebar: FC<SidebarProps> = props => {
  return (
    <div className="flex flex-col w-48 fixed">
      {navigationData.map(item => {
        return (
          <Link href={'#' + item.hash} key={item.name} className="px-4 inline-block py-2 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer my-1">
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
