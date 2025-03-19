// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function InnovationsPage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#241E41] to-[#0F0F15]">
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-b from-purple-500 to-purple-800 py-16 md:py-24 text-white animate-fade-in">
//           <div className="container px-4 md:px-6 text-center">
//             <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl drop-shadow-xl animate-fade-in-up">
//               Our Innovations
//             </h1>
//             <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl opacity-80">
//               Discover the cutting-edge prosthetic solutions developed by Neuroxo Labs.
//             </p>
//           </div>
//         </section>

//         {/* Product Section - Prototype 1 */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
//             <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
//               <span className="inline-block rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-700 shadow-md">
//                 Our First Prototype
//               </span>
//               <h2 className="text-4xl text-red-400 font-bold tracking-tight sm:text-5xl">Pros Hand v1.0</h2>
//               <p className="text-gray-300 md:text-lg leading-relaxed">
//                 Introducing the pinnacle of innovation - Pros Hand V1.0, our inaugural masterpiece that redefines
//                 what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our
//                 commitment to pushing boundaries.
//               </p>
//               <Link to="/contact">
//                 <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg">
//                   Learn More
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-right">
//               {["https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg",
//                 "https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg"].map((src, index) => (
//                 <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300">
//                   <img src={src} alt={`Prototype ${index + 1}`} className="h-64 w-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>


//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
//             <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
//               <span className="inline-block rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-700 shadow-md">
//                 Our First Prototype
//               </span>
//               <h2 className="text-4xl text-red-400 font-bold tracking-tight sm:text-5xl">Pros Hand v2.0</h2>
//               <p className="text-gray-300 md:text-lg leading-relaxed">
//                 Introducing the pinnacle of innovation - Pros Hand V2.0, our inaugural masterpiece that redefines
//                 what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our
//                 commitment to pushing boundaries.
//               </p>
//               <Link to="/contact">
//                 <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg">
//                   Learn More
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-right">
//               {["https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg",
//                 "https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg"].map((src, index) => (
//                 <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300">
//                   <img src={src} alt={`Prototype ${index + 1}`} className="h-64 w-full object-cover" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Key Features Section */}
//         <section className="bg-gradient-to-r from-purple-100 to-purple-200 py-16 md:py-24 animate-fade-in">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl">Key Features</h2>
//             <p className="text-center text-gray-700 max-w-2xl mx-auto mt-4 md:text-lg">
//               Discover the innovative features that make Pros Hand v1.0 a breakthrough in prosthetic technology.
//             </p>
//             <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//               {["Neural Interface", "Sensory Feedback", "Adaptive Grip", "Lightweight Design", "Customizable Appearance", "Long Battery Life"].map((feature, index) => (
//                 <div key={index} className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-md hover:shadow-xl transform hover:scale-110 transition-transform duration-300">
//                   <h3 className="text-xl font-bold text-purple-700">{feature}</h3>
//                   <p className="text-gray-600">Advanced technology for intuitive control and natural movement.</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }



import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function InnovationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#241E41] to-[#0F0F15] text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-purple-600 opacity-20 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-[fadeIn_1s_ease-in-out]">
              Our Innovations
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto">
              Discover the cutting-edge prosthetic solutions developed by Neuroxo Labs.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0F0F15] to-transparent"></div>
      </section>

      {/* Product Section - Prototype 1 */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-[slideInLeft_0.8s_ease-out]">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 text-sm font-medium">
                Our First Prototype
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-purple-300">Pros Hand v1.0</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Introducing the pinnacle of innovation - Pros Hand V1.0, our inaugural masterpiece that redefines what's
                possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our commitment to
                pushing boundaries.
              </p>
              <Link to="/contact">
                <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-[slideInRight_0.8s_ease-out]">
              {[
                "https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg",
                "https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg",
              ].map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-xl group">
                  <div className="relative overflow-hidden h-72 w-full">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Prototype ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section - Prototype 2 */}
      <section className="py-16 md:py-24 bg-[#1A1730]/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 grid grid-cols-2 gap-4 animate-[slideInLeft_0.8s_ease-out]">
              {[
                "https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg",
                "https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg",
              ].map((src, index) => (
                <div key={index} className="overflow-hidden rounded-xl shadow-xl group">
                  <div className="relative overflow-hidden h-72 w-full">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`Prototype ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 md:order-2 space-y-6 animate-[slideInRight_0.8s_ease-out]">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-900/60 text-purple-200 text-sm font-medium">
                Our Second Prototype
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-purple-300">Pros Hand v2.0</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
              Our flagship product, Pros Hand V2.0, is a next-generation prosthetic hand that utilizes muscle sensors and servo motors to provide users with intuitive control and natural movement, while maintaining a low cost to ensure accessibility for people worldwide. We aim to bridge the gap between technology and affordability, creating prosthetics that empower amputees to live fuller, more independent lives.
              </p>
              <Link to="/contact">
                <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full font-semibold shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Key Features</h2>
            <p className="text-lg text-purple-200">
              Discover the innovative features that make Pros Hand v1.0 a breakthrough in prosthetic technology.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Neural Interface",
              "Sensory Feedback",
              "Adaptive Grip",
              "Lightweight Design",
              "Customizable Appearance",
              "Long Battery Life",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:bg-purple-900/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-12 w-12 rounded-full bg-purple-700/30 flex items-center justify-center mb-4">
                  <span className="text-purple-300 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-purple-300 mb-3">{feature}</h3>
                <p className="text-gray-300">Advanced technology for intuitive control and natural movement.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


