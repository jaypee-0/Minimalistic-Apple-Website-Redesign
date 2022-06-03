import React from 'react'
import macbook from '../../Assets/macbook.png'

const MacAir = () => {
  return (
    <div className='container d-flex flex-column justify-content-md-between flex-md-row py-5'>
      <div className='col-12 col-md-6 text-center'>
        <img className='img-fluid' src={macbook} alt='macbookair.png' />
        <h3>Mac Book Air</h3>
        <p className='learnwhite'>Buy now &gt;</p>
      </div>
      <div className='col-12 col-md-5 col-lg-4 align-self-center'>
        <p>
        Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to go.
        </p>
        <p className='learnwhite'>Learn more &gt;</p>
      </div>
    </div>
  )
}

export default MacAir