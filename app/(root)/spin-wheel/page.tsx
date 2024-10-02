import HeaderBox from '@/components/HeaderBox';
import SpinWheel from '@/components/SpinWheel';
import React from 'react';

const SpinWheelPage = () => {
  return (
    <section className="spin-wheel-page pt-4">
      <HeaderBox 
        title="Spin the Wheel & Win!"
        subtext="Try your luck and see what you win!"
      />

      <section className="spin-wheel">
        <SpinWheel />
      </section>
    </section>
  );
};

export default SpinWheelPage;