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
            {/* <div className="w-screen h-screen md:w-[719px] md:h-[984px]">
              <Image alt='img-broken' layout='fill' src="/bg-1.png" objectFit='cover' />
            </div>
            <div className="w-[474px] h-[25px] left-[50px] top-[871px] absolute text-[#dcbbd8] text-xl font-medium font-['Inter']">Wassalamu'alaikum Warahmatullahi Wabarakatuh</div>
            <div className="w-[636px] h-[108px] left-[49.45px] top-[741px] absolute text-[#dfc4e1] text-lg font-normal font-['Inter'] leading-relaxed">Atas perhatiannya dan kehadirannya kami ucapkan Allhamdulilah Khoiron<br/>Katsiron dengan iringan do'a semoga Bpk/Ibu/Sdr/i kaum muslimin<br/>walmuslimat selalu ada dalam lindungan Allah SWT dan Mendapat Syafaat<br/>keberkahan Rosululloh SAW Aamiin.</div>
            <div className="w-[404px] left-[131px] top-[620px] absolute text-[#b4a0c4] text-lg font-medium font-['Inter'] leading-7">: I I Januari 2025<br/>:19.00WIB<br/>:Masjid Abu Bakar Ash-Shiddiq Pala Bali RW 6,<br/>Boponter Depok</div>
            <div className="w-[67px] h-[25px] left-[49px] top-[676px] absolute text-[#c1a7cb] text-lg font-semibold font-['Inter']">Tempat</div>
            <div className="w-[63px] h-[23px] left-[49px] top-[649px] absolute text-[#c4aed0] text-xl font-semibold font-['Inter']">Waktu</div>
            <div className="w-[66px] h-[25px] left-[48px] top-[623px] absolute text-[#c3b2d1] text-[16.90px] font-normal font-['Inter']">Tanggal</div>
            <div className="w-[58px] h-[23px] left-[131px] top-[596px] absolute text-[#bdaecf] text-lg font-semibold font-['Inter']">:Sabtu</div>
            <div className="w-[52px] h-6 left-[50px] top-[596px] absolute text-[#b3a1c6] text-xl font-semibold font-['Inter']">Hari '</div>
            <div className="w-[637px] h-[165px] left-[49.64px] top-[416px] absolute text-[#c8c7de] text-lg font-normal font-['Inter'] leading-relaxed">Puji syukur Kehadirat Allah SWT, mudah-mudahan Bpk/Ibu/Sdr/i kaum<br/>muslimin walmuslimat dalam keadaan sehat dan dapat menjalankan aktivi-<br/>tas sehari-hari dengan baik. Sehubungan akan dilaksanakan peringatan<br/>Maulid Nabi Muhammad SAW I446 H, kami dari panitia mengundang<br/>Bpk/Ibu/Sdr/i agar berkenan menghadiri acara tersebut yang Inssya Allah<br/>akan dilaksanakan pada:+</div>
            <div className="w-[148px] h-[27px] left-[50px] top-[381px] absolute text-[#b6b5cf] text-lg font-semibold font-['Inter']">Dengan Hormat,</div>
            <div className="w-[448px] h-[26px] left-[136px] top-[318px] absolute text-[#d3d3e4] text-xl font-semibold font-['Inter']">Assalamualaikum WarahmatullahiWabarakatuh</div>
            <div className="w-[90px] h-[90px] md:w-[181px] md:h-[181px] md:left-[269px] top-[42px] absolute rounded-[89px]">
              <Image alt='img-broken' layout='fill' src="/master-almuhibbin.png" className='m-0' />
            </div> */}
          </div>
          {/* <div className="sm:container sm:mx-auto relative">
            <div className="w-[719px] h-[984px]">
              <Image alt='img-broken' layout='fill' src="/bg-2.png" />
            </div>
            <div className="w-[107px] h-6 left-[506px] top-[871px] absolute text-[#d6b6d2] text-lg font-semibold font-['Inter']">Ust.Maman</div>
            <div className="w-[120px] h-6 left-[101px] top-[871px] absolute text-[#d7b7d3] text-lg font-semibold font-['Inter']">Ust.M.Abbas</div>
            <div className="w-[207px] h-[52px] left-[456.33px] top-[796px] absolute text-center text-[#d6bad5] text-[18.90px] font-medium font-['Inter'] leading-tight">Pembina Majelis Ta'lim<br/>AL-MUHIBBIN</div>
            <div className="w-[210px] h-[55px] left-[59.75px] top-[796px] absolute text-center text-[#dbc1d9] text-lg font-semibold font-['Inter'] leading-[22.98px]">DKM Masjid Abu Bakar<br/>Ash-Shidiq</div>
            <div className="w-[161px] h-[29px] left-[281px] top-[744px] absolute text-[#e8d5ea] text-[25.50px] font-semibold font-['Inter']">Hormat Kami</div>
            <div className="w-[217px] h-[217px] left-[403px] top-[277px] absolute rounded-[107px]">
              <Image alt='img-broken' layout='fill' src="/hb-2.png" />
            </div>
            <div className="w-[217px] h-[217px] left-[251px] top-[491px] absolute rounded-[107px]">
              <Image alt='img-broken' layout='fill' src="/hb-1.png" />
            </div>
            <div className="w-[217px] h-[217px] left-[99px] top-[276px] absolute rounded-[107px]">
              <Image alt='img-broken' layout='fill' src="/hb-3.png" />
            </div>
            <div className="w-[181px] h-[181px] left-[269px] top-[42px] absolute rounded-[89px]">
              <Image alt='img-broken' layout='fill' src="/master-almuhibbin.png" />
            </div>
          </div> */}
      </main>
    </div>
  );
}
