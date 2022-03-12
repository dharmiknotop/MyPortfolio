import React from 'react'
import Techstack from './Techstack'
import { FaUserAlt } from 'react-icons/fa'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'

import { useState, useEffect, useRef } from 'react'
const About = () => {
  gsap.registerPlugin(ScrollTrigger)
  const Tl = useRef()
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
  }, [])

  return (
    <div style={{ height: '90vh' }}>
      <div className="border AboutAnimation">
        <h1 className="Logofont AboutMe ">
          <FaUserAlt color="cyan" size={20} style={{ marginRight: '1rem' }} />
          About Me
        </h1>

        <div
          className="DivideDiv "
          style={{ fontSize: '1.4rem', fontWeight: '800' }}
        >
          <div className="  "> </div>

          <div className="container">
            <div className="aboutme gray">
              <p>
                Hey, I am <span> Dharmik Upadhyay</span>. I am currently Doing
                diploma in <span>Gandhinagar Government Polytechnic </span>
                college. I live in Mehsana, Gujrat.
              </p>
              I am very much into <span>web dev</span> and <span>DevOps</span>.
              As of now I am learning Devops My Tech stack for now are :
              <div className="DivideDiv white ">
                <div className="  ">
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                </div>
                <div className=" end  ">
                  <Techstack name="ReactJs" />
                  <Techstack name="ReactJs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
