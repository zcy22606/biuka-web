import { FC, ReactNode } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

interface NavigationPageProps {}

const NavigationPage: FC<NavigationPageProps> = props => {
  return (
    <div className="container mx-auto min-h-screen flex justify-between gap-2 py-20 relative overflow-auto">
      <Sidebar />
      <div className="pl-52">
        <Content />
      </div>
    </div>
  )
}

export default NavigationPage
