'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

const Story = () => {


  return (



    <div className='story-container'>
      <div className='story-bg-img'>
        <Image
          src='/Images/bgStory.png'
          alt='psqr story bg'
          className='bg-story'
          height={100}
          width={100}
          style={{ height: '100%', width: '100%' }}
        />
      </div>
      <div className='data-container'>

        <div className='story-heading-wrapper'>
          <h1 >Stories of Connection</h1>
          <h2>Your Words, Our Inspiration</h2>
        </div>


        <div className='story-story-card-container' >
          <div className='story-story-card-inner-container' >


            <div className='story-cards'>
              <div className='outer'>
                <div className='story-card' style={{ '--delay': '-1' }}>
                  <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
                  </p>
                  <h5>~Mr. Rajinder Mohan Singh</h5>
                </div>
                <div className='story-card' style={{ '--delay': '0' }}>
                  <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
                  </p>
                  <h5>~Mr. Rajinder Mohan Singh</h5>
                </div>
                <div className='story-card' style={{ '--delay': '1' }}>
                  <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
                  </p>
                  <h5>~Mr. Rajinder Mohan Singh</h5>
                </div>
                <div className='story-card' style={{ '--delay': '2' }}>
                  <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
                  </p>
                  <h5>~Mr. Rajinder Mohan Singh</h5>
                </div>
                <div className='story-card' style={{ '--delay': '2' }}>
                  <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
                  </p>
                  <h5>~Mr. Rajinder Mohan Singh</h5>
                </div>
              </div>
            </div>


          </div>

          {/* <div className='stroy-story-story-card-progress'>
          <div className='story-story-story-card-progress-overlay'></div>
        </div> */}


        </div>
      </div>
    </div>
  )
}

export default Story