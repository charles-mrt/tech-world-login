interface buttonProps {
  text: string
  handleClick?: () => void
}
export const Button = ({ text, handleClick }: buttonProps) => {
  return (
    <button
      type="submit"
      className="bg-violet-500 p-2 w-1/2 rounded-full text-white text-lg transition duration-150 ease-in hover:bg-violet-600"
      onClick={handleClick}
      >
      {text}
    </button>
  )
}