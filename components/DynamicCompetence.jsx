"use client";

import Image from "next/image";

const LinkCard = ({ id, src, title, description }) => {
  return (
    <div
      key={id}
      className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 overflow-hidden cursor-pointer">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-jobloop-primary-green/10 group-hover:bg-jobloop-primary-orange/10 rounded-xl flex items-center justify-center transition-colors duration-300">
            <Image
              src={src}
              width={40}
              height={40}
              alt={`Grafikkikon av ${src}`}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-kv-black group-hover:text-jobloop-primary-orange transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-kv-black/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function DynamicCompetence({ content }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {content.map((item, index) => (
        <LinkCard
          key={index}
          src={item.logo}
          title={item.title}
          description={item.content}
        />
      ))}
    </div>
  );
}
