import tiger from "./images/image35.png"
import Logo2  from "./images/Logo2.png"

export default function DiscountSec() {
  return (
    <div className="py-16 w-full">
    <div className="flex flex-wrap w-full p-10 justify-between items-center">
        <div className=" md:w-[50%] max-w-full w-[100%]">
            kjjkjk
        </div>
        <div className=" w-[100%] max-w-full md:w-[50%] relative ">
          <div className="bg-[#B4815B] ">
            <img className="w-full" src={tiger}/>
          </div>
          <img className="absolute w-[340px] h-[240px] z-999  top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]" src={Logo2}/>
        </div>
    </div>
</div>
  )
}