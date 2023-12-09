import { Client } from '../../lib/sanity';
import Image from 'next/image';
import "./globals.css";
import LandingHero from '../../components/LandingHero';
import danialigdery from '../../public/danialigdery.jpg'
import { ContactBtn } from '../../components/ContactBtn';
import mappe from '../../public/mappe.png'
import koffert2 from '../../public/koffert2.png'
import hatt from '../../public/hatt.png'
import { SeMerBtn } from '../../components/SeMerBtn';
import visjonlanding2 from '../../public/visjonlanding2.jpeg'




export default function Home() {
  return (
    <div> 
      <div>
      <LandingHero></LandingHero>
      </div>
      <div className='flex flex-col gap-32'>
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

          <div className='flex flex-col gap-28' >

              <div className='w-full flex justify-center'> 
                <h1 className='font-extrabold text-5xl'>Hvordan kan vi hjelpe deg?</h1>
              </div>

              <div className='flex justify-center'>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col gap-8 items-center'>
                      <Image src={koffert2}></Image>
                      <h5 className='text-center font-bold text-xl'>Bedrift</h5>
                      <p className='w-3/6 text-center'>For bedrifter som er interessert i samarbeide</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                    <div className='flex flex-col gap-8 items-center'>
                      <Image src={hatt}></Image>
                      <h5 className='text-center font-bold text-xl '>Kursdeltager</h5>
                      <p className='w-3/6 text-center'>For deg som vil delta i Kodehode kurset</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                    <div className='flex flex-col gap-8 mt-1  items-center'>
                      <Image src={mappe}></Image>
                      <h5 className='text-center  font-bold text-xl'>Virksomhet</h5>
                      <p className='w-3/6 text-center'> For offentlig etat, skole, eller fylkeskommune</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                </div>
              </div>

              <div className='flex gap-10 w-5/6 justify-center mb-20'>
                <div className='w-3/6'>
                  <Image src={visjonlanding2}></Image>
                </div>

                <div className='flex flex-col gap-4'>
                  <h2> Vår visjon</h2>
                  <p> Her kommer noe tekst om visjon</p>
                  <SeMerBtn></SeMerBtn>
                </div>

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