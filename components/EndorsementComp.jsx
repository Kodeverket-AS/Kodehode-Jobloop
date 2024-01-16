import Image from "next/image"
import PortableText from "react-portable-text"

export default function EndorsementComp({image, _id, navn, firma, content}){

     
    return(
        <>
        <div className=" w-5/6 lg:w-7/12 p-7 lg:p-20 shadow-lg  flex justify-center bg-white lg:p-20 items-center mb-20 " key={_id}>
            <div className="flex flex-col lg:flex-row gap-7  items-center justify-center w-6/12 lg:w-full">
                <div className=" w-full lg:w-5/6 ">
                    <Image  
                    width={900}
                    height={900}
                    className="  w-full lg:w-4/6 object-cover rounded-full"   
                    src={image}>
                    </Image>
                </div>

                <div className=" w-full  lg:w-5/6 flex flex-col gap-7">
                    <h2>{navn}</h2>
                    <h5 className="font-extrabold">{firma}</h5>
                    <PortableText className="italic" content={content}></PortableText>
                </div> 
            </div>
         </div>
        </>
    )
}