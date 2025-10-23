"use client";

import Link from "next/link";
import Image from "next/image";

export default function VideoComp1({ url, alt }) {
  return (
    <div className="w-full">
      <div className="block w-full mx-auto md:hidden">
        <div className="bg-kv-white rounded-2xl shadow-lg overflow-hidden border border-jobloop-primary-green/10">
          <iframe
            src={url + "controls=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[200px] md:h-[300px]"
            alt={alt}
          />
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-kv-white rounded-2xl shadow-lg overflow-hidden border border-jobloop-primary-green/10">
          <iframe
            src={url + "controls=0&autoplay=1&mute=1"}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-[416px] lg:h-[562px]"
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}
