import React from "react";

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
