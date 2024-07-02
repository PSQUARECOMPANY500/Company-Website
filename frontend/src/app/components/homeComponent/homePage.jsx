"use client"
import React, { useEffect, useRef, useState } from 'react'
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
import Slider from '../commonComponent/Slider'
import ScrollToTop from '../commonComponent/ScrollToTop'



const homePage = () => {
  const contactRef = useRef();
  const produtref = useRef();
  const homeIntroRef = useRef();
  const homeStoryRef = useRef();
  const expertiseRef = useRef();
  const industryRef = useRef();
  const foundersRef = useRef();
  const ourExpertiseRef = useRef();
  const worldMapRef = useRef();
  const storyRef = useRef();
  const landingpageRef = useRef();
  const [isVisible, setIsVisible] = useState({})
  const [sliderHeading, setSliderHeading] = useState(null);
  const [calculateWidth, setcalCulateWidth] = useState();




  const scrollToRef = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const scrollToProd = () => {
    produtref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const scrollToNext = () => {
    const refss = [
      { ref1: homeStoryRef, id: 'our story' },
      { ref1: ourExpertiseRef, id: 'our expertise'},
      { ref1: storyRef, id: 'testimonials' },
      { ref1: contactRef, id: 'contact us' },
      { ref1: produtref, id: 'our products' }
    ];

    const el = refss.filter((elem) => {
      console.log(sliderHeading)
      if (elem.id === sliderHeading) {
        console.log(elem.ref1.current)
        elem.ref1.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }


  const callbackFun = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      setIsVisible(prevState => {
        if (prevState[id] !== entry.isIntersecting) {
          return {
            ...prevState,
            [id]: entry.isIntersecting,
          };
        }
        return prevState;
      });
    });
  };

  useEffect(() => {
    
    const refs = [
      { ref: landingpageRef, id: 'landingpage' },
      { ref: homeIntroRef, id: 'our story' },
      { ref: homeStoryRef, id: 'our expertise'},
      { ref: ourExpertiseRef, id: 'our products'},
      { ref: produtref, id: 'testimonials'},
      { ref: storyRef, id: 'contact us' },
      { ref: contactRef, id: 'co' },
      
    ];
    
    refs.forEach(({ ref, id, num }) => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold:ref===contactRef?0.9:0.1
      };
  
      const observer = new IntersectionObserver(callbackFun, options);
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
   return ()=>{
     if (ref.current) {
       observer.unobserve(ref.current);
     }
    }
    
    });

    return () => {
      refs.forEach(({ ref }) => {
      });
    };
  }, [homeIntroRef, homeStoryRef]);

  useEffect(() => {
    const el = Object.entries(isVisible).filter(([key, value]) => value === true);
    el.forEach((el) => {
      setSliderHeading(el[0])
    })
  }, [isVisible]);

  return (
    <div  >
      <div className='nav-container' style={{ position: 'fixed', zIndex: '99' }}>
        <div className="nav-inner-container">
          <h1 onClick={scrollToRef}>contact us</h1>
          <Image src={logo} alt='logo psqr' height={53} width={53} className='psqr-logo' />
          <h1 onClick={scrollToProd} >Our Products</h1>
        </div>
      </div>
      <div className='scroll-animatiomn'
      ref={landingpageRef}>
        <LandingPage />
      </div>

      <div className='scroll-animatiomn' ref={homeIntroRef}>
        <HomePageIntro />
        <HomeStory />
        <Expertise />
      </div>
      <div className='scroll-animatiomn' ref={homeStoryRef}>
        <Industry />
        <Founders />
      </div>
       
      <div className='scroll-animatiomn' ref={ourExpertiseRef}>
        <OurExpertise />
        <WorldMap />    
      </div>
      <div className='scroll-animatiomn'  ref={produtref}>
        < Product />
      </div>
      <div className='scroll-animatiomn' ref={storyRef}>
        <Story />
      </div>
      <div className='scroll-animatiomn' ref={contactRef} >
        <Contact />
      </div>
      {sliderHeading !== null && sliderHeading !== 'landingpage' && sliderHeading !== 'co' && <Slider sliderHeading={sliderHeading} scrollToNext={scrollToNext} calculateWidth={calculateWidth} /> }
       {sliderHeading === 'co'&& <ScrollToTop/>}
    </div>
  )
}

export default homePage