// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import GoogleImage from '../Images/Google.png'

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [typingText, setTypingText] = useState("");
//   const fullText = "Create Your Account";
//   const [PanId, setPanId] = useState("");
//   const [fullName, setFullName] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const type = () => {
//       if (index < fullText.length) {
//         setTypingText(fullText.substring(0, index + 1));
//         index++;
//         setTimeout(type, 60);
//       }
//     };
//     type();
//   }, []);

//   const handleNameChange = (event) => {
//     setFullName(event.target.value);
//   };

//   const handlePanIdChange = (event) => {
//     setPanId(event.target.value);
//   };

//   const redirectToExperience = (event) => {
//     event.preventDefault();

//     if (PanId) {
//       localStorage.setItem('PanId', PanId);
//     }

//     navigate('/investment-experience');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-green-900 to-gray-900 text-white relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-44 bg-green-500 opacity-30 blur-3xl z-0"></div>

//       {/* Typing Effect Heading */}
//       <h1 className="text-white text-4xl md:text-5xl font-black text-center shadow-2xl relative z-10">
//         <span>{typingText}</span>
//         <span className="animate-blink">|</span>
//       </h1>

//       {/* Signup Box */}
//       <div className="signup-box bg-gray-900 p-8 rounded-2xl shadow-2xl w-96 relative transition mt-12 transform hover:scale-105">
//         <form onSubmit={redirectToExperience}>
//           <label className="block text-gray-400 text-sm mb-1">Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your full name"
//             required
//             value={fullName}
//             onChange={handleNameChange}
//             className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-1">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//             className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-1">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             required
//             className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-1">ADD You PanID</label>
//           <input
//             type="password"
//             placeholder="enter your PanId"
//             required
//             value={PanId}
//             onChange={handlePanIdChange}
//             className="w-full p-3 mb-3 bg-gray-700 text-white rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
//           />

//           <div className="flex items-center gap-x-2 text-gray-400 text-sm mb-4">
//             <input type="checkbox" className="w-4 h-4" required />
//             <span>
//               I agree to the <a href="#" className="text-green-400 hover:underline">Terms & Conditions</a>
//             </span>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transition font-semibold mb-2"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Signup with Google */}
//         <button
//           onClick={redirectToExperience}
//           className="w-full bg-white text-black flex items-center justify-center py-3 rounded-full hover:bg-gray-200 transition shadow-md"
//         >
//           <img src='' className="w-6 h-6 mr-2" alt="Google Logo" />
//           Sign Up with Google
//         </button>

//         <div className="text-center text-gray-400 mt-4 text-sm">
//           Already have an account? <a href="login.html" className="text-white hover:underline">Log In</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;




// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const navigate = useNavigate();
//   const [typingText, setTypingText] = useState("");
//   const fullText = "Create Your Account";
//   const [PanId, setPanId] = useState("");
//   const [fullName, setFullName] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const type = () => {
//       if (index < fullText.length) {
//         setTypingText(fullText.substring(0, index + 1));
//         index++;
//         setTimeout(type, 60);
//       }
//     };
//     type();
//   }, []);

//   const handleNameChange = (event) => {
//     setFullName(event.target.value);
//   };

//   const handlePanIdChange = (event) => {
//     setPanId(event.target.value);
//   };

//   const redirectToExperience = (event) => {
//     event.preventDefault();

//     if (PanId) {
//       localStorage.setItem("PanId", PanId);
//     }

//     navigate("/investment-experience");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white relative overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-44 bg-purple-500 opacity-20 blur-3xl z-0 animate-pulse"></div>

//       {/* Typing Effect Heading */}
//       <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8 relative z-10">
//         <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
//           {typingText}
//         </span>
//         <span className="animate-blink">|</span>
//       </h1>

//       {/* Signup Box */}
//       <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10 transform transition-all hover:scale-105">
//         <form onSubmit={redirectToExperience}>
//           <label className="block text-gray-400 text-sm mb-2">Full Name</label>
//           <input
//             type="text"
//             placeholder="Enter your full name"
//             required
//             value={fullName}
//             onChange={handleNameChange}
//             className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-2">Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             required
//             className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-2">Password</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             required
//             className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           />

//           <label className="block text-gray-400 text-sm mb-2">Add Your PanID</label>
//           <input
//             type="password"
//             placeholder="Enter your PanId"
//             required
//             value={PanId}
//             onChange={handlePanIdChange}
//             className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
//           />

//           <div className="flex items-center gap-x-2 text-gray-400 text-sm mb-6">
//             <input type="checkbox" className="w-4 h-4" required />
//             <span>
//               I agree to the{" "}
//               <a href="#" className="text-purple-400 hover:underline">
//                 Terms & Conditions
//               </a>
//             </span>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-1 h-px bg-gray-700"></div>
//           <span className="mx-4 text-gray-400">OR</span>
//           <div className="flex-1 h-px bg-gray-700"></div>
//         </div>

//         {/* Signup with Google */}
//         <button
//           onClick={redirectToExperience}
//           className="w-full bg-white text-gray-800 flex items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all shadow-md"
//         >
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
//             alt="Google Logo"
//             className="w-5 h-5 mr-2"
//           />
//           Sign Up with Google
//         </button>

//         {/* Login Link */}
//         <div className="text-center text-gray-400 mt-6 text-sm">
//           Already have an account?{" "}
//           <a href="/login" className="text-purple-400 hover:underline">
//             Log In
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;




import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [typingText, setTypingText] = useState("");
  const fullText = "Create Your Account";
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setTypingText(fullText.substring(0, index + 1));
        index++;
        setTimeout(type, 60);
      }
    };
    type();
  }, []);

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    navigate("/dashboard"); // Redirect to the desired page after signup
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3/4 h-44 bg-purple-500 opacity-20 blur-3xl z-0 animate-pulse"></div>

      {/* Typing Effect Heading */}
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-8 relative z-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-white">
          {typingText}
        </span>
        <span className="animate-blink">|</span>
      </h1>

      {/* Signup Box */}
      <div className="bg-gray-900 bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10 transform transition-all hover:scale-105">
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <label className="block text-gray-400 text-sm mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            required
            value={fullName}
            onChange={handleNameChange}
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* Email Field */}
          <label className="block text-gray-400 text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* Password Field */}
          <label className="block text-gray-400 text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          {/* Terms & Conditions */}
          <div className="flex items-center gap-x-2 text-gray-400 text-sm mb-6">
            <input type="checkbox" className="w-4 h-4" required />
            <span>
              I agree to the{" "}
              <a href="#" className="text-purple-400 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="mx-4 text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Signup with Google */}
        <button
          onClick={() => navigate("/dashboard")} // Redirect to the desired page
          className="w-full bg-white text-gray-800 flex items-center justify-center py-3 rounded-lg hover:bg-gray-100 transition-all shadow-md"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="w-5 h-5 mr-2"
          />
          Sign Up with Google
        </button>

        {/* Login Link */}
        <div className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400 hover:underline">
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;