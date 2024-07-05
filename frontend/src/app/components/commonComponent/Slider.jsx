'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

const Slider = ({sliderHeading,scrollToNext,calculateWidth}) => {

  const[scrollHeight,setScrollHeight] =useState(0);
  useEffect(()=>{
    const scrollHandler=()=>{
const windowHeight = window.innerHeight;
const documentHeight = document.documentElement.scrollHeight;
const scrollY=window.scrollY;
const scrollPercent=(scrollY/(documentHeight-windowHeight))*100
setScrollHeight(scrollPercent)
  
    }
    window.addEventListener('scroll',scrollHandler)

return()=>{
  window.removeEventListener('scroll',scrollHandler)
}
  })
  return (
    <div className='slider'>
        <div className='slider-overlay' style={{height:scrollHeight+'%'}}></div>
        <h1 >{sliderHeading}</h1>
        <Image 
        src='/Images/sliderArrow.png'
        alt='slider arrow '
        onClick={scrollToNext}
        height={35}
        width={10}
        style={{cursor:'pointer',marginTop:'0rem'}}
        />
        
    </div>
  )
}

export default Slider