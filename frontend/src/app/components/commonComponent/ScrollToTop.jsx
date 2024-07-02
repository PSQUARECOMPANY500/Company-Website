import React from 'react'
import scrollPng from '../../../../public/Images/scrollTop.png'
import Image from 'next/image'

const ScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className='scroll-to-top cursor-pointer'  onClick={scrollToTop}>

   <div className='scroll-top-circle cursor-pointer'  >
   <Image
   src={scrollPng}
   alt='shshs'
   height={45}
   width={20}
   className='cursor-pointer'

  
   />
   

   </div>
    </div>

  )
}

export default ScrollToTop