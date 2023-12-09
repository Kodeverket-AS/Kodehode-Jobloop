import Image from "next/image"


export function ColorSectionImgLeft({src}){

    return(

        <div className="flex flex-col w-full bg-jobloop-orange items-center justify-center">
            <div className="flex flex-col">
              <h2>Gløde</h2>
              <p> her kommer tekst om Gløde</p>
            </div>
            
            <div className="flex flex-row">
                <div className="w-3/6 p-20 ">
                <Image src={src}></Image>
                </div>
            </div>

        </div>
    )

}