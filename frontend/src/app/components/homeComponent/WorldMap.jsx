'use client'
import React from 'react'
import Image from 'next/image'

const WorldMap = () => {
  return (
    <div className='map-container'>
      <div className='map-heading-wrapper'>
        <h1>Our clients are global and so are we</h1>
      </div>

      <div className='map-img-container'>  
        <Image
        src='/Images/map1.png'
        alt='psqr map'
        className='map-img'
        height={1000}
        width={1000}
        style={{width: '100%'}}
        />
        <Image src='/Images/map.png' alt='psqr map' className='map-img1'
                height={1000}
                width={1000}
                style={{width:'100%'}}
        />
      </div>
    </div>
  )
}

export default WorldMap