"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { JobloopPodiumButton } from "./Buttons";

export default function JobloopPodium({content}) {
    return (
        <>
         <div className="flex items-start justify-center w-full gap-20 px-4 my-32 md:px-12 lg:px-24">
  
           {/* JobLoop seksjon */}
           <div className="flex flex-col items-start gap-12 md:items-start">
                <Image
                    src={content[0].image}
                    width={193}
                    height={97}
                    alt="Jobloop Logo"
                    className="w-auto h-28"
                />
                <h2>{content[0].title}</h2>
        <PortableText value={content[0].content} /> 
        <JobloopPodiumButton
          Path="https://jobloop.no/"
          ariaLabel="Lenke til Jobloops nettside"
          ButtonText="Se mer"
          />
        </div>
          
        {/* Podium seksjon */}
        <div className="flex flex-col items-start gap-12 md:items-start">
                <Image
                    src={content[1].image}
                    width={269}
                    height={97}
                    alt="Podium Logo"
                    className="w-auto h-28"
                />
                
                <h2>{content[1].title}</h2>
        <PortableText value={content[1].content} />
        <JobloopPodiumButton
          Path="https://podium.no/"
          ariaLabel="Lenke til Podiums nettside"
          ButtonText="Se mer"
          />
        </div> 
          </div>
        </>
    );
}