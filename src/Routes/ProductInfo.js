import React from 'react'
import IWatch from '../Components/ProductInfo/IWatch'
import M1Chip from '../Components/ProductInfo/M1Chip'

const ProductInfo = () => {
  return (
    <div id='productInfo' className='py-5'>
        <M1Chip />
        <IWatch />
    </div>
  )
}

export default ProductInfo