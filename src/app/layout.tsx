
import './globals.css'
import { Titillium_Web } from 'next/font/google'

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-titillium'
})

import { Elipses } from './components/Elipses'
import logo from '../../public/assets/logo.png'
import plant from '../../public/assets/plant.png'

import Image from 'next/image'
import { Footer } from './components/Footer'

export const metadata = {
  title: {
    default: 'Tech World',
    template: '%s | Tech World'
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Sistema para realizar Login e Cadastro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${titillium.variable} font-sans w-screen h-screen flex justify-center items-center bg-white`}>
        
        <main className="max-w-[700px] max-h-[400px] w-full h-full bg-white rounded-3xl shadow-custom flex items-center justify-between relative">
          
          <Image src={logo} alt="logo tech world" className="absolute top-3 left-5 w-24" />
          {children}
          
          <div className="w-1/2 h-full relative">
            <Elipses />
            <Image src={plant} alt="vaso de planta" className='image w-[314px] h-[329px] absolute z-50 -right-20 bottom-0' />
          </div>

        </main>
          <Footer />
      </body>

    </html>
  );
}