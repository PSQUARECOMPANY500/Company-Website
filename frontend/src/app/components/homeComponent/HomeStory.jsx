
import React, { useRef, useState,useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


const HomeStory = () => {
  const sectionRef = useRef();
  const triggerRef = useRef();



  useGSAP(() => {

    let mm=gsap.matchMedia();

    mm.add("(min-width: 800px)", () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        {
          translateX: '100vw',
        },
        {
          translateX: "-200vw",
          ease: "none",
          duration: 1.8,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 20%",
            end: "2000 -100%",
            scrub: 2,
            pin: true,
  
          },
        }
      );
  
      gsap.from('.bg-svg-wrapper', {
        width: 0,
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 20%",
          end: "2000 -100%",
          scrub: true,
        }
  
      })
      
      return () => {
        pin.kill();
      };
      
      
      
    })

 
    


  }, []);



  return (
    <div className='home-story-container' ref={triggerRef}>
      <h1 className='simplify'>Simplifying</h1>
      <div className='bg-svg-wrapper'>
        <div className='sub-svg-wrapper'>
          <svg height="585" viewBox="0 0 1728 585" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-svg'>
            <path className='bg' d="M182.327 410.133C59.0557 279.45 -6.70886 177.314 -38.2139 101.055C-68.769 27.0948 -9.99043 23.4933 19.6841 97.8111C34.9389 132.777 101.566 220.433 132.973 259.891C194.89 350.218 319.545 425.005 374.133 451.108C551.358 532.148 659.039 420.149 672.499 413.775C682.185 409.188 782.147 308.968 845.679 244.471C858.796 231.154 870.58 216.279 884.433 203.728C921.103 170.504 999.65 113.369 1042.65 83.2422C1149.44 17.6819 1264.37 1.29187 1308.49 1.29187C1462.83 -5.26416 1588.16 58.657 1631.53 91.4372C1722.16 143.157 1770.25 233.788 1782.96 272.638C1839.04 413.775 1791.93 482.067 1782.96 522.132C1779.96 535.524 1767.32 556.801 1751.42 579.561C1742.94 591.701 1724.34 578.251 1726.79 563.644C1727 562.387 1727.16 562.548 1727.69 561.389C1752.34 507.46 1726.32 392.891 1710.05 341.841C1671.21 239.527 1606.17 181.787 1568.58 159.458C1559.95 154.326 1551.07 149.569 1542.49 144.329C1381.69 46.0438 1206.83 86.253 1137.99 119.665C1047.5 159.428 934.025 267.732 877.877 328.181C871.514 335.032 865.951 337.515 859.819 344.573C803.351 409.564 699.793 489.048 648.944 517.579C519.491 579.829 395.909 547.412 338.42 517.959C329.121 513.195 319.847 508.473 310.552 503.703C266.453 481.074 208.215 433.332 182.327 410.133Z" fill="#330152" />

          </svg>
        </div>


      </div>

      {/* <div className='home-card-crouser'>
        <div className='crouser-card'></div>
        <div className='crouser-card'></div>
      </div> */}

      <div ref={sectionRef} className="scroll-section-inner">
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Communication</h1>
            <p>
              We employ experienced consultants within the industries where our clients operate. These consultants collaborate directly with our research and analysis team, which specializes in crafting tailored questionnaires with precise and pertinent inquiries. These questionnaires are uniquely designed for each client, enabling us to delve into the core of their challenges, address them effectively, and deliver enhanced solutions.
            </p>
          </div>
        </div>
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Interface</h1>
            <p>Our bespoke business software, has an intuitive design that ensures that every user, regardless of their technical background, can seamlessly navigate and utilize the ERP system efficiently. We aim to minimize the learning curve and maximize productivity, empowering your team to leverage the full potential of the ERP platform effortlessly, contributing to a more productive and user-centric ERP experience for your company.</p>
          </div>
        </div>
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Scalability</h1>
            <p>The tailored nature of our solutions, shaped by a meticulous requirements analysis, and the latest tech that we use for development, allows the ERP software to seamlessly adapt to your unique business needs. With the agility provided by our software, your ERP system can efficiently scale with company growth and readily accommodate future changes, providing a dynamic and adaptable solution for sustained success.</p>
          </div>
        </div>
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Integration</h1>
            <p>The tailored nature of our solutions, shaped by a meticulous requirements analysis, and the latest tech that we use for development, allows the ERP software to seamlessly adapt to your unique business needs. With the agility provided by our software, your ERP system can efficiently scale with company growth and readily accommodate future changes, providing a dynamic and adaptable solution for sustained success.</p>
          </div>
        </div>
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Implementation</h1>
            <p>The versatility of our technology, combined with our tailored approach, ensures that our ERP solution can easily integrate with various platforms, databases, and applications within your organization. This facilitates a cohesive and interconnected business environment, where data flows seamlessly across departments, promoting efficiency and informed decision-making. </p>
          </div>
        </div>
        <div className="scroll-section">
          <div className='crouser-card'>
            <h1>Training</h1>
            <p>Through intuitive interfaces, interactive modules, and personalized training plans, we empower users with the knowledge and skills needed to navigate and leverage the full potential of our ERP systems effortlessly. Our commitment to user-friendly design and comprehensive support not only streamlines the training process but also fosters a culture of efficiency, allowing businesses to harness the true power of their ERP solutions from day one.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomeStory