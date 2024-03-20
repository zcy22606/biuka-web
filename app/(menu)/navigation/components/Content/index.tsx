import { FC, ReactNode } from 'react'
import { navigationData } from '../Sidebar/constants'
import NavigationGroup from '../NavigationGroup'

interface ContentProps {}

const Content: FC<ContentProps> = props => {
  return (
    <div className="flex-1 flex-col flex gap-4">
      {navigationData.map(group => {
        return <NavigationGroup key={group.name} group={group}></NavigationGroup>
      })}
    </div>
  )
}

export default Content
