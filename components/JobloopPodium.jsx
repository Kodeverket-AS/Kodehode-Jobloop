"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { JobloopPodiumButton } from "./Buttons";

export default function JobloopPodium({content}) {
    return (
        <>
        <div className="flex flex-col items-center justify-center w-full py-24 md:flex-row md:px-24">
            <div className="w-1/2">
                <Image
                    src={content[0].image}
                    width={193}
                    height={97}
                    alt="Jobloop Logo"
                    className="mx-auto my-auto w-72"
                />
                <h2 className="mb-2 ">{content[0].title}</h2>
        <PortableText value={content[0].content} /> 
        <JobloopPodiumButton
          href="https://jobloop.no/"
          ariaLabel="Lenke til Jobloops nettside"
          ButtonText="Se mer"
          />
          
        
            </div>
            <div className="w-1/2">
                <Image
                    src={content[1].image}
                    width={269}
                    height={94}
                    alt="Podium Logo"
                    className="mx-auto my-auto w-72"
                />
                <h2 className="mb-2 ">{content[1].title}</h2>
        <PortableText value={content[1].content} /> 
        <JobloopPodiumButton
          href="https://podium.no/"
          ariaLabel="Lenke til Podiums nettside"
          ButtonText="Se mer"
          />
          
          
            </div>
        
        </div>
        </>
    )
}