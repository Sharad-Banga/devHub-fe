export const Features = () => {
  return (
    <>
      <div className="h-[90vh] mt-[100px]  flex justify-center">
        <div className="h-full w-[70vw] flex flex-col justify-center gap-0">
          <div className="text-white text-[3.5vw] font-dela-gothic flex justify-center  h-[63px] z-10 w-full">
            Our Suite of Tools
          </div>


          <div className="h-[80%] bg-[url('./images/purple-bg.png')]  w-full rounded-lg">

              <div className=" text-gray-50 h-[100px] text-[20px] flex-col mt-3 font-extralight tracking-widest flex font-cmono items-center justify-center">
                  <div className=" flex justify-center">Easily save, share, and manage your&nbsp; <br /></div> 
                  
                  <div className=" flex justify-center">code snippets and URLs with powerful, easy-to-use tools.</div>
              </div>


              <div className=" h-[65%] mt-4 flex justify-evenly">

                  <div className="h-full flex-col w-[270px] bg-black rounded-md border-gray-500 border-[0.5px]">

                      <div className=" h-[60%] w-full bg  pt-[20%]">

                        <div className="bg-[url('./images/ShortUrl.png')] bg-cover  h-[100px]">

                        </div>

                      </div>
                      <div className=" h-[40%] w-full">

                            <div className=" flex items-center pl-4 font-geist font-semibold text-[22px] h-[40%] text-white ">
                              Short URL
                            </div>

                            <div className=" font-cmono  text-[17px] h-[60%] text-gray-300 flex-col  pl-4 pt-2  w-full">
                               <div>
                                  <div >Create and manage</div>
                                  <div>short links with ease.</div>
                               </div>
                            </div>
                      </div>

                  </div>

                  <div className="h-full w-[270px] bg-black rounded-md border-gray-500 border-[0.5px]">

                        <div className=" h-[60%] w-full bg  pt-[20%]">

                            <div className="bg-[url('./images/CodeSnippit.png')] bg-cover  h-[100px]">

                            </div>

                        </div>
                        <div className=" h-[40%] w-full">

                              <div className=" flex items-center pl-4 font-geist font-semibold text-[22px] h-[40%] text-white ">
                              Share Code Snippet                              </div>

                              <div className=" font-cmono  text-[17px] h-[60%] text-gray-300 flex-col  pl-4 pt-2  w-full">
                                <div>
                                    <div >Generate aesthetically</div>
                                    <div>pleasing images of code</div>

                                    

                                </div>
                              </div>
                        </div>

                  </div>

                  <div className="h-full w-[270px] bg-black rounded-md border-gray-500 border-[0.5px]">


                        <div className=" h-[60%] w-full  pl-[20%]  pt-[16%]">

                            <div className="bg-[url('./images/MockApi.png')]  bg-contain bg-no-repeat  h-[150px]">

                            </div>

                        </div>
                      <div className=" h-[40%] w-full">

                            <div className=" flex items-center pl-4 font-geist font-semibold text-[22px] h-[40%] text-white ">
                              Mock API
                            </div>

                            <div className=" font-cmono  text-[17px] h-[60%] text-gray-300 flex-col  pl-4 pt-2  w-full">
                              <div>
                                  <div >The tool to quickly create</div>
                                  <div>temporary API’s for FE.</div>
                              </div>
                            </div>
                      </div>

                  </div>

              </div>


          </div>



        </div>
      </div>
    </>
  )
}