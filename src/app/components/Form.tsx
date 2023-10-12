import { ReactNode } from "react"

interface FormProps {
  children: ReactNode
}

export const Form = ({ children }: FormProps) => {
  return (
    <form className="flex flex-col gap-8">{children}</form>
  )
}