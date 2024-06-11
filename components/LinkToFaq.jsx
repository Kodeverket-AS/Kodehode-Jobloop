"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import Fargefigur from "../public/Fargefigur.svg";

export default function LinkToFaq() {
  return (
    <div className="w-full pt-10 md:pt-20">
      <div className="flex flex-col items-center">
        <div className="border-b-4 border-jobloop-primary-green pb-4 mb-8">
          <h1 className="tracking-tight">Har du flere spørsmål?</h1>
        </div>
        <div className="z-0">
          <LinkButton
            Path="/FAQ"
            Text="Gå til FAQ"
          />
        </div>
      </div>
      <div className="flex justify-end w-full md:mt-[-130px] mt-[-70px] sm:mt-[-100px] 2xl:mt-[-233px]">
        <Image
          src={Fargefigur}
          width={1000}
          height={1000}
          className="w-1/2 mr-0"
          alt=""
        />
      </div>
    </div>
  );
}
