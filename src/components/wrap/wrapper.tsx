import { Navbar } from './navbar'
import { Footer } from './footer'
import { ScrollProvider } from '@/contexts/ScrollContext'

interface WrapperProps {
  children: React.ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return (

    <ScrollProvider>
      <div className="">
        <Navbar />
        <main>{children}</main>
      </div>
    </ScrollProvider>
  )
}

