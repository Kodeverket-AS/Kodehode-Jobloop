import PortableText from "react-portable-text"
import Image from "next/image"
import { ContactBtn } from "./Buttons"

export default function ContactComp({imageOne, title, content, _id}){
    return(
        
        <div className='flex justify-center bg-jobloop-green p-20'>
         <div className="w-5/6">
                <div className="flex flex-col md:flex-row w-full gap-10 md:gap-7 ">
                    <div className="flex flex-row w-full ">
                        <div className="w-full">
                            <Image 
                            width={400}
                            height={400}
                            src={imageOne}
                                
                            ></Image>
                        </div>
                     
                      
                    </div>

                    <div className="flex flex-col justify-center w-full md:w-4/6 gap-10">
                        <h2 className="font-extrabold">{title}</h2>
                        <PortableText content={content}></PortableText>
                        <ContactBtn></ContactBtn>
                    </div>
               </div>
            </div>
        </div>
         
    
    )
}