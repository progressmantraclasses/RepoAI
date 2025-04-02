import { BrowserRouter, Route,Routes } from "react-router-dom";
import { AirQualityMap  }from "./Components/AQIrelated/AqiMap.jsx";
import { AirQualityTrends } from "./Components/AQIrelated/AqiTrends.jsx";
import Footer from "./Components/Common/Footer";
import Navbar from "./Components/Common/Navbar";
// import Feature from "./Pages/FeaturePage";
import LandingPage from "./Pages/LandingPage";
import { AQIPrediction } from "./Components/AQIrelated/AqiPrediction.jsx";
import { PollutionMap } from "./Components/AQIrelated/PollutionMap.jsx";
import { AqiMap } from "./Components/AQIrelated/Aqi-map.tsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import Chatbot from "./Chatbot.jsx";


const App=()=>{
  return (
    <>
       
       <BrowserRouter>
       <Navbar/>
       <Chatbot/>
       {/* <AqiMap/>
       <PollutionMap/>
       <AQIPrediction/> */}
         <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/aqi-analysis" element={<AirQualityTrends/>}/>
              <Route path="/aqi-map" element={<AirQualityMap/>}/>
              <Route path="/health-risk-alert"/>
              <Route path="/dashboard" element={<Dashboard/>}/>
         </Routes>
       </BrowserRouter>
       <Footer/>
    </>
  )
}

export default App;