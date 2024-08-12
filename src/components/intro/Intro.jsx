import React, { useEffect, useRef } from 'react'
import './Intro.scss'
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    console.log(textRef)
    init(textRef.current,{
      showCursor:true,
      backDelay: 1500,
      backSpeed: 60,
      strings:["Developer","Designer","Content Creater"],
    });
  },[]);
  return (
    <div className='intro' id='intro'>

      <div className="left">
        <div className="imgContainer">
          <img src="Assets/man.png" alt="" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sujal Patidar</h1>
          <h3>Freelancer <span ref={textRef}></span></h3>
        </div>

        <a href="#portfolio">
          <img src="Assets/down.png" alt="" />
        </a>
      </div>

    </div>
  )
}
