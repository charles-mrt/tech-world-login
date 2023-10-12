'use client'

import { ReactElement, useState } from "react"

interface InputProps {
  icon?: ReactElement
  type: string
  placeHolder: string
}


export const InputField = ({ icon, type, placeHolder }: InputProps) => {

  const [isActived, setIsActived] = useState(Boolean)

  const handleInputFocus = (actived: boolean) => {
    setIsActived(actived)
  }

  return (
    <div className={`
      w-full 
      h-10 
      rounded-full 
      shadow-custom-input
    bg-white 
    text-gray-700 
      flex 
      items-center 
      gap-3
      px-3 
      overflow-hidden
      border-2
      transition duration-150 ease-in
      ${isActived ? "border-violet-500" : "" }`}
    >
      <label className="text-violet-500" >{icon}</label>
      <input
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        type={type}
        placeholder={placeHolder}
        className=" w-full h-full border-0 focus:outline-none"
      />
    </div>
  )
}