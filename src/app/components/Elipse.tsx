interface ElipseProps {
  color: string
  translate_x_value: string
  z_index: string
}
export const Elipse = ({ color, translate_x_value, z_index }: ElipseProps) => {
  return (
    <div
      className={`
      ${color}
      rounded-full 
      w-[500px] 
      h-[500px] 
      absolute 
      ${z_index} 
      ${translate_x_value} 
      -translate-y-[50px]    
      `}
    />
  )
}