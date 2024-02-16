import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { getData } from "../page";
import PortableText from "react-portable-text";
import { SeMerBtn } from "../../../components/Buttons";
import EndorsementComp from "../../../components/EndorsementComp";
import ContactComp from "../../../components/ContactComp";
import Partners from "../../../components/PartnersComp";
import { ProjectScroll } from "../../../components/ProjectScroll";
import { CooptScroll } from "../../../components/ProjectScroll";


export default async function Vision() {
  const data= await getData()
  
  return (
    <>
      {/*<NavbarAlt />*/}
      <main className="flex flex-col items-center w-full min-h-screen">
    
          <div className="flex flex-col items-center sm:justify-center " >
               <div className="flex flex-col items-center w-full gap-40 mt-32 "> 
                        <div className="flex flex-col w-5/6 gap-12 lg:4/6">
                          <div>
                            <h1 className="mb-10 text-3xl font-extrabold text-center md:text-5xl text-jobloop-primary-green">{data.heroSub[2].title}</h1>
                          </div>
                          <div key={data.heroSub[3]._id}>
                            <Image  
                                width={600}
                                height={600}
                                className="w-full" 
                                src={data.heroSub[3].image}>
                          </Image>
                          </div>
                          <p> Her kommer tekst om vår visjon</p>
                        </div>

                        <div className="flex flex-col items-center justify-center ">
                              <h1 className="p-20 text-2xl font-extrabold text-center md:text-3xl">Samarbeidsprosjekter</h1>
                              <div className="flex justify-center w-full p-20 bg-jobloop-primary-orange ">
                                  <div className="flex flex-col items-center w-5/6 gap-40 md:flex-row ">
                                      <div className="hidden w-5/6 mt-20 md:block" key={data.VisionSections[1]._id}>
                                          <Image 
                                            width={500}
                                            height={500}
                                            className="w-full"  
                                            src={data.VisionSections[1].ImageTwo}>
                                          </Image>
                                      </div>
                                      <div className="flex flex-col w-5/6 gap-10 ">
                                        <Image 
                                          width={100}
                                          height={100}
                                          className="w-5/6 md:w-3/6"  
                                          src={data.VisionSections[1].ImageOne}>
                                        </Image>
                                          <PortableText content={data.VisionSections[1].content}></PortableText>
                                          <SeMerBtn></SeMerBtn>
                                      </div>
                                  </div>  
                               </div>
                        
                        </div>

                        <div className="flex flex-col items-center justify-center w-full ">
                              <div className="flex justify-center w-full ">
                                  <div className="flex flex-col items-center justify-center w-5/6 gap-40 p-10 md:p-20 md:flex-row">
                                     <div className="flex flex-col w-5/6 gap-10 ">
                                        <Image 
                                          width={100}
                                          height={100}
                                          className="w-full md:w-4/6"  
                                          src={data.VisionSections[0].ImageOne}>
                                        </Image>
                                          <PortableText content={data.VisionSections[0].content}></PortableText>
                                          <SeMerBtn></SeMerBtn>
                                      </div>

                                      <div className="hidden w-5/6 md:block " key={data.VisionSections[0]._id}>
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

                        {/* <div className="block md:hidden"> 
                          <ProjectScroll  content={data.VisionSections} ></ProjectScroll>
                        </div> */}

                        <div>
                           <h1 className="text-2xl font-extrabold text-center md:text-4xl ">Hva partnere sier om oss</h1>
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
                             <div className="pb-20">
                               <h1 className="text-3xl font-extrabold text-center lg:pb-28 lg:text-4xl">Andre samarbeidspartnere</h1>
                             </div>
                            <div className="flex justify-center w-full"> 
                                <div className="flex flex-col justify-center w-4/6 gap-32 pl-20 md:flex-row">
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
                          {/* <div className="block md:hidden">
                            <CooptScroll content={data.samarbeid}></CooptScroll>
                          </div> */}
                       </div>
                        
                 </div> 
            </div>

      </main>
    </>
  );
}

