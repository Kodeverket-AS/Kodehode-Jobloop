import Image from "next/image";
import { SectionComponent } from "./SectionComponents";
import { TextBlock } from "./TextBlockComponent";

export default function ContactComp({ imageOne, title, content, _id, alt }) {
  return (
    <SectionComponent
      isBgColor={true}
      bgColorOrange
      leftContent={
        <Image
          width={400}
          height={400}
          src={imageOne}
          alt={alt || ""}
          className="mx-auto"
        />
      }
      rightContent={
        <TextBlock
          title={title}
          content={content}
          isButton={true}
          path={"/kontakt"}
          text={"Kontakt oss"}
          isContained={true}
          isOrange={true}
        />
      }
    />
  );
}
