import Typewriter from "typewriter-effect"
 
 
 const TypeWritingEffect = () => {
   return (
     <div className="text-2xl font-bold text-center text-red-400">
         <Typewriter 
           options={{
             strings:[
                 "72-Hour AQI Prediction",
                 "Real-time pollution levels across Delhi NCR",
                 "Air Quality Analysis",                
             ],
             autoStart:true,
             loop:true,
             deleteSpeed:50
           }}
         />
         
     </div>
   )
 }
 
 export default TypeWritingEffect