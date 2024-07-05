import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ExternalLinkButton } from "./Buttons";
import { Button } from "@mui/material";

const JobLoopPodiumCard = ({ title, content, image, link }) => {
  return (
    <div className="flex flex-col items-start gap-8 pb-8 sm:w-full md:w-full md:items-start">
      <div className="w-full">
        <Image
          src={image}
          width={500}
          height={250}
          alt={`${title} Logo`}
          className="w-full h-auto xs:w-80 md:w-auto md:h-28"
        />
      </div>
      <div className="border-b-2 w-full border-jobloop-primary-orange">
        <h2>{title}</h2>
      </div>
      <PortableText value={content} />
      <div>
        <ExternalLinkButton
          path={link}
          text={`Besøk nettsiden til ${title}`}
        />
      </div>
    </div>
  );
};

const filterEmptyContentBlocks = (contentBlocks) => {
  return contentBlocks.filter(
    (block) =>
      block._type === "block" &&
      block.children.some((child) => child.text.trim() !== "")
  );
};

export default function JobloopPodium({ content }) {
  // Filterer ut tomme contentblokker
  const jobloopFilteredContent = filterEmptyContentBlocks(content[0].content);
  const podiumFilteredContent = filterEmptyContentBlocks(content[1].content);

  return (
    <section className="w-full py-12">
      <div className="flex flex-col md:flex-row justify-center gap-12 w-full mx-auto px-4">
        <JobLoopPodiumCard
          title={content[0].title}
          content={jobloopFilteredContent}
          image={content[0].image}
          link="https://jobloop.no/"
        />

        <JobLoopPodiumCard
          title={content[1].title}
          content={podiumFilteredContent}
          image={content[1].image}
          link="https://podium.no/"
        />
      </div>
    </section>
  );
}
