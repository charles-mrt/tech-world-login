'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, zodSchema } from '@/app/zodSchema/schema'

import {  Mail, Lock } from 'lucide-react'

import { loginUser } from '@/app/controller/user/loginUser'

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
      await loginUser(parsedData)
      resetField('email')
      resetField('password')
      router.push('/painel')

    } catch (error) {
      console.error('erro ao logar', error)
    }
  })

  return (

    <TransitionLayout >

      <Header>
        <CredentialLinks rote='login' text_color='text-violet-500' border={true} name='login' />
        <CredentialLinks rote='register' text_color='text-gray-500' name='Sign up' />
      </Header>

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        
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

        <div className="flex justify-between items-center">
          <Link href={""} className="text-violet-500">Forgot Password ?</Link>
          <Button text='Login' type='button'/>
        </div>

      </form>

    </TransitionLayout>

  )

}