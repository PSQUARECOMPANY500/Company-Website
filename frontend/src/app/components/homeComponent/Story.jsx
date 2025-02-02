'use client'
import React from 'react'
import Image from 'next/image'


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
          style={{height:'100%',width:'100%'}}
        />
      </div>
      <div className='data-container'>

        <div className='story-heading-wrapper'>
          <h1 >Stories of Connection</h1>
          <h2>Your Words, Our Inspiration</h2>
        </div>
      
        <div className='story-card-container' >
          <div className='story-card-inner-container' >
            <div className='stroy-card'>
              <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
              </p>
              <h5>~Mr. Rajinder Mohan Singh</h5>
            </div>
            <div className='stroy-card'>
              <p>
              P Square has been a game-changer for our company. Their Industry 4.0 software has significantly improved our New Part Development (NPD), quality management, and production efficiency. With their innovative solutions, we have streamlined workflows, reduced defects, and optimized production planning. P Square&ldquo;s commitment to understanding our needs and delivering tailored solutions has been exceptional.&ldquo;
              </p>
              <h5>~Matilda Manufacturing Group</h5>
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

          {/* <div className='stroy-card-progress'>
            <div className='story-card-progress-overlay'></div>
          </div> */}
        </div>
      </div>
     </div>

    // <div className='story-container'>
    //   <div className='story-bg-img'>
    //     <Image
    //       src='/Images/bgStory.png'
    //       alt='psqr story bg'
    //       className='bg-story'
    //       height={100}
    //       width={100}
    //       style={{height:'100%',width:'100%'}}
    //     />
    //   </div>
    //   <div className='data-container'>

    //     <div className='story-heading-wrapper'>
    //       <h1 >Stories of Connection</h1>
    //       <h2>Your Words, Our Inspiration</h2>
    //     </div>
      
    //     <div className='story-card-container' >
    //       <div className='story-card-inner-container' >
    //         <div className='stroy-card'>
    //           <p>We are thrilled with the outstanding work provided by P Square . Their expertise and attention to detail have significantly improved our operations. The team was professional, efficient, and delivered beyond our expectations. We highly recommend their services to anyone looking for exceptional quality and service. Thank you,  P Square for your excellent work!&ldquo;
    //           </p>
    //           <h5>~Mr. Rajinder Mohan Singh</h5>
    //         </div>
    //         <div className='stroy-card'>
    //           <p>
    //           P Square has been a game-changer for our company. Their Industry 4.0 software has significantly improved our New Part Development (NPD), quality management, and production efficiency. With their innovative solutions, we have streamlined workflows, reduced defects, and optimized production planning. P Square's commitment to understanding our needs and delivering tailored solutions has been exceptional.&ldquo;
    //           </p>
    //           <h5>~Matilda Manufacturing Group</h5>
    //         </div>
    //         {/* <div className='stroy-card story-card2'>
    //           <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
    //           </p>
    //           <h5>~John Doe, CEO of Tech Innovators</h5>
    //         </div>
    //         <div className='stroy-card story-card3'>
    //           <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
    //           </p>
    //           <h5>~John Doe, CEO of Tech Innovators</h5>
    //         </div>
    //         <div className='stroy-card story-card4'>
    //           <p>Partnering with PSQUARE COMPNAY  has been a game-changer for our business. Their innovative solutions and dedicated support have propelled our company forward. We have seen a 30% increase in productivity and a significant reduction in IT-related issues. Their team is always responsive and goes above and beyond to ensure our success."
    //           </p>
    //           <h5>~John Doe, CEO of Tech Innovators</h5>
    //         </div> */}
    //       </div>

    //       {/* <div className='stroy-card-progress'>
    //         <div className='story-card-progress-overlay'></div>
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
  )
}

export default Story