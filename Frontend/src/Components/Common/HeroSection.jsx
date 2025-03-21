
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../Components/UI/Button.jsx'
import { Card } from '../../Components/UI/Card.jsx'
import { Check } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative circles */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-100 opacity-50 -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-40 w-40 h-40 rounded-full bg-teal-100 opacity-50 -z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        />

        {/* Hero content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm mb-4">
                Revolutionizing Healthcare Management
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Your Health Records, <br />
              <span className="text-blue-600">All in One Place</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              Securely store medical reports, schedule appointments, and manage medications for your entire family - designed with simplicity for both seniors and parents.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-8 py-6">
                How It Works
              </Button>
            </motion.div>
            
            <motion.div
              className="mt-12 flex flex-col sm:flex-row gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span className="text-gray-600">HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span className="text-gray-600">Secure Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-100 p-1 rounded-full">
                  <Check size={16} className="text-green-600" />
                </div>
                <span className="text-gray-600">Easy to Use</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right side with dashboard preview */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -top-6 -left-6 z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                <Card className="bg-white shadow-lg p-4 rounded-lg w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Upcoming</p>
                      <p className="text-sm font-medium">Appointment</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800">Dr. Smith, 3:00 PM</p>
                  <p className="text-xs text-gray-500">Tomorrow</p>
                </Card>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.7 }}
              >
                <Card className="bg-white shadow-lg p-4 rounded-lg w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Medication</p>
                      <p className="text-sm font-medium">Reminder</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800">Take Vitamin D</p>
                  <p className="text-xs text-gray-500">8:00 AM Daily</p>
                </Card>
              </motion.div>
              
              <motion.div
                className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              >
                <div className="bg-blue-600 p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Health Dashboard</h3>
                      <p className="text-blue-100 text-sm">John's Medical Records</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Reports</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Blood Test Results</p>
                            <p className="text-xs text-gray-500">Dr. Johnson</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">Mar 15</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Annual Checkup</p>
                            <p className="text-xs text-gray-500">Dr. Smith</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-500">Feb 28</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Upcoming Appointments</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Cardiology Consultation</p>
                            <p className="text-xs text-gray-500">Tomorrow at 3:00 PM</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-100">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Feature cards */}
        <motion.div 
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
        >
          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Medical Records</h3>
            <p className="text-gray-600 text-sm">Store and access all your lab and doctor reports in one secure place.</p>
          </Card>
          
          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Appointment Booking</h3>
            <p className="text-gray-600 text-sm">Schedule and manage doctor appointments with ease and timely reminders.</p>
          </Card>
          
          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Medicine Management</h3>
            <p className="text-gray-600 text-sm">Track medications, get dosage reminders, and monitor potential side effects.</p>
          </Card>
          
          <Card className="p-6 border-none shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium mb-2">Secure UPN System</h3>
            <p className="text-gray-600 text-sm">Control who can access your medical data with our unique permission system.</p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;



// import React from 'react';
// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
//       <div className="container mx-auto px-4 py-16 relative">
//         {/* Decorative circles */}
//         <motion.div 
//           className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-100 opacity-50 -z-10"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//         />
//         <motion.div 
//           className="absolute bottom-20 left-40 w-40 h-40 rounded-full bg-teal-100 opacity-50 -z-10"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
//         />

//         {/* Hero content */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pt-12">
//           <motion.div 
//             className="flex-1"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium text-sm mb-4">
//                 Revolutionizing Healthcare Management
//               </div>
//             </motion.div>
            
//             <motion.h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.7 }}
//             >
//               Your Health Records, <br />
//               <span className="text-blue-600">All in One Place</span>
//             </motion.h1>
            
//             <motion.p
//               className="text-lg text-gray-600 mb-8 max-w-lg"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.7 }}
//             >
//               Securely store medical reports, schedule appointments, and manage medications for your entire family - designed with simplicity for both seniors and parents.
//             </motion.p>
            
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9, duration: 0.7 }}
//             >
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-8 py-3 transition-colors">
//                 Get Started
//               </button>
//               <button className="border border-blue-200 text-blue-600 hover:bg-blue-50 font-medium rounded-lg px-8 py-3 transition-colors">
//                 How It Works
//               </button>
//             </motion.div>
            
//             <motion.div
//               className="mt-12 flex flex-col sm:flex-row gap-8"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1.1, duration: 0.7 }}
//             >
//               <div className="flex items-center gap-2">
//                 <div className="bg-green-100 p-1 rounded-full">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">HIPAA Compliant</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="bg-green-100 p-1 rounded-full">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">Secure Access</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="bg-green-100 p-1 rounded-full">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-gray-600">Easy to Use</span>
//               </div>
//             </motion.div>
//           </motion.div>
          
//           {/* Right side with dashboard preview */}
//           <motion.div 
//             className="flex-1 relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <div className="relative">
//               <motion.div
//                 className="absolute -top-6 -left-6 z-10"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.3, duration: 0.7 }}
//               >
//                 <div className="bg-white shadow-lg p-4 rounded-lg w-48 border border-gray-100">
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Upcoming</p>
//                       <p className="text-sm font-medium">Appointment</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-800">Dr. Smith, 3:00 PM</p>
//                   <p className="text-xs text-gray-500">Tomorrow</p>
//                 </div>
//               </motion.div>
              
//               <motion.div
//                 className="absolute -bottom-6 -right-6 z-10"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.5, duration: 0.7 }}
//               >
//                 <div className="bg-white shadow-lg p-4 rounded-lg w-48 border border-gray-100">
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-purple-600">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <p className="text-xs text-gray-500">Medication</p>
//                       <p className="text-sm font-medium">Reminder</p>
//                     </div>
//                   </div>
//                   <p className="text-sm text-gray-800">Take Vitamin D</p>
//                   <p className="text-xs text-gray-500">8:00 AM Daily</p>
//                 </div>
//               </motion.div>
              
//               <motion.div
//                 className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 1.1, duration: 0.7 }}
//               >
//                 <div className="bg-blue-600 p-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h3 className="text-white font-medium">Health Dashboard</h3>
//                       <p className="text-blue-100 text-sm">John's Medical Records</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="mb-6">
//                     <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Reports</h4>
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                         <div className="flex items-center gap-3">
//                           <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">Blood Test Results</p>
//                             <p className="text-xs text-gray-500">Dr. Johnson</p>
//                           </div>
//                         </div>
//                         <span className="text-xs text-gray-500">Mar 15</span>
//                       </div>
//                       <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                         <div className="flex items-center gap-3">
//                           <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-green-600">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">Annual Checkup</p>
//                             <p className="text-xs text-gray-500">Dr. Smith</p>
//                           </div>
//                         </div>
//                         <span className="text-xs text-gray-500">Feb 28</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500 mb-2">Upcoming Appointments</h4>
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
//                         <div className="flex items-center gap-3">
//                           <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-600">
//                               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
//                             </svg>
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium">Cardiology Consultation</p>
//                             <p className="text-xs text-gray-500">Tomorrow at 3:00 PM</p>
//                           </div>
//                         </div>
//                         <button className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 text-sm font-medium px-3 py-1 rounded">
//                           View
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
        
//         {/* Feature cards */}
//         <motion.div 
//           className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.7, duration: 0.7 }}
//         >
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium mb-2">Medical Records</h3>
//             <p className="text-gray-600 text-sm">Store and access all your lab and doctor reports in one secure place.</p>
//           </div>
          
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium mb-2">Appointment Booking</h3>
//             <p className="text-gray-600 text-sm">Schedule and manage doctor appointments with ease and timely reminders.</p>
//           </div>
          
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium mb-2">Medicine Management</h3>
//             <p className="text-gray-600 text-sm">Track medications, get dosage reminders, and monitor potential side effects.</p>
//           </div>
          
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
//             <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
//               </svg>
//             </div>
//             <h3 className="text-lg font-medium mb-2">Secure UPN System</h3>
//             <p className="text-gray-600 text-sm">Control who can access your medical data with our unique permission system.</p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





// import TypeWritingEffect from '../../TypeWritingEffect';

// const HeroSection = () => {
//   return (
//     <div>
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
//               At NeuroXo Labs, we empower amputees with advanced, affordable bio amp solutions — enhancing mobility, independence, and quality of life.🇮🇳🔥
//             </p>
//             {/* New buttons */}
//             <div className="flex space-x-4 mt-4">
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => window.location.href = '/innovations'}
//               >
//                 Discover Our Innovation
//               </button>
//               <button
//                 className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                 onClick={() => window.location.href = '/team'}
//               >
//                 Meet Our Team
//               </button>
//             </div>
//           </div>

//           {/* Right side with four images */}
//           <div className="grid grid-cols-2 gap-4 justify-center lg:justify-end">
//             {[
//               'https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg',
//               'https://static.wixstatic.com/media/a38d20_01bb53aa3286428194f219750bc4fd63~mv2.jpg/v1/fill/w_398,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/efd8cdcd70365ec9b41dd28bba91d32c.jpg',
//               'https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_402,h_570,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg',
//               'https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
//             ].map((src, index) => (
//               <div
//                 key={index}
//                 className="w-full h-64 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2"
//               >
//                 <img
//                   src={src}
//                   alt={`Gallery Image ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

// <div className='bg-gradient-to-b from-black to-indigo-900 min-h-screen w-full relative'>  
// {/* Grid background */}
//   <div className="absolute inset-0">
//     <div className="w-full h-full grid grid-cols-12 grid-rows-12">
//       {Array(144).fill(0).map((_, i) => (
//         <div key={i} className="border-t border-l border-purple-800"></div>
//       ))}
//     </div>
//   </div>
  
//   {/* Main content container */}
//   <div className="relative z-10 container mx-auto px-4 py-16">
//     {/* Header Text */}
//     <div className="text-center mb-12">
//       <h1 className="text-5xl md:text-6xl font-bold mb-2">
//         <span className="text-white">Find Best </span>
//         <span className="text-purple-300">Affordable</span>
//         <span className="text-white">.</span>
//       </h1>
//       <h1 className="text-5xl md:text-6xl font-bold mb-2">
//         <span className="text-white">Bio Amp  </span>
//         <span className="text-purple-300">Solutions</span>
//       </h1>
//       <div className="flex justify-center">
//         <div className="w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent mt-2"></div>
//       </div>
//       <p className="text-slate-400 max-w-2xl mx-auto mt-6 text-center">
//       NeuroXo Labs comprehends this depth of trauma and aims to ignite transformation. Through cutting-edge, affordable bioamp solutions, we bridge aspirations to reality. 
//       </p>
//     </div>
    
//     {/* Content Area */}
//     <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
//       {/* Left Image Section */}
//       <div className="w-full md:w-1/2 flex justify-start">
//         <img
//           // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
//            src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
//           alt="Feature Showcase"
//           className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
//         />
//       </div>
      
//       {/* Feature Description */}
//       <div className="w-full md:w-1/2 text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           1. Our Mission
//         </h2>
//         <p className="text-gray-300 mb-4">
//         {/* Introducing the pinnacle of innovation - Pros Hand V1.0(our first prototype), our inaugural masterpiece that redefines what's possible. Crafted with meticulous precision, Pros Hand V1.0 stands as a testament to our commitment to pushing boundaries. This cutting-edge prosthetic marvel is designed to seamlessly integrate with the human body, offering a level of functionality and natural interaction that was once only imaginable. With its state-of-the-art features and advanced sensory feedback, Pros Hand V1.0 opens up new horizons for amputees, restoring not just physical abilities, but also the joy of experiencing the world through touch and movement. Welcome to a future where technology and compassion converge to create a brighter and more empowered life. */}
//         At NeuroXo Labs, our mission is clear: to deliver the finest bio amp solutions at the most affordable prices, ensuring that amputees experience a life of unparalleled quality. We are driven by the commitment to empower those who have faced limb loss, offering them a chance to live without regrets. By combining cutting-edge technology with accessible pricing, we aim to remove barriers and provide amputees with prosthetic solutions that not only enhance their physical abilities but also grant them a future marked by independence and fulfillment.
//        </p>
//       </div>
//     </div>

//     <div className="flex flex-col md:flex-row gap-8 items-center mt-24">   
//       {/* Feature Description */}
//       <div className="w-full md:w-1/2 text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           2. 
//           Why Neuroxo Labs Exist? 
//         </h2>
//         <p className="text-gray-300 mb-4">
//         Amputation reshapes life profoundly, introducing challenges that span physical, emotional, and psychological realms. NeuroXo Labs comprehends this depth of trauma and aims to ignite transformation. Through cutting-edge, affordable bioamp solutions, we bridge aspirations to reality. Our mission is to lighten amputees' burdens, redefining independence and empowerment. With this commitment, we spark a broader societal shift towards empathy and inclusivity.
//        </p>
//       </div>
//      {/* Right Image Section */}
//       <div className="w-full md:w-1/2 flex justify-start">
//         <img
//           // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
//           //  src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
//           src='https://static.wixstatic.com/media/a38d20_6a8e175299ee4467896bbff351e581c5~mv2.jpg/v1/fill/w_350,h_490,fp_0.64_0.50,lg_1,q_80,enc_avif,quality_auto/istockphoto-1335994317-612x612.jpg'
//           alt="Feature Showcase"
//           className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
//         />
//       </div>
//       <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
    
//     </div>
     

//     </div>


//     <div className="flex flex-col md:flex-row gap-8 items-center mt-24">   
//       {/* Right Image Section */}
//       <div className="w-full md:w-1/2 flex justify-start">
//         <img
//           // src='https://static.wixstatic.com/media/a38d20_b8c1fa4d08a145dd8cb45d97010ccfcb~mv2.jpg/v1/fill/w_399,h_566,al_c,lg_1,q_80,enc_avif,quality_auto/e57f64609a7e4432f086a8b89934f109.jpg'
//           //  src='https://static.wixstatic.com/media/11062b_1df34a3ac12c4387b5a24a61930ed7be~mv2.jpg/v1/fill/w_436,h_610,fp_0.71_0.50,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Typing%20with%20Prosthetic%20Hand.jpg'
//           src='https://static.wixstatic.com/media/a38d20_3ef9d74e7c2942318c11ff0ea9c0dabf~mv2.jpg/v1/fill/w_408,h_578,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2%20(1).jpg'
//           alt="Feature Showcase"
//           className="w-full h-auto max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
//         />
//       </div>
//       {/* Feature Description */}
//       <div className="w-full md:w-1/2 text-white">
//         <h2 className="text-4xl md:text-5xl font-bold mb-6">
//           3. Neuroxo Labs EMG Muscle Sensor 
//         </h2>
//         <p className="text-gray-300 mb-4">
//         NeuroXo Labs proudly presents our EMG muscle sensors, a pinnacle of capability and excellence. Engineered with precision and innovation, these sensors stand as a testament to our commitment to deliver the best. Designed to seamlessly capture and interpret muscle signals, our EMG sensors offer unparalleled accuracy and responsiveness. Whether utilized for medical applications, sports performance, or beyond, our EMG muscle sensors elevate the standards of usability and effectiveness. With NeuroXo Labs, you're accessing the forefront of sensor technology, where high capability and excellence converge seamlessly.
//        </p>
//       </div>
     
//       <div className="flex flex-col md:flex-row gap-8 items-center mt-24">
    
//     </div>
     

//     </div>



//   </div>

// </div>

// </div>

//   );
// };

// export default HeroSection;



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