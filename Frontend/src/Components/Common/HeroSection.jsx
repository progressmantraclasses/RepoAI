import TypeWritingEffect from '../../TypeWritingEffect';

const HeroSection = () => {
  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-black to-indigo-900 flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="flex flex-col justify-center text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-cyan-600 text-5xl md:text-6xl">Hello!<br /></span>
              Welcome to <span className="text-red-500">NEUROXO LABS</span>
            </h1>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              <TypeWritingEffect />
            </h3>
            <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg">
              At NeuroXo Labs, we empower amputees with advanced, affordable bio amp solutions — enhancing mobility, independence, and quality of life.🇮🇳🔥
            </p>
            {/* New buttons */}
            <div className="flex space-x-4 mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.href = '#products'}
              >
                Discover Our Innovation
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.href = '#team'}
              >
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Right side with four images */}
          <div className="grid grid-cols-2 gap-4 justify-center lg:justify-end">
            {[
              'https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg',
              'https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg',
              'https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_402,h_570,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg',
              'https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
            ].map((src, index) => (
              <div
                key={index}
                className="w-full h-64 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2"
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;



// import TypeWritingEffect from '../../TypeWritingEffect';
// import Image1 from '../../Images/Image1.png'
// // https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_402,h_570,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg
// const HeroSection = () => {
//   return (
//     <div id="home" className="min-h-screen bg-gradient-to-b from-black to-indigo-900 flex items-center">
//       <div className="container mx-auto px-6 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left side */}
//           <div className="flex flex-col justify-center text-left space-y-6">
//             <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//               <span className="text-cyan-600 text-5xl md:text-6xl">Hello!<br /></span>
//               Welcome to <span className="text-red-500">NEUROXO LABS</span>
//             </h1>
//             <h3 className="text-2xl md:text-4xl font-bold text-white">
//               <TypeWritingEffect />
//             </h3>
//             <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg">
//             At NeuroXo Labs, we empower amputees with advanced, affordable bio amp solutions — enhancing mobility, independence, and quality of life.🇮🇳🔥
//             </p>
//             {/* New buttons */}
//             <div className="flex space-x-4 mt-4">
//               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Discover Our Innovation
//               </button>
//               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//                 Meet Our Team
//               </button>
//             </div>
//           </div>

//           {/* Right side with two images */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
//               <img
//                 src="https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg"
//                 alt="Innovation"
//                 className="w-full h-64 object-cover rounded-lg shadow-lg"
//               />
//               <img
//                 src="https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg"
//                 alt="Team"
//                 className="w-full h-64 object-cover rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import Spline from '@splinetool/react-spline';
//  import TypeWritingEffect from '../../TypeWritingEffect';
 
//  const HeroSection = () => {
//    return (
//      <div id="home" className="min-h-screen bg-gradient-to-b from-black to-indigo-900 flex items-center">
//        <div className="container mx-auto px-6 lg:px-12">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//            {/* Left side */}
//            <div className="flex flex-col justify-center text-left space-y-6">
//              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
//                <span className="text-cyan-600 text-5xl md:text-6xl">Hello!<br /></span>
//                Welcome to <span className="text-red-500">NEUROXO LABS</span>
//              </h1>
//              <h3 className="text-2xl md:text-4xl font-bold text-white">
//                <TypeWritingEffect />
//              </h3>
//              <p className="text-lg md:text-xl text-white leading-relaxed max-w-lg">
//                Get Live AI token recommendations with real-time blockchain transcation logs and investement history tracking plus Hive Smart Contarcts that auto-invest based on AI insights 🇮🇳🔥       
//              </p>
//            </div>
           
//            {/* Right side */}
//            <div className="flex justify-center lg:justify-end">
//              <div className="w-full max-w-lg h-[500px] lg:h-[600px] overflow-hidden">
//                <Spline scene="https://prod.spline.design/h3lM35MODGx8V1o4/scene.splinecode" />
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    );
//  };
 
//  export default HeroSection;