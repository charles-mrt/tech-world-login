import { ReactElement } from "react"

interface InputProps {
  icon?: ReactElement
  type: string
  placeHolder: string
}


export const InputField = ({ icon, type, placeHolder}: InputProps) => {
  return (
    <div className=" w-full h-10 rounded-full shadow-custom-input bg-white flex items-center gap-3 px-3">
      <label className="text-violet-500" >{icon}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className=" w-full h-full border-0 focus:outline-none"
      />
    </div>
  )
}