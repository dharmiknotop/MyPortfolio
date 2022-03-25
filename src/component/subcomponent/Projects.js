import Techicon from './Techicon'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useState } from 'react'

const Projects = ({
  projectName,
  Projectinfo,
  Projectimage,
  projecticon,
  projecticon1,
  projecticon2,
  projecticon3,
  iconname,
  iconname1,
  iconname2,
  iconname3,
  projectname,
}) => {
  gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    VanillaTilt.init(document.querySelector('.overlayDiv'), {
      max: 25,
      speed: 10,
    })
    gsap.fromTo(
      '.ProjectAnimation',
      {
        y: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
    )
    gsap.fromTo(
      '.overlayDiv-Right',
      {
        x: -50,
        autoAlpha: 0,
        duration: 1,
      },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.Project',
          start: 'top center',
          triggerActions: 'play none none reverse',
          end: 'bottom bottom ',
        },
      },
    )
  }, [])
  return (
    <>
      <div className="Project">
        <div className="DivideDiv">
          <div className="ProjectAnimation">
            <h2 className="Roboto ">{projectName}</h2>
            <span className="gray ">
              <spam style={{ fontFamily: 'Fredoka' }}>{Projectinfo}</spam>
              <div className="row">
                <Techicon Techicon1={projecticon1} Techname={iconname} />
                <Techicon Techicon1={projecticon} Techname={iconname1} />
                <Techicon Techicon1={projecticon2} Techname={iconname2} />
                <Techicon Techicon1={projecticon3} Techname={iconname3} />
              </div>
            </span>
          </div>
          <div className="ProjectImg d-flex justify-content-center ">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="10"
              className="overlayDiv overlayDiv-Right"
            >
              <div className="overlay"></div>
              <div className="BorderOverlay"></div>
              <img src="./Capture.JPG" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
