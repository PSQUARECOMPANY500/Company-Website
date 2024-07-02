import React, { useEffect, useState } from 'react'
import sliderArrow from '../../../../public/Images/sliderArrow.png'
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
        src={sliderArrow }
        alt='slider arrow '
        onClick={scrollToNext}
        style={{cursor:'pointer',marginTop:'0.5rem'}}
        />
        
    </div>
  )
}

export default Slider