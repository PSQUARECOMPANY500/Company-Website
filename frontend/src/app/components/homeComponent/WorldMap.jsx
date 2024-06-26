import React from 'react'
import mapImg from '../../../../public/Images/map.png'
import Image from 'next/image'

const WorldMap = () => {
  return (
    <div className='map-container'>
      <div className='map-heading-wrapper'>

        <h1>Our clients are global and so are we</h1>
      </div>

      <div className='map-img-container'>
        
        <Image
        src={mapImg}
        alt='psqr map'
        className='map-img'
        />
      </div>
    </div>
  )
}

export default WorldMap