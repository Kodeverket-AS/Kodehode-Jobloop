import Image from "next/image";
import { ExternalLinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function Vision2Part({
  content,
  color,
  imgSide,
  link,
  linkText,
  linkAria,
  btnColor,
}) {
  return (
    <div key={content._id} className={`flex justify-center w-screen py-14 lg:p-20 text-kv-black`}>
      <div
        className={`flex max-w-[1600px] items-center w-5/6 gap-40 ${
          imgSide == "left" ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row-reverse"
        }`}
      >
        <div className="hidden w-5/6 mt-20 lg:block">
          <div className="w-fit">
            <Image
              width={1000}
              height={1000}
              className="w-full"
              src={content.ImageTwo}
              alt={content.AltTwo || ""}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-10">
          <Image
            width={1000}
            height={1000}
            className="w-5/6 mx-auto md:w-3/6"
            src={content.ImageOne}
            alt={content.AltOne || ""}
          />
          <hr className={`w-1/3 h-2 bg-${color} ml-[35%]`} />
          <PortableText value={content.content} />
          <div>
            <ExternalLinkButton
              Path={link}
              Text={linkText}
              ariaLabel={linkAria}
              color={btnColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
