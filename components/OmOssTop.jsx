"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function OmOssTop({ content, buttonText }) {
  return (
    <div className="flex flex-col items-center justify-start w-full py-20 md:px-12 lg:px-24 md:flex-row md:items-start md:justify-between md:w-screen 2xl:max-w-[1600px]">
        
      <div className="flex w-screen h-auto p-0 mx-auto md:pr-5 md:mx-0 md:w-[20rem] md:h-[37rem] lg:w-[24rem] 2xl:w-[32rem]">
        
        <Image
          src={content.image}
          alt="Picture of employees"
          width={561}
          height={820}
          className="object-cover w-full h-full"
        />
      </div>
      

      {/* Text container */}
      <div className="flex flex-col w-full px-8 sm:px-10 sm:my-10 md:w-1/2 md:my-0 md:px-0">
        
        <h1 className="py-10 text-start text-jobloop-primary-green md:pb-10 md:pt-0">{content.title}</h1>
        <PortableText 
        value={content.content} />
        <div className="flex justify-start mt-10">
          <LinkButton Path="/contact" Text={buttonText} />
        </div>
      </div>
    </div>
  );
}


