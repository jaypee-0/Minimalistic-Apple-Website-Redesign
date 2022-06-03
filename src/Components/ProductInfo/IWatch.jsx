import React from 'react';
import iwatch from '../../Assets/iwatch.png';
const IWatch = () => {
  return (
    <div className='container d-flex flex-column'>
      <img
        className='my-5 img-fuild col-8 col-md-5 mx-auto'
        src={iwatch}
        alt='iwatch.png'
      />
      <h1 className='mt-5 text-center'>Introducing the iWatch</h1>
      <p className='mt-2'>
        Apple Watch can do what your other devices can’t because it’s on your
        wrist. When you wear it, you get a fitness partner that measures all the
        ways you move, meaningful health insights, and a connection to the
        people and things you care about most. And it’s always just a glance
        away. From strength training to Pilates, HIIT to yoga, Apple Watch
        tracks all your favorite ways to work out — with the metrics you most
        want to see. Make a splash with your watch. Apple Watch is rated water
        resistant 50 meters.1 Perfect for swimming, surfing, or water balloon
        fights. Quick, duck!
      </p>
      <p className='learn'>Learn more &gt;</p>
    </div>
  );
};

export default IWatch;
