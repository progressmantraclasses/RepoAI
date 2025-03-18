
import {Link }from  "react-router-dom"
import { ArrowRight } from "lucide-react";

export default function InnovationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#241E41] to-[#0F0F15]">
     
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-500 to-purple-800 py-16 md:py-24 text-white animate-fade-in">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl drop-shadow-lg">
              Our Innovations
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg md:text-xl">
              Discover the cutting-edge prosthetic solutions developed by Neuroxo Labs.
            </p>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
              <span className="inline-block rounded-lg bg-purple-200 px-3 py-1 text-sm text-purple-700">
                Our First Prototype
              </span>
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pros Hand v1.0</h2>
              <p className="text-gray-600 md:text-lg">
                Introducing the pinnacle of innovation - Pros Hand V1.0, our inaugural masterpiece that redefines
                what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our
                commitment to pushing boundaries.
              </p>
              <Link to="/contact">
                <button className="mt-4 flex items-center justify-center gap-2 px-6 py-2 from-purple-100 to-purple-200  text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-right">
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
                <img src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg' alt="Prototype 1" className="h-64 w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:scale-105 transition-transform">
                <img src= 'https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg' alt="Prototype 2" className="h-64 w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-r from-purple-100 to-purple-200 py-16 md:py-24 animate-fade-in">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl">Key Features</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 md:text-lg">
              Discover the innovative features that make Pros Hand v1.0 a breakthrough in prosthetic technology.
            </p>
            <div className="grid gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {["Neural Interface", "Sensory Feedback", "Adaptive Grip", "Lightweight Design", "Customizable Appearance", "Long Battery Life"].map((feature, index) => (
                <div key={index} className="flex flex-col justify-center space-y-4 rounded-lg border bg-white p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                  <h3 className="text-xl font-bold text-purple-700">{feature}</h3>
                  <p className="text-gray-600">Advanced technology for intuitive control and natural movement.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}


// import {Link} from 'react-router-dom'
// import { ArrowRight } from "lucide-react";

// export default function ProductPage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-gradient-to-r from-gray-100 to-gray-300">
    
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
//               <div className="space-y-2">
//                 <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-800">
//                   Our Innovations
//                 </h1>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Discover the cutting-edge prosthetic solutions developed by Neuroxo Labs.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Product Section */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="flex flex-col justify-center space-y-4 animate-slide-in-left">
//                 <div className="space-y-2">
//                   <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
//                     Our First Prototype
//                   </span>
//                   <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gray-800">
//                     Pros Hand v1.0
//                   </h2>
//                 </div>
//                 <p className="text-muted-foreground md:text-lg leading-relaxed">
//                   Introducing the pinnacle of innovation - Pros Hand V1.0, our inaugural masterpiece that redefines
//                   what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our
//                   commitment to pushing boundaries.
//                 </p>
//                 <div>
//                   <Link href="/contact">
//                     <button className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center gap-2">
//                       Learn More
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 animate-slide-in-right">
//                 <div className="overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
//                   <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
//                     <p className="text-sm text-gray-500">Image 1</p>
//                   </div>
//                 </div>
//                 <div className="overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform">
//                   <div className="h-64 w-full bg-gray-200 flex items-center justify-center">
//                     <p className="text-sm text-gray-500">Image 2</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="bg-primary/5 py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in">
//               <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-800">
//                 Key Features
//               </h2>
//               <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
//                 Discover the innovative features that make Pros Hand v1.0 a breakthrough in prosthetic technology.
//               </p>
//             </div>
//             <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up">
//               {["Neural Interface", "Sensory Feedback", "Adaptive Grip", "Lightweight Design", "Customizable Appearance", "Long Battery Life"].map((feature, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col justify-center space-y-4 rounded-lg border bg-background p-6 shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
//                 >
//                   <h3 className="text-xl font-bold text-gray-800">{feature}</h3>
//                   <p className="text-muted-foreground">Advanced technology ensuring unmatched performance.</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
      
//     </div>
//   );
// }
