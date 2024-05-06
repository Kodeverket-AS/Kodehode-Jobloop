"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function EndorsementComp({ data }) {
  return (
    <div className="grid grid-cols-1 gap-2 px-8 py-20 portrait:grid-cols-1 md:grid-cols-2">
      {data.map((item, index) => (
        <div
          className="flex flex-col items-center justify-around w-screen p-8 shadow-md portrait:w-screen md:w-1/2 md:flex-row lg:flex-row lg:w-full"
          key={item._id + index}
        >
          <div className="w-full lg:w-1/2 h-2/3">
            <Image
              width={900}
              height={900}
              className=" object-contain w-full pr-8 h-[250px] max-w-fit mx-0"
              src={item.image}
              alt={item.alt || ""}
            />
          </div>
          <div className="flex flex-col w-full gap-2 portrait:pr-8 lg:w-5/6">
            <h2>{item.navn}</h2>
            <h5 className="font-extrabold">{item.firma}</h5>
            <PortableText className="max-w-full italic" value={item.content} />
          </div>
        </div>
      ))}
    </div>
  );
}

// const cards = data.map((item, index) => {
//     return (
//       <div
//         className="flex flex-col items-center justify-around w-screen p-8 shadow-md md:flex-row lg:flex-row lg:w-full"
//         key={item._id + index}
//       >
//         <div className="w-full lg:w-1/2 h-2/3">
//           <Image
//             width={900}
//             height={900}
//             className=" object-contain w-full lg:w-4/6 lg:h-1/2 max-h-[250px] max-w-fit mx-0"
//             src={item.image}
//             alt={item.alt || ""}
//           />
//         </div>
//         <div className="flex flex-col w-full gap-2 lg:w-5/6">
//           <h2>{item.navn}</h2>
//           <h5 className="font-extrabold">{item.firma}</h5>
//           <PortableText className="max-w-full italic" value={item.content} />
//         </div>
//       </div>
//     );
//   });

//   const responsiveSettings = {
//     1: { items: 1 },
//     768: { items: 1 },
//     1024: { items: 1 },
//     1280: { items: 1 },
//   };

//   return (
//     <div className="flex justify-center w-full gap-1 py-16 md:gap-8">
//       <AliceCarousel
//         className="flex flex-col items-center justify-center" //flex flex-col items-center justify-center h-fit w-fit
//         items={cards}
//         itemsfit="fill"
//         responsive={responsiveSettings}
//         disableDotsControls={false}
//         infinite
//         autoPlay
//         autoPlayInterval={1500}
//         renderPrevButton={() => {
//           return (
//             <button className="hidden md:flex relative md:absolute xl:top-[36%] top-[85%] left-[27%] xl:left-[-7%] ">
//               <FiArrowLeft className="w-12 h-12 rounded-full border-2 border-kv-black hover:border-none active:border-none hover:bg-kv-black active:bg-kv-black  hover:text-kv-white p-1 active:scale-[0.95] transition hover:scale-[0.99]  active:opacity-70" />
//             </button>
//           );
//         }}
//         renderNextButton={() => {
//           return (
//             <button className="hidden md:flex relative md:absolute xl:top-[36%] top-[85%] right-[27%] xl:right-[-7%]">
//               <FiArrowRight className="w-12 h-12 rounded-full border-2 border-kv-black hover:border-none active:border-none hover:bg-kv-black active:bg-kv-black  hover:text-kv-white p-1 active:scale-[0.95] transition hover:scale-[0.99]  active:opacity-70" />
//             </button>
//           );
//         }}
//       />
//     </div>
//   );

// }
// }
// const data = data.content.map((item, index) => {
//   return (
//     <>
//       {data.map((item, index) => (
//         <div
//           className="flex items-center justify-center w-5/6 mb-20 shadow-lg bg-kv-white lg:w-7/12 p-7 lg:p-20"
//           key={item._id + index}
//         >
//           <div className="flex flex-col items-center justify-center w-6/12 lg:flex-row gap-7 lg:w-full">
//             <div className="w-full lg:w-5/6">
//               <Image
//                 width={900}
//                 height={900}
//                 className="object-cover w-full lg:w-4/6"
//                 src={item.image}
//                 alt=""
//               />
//             </div>
//             <div className="flex flex-col w-full lg:w-5/6 gap-7">
//               <h2>{item.navn}</h2>
//               <h5 className="font-extrabold">{item.firma}</h5>
//               <PortableText className="italic" content={item.content}></PortableText>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   )}

//       const responsiveSettings = {
//     1: { items: 1 },
//     768: { items: 1 },
//     1024: { items: 1 },
//     1280: { items: 1 },
//   };

//   return (
//     <div className="flex flex-col items-center justify-center py-16">
//       <div className="grid gap-7">
//         <div className="flex justify-center w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
//           <AliceCarousel
//             className="flex flex-col items-center justify-center h-fit"
//             items={data}
//             itemfit="contain"
//             responsive={responsiveSettings}
//           />
//         </div>
//       </div>
//     </div>
//   );
