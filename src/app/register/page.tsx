
import { Lock, Mail, User2 } from 'lucide-react'

import { TransitionLayout } from '../components/TransitionLayout'
import { Header } from '../components/Header'
import { CredentialLinks } from '../components/CredentialLinks'
import { Form } from '../components/Form'
import { InputField } from '../components/InputField'
import { Button } from '../components/Button'

export default function Page() {

  return (

    <TransitionLayout>

      <Header>
        <CredentialLinks rote='login' text_color='text-gray-500' name='login' />
        <CredentialLinks rote='register' text_color='text-violet-500' border={true} name='Sign up' />
      </Header>

      <Form>
        <InputField icon={<User2 />} type="text" placeHolder="name" />
        <InputField icon={<Mail />} type="email" placeHolder="email@gmail.com" />
        <InputField icon={<Lock />} type="password" placeHolder="password" />

        <div className="flex justify-end items-center">
          <Button text='Sing-up' />
        </div>
      </Form>

    </TransitionLayout>

  )
}