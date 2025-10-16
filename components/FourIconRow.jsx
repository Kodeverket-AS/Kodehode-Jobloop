"use client";

import Image from "next/image";
import { AlertError } from "./AlertComponent";
import { LuGoal } from "react-icons/lu";
import { MdAllInclusive } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const LanguageCard = ({ title, content, logo, alt, icon }) => {
  return (
    <div className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 p-6 text-center cursor-pointer">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-3 rounded-xl bg-jobloop-primary-green/10 group-hover:bg-jobloop-primary-orange/10 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-kv-black">{title}</h3>
        <p className="text-kv-black/70 leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default function FourIconsRow({ title, content, icons }) {
  return (
    <section className="w-full text-kv-black">
      {content && content.length !== 0 ? (
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-kv-black mb-6 underline underline-offset-8 decoration-jobloop-primary-green">
              {title}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LanguageCard
              {...content[0]}
              icon={icons[0]}
            />
            <LanguageCard
              {...content[1]}
              icon={icons[1]}
            />
            <LanguageCard
              {...content[2]}
              icon={icons[2]}
            />
            <LanguageCard
              {...content[3]}
              icon={icons[3]}
            />
          </div>
        </div>
      ) : (
        <AlertError />
      )}
    </section>
  );
}
