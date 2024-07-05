'use client'
import React, { useEffect, useState } from 'react'
import TextInputs from '../reusbleComponent/TextInputs'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import TextAreaInput from '../reusbleComponent/TextAreaInput'


const Contact = () => {
  const [click, setClick] = useState({});
  const [loader, setLoader] = useState(false)
  const [userData, setUserData] = useState({})

  const handleClick = (e) => {
    const { name } = e.target;
    setClick({ ...click, [name]: true });
  }


  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleClickFalse = (e) => {
    const { name } = e.target;
    setClick({ ...click, [name]: false });
  }

  const submitHandler = () => {
    try {
      if (!userData.firstName || !userData.email || !userData.project || !userData.budget) {
        console.log('Please enter all required fields');
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const valid = userData.email ? emailPattern.test(userData.email) : true
      if (!valid) {
        return console.log('Please enter valid email');
      }


      const { data } = axios.post('https://psquarecompany.com/api/contact/contact-us', { name: userData.firstName, email: userData.email, projectDesc: userData.project, budget: userData.budget })
      setUserData({
        firstName: '',
        email: '',
        project: '',
        budget: '',
      });
      setLoader(true);
      setTimeout(() => {
        setLoader(false)
      }, 1000);
    } catch (e) {
      console.log(e);

    }
  }

  return (
    <div className='contact'>
      <div className='contact-heading-wrapper'>
        <h1>Contact us</h1>
      </div>
      <div className='contact-form-container'>
        <div className='flex'>

          <TextInputs
            label={'Full Name'}
            name={'firstName'}
            onFocus={handleClick}
            value={userData.firstName}
            onChange={handlePersonalInputChange}
            click={click.firstName}
            onBlur={handleClickFalse}

          />

          <TextInputs
            label={'Email'}
            name={'email'}
            onFocus={handleClick}
            value={userData.email}
            onChange={handlePersonalInputChange}
            click={click.email}
            onBlur={handleClickFalse}

          />
        </div>



        <TextAreaInput
          label={'Tell us about your project'}
          name={'project'}
          onFocus={handleClick}
          value={userData.project}
          onChange={handlePersonalInputChange}
          click={click.project}
          onBlur={handleClickFalse}

          isBig={true}
        />

        <div className='project-budget-wrapper'>
          <h5>Project budget(USD)</h5>
          <div className='project-card-container'>

            <div className='budget-card' onClick={() => setUserData({ ...userData, budget: '10-20k' })} style={{ backgroundColor: userData?.budget === '10-20k' && '#ffffff81', border: userData?.budget === '10-20k' && 'none' }}>

              <h5 style={{ color: userData?.budget === '10-20k' && '#393939' }} >10-20K</h5>
            </div>
            <div className='budget-card card-budget' onClick={() => setUserData({ ...userData, budget: '30-40k' })} style={{ backgroundColor: userData?.budget === '30-40k' && '#ffffff81', border: userData?.budget === '30-40k' && 'none' }}>
              <h5 style={{ color: userData?.budget === '30-40k' && '#393939' }}>30-40K</h5>
            </div>
            <div className='budget-card' onClick={() => setUserData({ ...userData, budget: '40-50k' })} style={{ backgroundColor: userData?.budget === '40-50k' && '#ffffff81', border: userData?.budget === '40-50k' && 'none' }}>
              <h5 style={{ color: userData?.budget === '40-50k' && '#393939' }}>40-50K</h5>
            </div>
            <div className='budget-card' onClick={() => setUserData({ ...userData, budget: '50-100k' })} style={{ backgroundColor: userData?.budget === '50-100k' && '#ffffff81', border: userData?.budget === '50-100k' && 'none' }}>
              <h5 style={{ color: userData?.budget === '50-100k' && '#393939' }}>50-100K</h5>
            </div>
            <div className='budget-card' onClick={() => setUserData({ ...userData, budget: '>100k' })} style={{ backgroundColor: userData?.budget === '>100k' && '#ffffff81', border: userData?.budget === '>100k' && 'none' }}>
              <h5 style={{ color: userData?.budget === '>100k' && '#393939' }}>&gt;100K</h5>
            </div>
          </div>
        </div>


      </div>

      <button type='submit' onClick={submitHandler} className={loader ? 'but2' : 'but'}>

        {!loader ?
          <>
            <span className='msg1'>Send message </span>
            <Image src='/Images/MessageIcon.png' alt='psqr logo' className='msg-icon' height={35} width={35}/>
          </>
          :
          (

            <>
 {/* <Image src='/Images/msgIcon.png' alt='psqr logo' className='msg-icon' height={35} width={35}/> */}
              <span className='msg2'>Message Sent Successfully </span>
            </>
          )}

      </button>
      <div className='contact-bottom'>
        <Image src='/Images/logo.png' alt='psqr logo' height={32} width={130} />
        <div className='icons-container'>
          <Link href='https://www.youtube.com/@PSQUARECOMPANY'>
            <Image src='/Images/youtube.png' alt='psqr logo facebook' className='icon' height={25} width={25} style={{ cursor: 'pointer' }} /></Link>

          <Link href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fpsquarecompany%2F&is_from_rle'>
            <Image src='/Images/Instagram.png' alt='psqr logo instagram' className='icon' height={25} width={25} /></Link>


          <Link href=' https://www.linkedin.com/company/psquare-company/'>
            <Image src='/Images/linkden.png' alt='psqr logo linkden' className='icon' height={25} width={25} />
          </Link>
          <Link href='https://x.com/i/flow/login?redirect_after_login=%2FPSQAURECOMPANY'>
            <Image src='/Images/twitter.png' alt='psqr logo twitter' className='icon' height={25} width={25} />
          </Link>

        </div>
      </div>

    </div>
  )
}

export default Contact