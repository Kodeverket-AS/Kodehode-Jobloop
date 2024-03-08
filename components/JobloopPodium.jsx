import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { JobloopPodiumButton } from "./Buttons";

const filterEmptyContentBlocks = (contentBlocks) => {
  return contentBlocks.filter(block => 
    block._type === 'block' && block.children.some(child => child.text.trim() !== '')
  );
};

export default function JobloopPodium({ content }) {
  
  // Filterer ut tomme contentblokker
  const jobloopFilteredContent = filterEmptyContentBlocks(content[0].content);
  const podiumFilteredContent = filterEmptyContentBlocks(content[1].content);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full my-32 border border-gray-400 md:flex-row md:w-3/4 md:px-10 md:gap-24 lg:w-3/4 lg:px-12 lg:gap-32">
        {/* JobLoop seksjon */}
        <div className="flex flex-col items-start w-1/2 gap-12 border border-black-400 md:items-start md:">
          <Image
            src={content[0].image}
            width={193}
            height={97}
            alt="Jobloop Logo"
            className="w-auto h-28"
          />
          <h2>{content[0].title}</h2>
          <PortableText value={jobloopFilteredContent} />
          <JobloopPodiumButton
            Path="https://jobloop.no/"
            ariaLabel="Link to Jobloop's website"
            ButtonText="See more"
          />
        </div>

        {/* Podium seksjon */}
        <div className="flex flex-col items-start gap-12 border border-red-400 md:w-1/2 md:items-start">
          <Image
            src={content[1].image}
            width={269}
            height={97}
            alt="Podium Logo"
            className="w-auto h-28"
          />
          <h2>{content[1].title}</h2>
          <PortableText value={podiumFilteredContent} />
          <JobloopPodiumButton
            Path="https://podium.no/"
            ariaLabel="Link to Podium's website"
            ButtonText="See more"
          />
        </div>
      </div>
    </>
  );
}
