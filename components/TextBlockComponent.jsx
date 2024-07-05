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
    <div className=" flex flex-col gap-4 w-full">
      <h2
        className={`pl-1 text-kv-black underline underline-offset-8 pb-2 ${
          isOrange
            ? "decoration-jobloop-primary-orange"
            : "decoration-jobloop-primary-green"
        }`}>
        {title}
      </h2>

        <div className="flex flex-col gap-12">
              <div className="pl-1 w-5/6 flex flex-col  text-kv-black text-base xl:text-lg xl:max-w-[70ch]">
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
    </div>
  );
};



export const TextBlockHeader = ({
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
    <div className=" flex flex-col gap-4 w-full">
      <div className="border-b-8 w-5/6">
          <h1
            className="pl-1 text-[70px] leading-snug text-kv-black pb-2">
            {title}
          </h1>
      </div>

        <div className="flex flex-col gap-12">
              <div className="pl-1 w-5/6 flex flex-col  text-kv-black text-base xl:text-lg xl:max-w-[70ch]">
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
    </div>
  );
};

