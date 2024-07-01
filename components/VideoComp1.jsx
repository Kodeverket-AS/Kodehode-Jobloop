"use client";

import Link from "next/link";
import Image from "next/image";

export default function VideoComp1({ url, alt }) {
  return (
    <>
      <div className="block w-full md:hidden">
        <iframe
          // width="300"
          // height="169"
          src={url + "controls=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto"
          alt={alt}
        />
      </div>
      <div className="hidden md:block">
        <iframe
          // width="1000"
          // height="562"
          src={url + "controls=0&autoplay=1&mute=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mx-auto w-full h-[416px] lg:w-[1000px] lg:h-[562px]"
          alt={alt}
        />
      </div>
    </>
  );
}
