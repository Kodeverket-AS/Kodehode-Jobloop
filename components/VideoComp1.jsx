"use client";

import Link from "next/link";
import Image from "next/image";
import video1thumbnail from "../public/video1thumbnail.jpg";

export default function InternshipCard() {
  return (
    <div className="px-5 py-3 bg-jobloop-primary-green shadow-md">
        <Image src={video1thumbnail} width={1000} height={500} className="" />
        <video width={1000} height={500} autoplay><source />Nettleseren din støtter ikke video</video>
    </div>
  );
}