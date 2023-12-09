"use client";

import Link from "next/link";
import Image from "next/image";
import headwaykuttet from "../public/headwaykuttet.jpeg"
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