import React from "react";

export const SectionComponent = ({
  leftContent,
  rightContent,
  isBgColor = false,
  bgColorGreen = false,
  bgColorOrange = false,
  reverseLayoutOrder = false,
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
    <section className={`w-full py-12 ${backgroundColor}`}>
      <div
        className={`flex ${flexDirection} xl:flex-row justify-center gap-4 xl:gap-8 max-w-screen-2xl mx-auto px-4`}>
        <div className="w-full">{leftContent}</div>
        <div className="w-full">{rightContent}</div>
      </div>
    </section>
  );
};
