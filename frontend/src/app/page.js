"use client"
import Image from "next/image";
import styles from "./page.module.css";
// import locomotiveScroll from 'locomotive-scroll'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from '@gsap/react';

import HomePage from "./components/homeComponent/homePage";
import dynamic from 'next/dynamic';


const LocomotiveScroll = dynamic(() => import('locomotive-scroll'), { ssr: false });



gsap.registerPlugin(useGSAP);





export default function Home() {


  const scrollRef = useRef(null);
  const hRef = useRef();

  // useEffect(() => {
  //   scrollRef.current = new locomotiveScroll({
  //     el: document.querySelector('#main'),
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scrollRef.current) {
  //       scrollRef.current.destroy();
  //     }
  //   };
  // }, []);
  useEffect(() => {
    let locomotiveScroll;

    if (typeof window !== 'undefined') {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        locomotiveScroll = new LocomotiveScroll.default({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
        });
      });
    }

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  useGSAP(
    () => {

      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.landing-page-container h1', {
        opacity: 1,
        filter: "drop-shadow(2px 4px rgba(0, 0, 0, 0.2))",
        filter:
          "drop-shadow(4px 8px 4px rgba(0, 0, 0, 0.2)) drop-shadow(2px 4px 5px rgba(0, 0, 0, 0.2)) drop-shadow(-4px -4px 5px rgba(255, 255, 255, 0.75)) drop-shadow(2px 4px rgba(255, 255, 255, 0.1)) drop-shadow(-2px -5px rgba(255, 255, 255, 0.75))",
        duration: 3,
        ease: "power.in",


      });





      gsap.from('.intro-heading-wrapper h1', {
        duration: 1,
        y: 150,
        opacity: 0,
        scrub: 3,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.intro-heading-wrapper',
          start: "200 80%",
          end: 'top top',
          scrub: 2,


        },
      });


      const introPera = document.querySelector('.intropera')
      const lettersPera = introPera.textContent.split("");
      introPera.textContent = "";

      lettersPera.forEach((letter) => {
        introPera.innerHTML += '<span class="letterPera">' + letter + '</span>'
      })


      const introsubPera = document.querySelector('.introsubpera')
      const letterssubPera = introsubPera.textContent.split("");
      introsubPera.textContent = "";

      letterssubPera.forEach((letter) => {
        introsubPera.innerHTML += '<span class="lettersubPera">' + letter + '</span>'
      })


      gsap.set(".letterPera", { perspective: 400 })
      gsap.from(".letterPera", {
        opacity: 0, stagger: 0.1, duration: 1, scrollTrigger: {
          trigger: '.intropera',
          start: "60% bottom",
          end: 'top 70%',
          scrub: 2,

        }
      })

      gsap.set(".lettersubPera", { perspective: 400 })
      gsap.from(".lettersubPera", {
        opacity: 0, stagger: 0.1, duration: 5, scrollTrigger: {
          trigger: '.introsubpera',
          start: "10% 80%",
          end: 'top 60%',
          scrub: 2,

        }
      })

      // gsap.to('.intro-container-overlay', {
      //   duration: 1,
      //   ease: "power1.out",
      //   stagger: 0.2,
      //   scrollTrigger: {
      //     trigger: '.intro-container-overlay',
      //     start: "top top",
      //     end: `bottom top`,
      //     scrub: 2,
      //     pin: true, 
          
      //   },
      // })


 


      gsap.to('.introsubpera', {
        duration: 1,
        ease: "power1.out",
        stagger: 0.2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.home-story-container',
          start: "top bottom",
          end: 'top 80%',
          scrub: 2,


        },
      });
      gsap.to('.intropera', {
        duration: 1,
        ease: "power1.out",
        stagger: 0.2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.home-story-container',
          start: "100 bottom",
          end: 'top 68%',
          scrub: 2,


        },
      });

      gsap.to('.heading-span', {
        duration: 2,
        ease: "power1.out",
        stagger: 0.2,
        opacity: 0,
        scrollTrigger: {
          trigger: '.home-story-container',
          start: "top 72%",
          end: 'top 40%',
          scrub: 2,

        },
      });



      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (max-width: 1439px) ", () => {
        gsap.to('.intro-container-overlay', {
          duration: 1,
          ease: "power1.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.intro-container-overlay',
            start: "top top",
            end: `bottom -440%`,
            scrub: 2,
            pin: true, 
            
          },
        })
  
      });

      mm.add("(min-width: 1440px)", () => {
        gsap.to('.intro-container-overlay', {
          duration: 1,
          ease: "power1.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.intro-container-overlay',
            start: "top top",
            end: `bottom -330%`,
            scrub: 2,
            pin: true, 
            
          },
        })
  
      });






    }
    , [])
  return (
    <main className={styles.main} id='main' ref={hRef}>
      <HomePage />

    </main>
  );
}
