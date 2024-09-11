import Image from "next/image";

export default function CompanyCarousel({ content }) {
  return (
    <section className="w-screen py-12">
      <div className="group flex flex-col justify-center gap-4 w-screen mx-auto px-4">
        <h2 className="text-kv-black text-center underline underline-offset-8 pb-8 decoration-jobloop-primary-orange group-hover:decoration-jobloop-primary-green">
          Noen av våre praksisbedrifter
        </h2>
        <div className="grid grid-flow-col py-5 overflow-hidden ">
          <div className="grid grid-flow-col animate-scroll">
            {content.map((item, index) => (
              <Image
                height={160}
                width={300}
                key={item._id + index}
                src={item.logo}
                className="w-[150px] h-auto mx-[140px] my-auto"
                alt={item.alt || ""}
              />
            ))}
          </div>
          <div className="grid grid-flow-col animate-scroll">
            {content.map((item, index) => (
              <Image
                height={160}
                width={300}
                key={item._id + index}
                src={item.logo}
                className="w-[150px] h-auto mx-[140px] my-auto"
                alt={item.alt || ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
