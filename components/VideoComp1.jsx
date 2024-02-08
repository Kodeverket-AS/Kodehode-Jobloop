"use client";

import Link from "next/link";
import Image from "next/image";
import video1thumbnail from "../public/video1thumbnail.jpg";

export default function VideoComp1({ url }) {
  return (
    <>
      <div className="w-full py-8 block md:hidden">
        {/*<Image
        src={video1thumbnail}
        width={1000}
        height={500}
        className="block shadow-md hover:hidden"
      />*/}
        <iframe
          width="300"
          height="169"
          src={url + "controls=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto shadow-md"
        ></iframe>
      </div>
      <div className="w-full py-20 hidden md:block">
        {/*<Image
        src={video1thumbnail}
        width={1000}
        height={500}
        className="block shadow-md hover:hidden"
      />*/}
        <iframe
          width="1000"
          height="562"
          src={url + "controls=0&autoplay=1&mute=1"}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="mx-auto shadow-md"
        ></iframe>
      </div>
    </>
  );
}