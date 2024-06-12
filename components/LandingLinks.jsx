"use client";

import Link from "next/link";
import Image from "next/image";
import dokument from "../public/dokument.svg";
import koffert from "../public/koffert.svg";
import hatt from "../public/hatt.svg";
import { LinkButton } from "./Buttons";

export default function LandingLinks() {
  return (
    <div className="flex flex-col gap-8 w-full px-8 pb-12 pt-8">
      <div className="flex justify-center w-full">
        <h2 className="text-center">Hvordan kan vi hjelpe deg?</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <a
          href="/arbeidsgiver"
          className="flex p-6 shadow-md rounded-lg gap-8">
          <Image
            src={koffert}
            width={500}
            height={500}
            className="h-20 w-auto"
            alt=""
          />

          <div>
            <div className="w-full ">
              <h2 className="text-xl font-bold">Arbeidsgiver</h2>
              <p className="text-lg">
                For bedrifter som er interessert i utviklere
              </p>
              <div className="underline text-blue-500">Les mer</div>
            </div>
            {/* <LinkButton
              Path={"/arbeidsgiver"}
              Text={"Les mer"}
            /> */}
          </div>
        </a>
        <a
          href="/deltaker"
          className="flex p-6 shadow-md rounded-lg gap-8">
          <Image
            src={hatt}
            width={500}
            height={500}
            className="h-20 w-auto"
            alt=""
          />
          <div>
            <div className="w-full">
              <h2 className="text-xl font-bold">Deltager</h2>
              <p className="text-lg">For deg som vil delta på Kodehode</p>
              <div className="underline text-blue-500">Les mer</div>
            </div>
            {/* <LinkButton
              Path={"/deltaker"}
              Text={"Les mer"}
            /> */}
          </div>
        </a>

        <a
          href="/samarbeidspartner"
          className="flex p-6 shadow-md rounded-lg gap-8">
          <Image
            src={dokument}
            width={500}
            height={500}
            className="h-20 w-auto"
            alt=""
          />
          <div>
            <div className="w-full">
              <h2 className="text-xl font-bold">Samarbeidspartner</h2>
              <p className="text-lg">
                For virksomheter som ønsker å samarbeide
              </p>
              <div className="underline text-blue-500">Les mer</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
