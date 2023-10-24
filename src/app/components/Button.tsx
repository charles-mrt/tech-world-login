interface buttonProps {
  text: string
  type: "button" | "submit" | "reset"
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void> | void
}
export const Button = ({ text, type, handleClick }: buttonProps) => {
  return (
    <button
      type={type}
      className="bg-violet-500 p-2 w-32 rounded-full text-white text-lg transition duration-150 ease-in hover:bg-violet-600"
      onClick={handleClick}
      >
      {text}
    </button>
  )
}