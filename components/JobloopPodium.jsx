import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { ExternalLinkButton } from "./Buttons";
import { Button } from "@mui/material";
import { MdOpenInNew } from "react-icons/md";

const JobLoopPodiumCard = ({ title, content, image, link }) => {
  return (
    <div className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 p-8 h-full flex flex-col relative">
      {/* External link icon in top right corner */}
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 p-2 rounded-full bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/20 text-jobloop-primary-green hover:text-jobloop-primary-orange transition-all duration-200 group-hover:scale-110"
        aria-label={`Besøk nettsiden til ${title}`}
      >
        <MdOpenInNew size={20} />
      </a>
      
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-xs h-24 overflow-hidden">
          <Image
            src={image}
            width={300}
            height={120}
            alt={`${title} Logo`}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-kv-black mb-4 relative group-hover:text-jobloop-primary-green transition-colors duration-200">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-jobloop-primary-orange transition-all duration-500 group-hover:w-full"></span>
          </h2>
        </div>
        
        <div className="flex-1 text-kv-black/70 leading-relaxed">
          <PortableText value={content} />
        </div>
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
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
