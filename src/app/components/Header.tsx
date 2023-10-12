import { ReactNode } from "react"

type HeaderProps = {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className=" w-full mb-6">
      <div className="flex justify-around mb-1 ">
        {children}
      </div>
    </header>
  )
}