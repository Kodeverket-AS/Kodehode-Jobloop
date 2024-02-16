import Image from "next/image"
import PortableText from "react-portable-text"
import { SeMerBtn } from "./Buttons"

export default function Partners({_id, title, content, image}){

    return(

        
                <div className="w-9/12 flex flex-col gap-7  " key={_id}>
                        <Image 
                        width={100}
                        height={100}
                        className="w-4/6" 
                        src={image}></Image>
                        <h3 className="w-full ">{title}</h3>
                        <PortableText className="w-full " content={content}></PortableText>
                        <SeMerBtn></SeMerBtn>

                        
                </div>

        
    )

} 