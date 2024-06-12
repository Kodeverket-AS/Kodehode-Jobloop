import Image from "next/image";
import { ExternalLinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function Vision2Part({
  content,
  imgSide,
  link,
  linkText,
  linkAria,
  title,
}) {
  return (
    <div
      key={content._id}
      className={`flex justify-center align-text-top w-screen text-kv-black`}>
      <div
        className={`flex max-w-[1600px] w-5/6 justify-between gap-8 ${
          imgSide == "left"
            ? "flex-col lg:flex-row"
            : "flex-col-reverse lg:flex-row-reverse"
        }`}>
        <div className="w-full">
          <Image
            width={1000}
            height={1000}
            className="w-full"
            src={content.ImageTwo}
            alt={content.AltTwo || ""}
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="border-b-2 border-jobloop-primary-orange pb-2">
            <h2 className="text-2xl font-extrabold  text-kv-black md:text-3xl">
              {title}
            </h2>
          </div>
          <div>
            <div className="pb-8 text-lg">
              <PortableText value={content.content} />
            </div>
            <ExternalLinkButton
              Path={link}
              Text={linkText}
              ariaLabel={linkAria}
            />
          </div>
          {/* <div className="w-fit pb-4">
              <Image
                width={500}
                height={500}
                className="w-full "
                src={content.ImageOne}
                alt={content.AltOne || ""}
              />
            </div> */}
        </div>
      </div>
    </div>
  );
}
