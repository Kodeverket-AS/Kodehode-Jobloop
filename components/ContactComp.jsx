//import PortableText from "react-portable-text"
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { LinkButton } from "./Buttons";

export default function ContactComp({ imageOne, title, content, _id, alt }) {
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
          <div className="w-full">
            <Image
              width={400}
              height={400}
              src={imageOne}
              alt={alt || ""}
              className="mx-auto"
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-kv-black underline underline-offset-8 decoration-jobloop-primary-orange">
              {title}
            </h2>
            <div className="text-xl">
              <PortableText value={content} />
            </div>
            <div className="py-8">
              <LinkButton
                path={"/kontakt"}
                text={"Kontakt oss"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
