import { ReactNode } from "react"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, zodSchema } from "../zodSchema/schema" 


interface FormProps {
  children: ReactNode
  onSubmit: (data: FormSchema) => void
}

export const Form = ({ children, onSubmit }: FormProps) => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: zodResolver(zodSchema),
  })

  return (
    <form
      className="flex flex-col gap-8"
       onSubmit={handleSubmit((data) => onSubmit(data as FormSchema))}
    >
      {children}
    </form>
  )
}
