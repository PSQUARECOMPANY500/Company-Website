'use client'
import React from 'react'
import Image from 'next/image'


const OurExpertise = () => {
    return (
        <div className='our-expertise' style={{overflow:'hidden'}}>
            <div className='our-expertise-heading-wrapper'>
                <h1>Our Expertise</h1>
            </div>

            <div className='sub-svg-wrapper-ind' >
                <svg height="585" viewBox="0 0 1728 585" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-svg-ind'style={{top:'20%'}}>
                    <path className='bg' d="M182.327 410.133C59.0557 279.45 -6.70886 177.314 -38.2139 101.055C-68.769 27.0948 -9.99043 23.4933 19.6841 97.8111C34.9389 132.777 101.566 220.433 132.973 259.891C194.89 350.218 319.545 425.005 374.133 451.108C551.358 532.148 659.039 420.149 672.499 413.775C682.185 409.188 782.147 308.968 845.679 244.471C858.796 231.154 870.58 216.279 884.433 203.728C921.103 170.504 999.65 113.369 1042.65 83.2422C1149.44 17.6819 1264.37 1.29187 1308.49 1.29187C1462.83 -5.26416 1588.16 58.657 1631.53 91.4372C1722.16 143.157 1770.25 233.788 1782.96 272.638C1839.04 413.775 1791.93 482.067 1782.96 522.132C1779.96 535.524 1767.32 556.801 1751.42 579.561C1742.94 591.701 1724.34 578.251 1726.79 563.644C1727 562.387 1727.16 562.548 1727.69 561.389C1752.34 507.46 1726.32 392.891 1710.05 341.841C1671.21 239.527 1606.17 181.787 1568.58 159.458C1559.95 154.326 1551.07 149.569 1542.49 144.329C1381.69 46.0438 1206.83 86.253 1137.99 119.665C1047.5 159.428 934.025 267.732 877.877 328.181C871.514 335.032 865.951 337.515 859.819 344.573C803.351 409.564 699.793 489.048 648.944 517.579C519.491 579.829 395.909 547.412 338.42 517.959C329.121 513.195 319.847 508.473 310.552 503.703C266.453 481.074 208.215 433.332 182.327 410.133Z" fill="#330152" />

                </svg>
            <svg width="1728" height="511" viewBox="0 0 1728 511" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-svg-ind2' style={{top:'25%'}}>
                <path d="M1565.93 356.295C1688.54 243.037 1754.2 154.414 1785.83 88.1302C1818.17 20.3396 1759.69 16.1664 1728.4 84.451C1713.16 114.885 1646.6 191.181 1615.23 225.524C1553.38 304.145 1428.86 369.239 1374.33 391.959C1197.29 462.496 1089.72 365.012 1076.28 359.465C1066.71 355.516 968.937 270.153 905.395 213.97C890.891 201.146 877.549 186.703 862.257 174.829C824.726 145.686 748.593 97.4524 706.521 71.7702C599.852 14.7068 485.04 0.440985 440.968 0.440981C286.79 -5.26539 161.596 50.3714 118.27 78.9031C27.7359 123.92 -20.2953 202.804 -32.994 236.62C-89.0179 359.464 -41.9579 418.905 -32.994 453.778C-29.8567 465.983 -16.1674 485.713 0.77381 506.569C9.37647 517.159 25.7465 503.378 23.13 489.987C22.8778 488.697 22.6993 488.875 22.0936 487.708C-2.31774 440.67 23.6056 341.212 39.8371 296.853C78.8688 207.267 144.387 156.944 181.821 137.763C190.076 133.533 198.485 129.603 206.666 125.231C367.445 39.3135 542.436 74.3578 611.281 103.472C701.859 138.151 815.484 232.725 871.454 285.278C877.946 291.373 882.872 292.926 889.159 299.231C945.567 355.799 1049.01 424.982 1099.81 449.815C1229.7 504.237 1353.67 475.529 1410.76 449.805C1419.5 445.869 1428.22 441.996 1436.98 438.119C1481.13 418.584 1539.9 376.619 1565.93 356.295Z" fill="#330152" />
            </svg>
            </div>

            <div className='expertise-card-container'>
                <div className='expertise-card-container-top'>
                    <div className='expertise-card'>
                        <Image src='/Images/ReactNativeImg.png' alt='psq native' className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}}/>
                        <h5>React <br/> Native</h5>
                    </div>
                    <div className='expertise-card'>
                        <Image src='/Images/FlutterImg.png' alt='psqr flutter'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}} />
                        <h5>Flutter</h5>
                    </div>
                    <div className='expertise-card'>
                        <Image src='/Images/JavaImg.png' alt='psqr  java'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}} />
                        <h5>Java</h5>
                    </div>
                    <div className='expertise-card'>
                        <Image src='/Images/KotlinImg.png' alt='psqr  Kotlin'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}}/>
                        <h5>Kotlin</h5>
                    </div>
                </div>
                <div className='expertise-card-container-bottom'>
                    <div className='expertise-card'>
                        <Image src='/Images/MongoImg.png' alt='psqr Mongo db'  className='expertise-img'  height={200} width={100} style={{height:'10vw',width:'10vw'}} />
                        <h5>Mongo <br/> db</h5>

                    </div>
                    <div className='expertise-card'>
                        <Image src='/Images/ExpressImg.png' alt='psqr Express'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}}/>
                        <h5>Express <br/>.Js</h5>

                    </div>
                    <div className='expertise-card'>
                        <Image src='/Images/NodeImg.png' alt='psqr Express'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}}/>
                        <h5>Node<br/>.Js</h5>
                    </div>
                    <div className='expertise-card'>
                        <Image  src='/Images/ReactNativeImg.png' alt='psqr Express'  className='expertise-img' height={200} width={100} style={{height:'10vw',width:'10vw'}}/>
                        <h5> React<br/>.Js</h5>

                    </div>
                </div>
            </div>








        </div>
    )
}

export default OurExpertise