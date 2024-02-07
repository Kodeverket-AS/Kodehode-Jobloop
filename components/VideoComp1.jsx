"use client";

import Link from "next/link";
import Image from "next/image";
import video1thumbnail from "../public/video1thumbnail.jpg";

export default function InternshipCard() {
  return (
    <div className="w-full px-5 py-3 bg-jobloop-primary-green">
      {/*<Image
        src={video1thumbnail}
        width={1000}
        height={500}
        className="block shadow-md hover:hidden"
      />*/}
      <iframe
        width="1000"
        height="500"
        src="https://www.youtube.com/embed/LocPs6zdkrQ?si=afaKRzcMA80WvwtW&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="shadow-md"
      ></iframe>
    </div>
  );
}