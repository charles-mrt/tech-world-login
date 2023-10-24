import { ReactElement,InputHTMLAttributes } from "react"

interface InputLabelProps {
  icon?: ReactElement
  inputProps: InputHTMLAttributes<HTMLInputElement>
}

export const InputLabel = ({ icon, inputProps }: InputLabelProps) => {
  return (

    <div className="
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
      transition 
      duration-150 
      ease-in
     focus-within:border-violet-500"
    >
      <label className="text-violet-500" >{icon}</label>
      <input {...inputProps} className=" w-full h-full border-0 bg-white focus:outline-none"/>
    </div>

  )
}




