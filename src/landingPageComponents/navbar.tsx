import { useState } from "react";
import { ButtonOne } from "../Components/ButtonOne";
import { Bars } from "../icons/Bars";
import { Logo } from "../icons/Logo";
import { Cross } from "../icons/Cross";

export  function Navbar() {

  const [dropOpen , setDropOpen] = useState(false);

  function signInFxn(){

  }




    return (

        <div className="flex justify-center items-center h-[100px] md:h-[150px]">
          <div className="w-[90%] h-[45px] sm:h-[55px] md:h-[65px] backdrop-blur-xs bg-white/10 border-white/15 border-[0.5px] rounded-[15px] fixed z-30">
            
              <div className="pl-[5%] sm:pl-[3%]  text-white  flex items-center justify-between h-full w-full">

                    <div className="branding flex gap-2 items-center h-full">
                        <div className="logo">
                          <Logo/>
                        </div>
                        <div className="logoName  sm:block text-[17px] font-yatra">
                          devHub
                        </div>
                    </div>

                    <div className="links w-[50%] sm:flex justify-evenly font-cmono sm:text-base md:text-lg lg:text-xl hidden ">
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



                        {dropOpen && (
                          <div className="absolute top-full z-40 font-cmono w-[100vw] h-[100vh] mt-2.5 bg-black/90  

                          backdrop-blur-lg   border-sky-100 rounded-[5px] ">
                            <div className="p-2 flex-col justify-end">
                              <a href="#" className="py-1 flex justify-center">Vision</a>
                              <a href="#" className="flex justify-center py-1">Features</a>
                              <a href="#" className="flex justify-center py-1">Pricing</a>
                              <a href="#" className="flex justify-center py-1">Blog</a>
                              <a href="#" className="flex justify-center py-1">Team</a>
                            </div>
                          </div>
                        )}
                      
                        
                    </div>




              </div>

          </div>
        </div>
    )
}
