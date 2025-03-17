// import { ButtonOne } from "../Components/ButtonOne";
import { Navbar } from "../landingPageComponents/navbar";
import { Ms1 } from "../sections/Ms1";
import { VisionMob } from "../sections/VisionMob";
// import { VisionMob } from "../sections/visionMob";
import { S1 } from "../sections_pc/S1";
import { VisionPc } from "../sections_pc/VisionPc";

export  function LandingPage() {
    return (
        <div className="w-full bg-current bg-no-repeat bg-cover bg-center  sm:bg-[url('./images/blue-gradii.png')] sm:bg-cover sm:bg-left-top "  >

              
              <Navbar />
              
              <br />


              <div className="hidden sm:block">
                
                <br />
                <br />
                <br />
              </div>



            {/* pc s1 */}
            <S1/>
            
            {/* mobile s1 */}
            <Ms1 />



            {/* vision mob */}
            <VisionMob/>

            {/* vision pc */}
            <VisionPc/>

          
           
            

         
            
        </div>
    )
}
