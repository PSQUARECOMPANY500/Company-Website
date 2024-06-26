import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const TextInputs = ({
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
  

}) => {
  // // const DynamicPlayer = dynamic(() => import('@lordicon/react').then(mod => mod.Player), { ssr: false })

  // // const playerRef = useRef(null);
 


  // const handleMouseEnter = () => {
  //   if (!ICON) {
  //     return;
  //   }
  //   playerRef.current?.playFromBeginning();
  // };


  // useEffect(() => {
  //   if (!ICON) {
  //     return;
  //   }
  //   playerRef.current?.playFromBeginning();
  // }, [])


  return (
    <div className="input-container" style={{ width: `${w}`, marginTop: '20px' }} onClick={handleCalendarOpen} >
      <input
        className="input-field"
        type={type}
        name={name}
        id={name}
        autoComplete={name}
        onChange={onChange}
        readOnly={read}
        value={value}
        style={{ opacity: '0' ,zIndex:`${zIn}`}}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
       
      />

      <label htmlFor={name} className={'input-label'}
        style={{
          top: click ? "-20px" : '-3px',
          // color: click ?"#330152" :!valid&&!click? '#CF352E':'',
          fontWeigh: click ? "500" : '500',
          fontSize: click ? "0.7vw" : '1.1vw',
          zIndex: '999'
        }}

      >
        <sub>{label}</sub>
      </label>
      <div className="input-highlight" 

      style={{width:click&&'100%'}}
      ></div>
      <div className='input-line'></div>
      <p style={{width:!click?'70%':'100%',fontSize:type==='Number'&&'0.8rem'||type==='Date'&&'0.7rem',position:'absolute', left: click && '0%', right: !click && `${r}`,textAlign:click?'start':'end',top:type==='Date'&&'22%',
      textOverflow:!click&&'ellipsis'
    }}>{value}</p>

     

    </div>
  );
};

export default TextInputs;
