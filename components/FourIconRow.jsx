"use client";

import Image from "next/image";
import { AlertError } from "./AlertComponent";
import { LuGoal } from "react-icons/lu";
import { MdAllInclusive } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const LanguageCard = ({ title, content, logo, alt, icon }) => {
  return (
    <div className="pb-8 w-full">
      {/* <Image
        src={<GoGoal />}
        width={300}
        height={300}
        className="w-20 pb-4 m-auto"
        alt={alt || "HTML logo"}
      /> */}
      <div className="text-center flex flex-col items-center">
        {icon}
        <h3 className="text-xl md:text-2xl">{title}</h3>
        <p className="text-kv-black/70">{content}</p>
      </div>
    </div>
  );
};

export default function FourIconsRow({ title, content, icons }) {
  return (
    <section className="w-full py-12 text-kv-black">
      {content && content.length !== 0 ? (
        <div className="px-4 flex flex-col justify-center mx-auto">
          <h3 className="text-2xl md:text-3xl text-center underline underline-offset-8 pb-12 decoration-jobloop-primary-orange">
            {title}
          </h3>

          <div className="flex flex-col gap-8 md:flex-row pb-8 justify-center">
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
