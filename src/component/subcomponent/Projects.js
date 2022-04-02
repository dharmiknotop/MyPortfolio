//This component is used To show Project on Details on the left side
import Techicon from './Techicon'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useState } from 'react'
import Link from 'next/link'

const Projects = ({
  projectName,
  Projectinfo,
  projectImage,
  projecticon,
  projecticon1,
  projecticon2,
  projecticon3,
  iconname,
  iconname1,
  iconname2,
  iconname3,
  projectLink,
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
            <Link href={{ pathname: projectLink }}>
              <a>
                {' '}
                <h2 className="Roboto ">{projectName}</h2>{' '}
              </a>
            </Link>
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
              <Link href={{ pathname: projectLink }}>
                <a>
                  {' '}
                  <div className="overlay"></div>
                  <div className="BorderOverlay"></div>
                  <img src={projectImage} alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
