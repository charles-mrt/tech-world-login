import Link from 'next/link'

import { Lock, User2 } from 'lucide-react'

import { TransitionLayout } from '../components/TransitionLayout'
import { Header } from '../components/Header'
import { CredentialLinks } from '../components/CredentialLinks'
import { Form } from '../components/Form'
import { InputField } from '../components/InputField'
import { Button } from '../components/Button'

export default function Page() {

  return (

    <TransitionLayout >

      <Header>
        <CredentialLinks rote='login' text_color='text-violet-500' border={true} name='login' />
        <CredentialLinks rote='register' text_color='text-gray-500' name='Sign up' />
      </Header>

      <Form>
        <InputField icon={<User2 />} type="text" placeHolder="email or name" />
        <InputField icon={<Lock />} type="password" placeHolder="password" />

        <div className="flex justify-between items-center">
          <Link href={""} className="text-violet-500">Forgot Password ?</Link>
          <Button text={"Login"} />
        </div>
      </Form>

    </TransitionLayout>

  )

}