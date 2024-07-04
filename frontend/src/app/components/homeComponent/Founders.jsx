'use client'
import Image from 'next/image'
import React from 'react'


const Founders = () => {
    return (
        <div className='founders'>
            <div className='founder-heading-wrapper' >
                <h1>Founders</h1>
            </div>
            <div className='founders-image-container' >
                <div className='founders-img-card'>
                    <Image src='/Images/prabhSir.jpg' alt='ceo of psqr' className='founders-img' width={1000} height={1000} style={{height:'80%',width:'100%'}} />
                    <div className='founders-name-container'>
                        <h5>Prabhjot Singh​​</h5>
                        <p>Co-Founder & CEO</p>
                    </div>

                </div>
                <div className='founders-img-card'>
                    <Image src='/Images/armaansir.JPG' alt='ceo of psqr' className='founders-img'  width={1000} height={1000} style={{height:'80%',width:'100%'}}/>
                    <div className='founders-name-container'>
                        <h5>Prabhsimran Singh​</h5>
                        <p>Co-Founder </p>
                    </div>

                </div>

            </div>
            <div className='founders-pera-wrapper'>
                <Image
                  src='/Images/rotate1.png'
                    alt='psqr text'
                    className='rotate'
                    height={10}
                    width={10}
                    style={{height:'1.5vw',width:'1.5vw'}}
                />
                <h2>We persevere until we attain perfection</h2>
                <Image
                        src='/Images/rotate2.png'
                    alt='psqr text'
                    className='rotate rotate2'
                    height={10}
                    width={10}
                    style={{height:'1.5vw',width:'1.5vw'}}

                />
                <h4 >~ Prabhsimran Singh, Co-founder</h4>
            </div>
        </div>
    )
}

export default Founders