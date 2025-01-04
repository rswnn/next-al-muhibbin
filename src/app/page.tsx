/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import LottieComponent from '../components/Lottie';

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <div className="items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <main className={roboto.className +" items-center sm:items-start"}>
          <div className="sm:container sm:mx-auto relative bg-gradient-to-b from-[#302c6c] to-[#9d2d86] px-5 pb-16 pt-10 overflow-hidden">
            <div className='flex'>
              <Suspense>
                <LottieComponent delay={1000} className='right-0'/>
                <LottieComponent delay={2000}/>
              </Suspense>
            </div>
            <img src="./lamp.png" alt="lamp" className='w-20 absolute top-[-50px] left-5' />
            <Image alt='img-broken' src="/master-almuhibbin.png" className='mx-auto block mb-14' width={110} height={110} />
            <div className='flex'>
              <Suspense>
                <LottieComponent delay={3000}/>
                <LottieComponent delay={4000} className='right-0'/>
              </Suspense>
            </div>
            <img src="./lamp.png" alt="lamp" className='w-20 absolute top-[-50px] right-5' />
            <h1 className='text-center text-xs font-bold'><i>Assalamualaikum WarahmatullahiWabarakatuh</i></h1>
            <p className='mt-5 text-xs'>Dengan Hormat,</p>
            <p className='text-xs mt-1 text-justify'>&nbsp;&nbsp;Puji sykur Kehadirat Allah SWT, mudah-mudahan Bpk/Ibu/Sdr/i kaum muslimin walmuslimat dalam keadaan sehat dan dapat menjalankan aktivi-tas sehari-hari dengan baik. Sehubungan akan dilaksanakan peringatan Maulid Nabi Muhammad SAW 1446 H, kami dari panitia mengundang Bpk/bu/Sdr/i agar berkenan menghadiri acara tersebut yang Insya Allah akan dilaksanakan pada :</p>
            <p className='mt-5 text-xs'>Hari: Sabtu</p>
            <p className='text-xs'>Tanggal: 11 Januari 2025</p>
            <div className='flex'>
              <Suspense>
                <LottieComponent delay={5000}/>
                <LottieComponent delay={6000} className='right-0'/>
              </Suspense>
            </div>
            <p className='text-xs'>Waktu: 19.00 WIB</p>
            <p className='text-xs'>Tempat : Masjid Abu Bakar Ash-Shiddiq Pala Bali RW 6 Boponter Depok</p>
            <p className='mt-5 text-xs text-justify'>Atas perhatiannya dan kehadirannya kami ucapkan Allhamdulilah Khoiron Katsiron dengan iringan doa semoga Bpk/bu/Sdr/i kaum muslimin walmuslimat selalu ada dalam lindungan Allah SWT dan Mendapat Syafaat keberkahan Rosululloh SAW Aamiin.</p>
            <h1 className='mt-10 text-xs font-bold'><i>Wassalamualaikum Warahmatullahi Wabarakatuh</i></h1>
            <img src="./mosque.png" alt="mosque" className='w-screen absolute bottom-0 left-0 opacity-20' />
            <div className='flex'>
              <Suspense>
                <LottieComponent delay={7000}/>
                <LottieComponent delay={8000} className='right-0'/>
                </Suspense>
            </div>
          </div>
      </main>
    </div>
  );
}
