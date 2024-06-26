import React from 'react'


const Industry = () => {
  return (
    <div className='industry' style={{ height: '100vh', width: '100%', backgroundColor: '#ECE7E1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
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
      <div className='industy-content-container' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '45vh', position: 'relative', }}>
        <div className='industy-content-container-left' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', width: '50%', padding: '3rem', paddingLeft: '5rem' }}>
          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>We recognize businesses often struggle with <br/>inadequate software and lack the necessary <br/> knowledge, so we analyze and identify their <br/>specific requirements.

          </p>

          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>We develop custom ERP software designed to <br/> meet each business's unique needs, ensuring <br/> seamless integration and enhanced efficiency. </p>
        </div>
        <div className='industy-content-container-right' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', width: '50%', padding: '3rem' }}>
          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>Our team of seasoned professionals brings <br/>extensive knowledge and experience in ERP <br/> systems.</p>

          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>
            By equipping businesses with the right tools and <br/>knowledge, we enable greater productivity, <br/>efficiency, and long-term growth, acting as <br/> strategic partners to maintain their competitive <br/>edge. </p>
        </div>
      </div>
    </div>

  )
}

export default Industry