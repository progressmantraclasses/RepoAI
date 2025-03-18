


// import { Mail, MapPin, Phone } from "lucide-react"


// export default function ContactPage() {
//   return (
//     <div className="flex min-h-screen flex-col">
      
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Get in touch with the Neuroxo Labs team for inquiries, collaborations, or more information.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 lg:grid-cols-2">
//               <div className="flex flex-col justify-center space-y-8">
//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
//                   <p className="text-muted-foreground md:text-lg">
//                     For inquiries, collaborations, or more information about Neuroxo Labs and current projects, please
//                     reach out to us through the following:
//                   </p>
//                 </div>
//                 <div className="space-y-4">
//                   <div className="flex items-start space-x-4">
//                     <Mail className="h-6 w-6 text-primary" />
//                     <div className="space-y-1">
//                       <h3 className="font-medium">Email</h3>
//                       <p className="text-sm text-muted-foreground">neuroxolabs@gmail.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <Phone className="h-6 w-6 text-primary" />
//                     <div className="space-y-1">
//                       <h3 className="font-medium">Phone</h3>
//                       <p className="text-sm text-muted-foreground">+91 8368770024</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <Phone className="h-6 w-6 text-primary" />
//                     <div className="space-y-1">
//                       <h3 className="font-medium">WhatsApp</h3>
//                       <p className="text-sm text-muted-foreground">+91 8368770024</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <MapPin className="h-6 w-6 text-primary" />
//                     <div className="space-y-1">
//                       <h3 className="font-medium">Institution</h3>
//                       <p className="text-sm text-muted-foreground">GL BAJAJ Institute of Technology & Management</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="rounded-lg border bg-background p-6 shadow-sm">
//                 <h3 className="text-xl font-bold">Send us a Message</h3>
//                 <form className="mt-6 space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="space-y-2">
//                       <label
//                         htmlFor="name"
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                       >
//                         Name
//                       </label>
//                       <input 
//                         id="name" 
//                         placeholder="Enter your name" 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label
//                         htmlFor="email"
//                         className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                       >
//                         Email
//                       </label>
//                       <input 
//                         id="email" 
//                         type="email" 
//                         placeholder="Enter your email" 
//                         className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="subject"
//                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                     >
//                       Subject
//                     </label>
//                     <input 
//                       id="subject" 
//                       placeholder="Enter the subject" 
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label
//                       htmlFor="message"
//                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                     >
//                       Message
//                     </label>
//                     <textarea 
//                       id="message" 
//                       placeholder="Enter your message" 
//                       className="flex min-h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     />
//                   </div>
//                   <button 
//                     type="submit" 
//                     className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
      
//     </div>
//   )
// }




// import { Mail, MapPin, Phone } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactPage() {
//   return (
//     <div className="flex min-h-screen flex-col bg-gradient-to-r from-blue-100 to-blue-200">
//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <motion.div 
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col items-center justify-center space-y-4 text-center"
//             >
//               <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">Contact Us</h1>
//               <p className="max-w-[700px] text-muted-foreground md:text-xl">Reach out to Neuroxo Labs for inquiries, collaborations, or more information.</p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-16 md:py-24">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-10 lg:grid-cols-2">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="flex flex-col justify-center space-y-8"
//               >
//                 <h2 className="text-3xl font-bold tracking-tighter text-gray-800">Get in Touch</h2>
//                 <p className="text-gray-600 md:text-lg">Contact Neuroxo Labs for further details and collaborations.</p>
//                 <div className="space-y-4">
//                   {[{
//                     icon: Mail,
//                     title: "Email",
//                     content: "neuroxolabs@gmail.com"
//                   }, {
//                     icon: Phone,
//                     title: "Phone",
//                     content: "+91 8368770024"
//                   }, {
//                     icon: Phone,
//                     title: "WhatsApp",
//                     content: "+91 8368770024"
//                   }, {
//                     icon: MapPin,
//                     title: "Institution",
//                     content: "GL BAJAJ Institute of Technology & Management"
//                   }].map(({ icon: Icon, title, content }, index) => (
//                     <div key={index} className="flex items-start space-x-4">
//                       <Icon className="h-6 w-6 text-blue-500 animate-pulse" />
//                       <div>
//                         <h3 className="font-medium text-gray-700">{title}</h3>
//                         <p className="text-sm text-gray-600">{content}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="rounded-lg border bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <h3 className="text-2xl font-bold mb-4">Send us a Message</h3>
//                 <form className="space-y-4">
//                   {['Name', 'Email', 'Subject', 'Message'].map((field, index) => (
//                     <div key={index} className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">{field}</label>
//                       {field === 'Message' ? (
//                         <textarea placeholder={`Enter your ${field.toLowerCase()}`} className="w-full h-32 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                       ) : (
//                         <input placeholder={`Enter your ${field.toLowerCase()}`} className="w-full h-10 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
//                       )}
//                     </div>
//                   ))}
//                   <button type="submit" className="w-full rounded-md bg-blue-500 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors">Send Message</button>
//                 </form>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-500 to-blue-700 py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-white md:text-lg">
              Get in touch with the Neuroxo Labs team for inquiries, collaborations, or more information.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 md:text-lg">
                For inquiries, collaborations, or more information about Neuroxo Labs and current projects, please
                reach out to us through the following:
              </p>
              <div className="space-y-4">
                {[{ icon: Mail, label: 'Email', value: 'neuroxolabs@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '+91 8368770024' },
                  { icon: Phone, label: 'WhatsApp', value: '+91 8368770024' },
                  { icon: MapPin, label: 'Institution', value: 'GL BAJAJ Institute of Technology & Management' }]
                  .map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <item.icon className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-medium text-gray-800">{item.label}</h3>
                        <p className="text-sm text-gray-600">{item.value}</p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-800">Send us a Message</h3>
              <form className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input id="name" placeholder="Enter your name" className="h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                  <input id="email" type="email" placeholder="Enter your email" className="h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                </div>
                <input id="subject" placeholder="Enter the subject" className="h-10 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <textarea id="message" placeholder="Enter your message" className="h-32 w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="h-10 w-full rounded-md bg-blue-600 text-white font-medium hover:bg-blue-500 transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}