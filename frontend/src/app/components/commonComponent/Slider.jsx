'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { progress } from 'framer-motion';

const Slider = ({scrollToNext,progressbar}) => {
  const[scrollHeight,setScrollHeight] = useState();
  const[sliderHeading,setSliderHeading] = useState();
  
useEffect(() =>{
  Object.entries(progressbar).forEach((e)=>{
    setScrollHeight(e[1])
    setSliderHeading(e[0])
    })
    
},[progressbar])

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