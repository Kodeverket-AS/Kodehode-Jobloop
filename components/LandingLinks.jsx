"use client";

import Link from "next/link";
import Image from "next/image";
import mappe from "../public/mappe.png";
import koffert2 from "../public/koffert2.png";
import hatt from "../public/hatt.png";
import { ContactBtn } from "./ContactBtn";
import { SeMerBtn } from "./SeMerBtn";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingLinks() {
  return (
    <>
      <div className="flex flex-col pt-20">
        <div className="flex justify-center w-full">
          <h2>Hvordan kan vi hjelpe deg?</h2>
        </div>
        <div className="flex justify-center py-20">
          <div className="flex flex-row gap-4">
            <div className="flex flex-col items-center gap-8">
              <Image
                src={koffert2}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center">Arbeidsgiver</h5>
              <p className="w-3/6 text-center">
                For bedrifter som er interessert i samarbeide
              </p>
              <div>
                <LinkButton Path={"/arbeidsgiver"} Text={"Se mer"} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <Image
                src={hatt}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center ">Deltager</h5>
              <p className="w-3/6 text-center">
                For deg som vil delta i Kodehode kurset
              </p>
              <div>
                <LinkButton Path={"/deltaker"} Text={"Se mer"} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 mt-1">
              <Image
                src={mappe}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center">
                Samarbeidspartner
              </h5>
              <p className="w-3/6 text-center">
                For offentlig etat, skole, eller fylkeskommune
              </p>
              <div>
                <LinkButton Path={"/samarbeidspartner"} Text={"Se mer"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
