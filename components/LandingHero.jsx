"use client";

import Link from "next/link";
import Image from "next/image";
import headwaykuttet from "../public/headwaykuttet.jpeg"
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
