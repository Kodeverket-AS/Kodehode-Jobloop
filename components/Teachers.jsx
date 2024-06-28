"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/page";

const VeilederCard = ({ imageUrl, imageAlt, name, role }) => (
  <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-40 md:pb-0 md:mx-0 lg:w-48">
    <div className="w-1/2 pr-3 md:mb-2 md:w-full h-[170px] md:pr-0 md:h-[190px] sm:h-[250px]">
      <Image
        src={imageUrl}
        width={300}
        height={300}
        className="relative object-cover w-full h-full border rounded border-kv-white"
        alt={imageAlt || ""}
      />
    </div>
    <div className="w-1/2 text-left md:w-full">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  </div>
);

export default function Teachers({ content, title }) {
  //console.log(content[0]);
  return (
    <section className="bg-neutral-50 w-screen py-12">
      <div className="flex flex-col items-center w-full px-8 py-20 bg-neutral-50 lg:px-24 ">
        <h2 className="underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
          {title}
        </h2>
        <div className="flex flex-col-reverse md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto p-4">
          <VeilederCard
            imageUrl={
              content[0].hotspot
                ? urlFor(content[0].image)
                    .size(300, 300)
                    .fit("crop")
                    .crop("focalpoint")
                    .focalPoint(content[0].hotspot.x, content[0].hotspot.y)
                    .url()
                : urlFor(content[0].image)
                    .fit("max")
                    .width(300)
                    .height(300)
                    .url()
            }
            imageAlt={content[0].alt}
            name={content[0].navn}
            role={content[0].role}
          />

          <VeilederCard
            imageUrl={
              content[1].hotspot
                ? urlFor(content[1].image)
                    .size(300, 300)
                    .fit("crop")
                    .crop("focalpoint")
                    .focalPoint(content[1].hotspot.x, content[1].hotspot.y)
                    .url()
                : urlFor(content[1].image)
                    .fit("max")
                    .width(300)
                    .height(300)
                    .url()
            }
            imageAlt={content[1].alt}
            name={content[1].navn}
            role={content[1].role}
          />

          <VeilederCard
            imageUrl={
              content[2].hotspot
                ? urlFor(content[2].image)
                    .size(300, 300)
                    .fit("crop")
                    .crop("focalpoint")
                    .focalPoint(content[2].hotspot.x, content[2].hotspot.y)
                    .url()
                : urlFor(content[2].image)
                    .fit("max")
                    .width(300)
                    .height(300)
                    .url()
            }
            imageAlt={content[2].alt}
            name={content[2].navn}
            role={content[2].role}
          />

          <VeilederCard
            imageUrl={
              content[3].hotspot
                ? urlFor(content[3].image)
                    .size(300, 300)
                    .fit("crop")
                    .crop("focalpoint")
                    .focalPoint(content[3].hotspot.x, content[3].hotspot.y)
                    .url()
                : urlFor(content[3].image)
                    .fit("max")
                    .width(300)
                    .height(300)
                    .url()
            }
            imageAlt={content[3].alt}
            name={content[3].navn}
            role={content[3].role}
          />
        </div>
      </div>
    </section>
  );
}

/*
 *That one time i was trying to figure out hotspots not working...
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
 ***Emil focalPoint("0.4", "0.35") eg. fpx0="0.4" fpy0="0.35" in the teachers component when used...
 ***Lars Gunnar focalPoint("0.4", "0.4")
 */
