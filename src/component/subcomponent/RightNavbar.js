import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'

const RightNavbar = () => {
  return (
    <>
      <div className="right-navbar">
        <div className="item">
          <FiLinkedin size={20} />
        </div>
        <div className="item">
          <FaTwitter size={20} />
        </div>
        <div className="item">
          <AiFillGithub size={20} />
        </div>
        <div className="item">
          <FaTwitter size={20} />
        </div>
        <div id="verticaline"></div>
      </div>
    </>
  )
}

export default RightNavbar
