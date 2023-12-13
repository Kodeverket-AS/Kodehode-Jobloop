import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { getData } from "../page";

export default async function Vision() {
  const data= await getData()
  console.log(data.VisionSections)
  console.log(data.heroSub)
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
    
            <div className="flex flex-col w-full " >
              <div className="flex flex-col items-center gap-40"> 
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

                
                {/* <ColorSectionImgRight src={lager}></ColorSectionImgRight> */}
                
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-row gap-80">
                    <div className="flex flex-col" key={data.VisionSections[0]._id}>
                        <h2>Fontenehuset</h2>
                        <p> {data.VisionSections[0].content}</p>
                    </div>
                    <div className="w-4/6 p-20 " key={data.VisionSections[0].image._id}>
                      <Image 
                         width={800}
                         height={800}
                         className="w-full"  
                         src={data.VisionSections[0].image}>
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