import React from 'react'
import { BsBriefcaseFill } from 'react-icons/bs'
import { IoMdArrowDropright } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import Fade from 'react-reveal/Fade'
const MyExprience = () => {
  const [firstExp, setFirstExp] = useState('true')
  const [secondExp, setSecondExp] = useState('false')
  const [thirdExp, setThirdExp] = useState('false')
  const [fourthExp, setFourthExp] = useState('false')
  const ChangeTheState = (value) => {
    value === 'FirstExp' ? setFirstExp('true') : setFirstExp('false')
    value === 'SecondExp' ? setSecondExp('true') : setSecondExp('false')
    value === 'ThirdExp' ? setThirdExp('true') : setThirdExp('false')
    value === 'FourthExp' ? setFourthExp('true') : setFourthExp('false')
  }
  useEffect(() => {
    gsap.fromTo(
      '.transition',
      {
        autoAlpha: 0,
        duration: 1,
      },
      {
        autoAlpha: 1,
        duration: 1,
      },
    )
  }, [])
  return (
    <div className="" style={{ height: '80vh' }}>
      {' '}
      <h1 className="Logofont projectTitle  ">
        <BsBriefcaseFill color="cyan" />
        My Experience
      </h1>
      <div className="Expconatiner d-flex ">
        <div className="MyExperience ">
          <ul className="Jobs">
            <li
              className={firstExp === 'true' ? 'active' : null}
              onClick={() => {
                ChangeTheState('FirstExp')
              }}
            >
              FirstExp
            </li>
            <li
              className={secondExp === 'true' ? 'active' : 'null'}
              onClick={() => {
                ChangeTheState('SecondExp')
              }}
            >
              SecondExp
            </li>
            <li
              className={thirdExp === 'true' ? 'active' : null}
              onClick={() => {
                ChangeTheState('ThirdExp')
              }}
            >
              ThirdExp
            </li>
            <li
              className={fourthExp === 'true' ? 'active' : null}
              onClick={() => {
                ChangeTheState('FourthExp')
              }}
            >
              FourthExp
            </li>
          </ul>
          <div
            className="
       "
          >
            {firstExp === 'true' ? (
              <>
                <FirstExperience />
              </>
            ) : null}
            {secondExp === 'true' ? (
              <>
                <SecondExperience />
              </>
            ) : null}
            {thirdExp === 'true' ? (
              <>
                <ThirdExperience />
              </>
            ) : null}
            {fourthExp === 'true' ? (
              <>
                <FourthExperience />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}

const FirstExperience = () => {
  return (
    <>
      <Fade>
        <div className="ExpDiv">
          <p>My First Internship was at this place.</p>
          <p className="d-flex transition">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
const SecondExperience = () => {
  return (
    <>
      {' '}
      <Fade>
        <div className="ExpDiv">
          <p>My second Internship was at this place.</p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
const ThirdExperience = () => {
  return (
    <>
      <Fade>
        {' '}
        <div className="ExpDiv">
          <p>My Third Internship was at this place.</p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
const FourthExperience = () => {
  return (
    <>
      <Fade>
        <div className="ExpDiv">
          <p>My Fourth Internship was at this place.</p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
          <p className="d-flex">
            {' '}
            <IoMdArrowDropright color="cyan" /> I made this and this and this
          </p>
        </div>
      </Fade>
    </>
  )
}
export default MyExprience
