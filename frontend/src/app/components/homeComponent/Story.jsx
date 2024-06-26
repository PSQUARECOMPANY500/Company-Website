import React from 'react'
import bgStory from '../../../../public/Images/bgStory.png'
import Image from 'next/image'


const Story = () => {
  return (
    <div className='story-container'>
        <div className='story-bg-img'>
            <Image 
            src={bgStory}
            alt='psqr story bg'
            className='bg-story'
            />
        </div>
    </div>
  )
}

export default Story