import CustomLayout from '@/components/CustomLayout';
import { Suspense } from 'react';

import 'animate.css';

const MaulidPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  )
}

export default MaulidPage