import React from 'react';
import Spline from "@splinetool/react-spline";
import Circle from '../Images/Circle.png';
import TypeWritingEffect from '../TypeWritingEffect.jsx';
import One from '../Images/AqiPrediction.png';
import Two from '../Images/PublicAwareness.png';
import Three from '../Images/AqiAnalysis.png';
import Four from '../Images/HighRiskAlert.png';


const LandingPage = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Content Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
          <h1 className="md:text-7xl text-4xl py-6 text-white font-extrabold leading-tight drop-shadow-lg">
            Delhi Smart Traffic and  Pollution Management 
          </h1>

          <p className="md:text-2xl text-lg font-semibold text-transparent bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text leading-relaxed max-w-3xl">
          Real-time monitoring, predictive analytics, and interactive maps to help track and reduce air pollution.. <br />
             <TypeWritingEffect />
          </p>

          <button className="bg-gradient-to-r from-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 transition-all duration-300 mx-auto w-[220px] py-3 mt-8 rounded-full text-white text-2xl font-bold shadow-lg hover:shadow-xl">
            RepoAi
          </button>

          <img className="w-24 mt-10 animate-pulse" src={Circle} alt="Decoration" />
        </div>

        {/* Spline 3D Model */}
        <div className="absolute top-0 left-0 right-0 h-full flex justify-center items-center z-0">
          <Spline scene="https://prod.spline.design/Ql1hHdBoyb7KLnb6/scene.splinecode" />
        </div>
      </div>

      {/* Feature Section */}
      <div className="w-full bg-[#1a1b23] py-16 sm:py-24 md:py-32 lg:py-[10rem] px-4 relative" style={{
        background: 'linear-gradient(179deg, #000 1.34%, #1A1B23 64.44%, #000 99.13%)',
        boxShadow: '0px 4px 24px -1px rgba(0, 0, 0, 0.20)',
        backdropFilter: 'blur(20px)'
      }}>
        <div className="relative z-10">
          <div className="max-w-[700px] mx-auto text-center mb-8 sm:mb-16 md:mb-24 lg:mb-30 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white my-6 sm:my-8 md:my-10">
            
            AI-Powered {' '}
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-300 to-purple-600 bg-clip-text">
              Real-Time.
              </span>{' '}
              Pollution{' '}
              <div className="relative inline-block">
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-purple-200 to-purple-600 bg-clip-text">
                Monitoring
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="323"
                  height="19"
                  viewBox="0 0 323 19"
                  fill="none"
                  className="absolute -bottom-6 left-4 w-full scale-75 sm:scale-90 md:scale-100"
                >
                  <path
                    d="M0.18987 18.0002C90.956 6.55323 282.295 -10.3784 321.523 13.4712"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4">
              Breathe Easy, See Clearly: with our AI Monitoring Your Air Quality.
              and Predict Tomorrow's Air Today: with our Smart Pollution Intelligence
            </p>
          </div>

          <div className="max-w-[1040px] mx-auto grid py-6 sm:py-8 md:py-10 text-white md:grid-cols-2 gap-8">
            <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto my-4" src={One} alt="/" />
            <div className="m-auto flex flex-col px-4 md:ml-20 justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">1.Air Quality Analysis</h1>
              <p className="text-sm sm:text-base">Comprehensive pollution trends and location comparisons.</p>
            </div>
          </div>

          <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
            <div className="m-auto flex flex-col px-4 md:ml-20 justify-center order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">2. Policy Simulation & Public Awareness</h1>
              <p className="text-sm sm:text-base">Simulate policy impacts and awareness campaigns with Emergency Response Center
                and  rapid response to pollution-related emergencies.</p>
            </div>
            <img className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mx-auto my-4 order-1 md:order-2" src={Two} alt="/" />
          </div>

          <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
            <img className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto my-4" src={Three} alt="/" />
            <div className="m-auto flex flex-col px-4 md:ml-20 justify-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">3). {" "}72-hour AQI Forecast</h1>
              <p className="text-sm sm:text-base">Predictive AI recommendation  Models  forecasting & analysis for future trends of AQI.</p>
            </div>
          </div>

          <div className="max-w-[1040px] mx-auto py-6 sm:py-8 md:py-10 grid text-white md:grid-cols-2 gap-8">
            <div className="m-auto flex flex-col px-4 md:ml-20 justify-center order-2 md:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold py-4 sm:py-6 md:py-10">4. Prevent Health Problems: By Understanding Your Risks</h1>
              <p className="text-sm sm:text-base">Tell the Do's and Don'ts for person having severe condition like Asthama Heart Issues .</p>
            </div>
            <img className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mx-auto my-4 order-1 md:order-2" src={Four} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;