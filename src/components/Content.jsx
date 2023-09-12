import {VscEdit} from "react-icons/vsc"
import {BsHandbag} from "react-icons/bs"
import {AiOutlinePlusCircle} from "react-icons/ai"

const Content = () => {
  return (
    <div className="bg-purple-200 w-[100%]">
        <div className="m-4 bg-white rounded-l h-full">
            <div className=" py-4 px-8">
                <div >
                    <ul className="flex justify-between text-md font-semibold mr-20">
                        <li>About</li>
                        <li>Skills & Certificates</li>
                        <li> Posts</li>
                        <li>Spaces</li>
                    </ul>
                </div>
            </div>

            <div className="border-2"/>

            <div className="p-6 flex mr-2">
                <p className="mr-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit recusandae dignissimos eos ipsam nisi quae magnam esse. Mollitia enim, quis corrupti ut porro, culpa ex veniam recusandae voluptates quidem neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur assumenda reprehenderit architecto reiciendis aliquid voluptatem provident nemo nam modi voluptas. Rem voluptatum, ipsa eum quisquam mollitia provident. Earum, quod doloribus!</p>

                <VscEdit className="text-[100px]  text-purple-500 items-top "/>
            </div>

            <div className="border-2"/>

            <div className="p-6">
                <h1 className="text-xl font-semibold">Experience</h1>
                <div className="flex mt-8 ml-[-20px]">
                    <BsHandbag className="bg-purple-200 rounded-full m-4 text-5xl p-2 "/>
                    <div >
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
                                <p className="text-sm ">January 2023- Present</p>
                                <p className="text-sm" >ABC - Noida, India</p> 
                            </div>
                            <div className="flex gap-2">
                            <AiOutlinePlusCircle className="text-[20px]  text-purple-500 items-top "/>
                            <VscEdit className="text-[20px]  text-purple-500 items-top "/>
                         </div>
                         </div>

                         
                        <br />

                        

                    <div className="pr-10">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi aspernatur nulla unde numquam alias, voluptas nostrum officiis. Delectus, voluptatum! Eligendi doloribus id porro, labore quidem nostrum voluptates ipsa harum mollitia consectetur odio quaerat iusto architecto, veniam fugit modi officiis doloremque unde! Vitae tempora magnam consequuntur quibusdam temporibus, vero beatae doloribus in odit nobis neque deserunt exercitationem minus aliquid. Mollitia, totam.
                        </p>
                        </div>
                    </div>
                </div>

                
            </div>

            <div className="border-2"/>

            <div className="p-6 w-[100%]">
                <h1 className="text-xl font-semibold">Education</h1>
                <div className="flex mt-8 ml-[-20px]">
                    <BsHandbag className="bg-purple-200 rounded-full m-4 text-5xl p-2 "/>
                    <div className="flex justify-between w-[100%] ">
                        <div >
                            <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet.</h1>
                            <p className="text-sm ">January 2023- Present</p>
                            <p className="text-sm" >ABC - Noida, India</p> 
                            
                            
                        </div>
                        <div className="flex gap-2">
                                <AiOutlinePlusCircle className="text-[20px]  text-purple-500 items-top "/>
                                <VscEdit className="text-[20px]  text-purple-500 items-top "/>
                        </div>
                    </div>
                </div>

                
            </div>


        </div>
    </div>
  )
}

export default Content
