'use client'

import { useState } from 'react'

import { Lock, Mail, User2, PenSquare, LockKeyhole, UnlockKeyhole } from 'lucide-react'

import { TransitionLayout } from '../components/TransitionLayout'
import { Header } from '../components/Header'
import { Form } from '../components/Form'
import { InputField } from '../components/InputField'
import { Button } from '../components/Button'



export default function Page() {

  const [isUpdated, setIsUpdated] = useState(false)

  const handleUpdateUserData = (updating: boolean) => {

    setIsUpdated(updating)
  }

  return (

    <TransitionLayout >

      <Header>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-violet-500 border-b-2 border-violet-600 text-3xl">Bem vindo!</h1>
          <div className="flex gap-2">
            {isUpdated ? (
              <UnlockKeyhole className="w-6 h-6 text-green-300" />
            ) : (
              <LockKeyhole className="w-6 h-6 text-red-200" />
            )
            }
            <PenSquare
              className={`${isUpdated ? 'text-violet-500' : 'text-gray-400'} hover:text-violet-400`}
              onClick={() => handleUpdateUserData(true)}
            />
          </div>

        </div>
      </Header>

      <Form>
        {isUpdated ? (
          <>
            <InputField icon={<User2 />} type="text" placeHolder="charles" />
            <InputField icon={<Mail />} type="email" placeHolder="charles@techworld.com" />
            <InputField icon={<Lock />} type="password" placeHolder="password" />
          </>
        ) : (
          <>
            <InputField icon={<User2 />} type="text" value="charles" />
            <InputField icon={<Mail />} type="email" value="charles@techworld.com" />
            <InputField icon={<Lock />} type="password" value="password" />
          </>
        )
        }

        <div className={`
          flex 
          justify-between  
          items-center 
          gap-4
          ${isUpdated ? '' : '[&>*:first-child]:opacity-50'}
          `}>

          <Button text='save' handleClick={() => handleUpdateUserData(false)} />
          <Button text='Sing-out' />
        </div>

      </Form>


    </TransitionLayout>

  )

}