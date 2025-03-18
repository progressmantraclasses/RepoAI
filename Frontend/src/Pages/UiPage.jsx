
// import React from 'react';

// const UiPage = () => {
//   return (
//     <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 min-h-screen w-full relative">
//       {/* Grid background */}
//       <div className="absolute inset-0">
//         <div className="w-full h-full grid grid-cols-12 grid-rows-12">
//           {Array(144).fill(0).map((_, i) => (
//             <div key={i} className="border-t border-l border-purple-800"></div>
//           ))}
//         </div>
//       </div>
      
//       {/* Main content container */}
//       <div className="relative z-10 container mx-auto px-4 py-16">
//         {/* Header Text */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl md:text-6xl font-bold mb-2">
//             <span className="text-white">Advanced </span>
//             <span className="text-purple-300">functionality</span>
//             <span className="text-white">.</span>
//           </h1>
//           <h1 className="text-5xl md:text-6xl font-bold mb-2">
//             <span className="text-white">Flawless </span>
//             <span className="text-purple-300">integration</span>
//           </h1>
//           <div className="flex justify-center">
//             <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-2"></div>
//           </div>
//           <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-center">
//             Offering exceptional power paired with seamless compatibility for your workflow—delivering results without compromise.
//           </p>
//         </div>
        
//         {/* Content Area */}
//         <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
//           {/* Chat mockup - contained in a "card" effect */}
//           <div className="w-full md:w-1/2 relative">
//             {/* Dark gradient background to create depth effect */}
//             <div className="absolute inset-0 -m-4 bg-gradient-to-b from-purple-900 to-purple-700 rounded-3xl"></div>
            
//             {/* Chat UI */}
//             <div className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
//               <div className="flex">
//                 {/* Left sidebar */}
//                 <div className="w-24 md:w-40 bg-purple-900 border-r border-purple-800">
//                   <div className="p-3">
//                     <div className="flex items-center gap-2 mb-4">
//                       <div className="w-8 h-8 rounded-full bg-blue-500 flex-shrink-0 overflow-hidden">
//                         <img src="/api/placeholder/40/40" alt="User" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="text-xs text-white">
//                         <div>Rajveer Singh</div>
//                         <div className="text-gray-400 text-xs">4:40 AM</div>
//                       </div>
//                     </div>
                    
//                     {/* Other users */}
//                     <div className="flex items-center gap-2 mb-4">
//                       <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0 overflow-hidden">
//                         <img src="/api/placeholder/40/41" alt="User" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="text-xs text-white">
//                         <div>Anushree</div>
//                         <div className="text-gray-400 text-xs">Jan 29</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Main chat area */}
//                 <div className="flex-1 flex flex-col">
//                   {/* Chat header */}
//                   <div className="bg-purple-800 p-2 flex justify-between items-center border-b border-purple-700">
//                     <div className="flex items-center gap-2">
//                       <div className="text-white text-sm font-medium">Divyansh Sharma</div>
//                     </div>
//                     <div className="flex gap-1">
//                       <button className="text-gray-400 p-1 hover:bg-purple-700 rounded">
//                         <span className="text-xs">•••</span>
//                       </button>
//                       <button className="text-gray-400 p-1 hover:bg-purple-700 rounded">
//                         <span className="text-xs">📹</span>
//                       </button>
//                       <button className="text-gray-400 p-1 hover:bg-purple-700 rounded">
//                         <span className="text-xs">⭐</span>
//                       </button>
//                     </div>
//                   </div>
                  
//                   {/* Chat messages */}
//                   <div className="flex-1 p-3 bg-purple-900 overflow-y-auto">
//                     {/* Alert message */}
//                     <div className="bg-purple-800 rounded p-2 mb-3">
//                       <div className="text-yellow-500 text-xs mb-1">⚠️ Our AI has detected harassment occurring in this conversation. The messages are hidden for your safety.</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Feature Description */}
//           <div className="w-full md:w-1/2 text-white">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               1. Hide<br />
//               Inappropriate<br />
//               Messages
//             </h2>
//             <p className="text-gray-300 mb-4">
//               Harassing messages are hidden from the user while remaining stored for evidence. The harasser remains unaware, reducing the risk of retaliation and protecting the user from distress.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UiPage;



import React from 'react';

const UiPage = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 min-h-screen w-full relative">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="w-full h-full grid grid-cols-12 grid-rows-12">
          {Array(144).fill(0).map((_, i) => (
            <div key={i} className="border-t border-l border-purple-800"></div>
          ))}
        </div>
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Text */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Advanced </span>
            <span className="text-purple-300">functionality</span>
            <span className="text-white">.</span>
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="text-white">Flawless </span>
            <span className="text-purple-300">integration</span>
          </h1>
          <div className="flex justify-center">
            <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-2"></div>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-center">
          NeuroXo Labs comprehends this depth of trauma and aims to ignite transformation. Through cutting-edge, affordable bioamp solutions, we bridge aspirations to reality. 
          </p>
        </div>
        
        {/* Content Area */}
        <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 flex justify-start">
            <img
              src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
              alt="Feature Showcase"
              className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
            />
          </div>
          
          {/* Feature Description */}
          <div className="w-full md:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              1. Pros Hand v1.0
            </h2>
            <p className="text-gray-300 mb-4">
            Introducing the pinnacle of innovation - Pros Hand V1.0(our first prototype), our inaugural masterpiece that redefines what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our commitment to pushing boundaries. This cutting-edge prosthetic marvel is designed to seamlessly integrate with the human body, offering a level of functionality and natural interaction that was once only imaginable. With its state-of-the-art features and advanced sensory feedback, Pros Hand V1.0 opens up new horizons for amputees, restoring not just physical abilities, but also the joy of experiencing the world through touch and movement. Welcome to a future where technology and compassion converge to create a brighter and more empowered life.
           </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiPage;
