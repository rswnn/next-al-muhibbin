import { Suspense } from 'react';

import 'animate.css';
import Content from './content';


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