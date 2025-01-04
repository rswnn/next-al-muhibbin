'use client'

import Lottie from 'react-lottie';
import * as animationData from './stars.json'
import { useEffect, useState } from 'react';

type LottieCompnentProps = {
  className?: string
  delay: number
}

const defaultOptions = {
  loop: true,
  autoplay: false, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const LottieComponent = ({className, delay}: LottieCompnentProps) => {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlay(true)
    }, delay)
  }, [delay])
  return (
    <div className={'absolute ' + className}>
      <Lottie 
        options={defaultOptions}
        width={100}
        height={50}
        isStopped={!play}
      />
    </div>
  )
}

export default LottieComponent