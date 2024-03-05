"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import PortableText from "react-portable-text";
import { SeMerBtn } from "./Buttons";

// export function ScrollElement(content, Image){
//   return(

//     <div  className="flex flex-col w-full p-10" >

//         <div>
//           <Image
//           width={800}
//           height={800}
//           className="w-full"
//           src={Image}/>
//         </div>

//         <div>
//           <PortableText content={content}></PortableText>
//         </div>

//      </div>

//   )
// }

// export function ProjectScroll({ImageGlod, ImageFont, keyOne, keyTwo, contentOne, contentTwo}){
// console.log(keyTwo)
// let ImageAarray =[

//   <ScrollElement  content={contentTwo} Image={ImageGlod} ></ScrollElement>
//   ,

//   <ScrollElement  content={contentOne} Image={ImageFont} ></ScrollElement>

//     ]

// // const data = content?.map((item) => {

// //   console.log(item.content[0])

// //   return(

// //         <div key={item._id} className="flex flex-col w-full ">
// //                <div>
// //                   <p>{item.content}</p>
// //                 </div>
// //          </div>

// //   )

// // })

// const responsiveSettings = {
//   0: { items: 1 },
//   1024: { items: 3 },
//   1280: { items: 3 },
// };

// return(
//   <div className="flex w-full ">
//     <AliceCarousel
//     className="flex flex-row items-center justify-center w-full overflow-hidden "
//     items={ImageAarray}
//     itemfit="cover"
//     responsive={responsiveSettings}
//     />
//  </div>
// )

// }

export function ProjectScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div
        className="flex flex-col justify-center w-full h-full p-10 items-left gap-7"
        id={index}
        key={item._id}
      >
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.ImageOne}
            alt={item.ImageOne.alt || "image"}
          />
        </div>
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.ImageTwo}
            alt={item.ImageTwo.alt || "image"}
          />
        </div>
        <div className="flex w-full items-left justify-left">
          {/* <p className="text-sm text-black">{item.description}</p> */}
          {item.content.map((block, blockIndex) => (
            <PortableText className="scale-[1] text-black" key={blockIndex} content={block} />
          ))}
        </div>
        <SeMerBtn></SeMerBtn>
      </div>
    );
  });

  const responsiveSettings = {
    1: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1280: { items: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="grid gap-7">
        <div className="flex justify-center w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
          <AliceCarousel
            className="flex flex-col items-center justify-center h-fit"
            items={data}
            itemfit="contain"
            responsive={responsiveSettings}
          />
        </div>
      </div>
    </div>
  );
}

export function CooptScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div
        className="flex flex-col items-center justify-center w-full h-full gap-10 p-10"
        id={index}
        key={item._id}
      >
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.image}
            alt={item.image.alt || "image"}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          {/* <p className="text-sm text-black">{item.description}</p> */}
          {item.content.map((block, blockIndex) => (
            <PortableText
              className="scale-[1] w-4/6 text-black"
              key={blockIndex}
              content={block}
            />
          ))}
        </div>
      </div>
    );
  });

  const responsiveSettings = {
    1: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1280: { items: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="grid gap-7">
        <div className="flex justify-center w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
          <AliceCarousel
            className="flex flex-col items-center justify-center h-fit"
            items={data}
            itemfit="contain"
            responsive={responsiveSettings}
          />
        </div>
      </div>
    </div>
  );
}
