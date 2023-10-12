interface buttonProps {
  text: string
}
export const Button = ({ text }: buttonProps) => {
  return (
    <button
      type="submit"
      className="bg-violet-500 p-2 w-1/2 rounded-full text-white text-lg">
      {text}
    </button>
  )
}