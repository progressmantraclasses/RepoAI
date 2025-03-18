import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from "./Components/Common/Navbar"
import Footer from "./Components/Common/Footer"
import Chatbot from "./Components/Chatbot"
import ContactPage from "./Pages/ContactPage"
import TeamPage from "./Pages/TeamPage"
import HeroSection from "./Components/Common/HeroSection"
import ProductPage from "./Pages/ProductPage"
import UiPage from "./Pages/UiPage"

//bg-gradient-to-b from-[#241E41] to-[#0F0F15]

const App=()=>{
  return(
    <>
      <BrowserRouter>
      <UiPage/>
      <Chatbot/>
      <Navbar/>
          <Routes>
            <Route path="/" element={<HeroSection/>}/>
            <Route path='/contact' element={<ContactPage/>}/>  
            <Route path="/team" element={<TeamPage/>}/>
            <Route path="/products" element={<ProductPage/>}/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}


export default  App 