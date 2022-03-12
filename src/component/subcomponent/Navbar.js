import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <header>
        {' '}
        <div className="navbar-brand Logofont gray">
          &lt;<span className="white">Dharmik</span> /&gt;
        </div>
        <nav>
          <ul>
            <li className="">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className="">
              <Link href="/">
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
