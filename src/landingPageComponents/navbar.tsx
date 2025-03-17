import { useEffect, useState } from "react";
// import { ButtonOne } from "../Components/ButtonOne";
import { Bars } from "../icons/Bars";
import { Logo } from "../icons/Logo";
import { Cross } from "../icons/Cross";
import { ButtonOne } from "../Components/ButtonOne";

export  function Navbar() {

  const [dropOpen , setDropOpen] = useState(false);

  function signInFxn(){

  }

  useEffect(() => {
    if (dropOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [dropOpen]);




    return (

      < div className="z-50 fixed w-full ">

        <div className=" flex justify-center items-center h-[100px] md:h-[150px] ">
          <div className=" w-[90vw] h-[45px] sm:h-[55px] md:h-[65px] backdrop-blur-lg bg-white/10 border-white/10 border-[0.5px] rounded-[15px] fixed ">
             
              <div className="pl-[5%] pr-[3%] sm:pl-[3%]  text-white  flex items-center justify-between h-full w-full  ">

                    <div className="branding flex gap-2 items-center h-full">
                        <div className="logo">
                          <Logo/>
                        </div>
                        <div className="logoName select-none sm:block text-[17px] font-yatra">
                          devHub
                        </div>
                    </div>

                    <div className="links w-[50%] sm:flex justify-evenly font-cmono sm:text-base md:text-lg lg:text-xl select-none hidden ">
                        <a href="">Vision</a>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">Blog</a>
                        <a href="">Team</a>
                    </div> 

                    <div className="signInButton hidden sm:flex">
                        <ButtonOne color="black/10"  rounded="md" size="md" text="Sign In" border_color="white" onClick={signInFxn} />
                    </div> 

                    <div  className="dropdown flex justify-end  sm:hidden cursor-pointer  w-44 h-60 mt-52 ">



                        { !dropOpen && <div onClick={()=>setDropOpen(a=>!a)} className="flex justify-end pt-1 pr-[3%]"><Bars/></div>}
                        { dropOpen &&<div onClick={()=>setDropOpen(a=>!a)} className="flex justify-end pt-1 pr-[3%]"> <Cross/> </div>}



                        
                      
                        
                    </div>


              </div>

          </div>
        </div>

        {dropOpen && (
          <div className="relative select-none  top-full z-40 font-cmono w-[100vw] h-[95vh]  bg-black/95  pr-10
            text-white text-[35px]
          backdrop-blur-lg    rounded-[5px] ">
            <div className="p-2 flex-col justify-end">
              <a href="#" className="flex justify-end py-1 ml-5">Vision</a>
              <a href="#" className="flex justify-end py-1 ml-5">Features</a>
              <a href="#" className="flex justify-end py-1 ml-5">Pricing</a>
              <a href="#" className="flex justify-end py-1 ml-5">Blog</a>
              <a href="#" className="flex justify-end py-1 ml-5">Team</a>



              
            </div>

            <br />

            <div className=" flex justify-center mt-6 ml-7 ">
              <ButtonOne color="white"  rounded="lg" size="lg" text="Try It Free" border_color="white"   onClick={()=>{}} />
            </div>

            
          </div>


        )}

      </ div>
    )
}
