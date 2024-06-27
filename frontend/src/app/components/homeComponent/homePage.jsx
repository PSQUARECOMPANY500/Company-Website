"use client"
import React, { useRef, useState } from 'react'
import './home.css'
import LandingPage from './landingPage'
import HomePageIntro from './homePageIntro'
import HomeStory from './HomeStory'
import Expertise from './Expertise'
import Industry from './Industry'
import Founders from './Founders'
import OurExpertise from './OurExpertise'
import WorldMap from './WorldMap'
import Product from './Product'
import Story from './Story'
import Contact from './Contact'
import logo from "../../../../public/Images/logoDraw.png"
import Image from 'next/image'


const homePage = () => {
  const contactRef=useRef();
  const produtref=useRef();


  const scrollToRef = () => {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  };
  const scrollToProd = () => {
      produtref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div  >
         <div className='nav-container' style={{position:'fixed',zIndex:'99'}}>
        <div className="nav-inner-container">

      <h1 onClick={scrollToRef}>contact us</h1>
        <Image src={logo} alt='logo psqr' height={53} width={53} className='psqr-logo'/>
        <h1 onClick={scrollToProd} >Our Products</h1>
        </div>
    </div>
      <LandingPage />
      <HomePageIntro />
      <HomeStory />
      <Expertise />
      <Industry />
      <Founders />
      <OurExpertise />
      <WorldMap />
      <div ref={produtref}></div>
      < Product />
      <Story />
      <div ref={contactRef} >

      <Contact/>
      </div>
    </div>
  )
}

export default homePage