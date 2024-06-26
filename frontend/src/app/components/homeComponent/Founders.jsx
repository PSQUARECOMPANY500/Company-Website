import React from 'react'

const Founders = () => {
    return (
        <div className='founders' style={{display:'flex',alignItems:'center',justifyContent:'space-around',flexDirection:'column'}}>
            <div className='founder-heading-wrapper' >
                <h1>Founders</h1>
            </div>
            <div className='founders-image-container' style={{
            display:'flex',
            gap:'10rem',
          
            }}>
                <div className='founders-img-card'></div>
                <div className='founders-img-card'></div>
            </div>
            <div className='founders-pera-wrapper'>
                <p>In the current business landscape, the demand for ERP softwares is at an all-time <br/> high. Companies across various sectors are recognizing the transformative <br/>impact of ERP solutions in streamlining operations, improving efficiency, and <br/>driving growth. As a company aiming to engage more clients, understanding <br/>and leveraging the current demand for ERP systems can be pivotal.</p>
            </div>
        </div>
    )
}

export default Founders