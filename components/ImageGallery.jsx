"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <div className="py-10">
      <div>
        <Image src={content[0].image1} width={500} height={300} />
      </div>
      <div>
        <Image src={content[0].image2} width={500} height={300} />
      </div>
      <div>
        <Image src={content[0].image3} width={300} height={500} />
      </div>
    </div>
  );
}