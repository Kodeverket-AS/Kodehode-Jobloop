"use client";

import Link from "next/link";
import Image from "next/image";

export default function VideoComp1({ url, alt }) {
  return (
    <>
      <div className="block w-full py-8 md:hidden">
        <iframe
          width="300"
          height="169"
          src={url + "controls=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto shadow-md"
          alt={alt}
        />
      </div>
      <div className="hidden py-20 md:block">
        <iframe
          width="1000"
          height="562"
          src={url + "controls=0&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto shadow-md w-[740px] h-[416px] lg:w-[1000px] lg:h-[562px]"
          alt={alt}
        />
      </div>
    </>
  );
}