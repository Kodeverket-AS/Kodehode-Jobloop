"use client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { LinkButton, LinkButtonContained } from "./Buttons";

export const TextBlock = ({
  title,
  content,
  content2,
  content3,
  contentString,
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

      <div className="text-kv-black text-base xl:text-lg xl:max-w-[70ch]">
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
