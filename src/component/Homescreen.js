import React from 'react'
import Home from './subcomponent/Home'
import About from './subcomponent/About'
import Projectscreen from './Projectscreen'
import RightNavbar from './subcomponent/RightNavbar'
import Contact from './subcomponent/Contact'
import Navbar from './subcomponent/Navbar'
import MyExprience from '../MyExprience'
const Homescreen = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <MyExprience /> */}
      <About />

      <Projectscreen />

      <RightNavbar />
      <Contact />
    </div>
  )
}

export default Homescreen
