import { gsap } from 'gsap/dist/gsap'
import { useState, useEffect, useContext, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import '../../vanilla-tilt'

const Home = () => {
  const tl = useRef()
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .fromTo(
        '.firsttext',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        },
      )
      .fromTo(
        '.secondtext',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        },
        '-=0.6',
      )
      .fromTo(
        '.thirdtext',
        {
          autoAlpha: 0,
          y: '-100%',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0%',
          duration: 1,
        },
        '-=0.7',
      )
      .fromTo(
        '.textalignment',
        {
          y: '0%',
        },
        {
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          y: '-100%',
          duration: 1,
        },
        '+=.5',
      )
      .to(
        '.slider ',
        {
          y: '-100%',
          duration: 1,
        },
        '-=0.8',
      )
      .fromTo(
        '.Myimg',
        {
          autoAlpha: 0,
          y: '100',
          duration: 1,
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
        },
        {
          autoAlpha: 1,
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          y: '0',
          duration: 1,
        },
        '<+=.2',
      )
      .fromTo(
        '.Nameis ',
        {
          autoAlpha: 0,
          y: '100',
          duration: 1,
        },
        {
          autoAlpha: 1,
          y: '0',
          duration: 1,
        },
        '<',
      )
      .fromTo(
        '.Title ',
        {
          autoAlpha: 0,
          y: '100',
          duration: 1,
        },
        {
          autoAlpha: 1,

          y: '0',
          duration: 1,
        },
        '<',
      )
      .fromTo(
        '.My-Info',
        {
          autoAlpha: 0,
          duration: 1,
        },
        {
          autoAlpha: 1,
          ease: 'SlowMo.ease.config(0.7, 0.7, false)',
          duration: 1,
        },
        '-=0.5',
      )
  }, [])
  return (
    <>
      <div className="slider cyan ">
        <div className="textalignment Logofont ">
          <div className="firsttext ">
            Welcome to <br />
          </div>
          <div className="gray secondtext">
            &lt;<span className="white Logofont">Dharmik</span> /&gt;
          </div>
          <div className="thirdtext"> Portfolio website.</div>
        </div>
      </div>
      <div className="MainHome">
        <div className="DivideDiv Home2 TitleDescription  ">
          <div className="container TitleDiv t-2">
            <div className=" Nameis">
              <span className="cyan ">Hi, my Name is</span>
            </div>
            <h2 className="white mainfont Title  ">Dharmik Upadhyay</h2>
            <div className="Typing-effect My-Info">
              <span>I'm a</span>

              <Typewriter
                className="Typewriter"
                options={{
                  autoStart: true,
                  loop: true,
                  strings: [
                    'Software Engineer',
                    'Web developer',
                    'Android developer',
                  ],
                  delay: 40,
                }}
              />
            </div>
          </div>

          <div className="imgcont TitleDiv container">
            <div className="" style={{ position: 'relative' }}>
              <div className="Myimg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
