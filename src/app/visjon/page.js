import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { getData } from "../page";
import PortableText from "react-portable-text";

export default async function Vision() {
  const data= await getData()

  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen w-full">
    
          <div className="flex flex-col " >
               <div className="flex flex-col items-center gap-40 w-full"> 
                        <div className="flex flex-col w-4/6 ">
                          <div>
                            <h1 className="text-center">{data.heroSub[2].title}</h1>
                          </div>
                          <div key={data.heroSub[2]._id}>
                            <Image  width={500}
                                height={500}
                                className="w-full" 
                                src={data.heroSub[2].image}>
                          </Image>
                          </div>
                          <p> Her kommer tekst om vår visjon</p>
                        </div>

                        <div className="flex flex-col items-center justify-center  ">
                              <h1 className="p-20">Samarbeidsprosjekter</h1>
                              <div className="flex flex-row gap-40 p-24 w-full  items-center bg-jobloop-orange  ">
                                <div className="w-full" key={data.VisionSections[1]._id}>
                                    <Image 
                                      width={800}
                                      height={800}
                                      className="w-full"  
                                      src={data.VisionSections[1].ImageTwo}>
                                    </Image>
                                </div>
                                <div className="flex flex-col gap-10">
                                  <Image 
                                    width={100}
                                    height={100}
                                    className="w-2/6"  
                                    src={data.VisionSections[1].ImageOne}>
                                  </Image>
                                      <PortableText content={data.VisionSections[1].content}></PortableText>
                                </div>
                              </div>
                        
                        </div>

                
                
                        <div className="flex flex-col items-center justify-center w-full">
                          <div className="flex flex-row gap-40 items-center p-24">
                            <div className="flex flex-col gap-10">
                                <Image 
                                    width={100}
                                    height={100}
                                    className="w-3/6"  
                                    src={data.VisionSections[0].ImageOne}>
                                </Image>
                                <PortableText content={data.VisionSections[0].content}></PortableText>
                          
                            </div>
                            <div className="w-full " key={data.VisionSections[0]._id}>
                              <Image 
                                width={800}
                                height={800}
                                className="w-full"  
                                src={data.VisionSections[0].ImageTwo}>
                              </Image>
                            </div>
                          </div>

                        </div>

                   
                        
                 </div> 
            </div>

      </main>
    </>
  );
}