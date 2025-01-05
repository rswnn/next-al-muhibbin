'use client'

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import LottieComponent from './Lottie';

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

type CustomLayoutProps = {
  firstChildren?: React.ReactNode
  secondChildren?: React.ReactNode
  thirdChildren?: React.ReactNode
}

const CustomLayout = ({firstChildren, secondChildren, thirdChildren}: CustomLayoutProps) => {
  return (
    <main className={roboto.className +" items-center sm:items-start"}>
        <div className="container mx-auto relative bg-gradient-to-b from-[#302c6c] to-[#9d2d86] h-screen px-5 pb-16 pt-16 overflow-hidden">
          <div className='flex'>
            <LottieComponent delay={1000} className='right-0'/>
            <LottieComponent delay={2000}/>
          </div>
          <img src="./lamp.png" alt="lamp" className='w-20 absolute top-[-40px] left-5 animate__animated animate__fadeInDown' />
          <Image alt='img-broken' src="/master-almuhibbin.png" className='mx-auto block mb-14 animate__animated animate__fadeIn animate__delay-1s' width={110} height={110} />
          <div className='flex'>
            <LottieComponent delay={3000}/>
            <LottieComponent delay={4000} className='right-0'/>
          </div>
          <img src="./lamp.png" alt="lamp" className='w-20 absolute top-[-40px] right-5 animate__animated animate__fadeInDown animate__delay-1s' />
          {firstChildren}
          <div className='animate__animated animate__fadeIn animate__delay-4s'>
          <LottieComponent delay={3000} className='top-0 right-0 left-0 bottom-0'/>
          {secondChildren}
          </div>
          <LottieComponent delay={3000} className='right-0 left-0 bottom-0'/>
          {thirdChildren}
          <img src="./mosque.png" alt="mosque" className='w-screen absolute bottom-0 left-0 opacity-20' />
          <div className='flex'>
            <LottieComponent delay={7000}/>
            <LottieComponent delay={8000} className='right-0'/>
          </div>
        </div>
      </main>
  )
}

export default CustomLayout