"use client"
import React from 'react'
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

const homePage = () => {
  return (
    <div  >
<LandingPage/>
<HomePageIntro/>
<HomeStory/>
<Expertise/>
<Industry/>
<Founders/>
<OurExpertise/>
<WorldMap/>
< Product/>
<Story/>
    </div>
  )
}

export default homePage