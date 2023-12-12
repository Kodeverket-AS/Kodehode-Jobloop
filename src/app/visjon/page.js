import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import surface from '../../../public/surface.jpg'
import NavbarFarge from "../../../components/navigation/NavbarFarge";
import lager from '../../../public/lager.jpg'
import Kodeloftet from '../../../public/Kodeloftet.png'
import { ColorSectionImgRight } from "../../../components/ColorSectionImgRight";

export default function Vision() {
  return (
    <div className="flex flex-col w-full " >
    <NavbarFarge></NavbarFarge>
      <div className="flex flex-col items-center gap-40"> 
        <div className="flex flex-col w-4/6 ">
          <div>
            <h1 className="text-center">Et mangfold av muligheter</h1>
          </div>
          <div>
            <Image src={surface}></Image>
          </div>
          <p> Her kommer tekst om vår visjon</p>
        </div>

        
        <ColorSectionImgRight src={lager}></ColorSectionImgRight>
        
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row gap-80">
             <div className="flex flex-col">
                <h2>Fontenehuset</h2>
                <p> her kommer tekst om Fontenehuset</p>
            </div>
            <div className="w-4/6 p-20 ">
              <Image src={Kodeloftet}></Image>
            </div>
          </div>

        </div>
        
      </div>
    </div> 
  );
}