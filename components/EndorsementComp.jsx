import Image from "next/image";
import PortableText from "react-portable-text";

export default function EndorsementComp({ image, _id, navn, firma, content }) {
  return (
    <>
      <div
        className="flex items-center justify-center w-5/6 mb-20 bg-white shadow-lg lg:w-7/12 p-7 lg:p-20"
        key={_id}
      >
        <div className="flex flex-col items-center justify-center w-6/12 lg:flex-row gap-7 lg:w-full">
          <div className="w-full lg:w-5/6">
            <Image
              width={900}
              height={900}
              className="object-cover w-full rounded-full lg:w-4/6"
              src={image}
              alt=""
            />
          </div>

          <div className="flex flex-col w-full lg:w-5/6 gap-7">
            <h2>{navn}</h2>
            <h5 className="font-extrabold">{firma}</h5>
            <PortableText className="italic" content={content}></PortableText>
          </div>
        </div>
      </div>
    </>
  );
}
