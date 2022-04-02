//This component is used To show Projects
import Projects from './subcomponent/Projects'
import RightProjects from './subcomponent/RightProject'

import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { FaRegLightbulb } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
const Projectscreen = () => {
  return (
    <div className="border container">
      <h1 className="Logofont projectTitle  ">
        <FaRegLightbulb color="cyan" />
        My Projects
      </h1>
      <br />
      <br />
      <RightProjects
        projectName="E-commerce Website"
        Projectinfo="An E-commrece website which can take payments, Can register Users, Has a Cart. Tech Stack used"
        projecticon={<FaReact />}
        projecticon1={<FaNodeJs />}
        projecticon2={<SiMongodb />}
        projecticon3={<SiRedux />}
        iconname="React"
        iconname1="Nodejs"
        iconname2="Mongodb"
        iconname3="Redux"
        projectImage="./Capture.JPG"
        projectLink="https://ecommerce-mern-parth1.herokuapp.com/"
      />
      <Projects
        projectName="Chatting Website"
        Projectinfo="Chatting Website In which You can Message People Who registered in website. React is used for the Frontend, Firebase is used for the functionality of the App "
        projecticon={<FaReact />}
        projecticon1={<FaNodeJs />}
        projecticon2={<SiFirebase />}
        iconname="React"
        iconname1="Nodejs"
        iconname2="Firebase"
        projectImage="./ChattingApp.JPG"
        projectLink="https://chatting-app-seven.vercel.app/"
      />
    </div>
  )
}

export default Projectscreen
