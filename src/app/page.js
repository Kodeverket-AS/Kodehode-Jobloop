import { Client } from '../../lib/sanity';
import Image from 'next/image';
import "./globals.css";
import LandingHero from '../../components/LandingHero';
import anniespratt from '../../public/anniespratt.jpg'
import danialigdery from '../../public/danialigdery.jpg'
import { ContactBtn } from '../../components/ContactBtn';
import briefcase from '../../public/briefcase.png'
import cap from '../../public/cap.png'
import folderkanban from '../../public/folderkanban.png'
import mappe from '../../public/mappe.png'



export default function Home() {
  return (
    <div> 
      <div>
      <LandingHero></LandingHero>
      </div>
      <div className='w-screen flex justify-center '>
        <div className='flex flex-row justify-center gap-x-10 w-5/6' >
          <div className='w-3/6 flex flex-col gap-20'>
            <div>
              <p>Vi rekrutterer kandidater som av ulike grunner har havnet utenfor arbeidslivet og lærer dem opp til å bli frontend utviklere. 

              Gjennom en kombinasjon av teoretisk opplæring og praksis vil kandidatene lære seg de viktigste teknologiene og bli klar for en karriere innen utvikling. 

              Vi vil gjerne høre fra deg, enten du vil bli et kodehode, eller om du er en bedrift som vil samarbeide med oss og hjelpe våre kandidater, og om du er fra NAV eller andre tiltak og er nysgjerrig på vår virksomhet
              </p>
            </div>
            <div>
                <ContactBtn></ContactBtn>
            </div>
          </div>
          <div className='h-2/6' >
            <Image 
            width={800}
            alt="kodemiljø" 
            src={danialigdery}
            style={{objectFit: "contain"}}
            ></Image>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
         <div className='flex flex-row gap-40'>
            <div className='flex flex-col'>
             <Image src={briefcase}></Image>
            </div>
            <div className='flex flex-col'>
            <Image src={cap}></Image>
            </div>
            <div className='flex flex-col'>
            <Image src={folderkanban}></Image>
            </div>

         </div>
      </div>
    </div>
  )
}

export async function getData() {
  return Client.fetch(`{
    "heroSub": *[_type == "heroSub"]{title, "image":image.asset->url, content, _id, title},
  }`)
}