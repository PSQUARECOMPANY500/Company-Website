'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

const Product = () => {
  const [mobileSize,setIsMobileSize]=useState(false);
  useEffect(()=>{
    const checkMobileSize=()=>{
  setIsMobileSize(window.innerWidth<=599)
    }

    checkMobileSize()

    window.addEventListener('resize', checkMobileSize);

    return ()=>{
      window.removeEventListener('resize', checkMobileSize);
    }
  
},[])


  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      let mm=gsap.matchMedia();

      mm.add("(min-width: 800px)", () => {

        gsap.from('.product-line', {
              width: 0,
      
              scrollTrigger: {
                trigger: '.product-cards-container',
                start: 'top 80%',
                end: 'top 40%',
                scrub: true,
                ease: 'power4.in',
      
              }
      
            })
            const elements = ['.onepr', '.twopr', '.threepr'];
            const calculatePositions = () => {
              return [
                { start: 'top 80%', end: 'top 20%', yValue: 80 },
                { start: 'top 70%', end: 'top 20%', yValue: 100 },
                { start: 'top 60%', end: 'top 20%', yValue: 120 },
      
              ];
            };
      
      
      
      
            const initializeAnimations = () => {
      
      
              const positions = calculatePositions();
      
              elements.forEach((el, index) => {
      
                const animation = gsap.from(el, {
                  y: positions[index].yValue,
                  opacity: 0,
      
                  scrollTrigger: {
                    trigger: '.product-cards-container',
                    start: positions[index].start,
                    end: positions[index].end,
                    scrub: true,
                  }
                });
                return () => {
                  animation.kill();
                }
              });
            };
      
      
            initializeAnimations();
      
            window.addEventListener('resize', () => {
              ScrollTrigger.refresh();
              initializeAnimations();
            });
      })





    }
    , [])


  return (
    <div className='product-container'>
      <div className='product-content'>

        <div className='product-heading-wrapper'>
          <h1>Our Innovative Products</h1>
        </div>
        <div className='product-pera-wrapper'>
          <p>Discover our cutting-edge products designed to meet your needs and <br /> exceed your expectations.
          </p>
        </div>
      </div>

      <div className='product-cards-container'>


        <div className='product-line'></div>

        <div className='product-card-wrapper onepr'>
          <div className='product-card '>

            <Image src='/Images/AI.png' alt='psqr Ai Card' className='product-img' height={100} width={100} style={{height:mobileSize?'22vw':'10vw',width:mobileSize?'22vw':'10vw'}}/>
            <p >Industry 4.0</p>
          </div>
          <p >Industry 4.0</p>
        </div>
        <div className='product-card-wrapper twopr'>

          <div className='product-card'>
            <Image src='/Images/publicService.png'  alt='psqr Ai Card' className='product-img'  height={100} width={100} style={{height:mobileSize?'22vw':'10vw',width:mobileSize?'22vw':'10vw'}}/>
            <p>Service Management</p>
          </div>
          <p>Service Management</p>
        </div>
        <div className='product-card-wrapper threepr'>
          <div className='product-card'>
            <Image src='/Images/sales.png'  alt='psqr Ai Card' className='product-img'  height={100} width={100} style={{height:mobileSize?'22vw':'10vw',width:mobileSize?'22vw':'10vw'}} />
            <p>Sales</p>
          </div>
          <p>Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Product