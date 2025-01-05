'use client'

import React from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

type Props = {
  firstChildren?: React.ReactNode
  secondChildren?: React.ReactNode
}

export default function Carousel({firstChildren, secondChildren}: Props) {
  return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          {firstChildren}
        </SwiperSlide>
        <SwiperSlide>
          {secondChildren}
        </SwiperSlide>
      </Swiper>
  );
}
