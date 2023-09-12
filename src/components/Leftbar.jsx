import {SiWindows} from "react-icons/si"
import {TbMailOpenedFilled} from "react-icons/tb"
import {DiGoogleAnalytics} from "react-icons/di"
import {CgProfile} from "react-icons/cg"
import {MdTravelExplore} from "react-icons/md"

const Leftbar = () => {
  return (

   <>
    
    <div className="pl-10 pt-2 w-[400px] border-2 min-h-screen">

    <div className="items-center  pl-20 flex">
        <img className="h-[30px]" src="../images/logo.png " alt="" />
        <h1 className="font-semibold items-center text-xl">spehre</h1>
        
      </div>

      <div className="border-2 "/>

      <div className="flex text-sm font-semibold text-purple-500 flex-col gap-2 pt-3">
                <div className="flex items-center gap-2">
                    <SiWindows />
                    <h2>Home</h2>
                </div>

                <div className="flex items-center gap-2">
                    <TbMailOpenedFilled/>
                    <h2>Job Invites</h2>
                </div>

                <div className="flex items-center gap-2">
                    <DiGoogleAnalytics/>
                    <h2>Analytics</h2>
                </div>

                <div className="flex items-center gap-2">
                    <CgProfile/>
                    <h2>My Profile</h2>
                </div>

                <div className="flex items-center gap-2">
                    <MdTravelExplore/>
                    <h2>Explore</h2>
                </div>
      </div>
      <br/>
      

      <div className="border-2 mr-4"/>
      <br/>
      
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Communities Feeds</h1>

            <div className="flex items-center gap-2">
                <img className="h-[30px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
                <div>
                    <h2 className="font-semibold text-l">Lorem ipsum dolor</h2>
                    <p className="text-xs">700 members</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <img className="h-[30px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
                <div>
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-xs">700 members</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <img className="h-[30px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
                <div>
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-xs">700 members</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <img className="h-[30px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
                <div>
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-xs">700 members</p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <img className="h-[30px] rounded-full" src="../images/RitikGupta.jpeg" alt="" />
                <div>
                    <h2 className="font-semibold">Lorem ipsum dolor</h2>
                    <p className="text-xs">700 members</p>
                </div>
            </div>
        </div>

        <p className="text-purple-500 text-xs pt-2 flex items-center pl-8">Show 5 more</p>

            


       <div className="flex flex-col align-end pb-0">
         <ul className="text-s flex gap-2 flex-wrap pt-20 justify-around">
            <li>About</li>
            <li>Accessibility</li>
            <li>Help</li>
            <li>Privacy & Terms</li>
            <li>Advertise</li>
            <li>More</li>
         </ul>
        <div className="flex pt-2 m-auto mt-4 text-md items-center">
        <p className="text-purple-500"> spehre.io </p>
        <p className="text-sm">	&#169; 2023</p>
        </div>
        </div> 
    </div>
   </>
  )
}

export default Leftbar
