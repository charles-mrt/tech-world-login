
import { ReactNode } from "react"

interface TransitionLayoutProps {
  children: ReactNode
}

export const TransitionLayout = ({ children }: TransitionLayoutProps) => {

  return (
    <div className="w-1/2 flex justify-center page-transition">
      <div className=" w-[80%] h-auto">
        {children}
      </div>
    </div>
  )
}