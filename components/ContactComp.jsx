//import PortableText from "react-portable-text"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { ContactBtn, LinkButtonColour } from "./Buttons";

export default function ContactComp({ imageOne, title, content, _id }) {
  return (
    <div className="flex justify-center w-full px-8 py-20 bg-jobloop-primary-green sm:px-10 md:px-12 lg:px-24">
      <div className="max-w-[1600px]">
        <div className="flex flex-col w-full gap-10 md:flex-row md:gap-7 ">
          <div className="flex flex-row w-full ">
            <div className="w-full">
              <Image width={400} height={400} src={imageOne} className="mx-auto" />
            </div>
          </div>
          <div className="flex flex-col justify-center w-full gap-10 text-white md:w-4/6">
            <h2 className="">{title}</h2>
            <PortableText value={content} />
            <div className="">
              <LinkButtonColour Path={"/contact"} Text={"Kontakt oss"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
