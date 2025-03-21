import React from 'react';

const LandingPage = () => {
  return (
    // <div className="bg-gradient-to-b from-blue-900 to-purple-900 min-h-screen w-full relative overflow-hidden">
     <div className='bg-blue-600 min-h-screen w-full relative overflow-hidden'> 
    {/* Grid background with subtle animation */}
      <div className="absolute inset-0 animate-fade-in">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12 opacity-20">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="border-t border-l border-purple-800"></div>
          ))}
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Text */}
        <div className="text-center mb-16 animate-slide-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
            Your Health, Your Future
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Powered by HealthHub
          </h1>
          <div className="flex justify-center">
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-4"></div>
          </div>
          <p className="text-slate-300 max-w-2xl mx-auto mt-8 text-lg text-center">
            HealthHub is your all-in-one platform for managing and understanding your health. From analyzing medical reports to visualizing trends, we empower you to take control of your well-being.
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-12 items-center mt-24 animate-fade-in-up">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src=""
              alt="HealthHub Feature"
              className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Feature Description */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              1. Analyze Medical Reports
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Upload your medical reports in PDF or image format, and let HealthHub extract and analyze key health metrics. Visualize trends in blood pressure, cholesterol, and more with easy-to-understand charts.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mt-24 animate-fade-in-up">
          {/* Feature Description */}
          <div className="w-full md:w-1/2 text-white order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              2. Track Your Health Trends
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              HealthHub turns your medical data into actionable insights. Track your health over time with line graphs, bar charts, and scatter plots. Stay informed and make better decisions for your well-being.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
            <img
              src=""
              alt="HealthHub Trends"
              className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center mt-24 animate-fade-in-up">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src=""
              alt="HealthHub Dashboard"
              className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Feature Description */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">
              3. Personalized Health Dashboard
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Access a personalized dashboard that consolidates all your health data in one place. From lab results to doctor notes, HealthHub makes it easy to monitor and manage your health journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;