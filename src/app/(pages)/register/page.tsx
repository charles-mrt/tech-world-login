'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, zodSchema } from '@/app/zodSchema/schema'

import { Lock, Mail, User2 } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { registerUser } from '@/app/controller/user/registerUser'

import { TransitionLayout } from '@/app/components/TransitionLayout'
import { Header } from '@/app/components/Header'
import { CredentialLinks } from '@/app/components/CredentialLinks'
import { InputLabel } from '@/app/components/input/InputLabel'
import { Button } from '@/app/components/Button'



export default function Page() {

  const {
    register, handleSubmit, formState: { errors }, resetField } = useForm<FormSchema>({
      resolver: zodResolver(zodSchema),
    })
  const router = useRouter()
  const onSubmit = handleSubmit(async (data) => {
   
    try {
      const parsedData = zodSchema.parse(data)
      await registerUser(parsedData)
      resetField('name')
      resetField('email')
      resetField('password')
      router.push('/painel')

    } catch (error) {
      toast.error('O email já existe. Por favor, escolha outro.', {
        autoClose: 3000,  
      })
      console.error('erro ao cadastrar', error)
    }
  })


  return (
    
    <TransitionLayout>
      <Header>
        <CredentialLinks rote='login' text_color='text-gray-500' name='login' />
        <CredentialLinks rote='register' text_color='text-violet-500' border={true} name='Sign up' />
      </Header>
        <ToastContainer/>
      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div className="relative">
          <InputLabel
            icon={<User2 />}
            inputProps={{
              type: "text",
              placeholder: "name",
              ...register('name')
            }}
          />
          {errors.name && <span className="text-red-500 absolute -bottom-6 text-xs">{errors.name.message}</span>}
        </div>

        <div className="relative">
          <InputLabel
            icon={<Mail />}
            inputProps={{
              type: "email",
              placeholder: "email@techworld.com",
              ...register('email')
            }}
          />
          {errors.email && <span className="text-red-500 absolute -bottom-6 text-xs">{errors.email.message}</span>}
        </div>

        <div className="relative">
          <InputLabel icon={<Lock />}
            inputProps={{
              type: "password",
              placeholder: "password",
              ...register('password')
            }}
          />
          {errors.password && <span className="text-red-500 absolute -bottom-6 text-xs">{errors.password.message}</span>}
        </div>
        
        <Button type='submit' text='Sign-up' />

      </form>
    </TransitionLayout>
  )
}
