import Image from "next/image";
//import PortableText from "react-portable-text";
import { PortableText } from "@portabletext/react";
import { ExternalLinkButton } from "./Buttons";

export default function Partners({ _id, title, content, image, webLink }) {
  return (
    <div className="flex flex-col w-9/12 gap-7 " key={_id}>
      <Image width={100} height={100} className="w-4/6" alt="" src={image} />
      <h3 className="w-full ">{title}</h3>
      <PortableText className="w-full " value={content} />
      <ExternalLinkButton Path={webLink} ariaLabel={`More info about ${title}`} Text={title} />
    </div>
  );
}
