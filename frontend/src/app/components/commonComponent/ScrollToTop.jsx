'use client'
import React from 'react'
import Image from 'next/image'

const ScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className='scroll-to-top cursor-pointer'  onClick={scrollToTop}>

   <div className='scroll-top-circle cursor-pointer'  >
   <Image
   src='/Images/scrollTop.png'
   alt='psqr scrollTop'
   height={45}
   width={20}
   className='cursor-pointer'

   />
   

   </div>
    </div>

  )
}

export default ScrollToTop