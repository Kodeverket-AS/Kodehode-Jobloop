import Image from "next/image";
import { ExternalLinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function Vision2Part({ content, link, linkText, linkAria, btnBG, imgSide }) {
  return (
    <div
      key={content._id}
      className={`flex justify-center w-screen py-14 lg:p-20 ${
        btnBG == "colour" ? "bg-jobloop-primary-orange" : "bg-none"
      } `}
    >
      <div
        className={`flex ${
          imgSide == "left" ? "flex-col" : "flex-col-reverse"
        } items-center w-5/6 gap-40 ${imgSide == "left" ? "lg:flex-row" : "lg:flex-row-reverse"} `}
      >
        <div className="hidden w-5/6 mt-20 lg:block">
          <Image width={500} height={500} className="w-full" src={content.ImageTwo}></Image>
        </div>
        <div className="flex flex-col w-5/6 gap-10">
          <Image
            width={100}
            height={100}
            className="w-5/6 mx-auto md:w-3/6"
            src={content.ImageOne}
          ></Image>
          <PortableText value={content.content} />
          <ExternalLinkButton
            Path={link}
            Text={linkText}
            ariaLabel={linkAria}
            background={btnBG}
          />
        </div>
      </div>
    </div>
  );
}
