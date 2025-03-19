import TypeWritingEffect from '../../TypeWritingEffect';

const HeroSection = () => {
  return (
    <div>
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
                onClick={() => window.location.href = '/innovations'}
              >
                Discover Our Innovation
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.location.href = '/team'}
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

<div className='bg-gradient-to-b from-black to-indigo-900 min-h-screen w-full relative'>  
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
        <span className="text-white">Find Best </span>
        <span className="text-purple-300">Affordable</span>
        <span className="text-white">.</span>
      </h1>
      <h1 className="text-5xl md:text-6xl font-bold mb-2">
        <span className="text-white">Bio Amp  </span>
        <span className="text-purple-300">Solutions</span>
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
          // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
           src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
          alt="Feature Showcase"
          className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
      
      {/* Feature Description */}
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          1. Our Mission
        </h2>
        <p className="text-gray-300 mb-4">
        {/* Introducing the pinnacle of innovation - Pros Hand V1.0(our first prototype), our inaugural masterpiece that redefines what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our commitment to pushing boundaries. This cutting-edge prosthetic marvel is designed to seamlessly integrate with the human body, offering a level of functionality and natural interaction that was once only imaginable. With its state-of-the-art features and advanced sensory feedback, Pros Hand V1.0 opens up new horizons for amputees, restoring not just physical abilities, but also the joy of experiencing the world through touch and movement. Welcome to a future where technology and compassion converge to create a brighter and more empowered life. */}
        At NeuroXo Labs, our mission is clear: to deliver the finest bio amp solutions at the most affordable prices, ensuring that amputees experience a life of unparalleled quality. We are driven by the commitment to empower those who have faced limb loss, offering them a chance to live without regrets. By combining cutting-edge technology with accessible pricing, we aim to remove barriers and provide amputees with prosthetic solutions that not only enhance their physical abilities but also grant them a future marked by independence and fulfillment.
       </p>
      </div>
    </div>

    <div className="flex flex-col md:flex-row gap-8 items-center mt-24">   
      {/* Feature Description */}
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          2. 
          Why Neuroxo Labs Exist? 
        </h2>
        <p className="text-gray-300 mb-4">
        Amputation reshapes life profoundly, introducing challenges that span physical, emotional, and psychological realms. NeuroXo Labs comprehends this depth of trauma and aims to ignite transformation. Through cutting-edge, affordable bioamp solutions, we bridge aspirations to reality. Our mission is to lighten amputees' burdens, redefining independence and empowerment. With this commitment, we spark a broader societal shift towards empathy and inclusivity.
       </p>
      </div>
     {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-start">
        <img
          // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
          //  src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
          src='https://static.wixstatic.com/media/a38d20_6a8e175299ee4467896bbff351e581c5~mv2.jpg/v1/fill/w_350,h_490,fp_0.64_0.50,lg_1,q_80,enc_avif,quality_auto/istockphoto-1335994317-612x612.jpg'
          alt="Feature Showcase"
          className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
    
    </div>
     

    </div>


    <div className="flex flex-col md:flex-row gap-8 items-center mt-24">   
      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-start">
        <img
          // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
          //  src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
          src='https://static.wixstatic.com/media/a38d20_3ef9d74e7c2942318c11ff0ea9c0dabf~mv2.jpg/v1/fill/w_408,h_578,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2%20(1).jpg'
          alt="Feature Showcase"
          className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
        />
      </div>
      {/* Feature Description */}
      <div className="w-full md:w-1/2 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          3. Neuroxo Labs EMG Muscle Sensor 
        </h2>
        <p className="text-gray-300 mb-4">
        NeuroXo Labs proudly presents our EMG muscle sensors, a pinnacle of capability and excellence. Engineered with precision and innovation, these sensors stand as a testament to our commitment to deliver the best. Designed to seamlessly capture and interpret muscle signals, our EMG sensors offer unparalleled accuracy and responsiveness. Whether utilized for medical applications, sports performance, or beyond, our EMG muscle sensors elevate the standards of usability and effectiveness. With NeuroXo Labs, you're accessing the forefront of sensor technology, where high capability and excellence converge seamlessly.
       </p>
      </div>
     
      <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
    
    </div>
     

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