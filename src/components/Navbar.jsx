import {PiMagnifyingGlassLight} from "react-icons/pi"
import {BsBell} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"

const Navbar = () => {
  return (
    <>
    

        <div className=" mt-0 flex justify-end  py-2 px-10  h-[40px] items-center w-[100%]"> 
      
      <div className="flex gap-4 h-[30px] items-center">
        <div className="border flex items-center ">
            <PiMagnifyingGlassLight className=" text-black pl-1"/>
            <label  htmlFor="search"></label>
            <input placeholder="Search" type="search" className=" px-2 border-none"/>
        </div>

        <BsBell className="border "/>
        <AiOutlineMail className="border"/>

        <div > 
            <img  className="h-[20px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
        </div>
        
        
      </div>
      
    </div>
    
    
    </>

    
  )
}

export default Navbar
