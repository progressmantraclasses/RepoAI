// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="w-[1000px]  mx-auto py-2 px-6 sticky top-2 z-10">
//       <div className="max-w-7xl mx-auto rounded-4xl border border-[#402E7F] p-2"
//            style={{
//              background: 'linear-gradient(0deg, rgba(37, 32, 66, 0.50) 0%, rgba(41, 41, 82, 0.50) 109.33%)',
//              boxShadow: '0px 10px 26.2px 15px rgba(102, 61, 158, 0.21)',
//              backdropFilter: 'blur(20px)'
//            }}>
//         <div className="flex items-center justify-between">
          
//           <div className="text-purple-600 text-2xl mx-8 font-bold">
//              RepoAi
//           </div>

//           <div className="flex items-center justify-center space-x-8">
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               Home
//             </a>
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//                AQi-Analysis
//             </a>
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               Air Quality Map
//             </a>
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               Dashboard
//             </a>
//           </div>

          
//           <a href="http://localhost:3000/auth/sign-in" className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
//             Sign in
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full mx-auto py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto rounded-full border border-gray-800 p-2"
           style={{
             background: 'rgba(10, 10, 10, 0.8)',
             boxShadow: '0px 4px 20px rgba(102, 61, 158, 0.3)',
             backdropFilter: 'blur(20px)'
           }}>
        <div className="flex items-center justify-between px-6">
          
          <Link to="/" className="text-white text-4xl font-bold flex items-center">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              RepoAI
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-purple-400 transition-colors text-xl font-medium"
            >
              Home
            </Link>
            <Link 
              to="/aqi-analysis" 
              className="text-gray-300 hover:text-purple-400 transition-colors text-xl font-medium"
            >
              AQI Analysis
            </Link>
            <Link 
              to="/aqi-map" 
              className="text-gray-300 hover:text-purple-400 transition-colors text-xl font-medium"
            >
              Air Quality Map
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-300 hover:text-purple-400 transition-colors text-xl font-medium"
            >
              Dashboard
            </Link>
          </div>

          <Link 
            to="/health-risk-alert" 
            className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-indigo-600 transition-all text-xl font-medium shadow-lg hover:shadow-purple-500/20"
          >
            Healht-Risk-Alert
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;