//import PortableText from "react-portable-text"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { ContactBtn, LinkButtonColour } from "./Buttons"

export default function ContactComp({imageOne, title, content, _id}){
    return(
        
        <div className='flex justify-center p-20 bg-jobloop-primary-green'>
         <div className="w-5/6">
                <div className="flex flex-col w-full gap-10 md:flex-row md:gap-7 ">
                    <div className="flex flex-row w-full ">
                        <div className="w-full">
                            <Image 
                            width={400}
                            height={400}
                            src={imageOne}
                                
                            ></Image>
                        </div>
                     
                      
                    </div>

                    <div className="flex flex-col justify-center w-full gap-10 md:w-4/6">
                        <h2 className="font-extrabold">{title}</h2>
                        <PortableText value={content} />
                        <LinkButtonColour Path={"/contact"} Text={"Kontakt oss"} /> 
                    </div>
               </div>
            </div>
        </div>
         
    
    )
}