import { Suspense } from 'react';
import type { Metadata } from "next";

import 'animate.css';
import Content from './content';

export const metadata: Metadata = {
  title: "Al-muhibbin",
  description: "Undangan Maulid Nabi Muhammad SAW dan Milad Majelis Ta'lim Al-Muhibbin",
};

const MaulidPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Content/>
      </Suspense>
    </div>
  )
}

export default MaulidPage