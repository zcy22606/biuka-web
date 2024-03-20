import data from './data.json'

export interface NavigationGroupType {
  name: string
  hash: string
  description?: string
  children: NavigationItemType[]
}

export interface NavigationItemType {
  name: string
  description: string
  icon: string
  link: string
}

export const navigationData: NavigationGroupType[] = data
