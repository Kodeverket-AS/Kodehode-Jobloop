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
  bgColorGrey = false, //turn on/off jobloop-grey 5opactity background
  reverseLayoutOrder = false, //boolean to reverse layout direction aka L-R or R-L on screens below xl
  centerVertically = false, //boolean to center content vertically
  textFirstOnColumn = false, 
}) => {
  let backgroundColor = "";
  if (isBgColor) {
    backgroundColor = bgColorGreen
      ? "bg-jobloop-primary-green/10"
      : bgColorOrange
      ? "bg-jobloop-primary-orange/10"
      : bgColorGrey
      ? "bg-jobloop-primary-grey/5"
      : "";
  }

  const orderLeft = textFirstOnColumn ? "order-1" : "lg:order-1";
  const orderRight = textFirstOnColumn ? "order-2" : "lg:order-2";

  return (
    <section className={`w-screen ${backgroundColor} ${isBgColor ? 'py-8' : ''} [&_h1]:leading-relaxed [&_h2]:leading-relaxed`}>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className={`flex flex-col lg:flex-row gap-8 ${reverseLayoutOrder ? 'lg:flex-row-reverse' : ''}`}>
          <div className={`flex-1 flex items-center justify-center ${orderRight}`}>
            <div className="w-full [&_img]:w-full [&_img]:h-auto [&_img]:object-cover [&_img]:rounded-xl">
              {rightContent}
            </div>
          </div>
          <div className={`flex-1 flex items-center ${orderLeft}`}>
            {leftContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TextBlock = ({
  title, //title of the section
  content, // If more than one string of content, use content, content2 and content3
  content2, // If more than one string of content
  content3, // If more than one string of content
  contentString, // If only one single string of content
  isButton, // boolean to determine if button is present or not
  path: buttonPath, // if isButton = true, path for button
  text: buttonText, // if isButton = true, text for button
  isContained, //boolean to determine if button is contained or not
  isOrange, // boolean to determine if underline is orange or green
  isCentered = false, // boolean to center text
  titleClassName = "", // optional extra classes for the title
  titleStyle, // optional inline style for the title (e.g. { lineHeight: 1.6 })
}) => {
  const textAlignment = isCentered ? "text-center" : "text-left";
  const buttonAlignment = isCentered ? "justify-center" : "justify-start";
  
  return (
    <article className={`flex flex-col gap-4 w-full ${textAlignment} my-auto`}>
      <h2
        style={titleStyle}
        className={`text-kv-black xl:text-4xl underline underline-offset-8 pb-2 ${titleClassName} ${
          isOrange
            ? "decoration-jobloop-primary-orange"
            : "decoration-jobloop-primary-green"
        }`}>
        {title}
      </h2>

      <div className={`text-kv-black/70 text-base xl:text-xl xl:leading-relaxed ${isCentered ? "max-w-4xl mx-auto" : "xl:max-w-[70ch]"}`}>
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

      {isButton && (
        <div className={`flex py-4 ${buttonAlignment}`}>
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
    </article>
  );
};
