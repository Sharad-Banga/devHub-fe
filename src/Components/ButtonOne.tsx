interface ButtonOneInter {
  rounded : string;
  text:string;
  size:"sm"|"md"|"lg";
  color:string;
  border_color:string;
  onClick : ()=>void;
}


interface sizeVariantInter {
  sm : string;
  "md" : string;
  lg : string;
}

const sizeVariant :sizeVariantInter = {
  "sm" :"p-1",
  "md" : "md:w-[112px] md:h-[40px] w-[80px] h-[33px]",
  "lg" : "md:w-[112px] md:h-[40px] w-[160px] h-[58px]"
}




export const ButtonOne =(props:ButtonOneInter)=>{
  return(
    <>
          <div className={`bg-${props.color} select-none ${sizeVariant[props.size]} flex justify-center items-center border-${props.border_color} border-[1px] rounded-md sm:rounded-md font-roboto font-bold text-[20px] sm:text-[14px] md:text-[17px]   cursor-pointer text-white`} onClick={props.onClick}  >
              {props.text}
          </div>
    </>
  )
}