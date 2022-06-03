import React from 'react';
import iphone12 from '../../Assets/iPhone12.png';
import vector from '../../Assets/Vector.png';

const Welcome = () => {
  return (
    <div className='position-relative'>
      <div className='welcome container d-flex flex-column justify-content-md-between flex-md-row py-5'>
        <div className='col-12 col-md-5 col-lg-4 align-self-center'>
          <h1 className='w-75 pb-1 fw-bolder'>Welcome to Apple</h1>
          <p>
            Apple Inc. is an American multinational technology company that
            specializes in consumer electronics, software and online services.
            Apple hardware, software, and services work together to give your
            employees the power and flexibility to do whatever needs doing
            whether you’re running a startup, scale-up, or global enterprise.
          </p>
        </div>
        <div className='col-12 col-md-6 text-center'>
          <img className='img-fluid' src={iphone12} alt='iphone12pro.png' />
          <h3>Iphone12 Pro</h3>
          <p className='learnwhite'>Learn more &gt;</p>
        </div>
      </div>
      <img className='vector' src={vector} alt='' />
    </div>
  );
};

export default Welcome;
