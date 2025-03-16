import { ButtonOne } from "../Components/ButtonOne"


export const Ms1 =()=>{
  return(
    <>
      <div className="z-1 flex justify-center mt-8 sm:hidden">

<div className=" mt-0 h-[260px] w-[90vw] bg-[url('./images/rainbow-gradii.png')] bg-cover bg-center bg-no-repeat rounded-lg rotate-180 ">

</div>

<div className="text-white absolute font-normal flex-col justify-between  sm:h-[40vh] text-[200%] md:text-[60px] mt-5 select-none  w-[100vw] font-dela-gothic text text-nowrap z-10   ">

    <div className="flex justify-center"> ONE &nbsp; STOP </div>

    <div className="flex justify-center  w-full text-[90%]"> FOR &nbsp; DEVELOPERS</div>

  <div className="mt-4 select-none text-[15px] font-cmono  flex justify-center">
    Be Productive with devHub tools.
  </div>
  

    <div className="  flex justify-center mt-8">
          <ButtonOne color="black"  rounded="md" size="lg" text="Try It Free" border_color="white" onClick={()=>{}} />
    </div>

</div>




</div>
    </>
  )
}