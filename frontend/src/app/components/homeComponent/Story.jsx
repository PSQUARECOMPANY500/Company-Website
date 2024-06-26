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
      <div className='data-container'>

        <div className='story-heading-wrapper'>
          <h1 >Stories of Connection</h1>
          <h2>Your Words, Our Inspiration</h2>
        </div>
      
        <div className='story-card-container'>
          <div className='story-card-inner-container'>
            <div className='stroy-card'>
              <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
              </p>
              <h5>~John Doe, CEO of Tech Innovators</h5>
            </div>
            {/* <div className='stroy-card story-card2'>
              <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
              </p>
              <h5>~John Doe, CEO of Tech Innovators</h5>
            </div>
            <div className='stroy-card story-card3'>
              <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
              </p>
              <h5>~John Doe, CEO of Tech Innovators</h5>
            </div>
            <div className='stroy-card story-card4'>
              <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
              </p>
              <h5>~John Doe, CEO of Tech Innovators</h5>
            </div> */}
          </div>

          <div className='stroy-card-progress'>
            <div className='story-card-progress-overlay'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story