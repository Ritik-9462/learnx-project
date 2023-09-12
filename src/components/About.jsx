import {HiUserGroup} from "react-icons/hi"
import {RxSwitch} from "react-icons/rx"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {SiNetlify} from "react-icons/si"

const About = () => {
  return (
   <div className="pt-[105px] w-[450px] border-2 min-h-screen px-3">
        <div className="items-center flex flex-col ]">
            <h1 className=" text-lg font-bold" >Ritik Gupta</h1>
            <p className="text-xs">React Developer</p>
            <div className="flex gap-2 items-center text-xs">
                <HiUserGroup/>
                <p>100k followers</p>
                <p>100 following</p>
            </div>

            <div className=" flex flex-col mt-4 g-1">
                <div className="flex items-center justify-between">
                <h4 className="text-md font-semibold">Make my profile visible to employers</h4>
                <RxSwitch className="text-xl text-purple-500 mt-1"/>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda eligendi nostrum illo mollitia, exce illum ullam.</p>
            </div>

            <div className=" flex flex-col mt-6 g-1">
                <div className="flex items-center justify-between">
                <h4 className="text-md font-semibold">Other Links</h4>
                <AiOutlinePlusCircle className="text-xl text-purple-500 mt-1"/>
                </div>
                <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos assumenda eligendi m ullam.</p>
            </div>

            <div className="flex gap-2 rounded  bg-purple-100 w-[100%] h-[25px] items-center justify-around mt-5"> 
                <SiNetlify/>
                <SiNetlify/>
                <SiNetlify/>
            </div>

            <div className="w-[250px] h-[250px] bg-purple-100 rounded mt-8">
                    <div className="m-2">
                        <h1 className="">Wheel of Opportunities</h1>
                    </div>
            </div>

            <div className="mt-2">
                <h1 className="">Your Ranking</h1>
            </div>

            
        </div>

        
   </div>
  )
}

export default About
