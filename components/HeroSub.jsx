"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSub({content}) {
  return (
    <div>
      <p>{content.title}</p>
    </div>
  );
}
