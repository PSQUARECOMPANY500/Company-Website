import React, { useState } from 'react'
import TextInputs from '../reusbleComponent/TextInputs'
import Logo from '../../../../public/Images/logo.png'
import Facebook from '../../../../public/Images/facebook.png'
import Instagram from '../../../../public/Images/Instagram.png'
import Twitter from '../../../../public/Images/twitter.png'
import Linkden from '../../../../public/Images/linkden.png'
import Image from 'next/image'

const Contact = () => {
  const [click, setClick] = useState({});
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


  return (
    <div className='contact'>
      <div className='contact-heading-wrapper'>
        <h1>Contact us</h1>
      </div>
      <div className='contact-form-container'>
        <div className='flex'>

          <TextInputs
            label={'First Name'}
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


        <TextInputs
          label={'Tell us about your project'}
          name={'project'}
          onFocus={handleClick}
          value={userData.project}
          onChange={handlePersonalInputChange}
          click={click.project}
          onBlur={handleClickFalse}
          w={'55rem'}

        />

        <div className='project-budget-wrapper'>
          <h5>Project budget(USD)</h5>
          <div className='project-card-container'>

            <div className='budget-card'>
              <h5>10-20K</h5>
            </div>
            <div className='budget-card'>
              <h5>30-40K</h5>
            </div>
            <div className='budget-card'>
              <h5>40-50K</h5>
            </div>
            <div className='budget-card'>
              <h5>50-100K</h5>
            </div>
            <div className='budget-card'>
              <h5>&gt;100K</h5>
            </div>
          </div>
        </div>
        
      </div>

      <button>Send message</button>
      <div className='contact-bottom'>
        <Image src={Logo} alt='psqr logo' height={30} />
        <div className='icons-container'>
          <Image src={Facebook} alt='psqr logo facebook' className='icon' height={25} width={25}/>
          <Image src={Instagram} alt='psqr logo instagram' className='icon' height={25} width={25} />
          <Image src={Linkden} alt='psqr logo linkden' className='icon' height={25} width={25}/>
          <Image src={Twitter} alt='psqr logo twitter' className='icon' height={25} width={25} />

        </div>
      </div>
    </div>
  )
}

export default Contact