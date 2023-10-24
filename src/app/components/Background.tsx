'use client'
import Image, { StaticImageData } from "next/image"

import { useState } from "react"
import image_1 from '../../../public/assets/background/image-1.jpg'
import { imageData } from "../imageData"
import { ChevronFirst, ChevronLast, Palette, Settings, ImagePlus } from "lucide-react"

export const Background = () => {

  const ColorPicker = [
    "bg-black",
    "bg-white",
    "bg-blue-400",
    "bg-fuchsia-900",
    "bg-orange-700",
    "bg-emerald-700",
  ]


  const [config, setConfig] = useState(false)

  const [colorConfig, setColorConfig] = useState(false)
  const [imageConfig, setImageConfig] = useState(false)
  const [bgColor, setBgColor] = useState('')

  const handleColorClick = (color: string) => {
    setBgColor(color);
    setPosition(-1)
  }

  const handleColorConfigToggle = () => {
    setColorConfig(!colorConfig)
    setImageConfig(false)
  }
  const handleImageConfigToggle = () => {
    setImageConfig(!imageConfig)
    setColorConfig(false)
  }

  const handleConfigToggle = () => {
    setConfig(!config)
  }

  const [position, setPosition] = useState(0)
  const [image, setImage] = useState<StaticImageData>()

  const handleChangeImage = (value: number) => {

    const newPosition = position + value

    if (newPosition >= 0 && newPosition < imageData.length) {
      setPosition(newPosition)
      setImage(imageData[newPosition])
    } else if (newPosition < 0) {
      setPosition(imageData.length - 1)
      setImage(imageData[imageData.length - 1])
    } else if (newPosition >= imageData.length) {
      setPosition(0)
      setImage(imageData[0])
    }
  }

  return (
    <>
      <header className="w-auto rounded-md absolute z-50 top-0 left-0 select-none">
        <div className="relative flex items-center gap-2 p-2 bg-slate-100 bg-opacity-10 rounded-br-md">
          <div className="bg-violet-500 w-7 h-7 rounded-full flex items-center justify-center" onClick={() => handleConfigToggle()} >
            <Settings className={`${config ? 'text-green-300' : 'text-slate-300'}  `} />
          </div>

          {config ? (
            <div className="flex items-center gap-4 h-6">

              <div className="flex items-center">
                <div className="bg-violet-500 w-7 h-7 rounded-full flex items-center justify-center" onClick={() => handleColorConfigToggle()} >
                  <Palette className={`${colorConfig ? 'text-green-400' : 'text-slate-300'}  `} />
                </div>

                {colorConfig ? (
                  <ul className="page-transition flex items-center justify-between gap-2 ml-2">
                    {ColorPicker.map((color, index) => (
                      <li
                        key={index}
                        className={`w-6 h-6 border-2 border-slate-400 rounded-full ${color}`}
                        onClick={() => handleColorClick(color)}
                      />
                    ))}
                  </ul>
                ) : <></>}

              </div>

              <div className="flex items-center my-2">
                <div className="bg-violet-500 w-7 h-7 rounded-full flex items-center justify-center" onClick={() => handleImageConfigToggle()} >
                  <ImagePlus className={`${imageConfig ? 'text-green-400' : 'text-slate-300'}  `} />
                </div>

                {imageConfig ? (
                  <div className="page-transition flex items-center justify-between gap-2 ml-2">

                    <span onClick={() => handleChangeImage(-1)} className="bg-violet-500 text-slate-100 w-10 rounded-full flex justify-center transition duration-150 ease-in hover:bg-violet-600">
                      <ChevronFirst />
                    </span>

                    <span onClick={() => handleChangeImage(1)} className="bg-violet-500 text-slate-100 w-10 rounded-full  flex justify-center transition duration-150 ease-in hover:bg-violet-600">
                      <ChevronLast />
                    </span>
                    <span className="text-xs">{`${!image ? "sem fundo" : 'imagem ' + position}`}</span>
                  </div>
                ) : (<></>)}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>

      </header>
      <div className={`w-screen h-screen fixed z-[-9]  overflow-hidden `}>
        {!bgColor && !image ? (
          <Image src={image_1} alt="imagens de fundo" className="object-fill" />
        ) : (
          imageConfig ? (
            image ? (
              <Image src={image} alt="imagens de fundo" className="object-fill" />
            ) : <></>
          ) : (
            bgColor ? (
              <div className={`w-full h-full ${bgColor}`} />
            ) : <></>
          )
        )}

      </div>
    </>
  )
}