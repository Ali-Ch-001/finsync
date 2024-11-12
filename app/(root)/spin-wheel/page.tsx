import HeaderBox from '@/components/HeaderBox';
import SpinWheel from '@/components/SpinWheel';
import React from 'react';

const SpinWheelPage = () => {
  return (
    <section className="spin-wheel-page pt-4">
      <div className="mx-8">
      <HeaderBox 
        title="Spin the Wheel & Win!"
        subtext="Try your luck and see what you win!"
      />
      </div>
      
      <section className="spin-wheel">
        <SpinWheel />
      </section>
    </section>
  );
};

export default SpinWheelPage;