import Navbar from '@/components/Layout/Navbar'
import { FC, ReactNode } from 'react'

interface LandingPageProps {
  children: ReactNode
}

const LandingPage: FC<LandingPageProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
    </div>
  )
}

export default LandingPage
