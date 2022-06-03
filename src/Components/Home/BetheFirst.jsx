import React from 'react';
import imac from '../../Assets/iMac.png'

const BetheFirst = () => {
  return (
    <div id="beTheFirst">
      <div className='container d-flex flex-column justify-content-md-between flex-md-row py-5'>
        <div className='col-12 col-md-5 col-lg-4'>
          <h1 className='w-75'>Be the first to know</h1>
          <p>
          Apple's primary desktop computer. The iMac is an "all-in-one," which houses the computer, drives and monitor in the same case. Apple also makes two computers with separate monitors: a mini desktop and workstation (see Mac mini and Mac Pro). The top iMac model used to be the iMac Pro
          </p>
          <p className='learn'>Learn more &gt;</p>
        </div>
        <div className='col-12 col-md-6 text-center'>
          <img className='img-fluid'  src={imac} alt='imac.png' />
        </div>
      </div>
    </div>
  );
};

export default BetheFirst;
