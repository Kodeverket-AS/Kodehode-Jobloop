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
      <div className="flex flex-col items-start justify-center w-full gap-16 px-8 my-20 sm:w-full md:flex-row md:w-screen md:px-12 md:gap-24 lg:px-24 lg:gap-32 2xl:max-w-[1600px]">
      {/*flex flex-col items-center justify-start w-full px-8 py-20 sm:px-10 md:px-12 lg:px-24 md:flex-row md:items-start md:justify-between md:w-screen/*}
        {/* JobLoop seksjon */}
        <div className="flex flex-col items-start gap-8 sm:w-full md:w-full md:items-start">
        <div className="w-full">
          <Image
            src={content[0].image}
            width={193}
            height={97}
            alt="Jobloop Logo"
            className="w-full h-auto xs:w-80 md:w-auto md:h-28"
          />
          </div>
          <h2>{content[0].title}</h2>
          <PortableText value={jobloopFilteredContent} />
          <JobloopPodiumButton
            Path="https://jobloop.no/"
            ariaLabel="Lenke til Jobloop sin nettside"
            ButtonText="Se mer"
            className="w-auto h-28"
          />
        </div>

        {/* Podium seksjon */}
        <div className="flex flex-col items-start gap-8 sm:w-full md:w-full md:items-start">
        <div className="w-full">
          <Image
            src={content[1].image}
            width={193}
            height={97}
            alt="Podium Logo"
            className="w-full h-auto xs:w-80 md:w-auto md:h-28"
          />
          </div>
          <h2>{content[1].title}</h2>
          <PortableText value={podiumFilteredContent} />
          <JobloopPodiumButton
            Path="https://podium.no/"
            ariaLabel="Lenke til Podium sin nettside"
            ButtonText="Se mer"
          />
        </div>
      </div>
    </>
  );
}
