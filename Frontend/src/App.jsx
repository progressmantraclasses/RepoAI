import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./Components/Common/Navbar"
import Footer from './Components/Common/Footer'
import Chatbot from './Components/Chatbot'
import SignupPage from "./Authentication/Signup"
import HeroSection from "./Components/Common/HeroSection"
import HealthHubBot from "./Components/Chatbot"
import LandingPage from "./Pages/LandingPage"

//npx shadcn-ui@latest add [component-name]


//bg-gradient-to-b from-[#241E41] to-[#0F0F15]

const App=()=>{
  return(
    <>
      <BrowserRouter>
     <HealthHubBot/>
    
      <Navbar/>
      
          <Routes>
              <Route path="/" element={<HeroSection/>}/>
              <Route path="/signup" element={<SignupPage/>}/>
          </Routes>
          {/* <UiPage/> */}
      <Footer/>
      <LandingPage/>
      </BrowserRouter>
    </>
  )
}


export default  App 

    