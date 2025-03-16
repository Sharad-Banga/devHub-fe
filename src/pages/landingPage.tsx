import { ButtonOne } from "../Components/ButtonOne";
import { Navbar } from "../landingPageComponents/navbar";

export  function LandingPage() {
    return (
        <div className="bg-black w-screen h-screen bg-[url('./images/blue-gradii.png')] bg-cover bg-left-top"  >

          <Navbar />

          <div className="hidden sm:block">
            <br />
            <br />
            <br />
            <br />
          </div>

            <div className="w-[100vw] h-[30vh] sm:h-[40vh]  pr-2 sm:pr-0 flex justify-evenly items-center  ">

              <div className="bg-[url('./images/rainbow-gradii.png')] bg-cover bg-center bg-no-repeat w-[40vw] h-[17vh] md:w-[25vw] md:h-[35vh] rotate-90 rounded-2xl">

              </div>

              <div className="bg-[url('./images/rainbow-gradii.png')] bg-cover bg-center bg-no-repeat sm:w-[25vw] sm:h-[30vh] rounded-2xl  w-[40vw] h-[12vh]">

              </div>


              <div className="text-white absolute font-extrabold flex-col justify-between  sm:h-[40vh] text-[25px] md:text-[60px]   w-[100vw] font-dela-gothic text text-nowrap   ">

                 <div className="flex justify-center"> ONE &nbsp; STOP </div>
                 
                 <div className="flex justify-center  w-full"> FOR &nbsp; DEVELOPERS</div>
                  
                  <div></div>
                  
                 <div className="hidden  sm:flex justify-center mt-6">
                        <ButtonOne color="black/60"  rounded="lg" size="md" text="Try It Free" border_color="white" onClick={()=>{}} />
                  </div>
                
              </div>
              



            </div>

            <div className="mt-0  sm:hidden flex justify-center ">
                        <ButtonOne color="white/60"  rounded="lg" size="md" text="Try It Free" border_color="white" onClick={()=>{}} />
            </div>
            

         
            
        </div>
    )
}
