import React from 'react'


const Industry = () => {
  return (
    <div className='industry' style={{ height: '100vh', width: '100%', backgroundColor: '#ECE7E1', display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
      <div className='industry-video-container' style={{ width: '90%', backgroundColor: 'red', height: '40vh', }}>
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/industry.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='industy-content-container' style={{ width: '100%', display: 'flex', justifyContent: 'space-between', height: '45vh', position: 'relative', }}>
        <div className='industy-content-container-left' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', width: '50%', padding: '3rem', paddingLeft: '5rem' }}>
          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>Our team of seasoned professionals brings <br /> extensive knowledge and experience in ERP <br /> systems, </p>

          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>Ensuring that our solutions are not only robust  <br /> but also tailored to meet the unique needs of <br /> each client. </p>
        </div>
        <div className='industy-content-container-right' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '100%', width: '50%', padding: '3rem' }}>
          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>Our team of seasoned professionals brings <br /> extensive knowledge and experience in ERP <br /> systems, </p>

          <p style={{ textAlign: 'start' }}><span className='dot' style={{ height: '4px', width: '4px', backgroundColor: 'black', borderRadius: '50%', position: 'absolute', marginTop: '1.2rem', marginLeft: '-1rem' }}></span>Ensuring that our solutions are not only robust  <br /> but also tailored to meet the unique needs of <br /> each client. </p>
        </div>
      </div>
    </div>

  )
}

export default Industry