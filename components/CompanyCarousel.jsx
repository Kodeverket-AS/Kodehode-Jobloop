import Image from "next/image";

export default function CompanyCarousel({ content }) {
  return (
    <div className="flex flex-col w-screen py-20">
      <h2 className="text-lg font-semibold text-center">Noen av våre praksisbedrifter</h2>
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
  );
}
