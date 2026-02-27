import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaFigma, FaNode } from 'react-icons/fa';
import { SiVisualstudiocode, SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiDotnet, SiCsharp, SiCplusplus, SiMysql, SiMicrosoftazure, SiAdobe, SiBlender, SiHetzner, SiPostgresql, SiGithub } from 'react-icons/si';

export const metadata = {
  title: "Kodespråk: Teknologier vi bruker | Kodehode",
};

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-20 sm:pt-24 md:pt-28 space-y-12 sm:space-y-16 lg:space-y-24 my-6 sm:my-8 md:my-12 px-3 sm:px-4 md:px-6">
      <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6">
        <div className="relative w-full max-w-screen-2xl mx-auto min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
          <div className="absolute inset-0 z-0 w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-screen rounded-lg sm:rounded-xl overflow-hidden">
            <Image
              alt={data.heroSub[5].alt || ""}
              src={data.heroSub[5].image}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1536px) 80vw, 1536px"
              priority
            />
          </div>

          <div className="relative z-10 px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20 min-h-[60vh] sm:min-h-[70vh] md:min-h-screen flex flex-col justify-center">
            <div className="w-full max-w-[92%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] mx-auto bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl sm:shadow-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl underline underline-offset-4 sm:underline-offset-8 decoration-jobloop-primary-green text-kv-black mb-4 sm:mb-6">
              {data.heroSub[5].title}
            </h1>
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-kv-black/80 mb-6 sm:mb-8">
              <PortableText value={data.heroSub[5].content} />
            </div>
            
            <div className="pt-6 sm:pt-8 border-t border-jobloop-primary-green/20">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-kv-black mb-4 sm:mb-6 text-center">
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

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiCsharp className="w-10 h-10 md:w-12 md:h-12 text-[#239120]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">C#</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiCplusplus className="w-10 h-10 md:w-12 md:h-12 text-[#00599C]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">C++</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiPostgresql className="w-10 h-10 md:w-12 md:h-12 text-[#336791]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">SQL</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiMysql className="w-10 h-10 md:w-12 md:h-12 text-[#4479A1]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">MySQL</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiHetzner className="w-10 h-10 md:w-12 md:h-12 text-[#D50C2D]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Hetzner</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiMicrosoftazure className="w-10 h-10 md:w-12 md:h-12 text-[#0089D6]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Azure</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiGithub className="w-10 h-10 md:w-12 md:h-12 text-[#181717]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">CoPilot</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiAdobe className="w-10 h-10 md:w-12 md:h-12 text-[#FF0000]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Adobe pakken</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <SiBlender className="w-10 h-10 md:w-12 md:h-12 text-[#F5792A]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Blender</span>
                </div>

                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <FaFigma className="w-10 h-10 md:w-12 md:h-12 text-[#F24E1E]" />
                  </div>
                  <span className="text-sm font-medium text-kv-black/70">Figma</span>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
