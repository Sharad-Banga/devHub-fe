import { ButtonOne } from "../Components/ButtonOne";
import { Bars } from "../icons/Bars";
import { Logo } from "../icons/Logo";

export  function Navbar() {

  function signInFxn(){

  }




    return (

        <div className="flex justify-center items-center h-[100px] md:h-[150px]">
          <div className="w-[90%] h-[45px] sm:h-[55px] md:h-[65px] backdrop-blur-xs bg-white/10 border-white/15 border-[0.5px] rounded-[15px] fixed">
            
              <div className="pl-[5%] sm:pl-[3%] pr-[3%] text-white  flex items-center justify-between h-full w-full">

                    <div className="branding flex gap-2 items-center h-full">
                        <div className="logo">
                          <Logo/>
                        </div>
                        <div className="logoName  hidden sm:block text-[20px] font-yatra">
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

                    <div className="dropdown flex sm:hidden">
                        <Bars/>
                    </div>


              </div>

          </div>
        </div>
    )
}
