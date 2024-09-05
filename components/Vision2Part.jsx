import Image from "next/image";
import { SectionComponent, TextBlock } from "./SectionComponents";

// Version with Image on Left and text on Right.
export function VisionTextRight({ content, link, linkText, linkAria, title }) {
  return (
    <SectionComponent
      isBgColor={false}
      bgColorGreen
      leftContent={
        <Image
          width={1000}
          height={1000}
          className="w-full"
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
          className="w-full"
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
  );
}
