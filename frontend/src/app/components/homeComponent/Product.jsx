'use'
import Image from 'next/image'
import React from 'react'
import publicService from '../../../../public/Images/publicService.png'
import aiImage from '../../../../public/Images/AI.png'
import sales from '../../../../public/Images/sales.png'

const Product = () => {
  return (
    <div className='product-container'>
      <div className='product-content'>

      <div className='product-heading-wrapper'>
        <h1>Our Innovative Products</h1>
      </div>
      <div className='product-pera-wrapper'>
        <p>Discover our cutting-edge products designed to meet your needs and <br/> exceed your expectations.
        </p>
      </div>
      </div>
     
      <div className='product-cards-container'>
        <div className='product-line'></div>

        <div className='product-card-wrapper'>
        <div className='product-card'>
    
          <Image src={aiImage} alt='psqr Ai Card' className='product-img'/>
        </div>
          <p >Industry 4.0</p>
        </div>
        <div className='product-card-wrapper'>

        <div className='product-card'>
        <Image src={publicService} alt='psqr Ai Card' className='product-img'/>
        </div>
        <p>Service Management</p>
        </div>
        <div className='product-card-wrapper'>
        <div className='product-card'>
        <Image src={sales} alt='psqr Ai Card' className='product-img'/>
        </div>
        <p>Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Product