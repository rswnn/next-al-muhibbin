/* eslint-disable @next/next/no-img-element */
'use client'

import Image from "next/image";
import Carousel from '@/components/Carousel';
import CustomLayout from '@/components/CustomLayout';
import React, { useEffect, useMemo, useRef } from 'react'
import { Playwrite_AU_SA } from 'next/font/google';

const playWrite = Playwrite_AU_SA({
  weight: '400',
})

const Content = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isLocked, setIsLocked] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (window && audioRef.current) {
        audioRef?.current?.pause();
        audioRef.current.muted = false;
        
        setTimeout(() => {
          // audioRef?.current?.play();
        }, 500);
      }
    }, 3000);
  },[])

  const renderMainContent = useMemo(() => {
    return (
      <Carousel
        firstChildren={
          <CustomLayout 
            firstChildren={
              <div>
                <h1 className='text-center text-xs font-bold animate__animated animate__fadeIn animate__delay-2s'><i>Assalamualaikum WarahmatullahiWabarakatuh</i></h1>
                <p className='mt-5 text-xs animate__animated animate__fadeIn animate__delay-3s leading-6'>Dengan Hormat,</p>
                <p className='text-xs mt-1 text-justify animate__animated animate__fadeIn animate__delay-3s leading-5'>&nbsp;&nbsp;Puji sykur Kehadirat Allah SWT, mudah-mudahan Bpk/Ibu/Sdr/i kaum muslimin walmuslimat dalam keadaan sehat dan dapat menjalankan aktivi-tas sehari-hari dengan baik. Sehubungan akan dilaksanakan peringatan Maulid Nabi Muhammad SAW 1446 H, kami dari panitia mengundang Bpk/bu/Sdr/i agar berkenan menghadiri acara tersebut yang Insya Allah akan dilaksanakan pada :</p>
              </div>
            }
            secondChildren={
              <table className="table-auto mt-5">
                <tbody>
                  <tr>
                    <td className='w-[18%]'><p className='text-xs'>Hari</p></td>
                    <td className='w-[3%]'><p className='text-xs'>:</p></td>
                    <td><p className='text-xs'>Sabtu</p></td>
                  </tr>
                  <tr>
                    <td><p className='text-xs'>Tanggal</p></td>
                    <td><p className='text-xs'>:</p></td>
                    <td><p className='text-xs'>11 Januari 2025</p></td>
                  </tr>
                  <tr>
                    <td><p className='text-xs'>Waktu</p></td>
                    <td><p className='text-xs'>:</p></td>
                    <td><p className='text-xs'>19.00 WIB</p></td>
                  </tr>
                  <tr>
                    <td><p className='text-xs'>Tempat</p></td>
                    <td><p className='text-xs'>:</p></td>
                    <td><p className='text-xs'>Masjid Abu Bakar Ash-Shiddiq Pala Bali RW 6 Boponter Depok</p></td>
                  </tr>
                </tbody>
              </table>
            }
            thirdChildren={
              <div>
                <p className='mt-5 text-xs text-justify animate__animated animate__fadeIn animate__delay-5s leading-5'>Atas perhatiannya dan kehadirannya kami ucapkan Allhamdulilah Khoiron Katsiron dengan iringan doa semoga Bpk/bu/Sdr/i kaum muslimin walmuslimat selalu ada dalam lindungan Allah SWT dan Mendapat Syafaat keberkahan Rosululloh SAW Aamiin.</p>
                <h1 className='mt-10 text-xs font-bold animate__animated animate__fadeIn animate__delay-5s'><i>Wassalamualaikum Warahmatullahi Wabarakatuh</i></h1>
              </div>
            }
          />
        }
        secondChildren={
          <CustomLayout 
            firstChildren={
              <div className='mt-3'>
                <div className='flex justify-between mx-3'>
                  <img src="./hb-3.png" alt="hb-1" className='w-[136px]' />
                  <img src="./hb-2.png" alt="hb-2" className='w-[136px]' />
                </div>
                <div className='items-center justify-items-center'>
                  <img src="./hb-1.png" alt="hb-2" className='w-[136px]' />
                </div>
              </div>
            }
            thirdChildren={
              <div>
                <h1 className='text-center mt-10 text-lg font-bold animate__animated animate__fadeIn animate__delay-5s'>Hormat Kami</h1>
                <div className='flex justify-between mt-10'>
                  <div className='items-center justify-items-center'>
                    <p className='text-sm font-bold leading-7'>DKM Masjid Abu Bakar</p>
                    <p className='text-sm font-bold'>Ash-Shidiq</p>
                    <p className='mt-7 text-sm font-bold'>Ust. M.Abbas</p>
                  </div>
                  <div className='items-center justify-items-center'>
                    <p className='text-sm font-bold leading-7'>Pembina Majelis Talim</p>
                    <p className='text-sm font-bold'>AL - MUHIBBIN</p>
                    <p className='mt-7 text-sm font-bold'>Ust. Maman</p>
                  </div>
                </div>
              </div>
            }
          />
        }
      />
    )
  },[])

  const renderContent = useMemo(() => {
    if(isLocked) {
      return (
        <div>
          <div className='animate-visibility-hidden'>
            <div className='w-screen h-screen absolute z-10 top-0 right-0 left-0 bg-gradient-to-b from-[#302c6c] to-[#9d2d86] bg-black animate__animated animate__slideOutDown animate__delay-3s'>
              <div className='animate__animated animate__backInDown absolute left-0 right-0 top-[30%]'>
                <Image alt='img-broken' src="/master-almuhibbin.png" className='mx-auto block mb-14 animate__animated animate__fadeOut animate__delay-2s' width={140} height={140} />
              </div>
            </div>
          </div>
          <div className='mx-10'>
          <img src="./lamp.png" alt="lamp" className='w-16 absolute top-[-50px] left-[8px] animate__animated animate__fadeInDown animate__delay-3s' />
          <img src="./lamp.png" alt="lamp" className='w-16 absolute top-[-20px] left-[60px] animate__animated animate__fadeInDown animate__delay-3s' />
          <img src="./lamp.png" alt="lamp" className='w-16 absolute top-[-50px] left-28 animate__animated animate__fadeInDown animate__delay-3s' />
            <img src="./terompah.png" alt="mosque" className='opacity-20 absolute top-[25%] left-0 right-0' />
            <div className='absolute top-[30%] -right-5 rounded-lg bg-[#302c6c] px-5 py-3 w-[230px] animate__animated animate__slideInRight animate__delay-4s'>
              <h1 className={'text-2xl tracking-wide' + ` ${playWrite.className}`} >Undangan</h1>
            </div>
            <div className='border-4 absolute top-[30px] right-[20px] rounded-full animate__animated animate__fadeIn animate__delay-4s'>
              <img src="./caligraph.png" alt="mosque" className='w-[160px]' />
            </div>
          <div>
          </div>
          </div>
          <div className='px-10 absolute bottom-6 left-0 right-0 animate__animated animate__fadeIn animate__delay-4s'>
            <div className='flex items-center'>
              <img src="./calendar.svg" alt="" className='w-6 h-6 mr-2' />
              <div>
                <p className='font-bold'>11 Rajab 1446 H</p>
                <p className='text-xs'>11 Januari 2025 M</p>
              </div>
            </div>
            <div className='mt-5'>
              <a className='flex items-center' href="https://g.co/kgs/XF1BnKg">
                <img src="./map-marker.svg" alt="" className='w-6 h-6 mr-2' />
                <div>
                  <p className='font-bold'>Masjid Abu Bakar Ash-Shiddiq</p>
                  <p className='text-xs'>Pala Bali RW 6 Bojong pondok terong Depok</p>
                </div>
              </a>
            </div>
            <div className='animate__animated animate__fadeIn animate__delay-4s mt-10'>
              <h1 className='text-sm font-bold'>Kepada YTH</h1>
              <div className='flex flex-col items-center justify-center mt-5'>
                <div className='roundcalied w-full h-28 p-4 bg-transparent border-2 border-[rgba(255, 255, 255, 0.1)] rounded-xl' id=""/>
                <button className='bg-[#302c6c] text-white py-2 rounded w-[80%] h-14 mt-10' onClick={() => {
                  setIsLocked(false)
                  audioRef.current?.play()
                }}>
                  <p className='font-bold text-lg shimmer tracking-wide'>Buka undangan</p>
                </button>
              </div>
            </div>
          </div>
          <img src="./mosque.png" alt="mosque" className='w-screen absolute bottom-0 left-0 opacity-20 -z-10' />
        </div>
      )
    }

    return renderMainContent
  },[isLocked, renderMainContent])

  return (
    <div>
      {renderContent}
      <audio ref={audioRef} id='audio' muted autoPlay loop>
        <source src="./sound.ogg" type="audio/ogg"/>
        <source src="./sound.mp3" type="audio/mp3"/>
      </audio>
      <button className='btn-play' onClick={() => audioRef.current?.play()}></button>
    </div>
  )
}

export default Content