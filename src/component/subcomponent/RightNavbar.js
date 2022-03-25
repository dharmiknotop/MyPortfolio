import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { FaTwitter } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'

const RightNavbar = () => {
  return (
    <>
      <div className="right-navbar">
        <Link href="https://www.linkedin.com/in/dharmik-upadhyay-453797222">
          <a>
            <div className="item">
              <FiLinkedin size={20} />
            </div>
          </a>
        </Link>

        <Link href="https://twitter.com/CodeDhardev">
          <a>
            <div className="item">
              <FaTwitter size={20} />
            </div>
          </a>
        </Link>
        <Link href="https://github.com/dharmiknotop">
          <a>
            <div className="item">
              <AiFillGithub size={20} />
            </div>
          </a>
        </Link>
        <Link href="https://twitter.com/CodeDhardev">
          <a>
            <div className="item">
              <FaTwitter size={20} />
            </div>
          </a>
        </Link>
        <div id="verticaline"></div>
      </div>
    </>
  )
}

export default RightNavbar
