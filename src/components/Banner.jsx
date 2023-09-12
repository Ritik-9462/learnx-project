import {FiEdit2} from "react-icons/fi"

const Banner = () => {
  return (
   <>

     <div className="flex justify-end  relative">
      <img className="h-[150px] -50 w-[100%] relative rounded" src="../images/banner.webp" alt="" />
      <FiEdit2 className="text-purple-1000 border m-2 p-[5px]  text-xl  absolute bg-white rounded-full"/>
    </div>
    <div>
        <img className="w-[160px] rounded-full mt-[-80px] ml-[100px] absolute"  src="../images/RitikGupta.jpeg" alt="" />
    </div>
    
   </>
  )
}

export default Banner
