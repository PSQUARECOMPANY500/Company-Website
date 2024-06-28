import React from 'react'


const Industry = () => {
  return (
    <div className='industry'>
      <div className='industry-video-container' style={{ width: '90%', height: '45vh', position: 'relative', }}>
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          className='video'
        >
          <source src="/industry.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
      <div className='industy-content-container' >
        <div className='industy-content-container-left'>
          <p style={{ textAlign: 'start' }}><span className='dot'></span>We recognize businesses often struggle with inadequate software and lack the necessary  knowledge, so we analyze and identify their specific requirements.

          </p>

          <p style={{ textAlign: 'start' }}><span className='dot'></span>We develop custom ERP software designed to  meet each business's unique needs, ensuring seamless integration and enhanced efficiency. </p>
        </div>
        <div className='industy-content-container-right' >
          <p style={{ textAlign: 'start' }}><span className='dot'></span>Our team of seasoned professionals brings extensive knowledge and experience in ERP systems.</p>

          <p style={{ textAlign: 'start' }}><span className='dot'></span>
            By equipping businesses with the right tools and knowledge, we enable greater productivity, efficiency, and long-term growth, acting as strategic partners to maintain their competitive edge. </p>
        </div>
      </div>
    </div>

  )
}

export default Industry