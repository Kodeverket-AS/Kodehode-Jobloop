//import PortableText from "react-portable-text"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { LinkButton } from "./Buttons";

export default function ContactComp({ imageOne, title, content, _id, alt }) {
  return (
    <div className="flex justify-center w-screen px-8 py-20 sm:px-10 md:px-12 lg:px-24">
      <div className="max-w-[1600px]">
        <div className="flex flex-col w-full gap-10 md:flex-row md:gap-7 ">
          <div className="w-full">
            <Image
              width={400}
              height={400}
              src={imageOne}
              alt={alt || ""}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col justify-center w-full gap-8 text-kv-black ">
            <div className="w-full border-b-8 pb-4 border-jobloop-primary-orange ">
              <h2 className="">{title}</h2>
            </div>
            <PortableText value={content} />
            <div className="">
              <LinkButton
                path={"/kontakt"}
                text={"Kontakt oss"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
