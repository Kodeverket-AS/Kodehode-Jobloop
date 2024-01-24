"use client";

import Link from "next/link";
import Image from "next/image";
import headwaykuttet from "../public/headwaykuttet.jpeg"
import Navbar from "./navigation/Navbar";
import danialigdery from '../public/danialigdery.jpg'
import { ContactBtn } from './ContactBtn';
import mappe from '../public/mappe.png'
import koffert2 from '../public/koffert2.png'
import hatt from '../public/hatt.png'
import { SeMerBtn } from './SeMerBtn';
import visjonlanding2 from '../public/visjonlanding2.jpeg'

export default function LandingHero() {
  return (
    <main>
      <div>
          <div className="absolute top-0 flex justify-center w-full -z-50">
            <Image
             height={500}
             width={2000}
             alt="lærer som forklarer"
             style={{objectFit: "contain"}}
             src={headwaykuttet} ></Image>
          </div>
            <div className="flex flex-col items-center min-h-screen p-24 text-center text-white ">
              <h1 className='text-white text-9xl'>Kodehode</h1>
              <p className='text-5xl text-white'>Kodekurs og rekruttering til<br />
              IT-bransjen</p>
            </div>
      </div>
      <div className='flex flex-col gap-32'>
          <div className='flex justify-center w-screen '>
            <div className='flex flex-row justify-center w-5/6 gap-x-10' >
              <div className='flex flex-col w-3/6 gap-20'>
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

              <div className='flex justify-center w-full'>
                <h1 className='text-5xl font-extrabold'>Hvordan kan vi hjelpe deg?</h1>
              </div>

              <div className='flex justify-center'>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col items-center gap-8'>
                      <Image src={koffert2}></Image>
                      <h5 className='text-xl font-bold text-center'>Bedrift</h5>
                      <p className='w-3/6 text-center'>For bedrifter som er interessert i samarbeide</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                    <div className='flex flex-col items-center gap-8'>
                      <Image src={hatt}></Image>
                      <h5 className='text-xl font-bold text-center '>Kursdeltager</h5>
                      <p className='w-3/6 text-center'>For deg som vil delta i Kodehode kurset</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                    <div className='flex flex-col items-center gap-8 mt-1'>
                      <Image src={mappe}></Image>
                      <h5 className='text-xl font-bold text-center'>Virksomhet</h5>
                      <p className='w-3/6 text-center'> For offentlig etat, skole, eller fylkeskommune</p>
                      <SeMerBtn></SeMerBtn>
                    </div>

                </div>
              </div>

              <div className='flex justify-center w-5/6 gap-10 mb-20'>
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
    </main>
  )
}
