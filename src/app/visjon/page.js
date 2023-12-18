import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { getData } from "../page";
import PortableText from "react-portable-text";
import { SeMerBtn } from "../../../components/Buttons";
import EndorsementComp from "../../../components/EndorsementComp";
import ContactComp from "../../../components/ContactComp";
import Partners from "../../../components/PartnersComp";


export default async function Vision() {
  const data= await getData()
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen w-full">
    
          <div className="flex flex-col " >
               <div className="flex flex-col items-center gap-40 w-full mt-32"> 
                        <div className="flex flex-col w-4/6 gap-12">
                          <div>
                            <h1 className="text-center font-extrabold">{data.heroSub[2].title}</h1>
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
                              <h1 className="p-20 font-extrabold">Samarbeidsprosjekter</h1>
                              <div className="p-24 w-full bg-jobloop-orange flex justify-center  ">
                                  <div className="w-5/6 flex flex-row gap-40 items-center ">
                                      <div className="w-5/6 flex mt-20" key={data.VisionSections[1]._id}>
                                          <Image 
                                            width={500}
                                            height={500}
                                            className="w-full"  
                                            src={data.VisionSections[1].ImageTwo}>
                                          </Image>
                                      </div>
                                      <div className=" w-5/6 flex flex-col gap-10">
                                        <Image 
                                          width={100}
                                          height={100}
                                          className="w-3/6"  
                                          src={data.VisionSections[1].ImageOne}>
                                        </Image>
                                          <PortableText content={data.VisionSections[1].content}></PortableText>
                                          <SeMerBtn></SeMerBtn>
                                      </div>
                                  </div>  
                               </div>
                        
                        </div>

                        <div className="flex flex-col items-center justify-center  ">
                              <div className="p-24 w-full flex justify-center  ">
                                  <div className="w-5/6 flex flex-row gap-40 items-center ">
                                     <div className=" w-5/6 flex flex-col gap-10">
                                        <Image 
                                          width={100}
                                          height={100}
                                          className="w-4/6"  
                                          src={data.VisionSections[0].ImageOne}>
                                        </Image>
                                          <PortableText content={data.VisionSections[0].content}></PortableText>
                                          <SeMerBtn></SeMerBtn>
                                      </div>

                                      <div className="w-5/6 flex " key={data.VisionSections[0]._id}>
                                          <Image 
                                            width={500}
                                            height={500}
                                            className="w-full"  
                                            src={data.VisionSections[0].ImageTwo}>
                                          </Image>
                                      </div>
                                     
                                  </div>  
                               </div>
                        
                        </div>

                

                        <EndorsementComp key={data.endorsement[0]._id} image={data.endorsement[0].image} navn={data.endorsement[0].navn} firma={data.endorsement[0].firma} content={data.endorsement[0].content}></EndorsementComp>
                        <ContactComp 
                        key={data.kontaktseksjon[0]._id} 
                        imageOne={data.kontaktseksjon[0].ImageOne} 
                        title={data.kontaktseksjon[0].title}
                        content={data.kontaktseksjon[0].content}
                        >
                        </ContactComp>
                        <div className="flex flex-col items-center w-full pb-32">
                             <div>
                               <h1 className="pb-20 pl-20 font-extrabold text-center">Andre samarbeidspartnere</h1>
                             </div>

                            <div className="flex flex-row w-4/6 gap-32 justify-center pl-20">
                                  <Partners
                                  key={data.samarbeid[0]._id}
                                  title={data.samarbeid[0].title}
                                  image={data.samarbeid[0].image}
                                  content={data.samarbeid[0].content}
                                  >
                                </Partners>

                                <Partners
                                  key={data.samarbeid[0]._id}
                                  title={data.samarbeid[0].title}
                                  image={data.samarbeid[0].image}
                                  content={data.samarbeid[0].content}
                                  >
                                </Partners>

                                <Partners
                                  key={data.samarbeid[0]._id}
                                  title={data.samarbeid[0].title}
                                  image={data.samarbeid[0].image}
                                  content={data.samarbeid[0].content}
                                  >
                                </Partners>

                          </div>
                       </div>
                        
                 </div> 
            </div>

      </main>
    </>
  );
}