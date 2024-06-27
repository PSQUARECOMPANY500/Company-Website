import Image from 'next/image'
import React from 'react'
import ArmaansSirImage from '../../../../public/Images/armaansir.png'
import prabhSir from '../../../../public/Images/prabhSir.jpg'
import rotateone from '../../../../public/Images/rotate1.png'
import rotatetwo from '../../../../public/Images/rotate2.png'

const Founders = () => {
    return (
        <div className='founders' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column' }}>
            <div className='founder-heading-wrapper' >
                <h1>Founders</h1>
            </div>
            <div className='founders-image-container' style={{
                display: 'flex',
                gap: '10rem',

            }}>
                <div className='founders-img-card'>
                    <Image src={prabhSir} alt='ceo of psqr' className='founders-img' />
                    <div className='founders-name-container'>
                        <h5>Prabhjot Singh​​</h5>
                        <p>Co-Founder & CEO</p>
                    </div>

                </div>
                <div className='founders-img-card'>
                    <Image src={ArmaansSirImage} alt='ceo of psqr' className='founders-img' />
                    <div className='founders-name-container'>
                        <h5>Prabhsimran Singh​</h5>
                        <p>Co-Founder </p>
                    </div>

                </div>

            </div>
            <div className='founders-pera-wrapper'>
                <Image
                    src={rotateone}
                    alt='psqr text'
                    className='rotate'
                style={{marginLeft:'-4rem',marginBottom:'-2rem'}}
                />
                <h2>We persevere until we attain perfection</h2>
                <Image
                    src={rotatetwo}
                    alt='psqr text'
                    className='rotate'
                    style={{position: 'absolute',right:0,marginRight:'-4rem',marginTop:'-1rem'}}
                />
                <h4 >~ Prabhsimran Singh, Co-founder</h4>
            </div>
        </div>
    )
}

export default Founders