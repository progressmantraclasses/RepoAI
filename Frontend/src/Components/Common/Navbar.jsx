import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Home', href: '/' },
    { title: 'Home', href: '/' },
    { title: 'Home', href: '/' },
    { title: 'Home', href: '/' },
    { title: 'Signup', href: '/signup' }
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <div className="text-white">
              <h1 className="text-2xl font-bold">HealthHub</h1>
              <p className="text-xl text-purple-200">Your Health, Simplified</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-100 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-md text-[16px] font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-500 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-gray-100 hover:bg-purple-500 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="w-[1000px] mx-auto py-2 px-6 sticky top-2 z-10">
//       <div className="max-w-7xl mx-auto rounded-4xl border border-[#402E7F] p-2"
//            style={{
//              background: 'linear-gradient(0deg, rgba(37, 32, 66, 0.50) 0%, rgba(41, 41, 82, 0.50) 109.33%)',
//              boxShadow: '0px 10px 26.2px 15px rgba(102, 61, 158, 0.21)',
//              backdropFilter: 'blur(20px)'
//            }}>
//         <div className="flex items-center justify-between">
          
//           <div className="text-purple-600 text-2xl mx-8 font-bold">
//             SafeDM
//           </div>

          
//           <div className="flex items-center justify-center space-x-8">
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               Home
//             </a>
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               How it works
//             </a>
//             <a href="#" className="text-white hover:text-purple-400 transition-colors">
//               Features
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