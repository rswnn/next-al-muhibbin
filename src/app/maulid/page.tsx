import CustomLayout from '@/components/CustomLayout';
import { Suspense } from 'react';

const MaulidPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CustomLayout />
      </Suspense>
    </div>
  )
}

export default MaulidPage