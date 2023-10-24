'use client'

import { ReactElement, useState, ForwardedRef, forwardRef } from "react"
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface InputProps {
  icon?: ReactElement
  type: string
  placeHolder?: string
  value?: string
  nameValue?: string
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputRef?: ForwardedRef<HTMLInputElement>
  register?: UseFormRegister<FieldValues>
}


export const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {

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
      ${isActived ? "border-violet-500" : ""}`}
    >
      <label className="text-violet-500" >{props.icon}</label>
      <input
        onFocus={() => handleInputFocus(true)}
        onBlur={() => handleInputFocus(false)}
        type={props.type}
        placeholder={props.placeHolder}
        value={props.value}
        onChange={props.handleOnChange}
        ref={ref}
        {...props.register}
        name={props.nameValue}
        className=" w-full h-full border-0 focus:outline-none"
      />
    </div>
  )
})