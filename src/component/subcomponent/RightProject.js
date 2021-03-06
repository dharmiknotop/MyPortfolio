//This component is used To show Project Details on the right side
import Techicon from './Techicon'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import Link from 'next/link'

const RightProjects = ({
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
  useEffect(() => {
    VanillaTilt.init(document.querySelector('.overlayDiv'), {
      max: 25,
      speed: 10,
    })
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      '.ProjectRAnimation',
      {
        x: 50,
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
    gsap.fromTo(
      '.overlay-left',
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
          <div className="ProjectImg d-flex justify-content-center ">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="overlayDiv overlay-left"
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
          <div className="  ProjectRAnimation">
            <Link href={{ pathname: projectLink }}>
              <a>
                {' '}
                <h2 className="Roboto ">{projectName}</h2>{' '}
              </a>
            </Link>
            <span className="gray">
              <spam style={{ fontFamily: 'Fredoka' }}>{Projectinfo}</spam>
              <div className="row">
                <Techicon Techicon1={projecticon1} Techname={iconname} />
                <Techicon Techicon1={projecticon} Techname={iconname1} />
                <Techicon Techicon1={projecticon2} Techname={iconname2} />
                <Techicon Techicon1={projecticon3} Techname={iconname3} />
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default RightProjects
