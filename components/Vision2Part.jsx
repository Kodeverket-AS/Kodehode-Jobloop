import Image from "next/image";
import { ExternalLinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function Vision2Part({ content, link, linkText, linkAria, btnBG }) {
  return (
    <div
      key={content._id}
      className="flex justify-center w-screen p-20 bg-jobloop-primary-orange "
    >
      <div className="flex flex-col items-center w-5/6 gap-40 md:flex-row ">
        <div className="hidden w-5/6 mt-20 md:block">
          <Image width={500} height={500} className="w-full" src={content.ImageTwo}></Image>
        </div>
        <div className="flex flex-col w-5/6 gap-10 ">
          <Image
            width={100}
            height={100}
            className="w-5/6 md:w-3/6"
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
