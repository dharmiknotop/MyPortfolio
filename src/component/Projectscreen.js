import React from 'react'
import Projects from './subcomponent/Projects'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaRegLightbulb } from 'react-icons/fa'
import RightProjects from './subcomponent/RightProject'
import { SiRedux } from 'react-icons/si'
import { BsArrowBarRight } from 'react-icons/bs'
import logo from '../E-commerce.jpg'
const Projectscreen = () => {
  return (
    <div className="border container">
      <h1 className="Logofont projectTitle  ">
        <FaRegLightbulb color="cyan" />
        My Projects
      </h1>
      <br />
      <br />
      <Projects
        projectName="E-commerces Website"
        Projectinfo="An E-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used"
        Projectimage={logo}
        projecticon={<FaReact />}
        projecticon1={<FaNodeJs />}
        projecticon2={<SiMongodb />}
        projecticon3={<SiRedux />}
        iconname="react"
        iconname1="Nodejs"
        iconname2="Mongodb"
        iconname3="Redux"
      />
      {/* <Projects
        projectName="E-commerce Website"
        Projectimage={logo}
        Projectinfo="An E-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used"
        Projectimage="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2020/09/amazon-eCommerce-homepage.png"
        projecticon={<FaReact />}
        projecticon1={<FaNodeJs />}
        projecticon2={<SiMongodb />}
        projecticon3={<SiRedux />}
        iconname="react"
        iconname1="Nodejs"
        iconname2="Mongodb"
        iconname3="Redux"
      /> */}
    </div>
  )
}

export default Projectscreen
