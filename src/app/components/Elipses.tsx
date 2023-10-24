
export const Elipses = () => {
  return (
    <div className="overflow-hidden relative h-full w-full rounded-br-3xl rounded-tr-3xl">
      <div
        className="
        bg-violet-400
          rounded-full 
          w-[500px] 
          h-[500px] 
          absolute 
          z-30
          translate-x-[25%]
          -translate-y-[50px]    
        "
      />

      <div
        className="
        bg-violet-300
          rounded-full 
          w-[500px] 
          h-[500px] 
          absolute 
          z-20
          translate-x-[15%]
          -translate-y-[50px]       
        "
      />

      <div
        className="
        bg-violet-200
          rounded-full 
          w-[500px] 
          h-[500px] 
          absolute 
          z-10
          translate-x-[5%]
          -translate-y-[50px]      
        "
      />
    </div>
  )
}