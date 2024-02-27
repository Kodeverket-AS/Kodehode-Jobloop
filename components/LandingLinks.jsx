"use client";

import Link from "next/link";
import Image from "next/image";
import mappe from "../public/mappe.png";
import koffert2 from "../public/koffert2.png";
import hatt from "../public/hatt.png";
import { LinkButton } from "./Buttons";

export default function LandingLinks() {
  return (
    <>
      <div className="flex flex-col px-8 pt-20">
        <div className="flex justify-center w-full">
          <h2 className="text-center">Hvordan kan vi hjelpe deg?</h2>
        </div>
        <div className="flex justify-center py-20">
          <div className="flex flex-col gap-12 md:flex-row md:gap-4">
            <div className="flex flex-col items-center gap-8 md:w-60">
              <Image
                src={koffert2}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center">Arbeidsgiver</h5>
              <p className="text-center">
                For bedrifter som er interessert i utviklere
              </p>
              <div>
                <LinkButton Path={"/arbeidsgiver"} Text={"Se mer"} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 md:w-60">
              <Image
                src={hatt}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center ">Deltager</h5>
              <p className="text-center">For deg som vil delta på Kodehode</p>
              <div>
                <LinkButton Path={"/deltaker"} Text={"Se mer"} />
              </div>
            </div>
            <div className="flex flex-col items-center gap-8 md:w-60">
              <Image
                src={mappe}
                width={500}
                height={300}
                className="w-auto h-20"
              />
              <h5 className="text-xl font-bold text-center">
                Samarbeidspartner
              </h5>
              <p className="text-center">
                For andre virksomheter som vil
                samarbeide
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
