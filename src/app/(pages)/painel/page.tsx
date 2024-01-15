'use client'

import { useState } from 'react'

import { Lock, Mail, User2, PenSquare, LockKeyhole, UnlockKeyhole } from 'lucide-react'

import { TransitionLayout } from '@/app/components/TransitionLayout'
import { Header } from '@/app/components/Header'
import { Button } from '@/app/components/Button'
import { InputLabel } from '@/app/components/input/InputLabel'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, zodSchema } from '@/app/zodSchema/schema'
import { updateUser } from '@/app/controller/user/updateUser'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Page() {
  const user = {
    'name': localStorage.getItem('user_name'),
    'email': localStorage.getItem('user_email')
  }

  const [isUpdated, setIsUpdated] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  
  
  const handleUpdateUserData = (updating: boolean) => {
    setIsUpdated(updating)
    if (!updating) setChangePassword(false)
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangePassword(event.target.checked)
  }

  const {
    register, handleSubmit, formState: { errors } } = useForm<FormSchema>({
      resolver: zodResolver(zodSchema),
    })

  const onSubmit = handleSubmit(async (data) => {

    try {
      const parsedData = zodSchema.parse(data)
      await updateUser(parsedData)
      toast.success('Dados alterados.', {
        autoClose: 3000,
      })
    } catch (error) {
      toast.error('erro ao alterar os dados.', {
        autoClose: 3000,
      })
      console.error('erro ao alterar os dados', error)
    }
  })

  const router = useRouter()
  const handleSignOut = () => {
    router.push('/')
  }
  
  return (

    <TransitionLayout >

      <Header>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-violet-500 border-b-2 border-violet-600 text-3xl">Bem vindo!</h1>
          <div className="flex gap-2">
            {isUpdated ? (
              <UnlockKeyhole className="w-6 h-6 text-green-300" onClick={() => handleUpdateUserData(false)} />
            ) : (
              <LockKeyhole className="w-6 h-6 text-red-300" />
            )
            }
            <PenSquare
              className={`${isUpdated ? 'text-violet-500' : 'text-gray-400'} hover:text-violet-400`}
              onClick={() => handleUpdateUserData(true)}
            />
          </div>

        </div>
      </Header>

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
        <div className="relative">
          <InputLabel
            icon={<User2 />}
            inputProps={{
              type: "text",
              placeholder: `${user.name}`,
              defaultValue: `${isUpdated ? user.name : ''}`,
              disabled: !isUpdated,
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
              placeholder: `${user.email}`,
              defaultValue: `${isUpdated ? user.email : ''}`,
              disabled: !isUpdated,
              ...register('email')
            }}
          />
          {errors.email && <span className="text-red-500 absolute -bottom-6 text-xs">{errors.email.message}</span>}
        </div>

        <div className="flex gap-2 items-center ml-4 -mt-2" >
          <label className="text-violet-500" htmlFor="change-password">alterar password?</label>
          <input
            type='checkbox'
            id="change-password"
            disabled={!isUpdated}
            checked={changePassword}
            onChange={handleCheckboxChange}
          />
        </div>

        {changePassword  && (
          <div className="relative -mt-9">
            <InputLabel icon={<Lock />}
              inputProps={{
                type: "password",
                placeholder: "password",
                disabled: !isUpdated,
                ...register('password', { shouldUnregister: false }),
              }}
            />
            {errors.password && <span className="text-red-500 absolute -bottom-6 text-xs">{errors.password.message}</span>}
          </div>
        )}


        <div className={`
          flex 
          justify-between  
          items-center 
          gap-4
          ${isUpdated ? '' : '[&>*:first-child]:opacity-50'}
          `}>

          <Button type='submit' text='save' handleClick={() => handleUpdateUserData(false)} />
          <Button type='button' text='Sing-out' handleClick={() => handleSignOut()} />
        </div>

      </form>
      <ToastContainer />
    </TransitionLayout>

  )
}

