import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaFigma, FaNode } from 'react-icons/fa';
import { SiVisualstudiocode, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiDotnet } from 'react-icons/si';

export const metadata = {
  title: "Kodespråk: Teknologier vi bruker | Kodehode",
};

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 mb-12 px-4">
      <section className="relative w-full min-h-screen flex items-center justify-center">
      
        <div className="absolute inset-0 z-0">
          <Image
            alt={data.heroSub[5].alt || ""}
            src={data.heroSub[5].image}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 " />
        </div>

      
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-2xl underline underline-offset-8 decoration-jobloop-primary-green text-kv-black md:text-5xl mb-6">
              {data.heroSub[5].title}
            </h1>
            <div className="text-lg md:text-2xl text-kv-black/80 mb-8">
              <PortableText value={data.heroSub[5].content} />
            </div>
            
            <div className="pt-8 border-t border-jobloop-primary-green/20">
              <h2 className="text-xl md:text-2xl font-bold text-kv-black mb-6 text-center">
                Teknologier vi bruker
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 lg:grid-cols-6 ">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaHtml5 className="w-10 h-10 md:w-12 md:h-12 text-[#E34F26]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">HTML</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaCss3 className="w-10 h-10 md:w-12 md:h-12 text-[#1572B6]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">CSS</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaJs className="w-10 h-10 md:w-12 md:h-12 text-[#F7DF1E]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">JavaScript</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaReact className="w-10 h-10 md:w-12 md:h-12 text-[#61DAFB]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">React</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaGitAlt className="w-10 h-10 md:w-12 md:h-12 text-[#F05032]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Git</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiVisualstudiocode className="w-10 h-10 md:w-12 md:h-12 text-[#007ACC]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">VS Code</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiNextdotjs className="w-10 h-10 md:w-12 md:h-12 text-[#000000]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Next.js</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiTailwindcss className="w-10 h-10 md:w-12 md:h-12 text-[#06B6D4]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Tailwind</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiExpress className="w-10 h-10 md:w-12 md:h-12 text-[#000000]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Express</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaNode className="w-10 h-10 md:w-12 md:h-12 text-[#339933]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Node.js</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiMongodb className="w-10 h-10 md:w-12 md:h-12 text-[#47A248]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">MongoDB</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiDotnet className="w-10 h-10 md:w-12 md:h-12 text-[#512BD4]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">.NET</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
