import React from 'react';
import m1chip from '../../Assets/M1Chip.png';

const M1Chip = () => {
  return (
    <div className='container d-flex flex-column justify-content-md-between flex-md-row py-5'>
      <div className='col-12 col-md-5 col-lg-4 align-self-center'>
        <h1 className=''>8-core CPU Devours tasks. Sips battery.</h1>
        <p>
          M1 has the fastest CPU we’ve ever made. With that kind of processing
          speed, MacBook Air can take on new extraordinarily intensive tasks
          like professional-quality editing and action-packed gaming. But the
          8‑core CPU on M1 isn‘t just up to 3.5x faster than the previous
          generation2 — it balances high-performance cores with efficiency cores
          that can still crush everyday jobs while using just a tenth of the
          power.
        </p>
        <p className='learn'>Learn more &gt;</p>
      </div>
      <div className='col-12 col-md-6 text-center'>
        <img className='m1chip img-fluid' src={m1chip} alt='m1chip.png' />
        <h3>M1 Chip</h3>
      </div>
    </div>
  );
};

export default M1Chip;
