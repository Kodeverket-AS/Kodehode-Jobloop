"use client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { LinkButton, LinkButtonContained } from "./Buttons";

/**
 *
 *=================================================================================
 *  SECTION COMPONENT
 * Denne komponenten er ment for å være en ramme for venstre/høyre seksjoner som
 * brukes gjentatte ganger gjennom denne nettsiden.
 *
 *
 *  EXAMPLE USAGE:
 *   <SectionComponent
 *     leftContent={<TextBlock content={data.textBlock[0]} />}
 *     rightContent={<Image src={data.image[0].url} alt={data.image[0].alt} />}
 *  />
 *
 *=================================================================================
 */

export const SectionComponent = ({
  leftContent, //content for left side
  rightContent, //content for right side
  isBgColor = false, //boolean to turn on/off background color
  bgColorGreen = false, //turn on/off jobloop-green 10opactity background
  bgColorOrange = false, //turn on/off jobloop-orange 10opactity background
  reverseLayoutOrder = false, //boolean to reverse layout direction aka L-R or R-L
}) => {
  let backgroundColor = "";
  if (isBgColor) {
    backgroundColor = bgColorGreen
      ? "bg-jobloop-primary-green/10"
      : bgColorOrange
      ? "bg-jobloop-primary-orange/10"
      : "";
  }

  const flexDirection = reverseLayoutOrder ? "flex-col-reverse" : "flex-col";

  return (
    <section className={`w-screen py-24 ${backgroundColor}`}>
      <div
        className={`flex ${flexDirection} xl:flex-row justify-center gap-4 xl:gap-8 max-w-screen-2xl mx-auto px-4`}>
        <div className="w-full">{leftContent}</div>
        <div className="w-full">{rightContent}</div>
      </div>
    </section>
  );
};

export const TextBlock = ({
  title,
  content, // If more than one string of content, use content, content2 and content3
  content2,
  content3,
  contentString, // If only one single string of content
  isButton,
  path: buttonPath,
  text: buttonText,
  isContained,
  isOrange,
}) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h2
        className={`text-kv-black underline underline-offset-8 pb-2 ${
          isOrange
            ? "decoration-jobloop-primary-orange"
            : "decoration-jobloop-primary-green"
        }`}>
        {title}
      </h2>

      <div className="text-kv-black/70 text-base xl:leading-relaxed xl:text-xl xl:max-w-[70ch]">
        {content ? (
          <>
            <div>
              <PortableText value={content} />
              <PortableText value={content2} />
              <PortableText value={content3} />
            </div>
          </>
        ) : (
          <p>{contentString}</p>
        )}
      </div>

      <div className="py-4">
        {isButton && (
          <div>
            {isContained ? (
              <LinkButtonContained
                path={buttonPath}
                text={buttonText}
              />
            ) : (
              <LinkButton
                path={buttonPath}
                text={buttonText}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};