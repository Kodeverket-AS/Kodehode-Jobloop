"use client";

import Link from "next/link";
import Image from "next/image";
import headwaykuttet from "../public/headwaykuttet.jpeg"
<<<<<<< HEAD
import NavbarHvit from "./navigation/NavbarHvit";

export default function LandingHero() {
  return <div>

          <div className=" flex justify-center absolute -z-50 w-full">
            <Image 
             height={500}
             width={2000}
             alt="lærer som forklarer" 
             style={{objectFit: "contain"}}
             src={headwaykuttet} ></Image>
          </div>
          <NavbarHvit className= "z-20" />
          <main className="flex flex-col items-center min-h-screen p-24 ">
            <h1 className=' jobloop-orange'>Denne siden er under oppbygging!</h1>
            <p className=' text-alt-purple bg-jobloop-green'>Dette blir Kodehodes nye nettside på kodehode.no</p>
          </main>
      </div>;
}
=======
import Navbar from "./navigation/Navbar";

export default function LandingHero() {
  return <div>
          <div className="absolute top-0 flex justify-center w-full -z-50">
            <Image
             height={500}
             width={2000}
             alt="lærer som forklarer"
             style={{objectFit: "contain"}}
             src={headwaykuttet} ></Image>
          </div>
          <main className="flex flex-col items-center min-h-screen p-24 ">
            <div className="text-center text-white">
              <h1 className='text-white text-9xl'>Kodehode</h1>
              <p className='text-5xl text-white'>Kodekurs og rekruttering til<br />
              IT-bransjen</p>
            </div>
          </main>
      </div>;
}
>>>>>>> development
