'use client'
import React, { useRef ,useState,useEffect} from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'



const Expertise = () => {
  const bgLineRef = useRef();
  const cardRefs = useRef([]);
  
  useGSAP(
    () => {
      let mm=gsap.matchMedia();
    
      mm.add("(min-width: 800px)", () => {
    
        gsap.registerPlugin(ScrollTrigger);
  
        gsap.from(bgLineRef.current, {
          width: 0,
  
          scrollTrigger: {
            trigger: bgLineRef.current,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
            ease: 'power4.in'
          }
  
        })
  
  
  const elements = ['.one', '.two', '.three', '.four'];
  
  
  const calculatePositions = () => {
    return [
      { start: 'top 70%', end: 'top 20%' ,yValue:100},
      { start: 'top 60%', end: 'top 20%',yValue:130 },
      { start: 'top 50%', end: 'top 20%',yValue:160 },
      { start: 'top 40%', end: 'top 20%', yValue: 180 }
    ];
  };
  
  
  
  
  const initializeAnimations = () => {
   
  
    const positions = calculatePositions();
  
    elements.forEach((el, index) => {
     const animation= gsap.from(el, {
        y: positions[index].yValue,
        opacity: 0,
        scrollTrigger: {
          trigger: '.section-five-card-container',
          start: positions[index].start,
          end: positions[index].end,
          scrub: true,
        }
      });
      return ()=>{
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
    <div className='home-section-five'>
      <div className='home-section-five-heading' style={{}} >
        <h1>We maintain a ZERO Implementation Failure</h1>
      </div>

      <div className='home-section-five-bg-line-container' ref={bgLineRef}>
        <div className='home-section-five-bg'>
        </div>

      </div>
      <div className='section-five-card-container' >
        <div className='section-five-card one' >
          <h1>05+</h1>
          <p>Years in Business</p>
        </div>
        <div className='section-five-card two'>
          <h1>150+</h1>
          <p>Projects Delivered</p>
        </div>
        <div className='section-five-card three' >
          <h1>100+</h1>
          <p>Team Members</p>
        </div>
        <div className='section-five-card four'>
          <h1>10+</h1>
          <p>Countries Served</p>
        </div>
      </div>

      <div className='home-section-five-pera-wrapper'>
        <p >No matter how good a software is, better implementation and <br/> practical usabilty is what makes a good software great</p>
      </div>

    </div>
  )
}

export default Expertise












