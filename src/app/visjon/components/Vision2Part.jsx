import Image from "next/image";
import { ExternalLinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";
import { SectionComponent } from "./SectionComponent";
import { TextBlock } from "./TextBlockComponent";

// Version with Image on Left and text on Right.
export function VisionTextRight({ content, link, linkText, linkAria, title }) {
  return (
    <SectionComponent
      leftContent={
        <Image
          width={1000}
          height={1000}
          className="w-11/12"
          src={content.ImageTwo}
          alt={content.AltTwo || ""}
        />
      }
      rightContent={
        <TextBlock
          title={title}
          content={content.content}
          isButton={true}
          path={link}
          text={linkText}
          isContained={false}
          isOrange={false}
        />
      }
    />
    // <section className="w-screen py-12">
    //   <div
    //     key={content._id}
    //     className="flex flex-col md:flex-row justify-center gap-12 max-w-screen-2xl mx-auto px-4">
    //     <div className="w-full">
    //       <Image
    //         width={1000}
    //         height={1000}
    //         className="w-full"
    //         src={content.ImageTwo}
    //         alt={content.AltTwo || ""}
    //       />
    //     </div>
    //     <div className="flex flex-col w-full gap-4">
    //       <h2 className="text-lg xl:text-3xl underline underline-offset-8 pb-4 decoration-jobloop-primary-orange">
    //         {title}
    //       </h2>
    //       <div>
    //         <div className="pb-8 text-lg md:text-xl">
    //           <PortableText value={content.content} />
    //         </div>
    //         <ExternalLinkButton
    //           path={link}
    //           text={linkText}
    //           ariaLabel={linkAria}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

// Version with Image on Right and text on Left.
export function VisionTextLeft({ content, link, linkText, linkAria, title }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      rightContent={
        <Image
          width={1000}
          height={1000}
          className="w-11/12"
          src={content.ImageTwo}
          alt={content.AltTwo || ""}
        />
      }
      leftContent={
        <TextBlock
          title={title}
          content={content.content}
          isButton={true}
          path={link}
          text={linkText}
          isContained={false}
          isOrange={false}
        />
      }
    />
    // <section className="w-screen py-12">
    //   <div
    //     key={content._id}
    //     className="flex flex-col-reverse md:flex-row justify-center gap-12 max-w-screen-2xl mx-auto px-4">
    //     <div className="flex flex-col w-full gap-4">
    //       <h2 className="text-lg xl:text-3xl underline underline-offset-8 pb-4 decoration-jobloop-primary-orange">
    //         {title}
    //       </h2>
    //       <div>
    //         <div className="pb-8 text-lg md:text-xl">
    //           <PortableText value={content.content} />
    //         </div>
    //         <ExternalLinkButton
    //           path={link}
    //           text={linkText}
    //           ariaLabel={linkAria}
    //         />
    //       </div>
    //     </div>
    //     <div className="w-full">
    //       <Image
    //         width={1000}
    //         height={1000}
    //         className="w-full"
    //         src={content.ImageTwo}
    //         alt={content.AltTwo || ""}
    //       />
    //     </div>
    //   </div>
    // </section>
  );
}
