import Typewriter from "typewriter-effect"
 
 
 const TypeWritingEffect = () => {
   return (
     <div>
         <Typewriter
           options={{
             strings:[
                 "finest bio amp solutions at the most affordable prices",
                 "combining cutting-edge technology with accessible pricing",
                 " provide amputees with prosthetic solutions",                
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