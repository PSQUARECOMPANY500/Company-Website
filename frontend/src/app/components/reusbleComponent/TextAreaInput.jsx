'use client'
import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';


const TextAreaInput = ({
  type = 'text',
  name,
  label,
  w = '26rem',
  value,
  onChange,
  read = false,
  handleCalendarOpen,
  click,
  onBlur,
  onFocus,
  ICON,
  r='0',
  onKeyPress,
  zIn='0',
  valid=true,
  isSmall=false,
  isBig=false,
  

}) => {


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



  return (
    <div className={isBig?'input-container big':'input-container'}style={{ width: `${w}`, marginTop: '20px' }} onClick={handleCalendarOpen} >
      <textarea
        className="input-field textarea-field"
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        onChange={onChange}
        readOnly={read}
        value={value}
        // style={{ opacity: '0' ,zIndex:`${zIn}`}}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        style={{resize:'none',marginTop:'30px',overflow:'hidden'}}
       
      />

      <label htmlFor={name} className={'input-label'}
        style={{
          top: click ? mobileSize?'-10px':"-10px" :mobileSize?'1px': '-3px',
          // color: click ?"#330152" :!valid&&!click? '#CF352E':'',
          fontWeigh: click ? "500" : '500',
          fontSize: click ? mobileSize?'16px':"0.7vw" :mobileSize? '16px': '1.1vw',
          zIndex: '999'
        }}

      >
        <sub>{label}</sub>
      </label>
      <div className="input-highlight" 

      style={{width:click&&'100%'}}
      ></div>
      <div className='input-line'></div>
      {/* <p style={{width:!click?'70%':'100%',fontSize:type==='Number'&&'0.8rem'||type==='Date'&&'0.7rem',position:'absolute', left: click && '0%', right: !click && `${r}`,textAlign:click?'start':'end',top:type==='Date'&&'22%',
      textOverflow:!click&&'ellipsis'
    }}>{value}</p> */}

     

    </div>
  );
};

export default TextAreaInput
