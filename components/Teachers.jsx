"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/page";

export default function Teachers({ content, title }) {
  console.log(urlFor(content[0].image).height(300).url());
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 bg-jobloop-secondary-orange sm:px-10 md:px-12 lg:px-24 md:w-screen">
      <h2 className="pb-10">{title}</h2>
      <div className="pt-0 pb-10 md:justify-between md:w-full md:flex lg:max-w-[832px]">
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={urlFor(content[0].image).height(300).url()}
              width={300}
              height={300}
              className="relative object-cover w-full h-full border border-white rounded"
              alt={content[0].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[0].navn}</h3>
            <p>{content[0].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={urlFor(content[1].image).height(300).url()}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[1].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[1].navn}</h3>
            <p>{content[1].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={urlFor(content[2].image).height(300).url()}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[2].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[2].navn}</h3>
            <p>{content[2].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={urlFor(content[3].image).height(300).url()}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[3].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[3].navn}</h3>
            <p>{content[3].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 *Trying to get hotspot and crop to work for frontend:
 *Either use manual focalPoints for each indiviual image with properties, or separate normal and cropped versions of each image in persondatabase in sanity?
 *Currently unable to make frontend actually use crop and/or hotspot settings, setting focalpoints manually in the url builder will override hotspot and crop, but at least does what we want for now,
 *downside is that this won't help the customer as they can't use the hotspot and crop feature to fix if they want to change pictures and get them displayed properly, and is more work for us to fix it for them
 **Conditional srcs for whether there is a hotspot set or not (one for each f the 4 images),
 **if the image doesn't have a focalpoint set you get the image centered on the center point by default,
 **setting focalPoints (need to set both coordinates) gives you the image placed in its frame where the focal point is at the xy coordinates you set with the props as how far
 **down and to the right the center should be from the original 0.0 - 1.0:
 ** src={fpy0 ? urlFor(content[0].image).fit("crop").width(300).height(300).focalPoint(`${fpx0}`, `${fpy0}`).url() : urlFor(content[0].image).fit("max").width(300).height(300).url()}
 ** src={fpy1 ? urlFor(content[1].image).fit("crop").width(300).height(300).focalPoint(`${fpx1}`, `${fpy1}`).url() : urlFor(content[1].image).fit("max").width(300).height(300).url()}
 ** src={fpy2 ? urlFor(content[2].image).fit("crop").width(300).height(300).focalPoint(`${fpx2}`, `${fpy2}`).url() : urlFor(content[2].image).fit("max").width(300).height(300).url()}
 ** src={fpy3 ? urlFor(content[3].image).fit("crop").width(300).height(300).focalPoint(`${fpx3}`, `${fpy3}`).url() : urlFor(content[3].image).fit("max").width(300).height(300).url()}
 ***Emil focalPoint("0.4", "0.35") eg. fpx0="0.4" fpy0="0.35"
 ***Lars Gunnar focalPoint("0.4", "0.4")
 */
