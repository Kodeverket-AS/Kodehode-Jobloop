import Image from "next/image"
import PortableText from "react-portable-text"

export default function EndorsementComp({image, _id, navn,firma, content}){
    return(
        <>
        <div className="w-7/12 shadow-md flex justify-center bg-white p-20 items-center" key={_id}>
            <div className="flex flex-row gap-7 items-center center w-full">
                <div className=" w-5/6 ">
                    <Image  
                    width={900}
                    height={900}
                    className=" w-4/6 object-cover rounded-full"   
                    src={image}>
                    </Image>
                </div>

                <div className="w-5/6 flex flex-col gap-7">
                    <h2>{navn}</h2>
                    <h5 className="font-extrabold">{firma}</h5>
                    <PortableText className="italic" content={content}></PortableText>
                </div> 
            </div>
         </div>
        </>
    )
}