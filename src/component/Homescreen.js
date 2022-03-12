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
    <div className="">
      <Navbar />
      <div className="container">
        <Home />
        <About />
        {/* <MyExprience /> */}
        <Projectscreen />
        <RightNavbar />
        <Contact />
      </div>
    </div>
  )
}

export default Homescreen
