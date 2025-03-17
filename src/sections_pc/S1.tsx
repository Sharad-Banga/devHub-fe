// import { useState, useEffect } from 'react';
import { ButtonOne } from "../Components/ButtonOne";

export const S1 = () => {
  


  return (
    <div className="hidden sm:block">
      <div
        className="h-[100vh] flex justify-evenly items-center w-[100vw]"
        
      >
        <div
          className="bg-[url('./images/rainbow-gradii.png')] bg-cover bg-center bg-no-repeat w-[40vw] h-[17vh] md:w-[25vw] md:h-[35vh] rotate-90 rounded-2xl"
        >
        </div>

        <div
          className="bg-[url('./images/rainbow-gradii.png')] bg-cover bg-center bg-no-repeat sm:w-[25vw] sm:h-[30vh] rounded-2xl w-[40vw] h-[12vh]"
        >
        </div>

        <div
          className="text-white absolute font-extrabold flex-col justify-between sm:h-[40vh] text-[25px] md:text-[60px] select-none w-[100] font-dela-gothic text text-nowrap"
        >
          <div className="flex justify-center"> ONE &nbsp; STOP </div>
          <div className="flex justify-center w-full"> FOR &nbsp; DEVELOPERS</div>

          <div className="hidden sm:flex justify-center mt-6">
            <ButtonOne color="black/60" rounded="lg" size="md" text="Try It Free" border_color="white" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

