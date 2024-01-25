"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import Fargebaner2 from "../public/Fargebaner2.svg";

export default function LinkToFaq() {
  return (
    <div className="w-full pt-10">
      <div className="flex flex-col items-center">
        <h1 className="mb-10 md:mb-20">Har du flere spørsmål?</h1>
        <div>
          <LinkButton Path="/FAQ" Text="Gå til FAQ" />
        </div>
      </div>
      <div className="flex justify-end w-full md:mt-[-130px] mt-[-100px]">
        <Image
          src={Fargebaner2}
          width={1000}
          height={1000}
          className="w-1/2 mr-0"
        />
      </div>
    </div>
  );
}
