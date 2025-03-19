// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// export default function InnovationsPage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#241E41] to-[#0F0F15]">
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-b from-purple-500 to-purple-800 py-16 md:py-24 text-white animate-fade-in">
//           <div className="container px-4 md:px-6 text-center">
//             <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
//               Our Innovations
//             </h1>
//             <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl">
//               Discover the cutting-edge prosthetic solutions developed by Neuroxo Labs.
//             </p>
//           </div>
//         </section>

//         {/* Product Section - Prototype 1 */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
//             <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
//               <span className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm text-purple-700">
//                 Our First Prototype
//               </span>
//               <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pros Hand v1.0</h2>
//               <p className="text-gray-600 md:text-lg">
//                 Introducing the pinnacle of innovation - Pros Hand V1.0, our inaugural masterpiece that redefines
//                 what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our
//                 commitment to pushing boundaries.
//               </p>
//               <Link to="/contact">
//                 <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 from-purple-100 to-purple-200 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
//                   Learn More
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </Link>
//             </div>
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-right">
//               <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
//                 <img src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg' alt="Prototype 1" className="h-64 w-full object-cover" />
//               </div>
//               <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
//                 <img src='https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg' alt="Prototype 2" className="h-64 w-full object-cover" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Product Section - Second Product */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-left">
//               <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
//                 <img src='https://static.wixstatic.com/media/a38d20_468a8a5f9f7a4dd4a3fbf9466d7afada~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/84db6c0b5b8f4e11b1e81335cdbf67c1.jpg' alt="Prototype 3" className="h-64 w-full object-cover" />
//               </div>
//               <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
//                 <img src='https://static.wixstatic.com/media/a38d20_7f6d58b849af4b7a93e678e6d16f4381~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/b5cb01c3f6c34d52b1a2bb876f83c1e1.jpg' alt="Prototype 4" className="h-64 w-full object-cover" />
//               </div>
//             </div>
//             <div className="flex flex-col justify-center space-y-4 animate-slide-in-right">
//               <span className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm text-purple-700">
//                 Our Second Prototype
//               </span>
//               <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pros Hand v2.0</h2>
//               <p className="text-gray-600 md:text-lg">
//                 Building upon our groundbreaking first version, Pros Hand v2.0 elevates performance with enhanced features,
//                 better responsiveness, and a more adaptive design — bringing the future of prosthetics closer to reality.
//               </p>
//               <Link to="/contact">
//                 <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 from-purple-100 to-purple-200 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
//                   Learn More
//                   <ArrowRight className="h-4 w-4" />
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="bg-gradient-to-r from-purple-100 to-purple-200 py-16 md:py-24 animate-fade-in">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl">Key Features</h2>
//             <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 md:text-lg">
//               Discover the innovative features that make Pros Hand v1.0 a breakthrough in prosthetic technology.
//             </p>
//             <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//               {["Neural Interface", "Sensory Feedback", "Adaptive Grip", "Lightweight Design", "Customizable Appearance", "Long Battery Life"].map((feature, index) => (
//                 <div key={index} className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
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
