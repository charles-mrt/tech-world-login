import Link from 'next/link'

import { Lock, User2 } from 'lucide-react'
import { Button } from '../components/Button'
import { InputField } from '../components/InputField'


export default function Page() {
  return (

      <div className="w-1/2 flex justify-center">

        <div className=" w-[80%] h-auto">

          <header className=" w-full mb-10">
            <div className="flex justify-around mb-1 ">
              <Link href={"/login"} className="text-violet-500 text-3xl">Login</Link>

              <Link href={"/register"} className="text-gray-500 text-3xl">Sign up</Link>
            </div>
            <div className="h-1 w-1/2 bg-violet-500" />
          </header>


          <form className="flex flex-col gap-8">
            <InputField icon={<User2 />} type="text" placeHolder="email or name" />
            <InputField icon={<Lock />} type="password" placeHolder="password" />

            <div className="flex justify-between items-center">
              <Link href={""} className="text-violet-500">Forgot Password ?</Link>
              <Button text={"Login"}/>
            </div>
          </form>
        </div>
      </div>

  )
}