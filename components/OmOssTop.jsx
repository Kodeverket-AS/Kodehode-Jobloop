"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function OmOssTop({ content, buttonText }) {
   return (
    <>
    <div className="flex items-center justify-start w-full md:flex-row">
    
    <div className="flex items-center justify-start h-96 w-70 md:w-1/2" >
          <Image
            src={content.image}
            width={561}
            height={820}
            className="object-cover w-full h-full"
            alt="Picture of empoyees"
          />
          </div>
          <div className="w-full p-8 space-y-4 bg-white md:w-1/2">
          <h1 className="text-xl text-jobloop-primary-green md:text-2xl lg:text-3xl">{content.title}</h1>
            <PortableText value={content.content} />
        
        <div className="hidden mt-10 md:block">
            <LinkButton Path="/contact" Text={buttonText} />
            </div>
          </div>
            </div>
    
    </>
   ); 
}

