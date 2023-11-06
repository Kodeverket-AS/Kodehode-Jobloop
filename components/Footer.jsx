"use client";

import Link from "next/link";
import Image from "next/image";
import jobloopHvit from "../public/jobloopHvit.png";
import kodeverketHvit from "../public/kodeverketHvit.png";

export default function Footer() {
  return (
    <footer className="gap-5 p-5 text-white md:p-10 bg-alt-purple">
      <div className="flex flex-col px-20 md:hidden">
        <h2 className="mx-auto">Linker</h2>
        <div className="py-3 mx-auto">
          <Image
            src={jobloopHvit}
            width={350}
            height={250}
            className="md:w-[150px] w-[100px]"
          />
        </div>
        <div className="py-3 mx-auto">
          <Image
            src={kodeverketHvit}
            width={350}
            height={250}
            className="md:w-[150px] w-[100px]"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="px-5 md:px-20">
          <h2>Kontakt</h2>
          <div className="flex flex-col py-3">
            <b>stefan@jobloop.no</b>
            <b>+47 40 06 64 13</b>
          </div>
          <div className="flex flex-col py-3">
            <b>sina@jobloop.no</b>
            <b>+47 41 08 68 27</b>
          </div>
          <div className="flex flex-col py-3">
            <b>karl@jobloop.no</b>
            <b>+47 95 90 40 52</b>
          </div>
        </div>
        <div className="hidden md:px-20 md:flex-col md:flex">
          <h2 className="mx-auto">Linker</h2>
          <div className="py-3 mx-auto">
            <Image
              src={jobloopHvit}
              width={350}
              height={250}
              className="w-[150px]"
            />
          </div>
          <div className="py-3 mx-auto">
            <Image
              src={kodeverketHvit}
              width={350}
              height={250}
              className="w-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col px-5 md:px-20">
          <h2>Sider</h2>
          <Link
            href="/bedrift"
            aria-label="Gå til underside for bedrift"
            className="py-3"
          >
            Bedrift
          </Link>
          <Link
            href="/deltaker"
            aria-label="Gå til underside for deltaker"
            className="py-3"
          >
            Deltaker
          </Link>
          <Link
            href="/virksomhet"
            aria-label="Gå til underside for virksomhet"
            className="py-3"
          >
            Virksomhet
          </Link>
        </div>
      </div>
      <div className="flex justify-center">&#169; Jobloop 2023</div>
    </footer>
  );
}