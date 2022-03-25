import React from 'react'
import Techstack from './Techstack'
import { FaUserAlt } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'

import { useEffect, useRef } from 'react'
const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    gsap.fromTo(
      '.AboutMe',
      {
        y: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 2,
        scrollTrigger: {
          trigger: '.Myimg',
          start: 'bottom center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
    )
    gsap.fromTo(
      '.aboutme',
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        x: 0,
        scrollTrigger: {
          trigger: '.Myimg',
          // markers: true,
          start: 'bottom center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
      '<',
    )
    gsap.fromTo(
      '.AboutImg',
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: '.Myimg',
          // markers: true,
          start: 'bottom center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
      '<',
    )
  }, [])

  return (
    <div style={{ height: '100vh' }}>
      <div className=" container border AboutAnimation ">
        <h1 className="Logofont AboutMe ">
          <FaUserAlt color="cyan" size={20} style={{ marginRight: '1rem' }} />
          About Me
        </h1>

        <div className="DivideDiv About" style={{ fontWeight: '800' }}>
          <div className="AboutDiv d-flex justify-content-center align-items-center ">
            <div className="AboutImg "></div>
          </div>
          <div className="container d-flex justify-content-center align-items-center">
            <div className="aboutme gray  ">
              <p>
                Hey, I am <span className="cyan"> Dharmik Upadhyay</span>. I am
                currently Doing diploma in{' '}
                <span className="cyan">
                  Gandhinagar Government Polytechnic{' '}
                </span>
                college. I live in Mehsana, Gujrat.
              </p>
              I am very much into <span>web dev</span> and <span>DevOps</span>.
              As of now I am learning Devops My Tech stack for now are :{' '}
              <span className="cyan">React,MongoDB,NextJS,React Native.</span>
              {/* <div className="DivideDiv DivideStack white ">
                <div className=" ">
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                </div>
                <div className="end">
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
