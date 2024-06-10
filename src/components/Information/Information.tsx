"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Reveal from "../Animations/reveal";
import { Separator } from "../ui/separator";
import ScrollLag from "../Animations/scrollLag";

const Information: React.FC<{ data: string }> = ({ data }) => {
  return (
    <section
      className={`transition-opacity duration-1000 transform bg-secondary-100 md:bg-transparent text-justify`}
    >
      <div className="content-container flex items-start flex-row-reverse">
        <Reveal>
          <div className="relative xl:max-w-4xl md:shadow-xl rounded-2xl z-0">
            <div className="relative md:bg-gradient-to-tl md:from-secondary-200 md:to-secondary-100 rounded-2xl flex md:gap-4 gap-2 flex-col xl:p-16 lg:p-24 md:p-12">
              <h2 className="heading text-gray-900">Who We Are</h2>
              <Separator color="secondary" />
              {[data].map((info, index) => (
                <p className="body" key={index}>
                  {info}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.35}>
          <ScrollLag speed={50}>
            <Image
              src={"/story.jpg"}
              alt="Story"
              height={500}
              width={500}
              className="w-[26rem] relative shadow-xl object-contain translate-x-6 top-10 rounded-2xl hidden xl:block z-10"
            ></Image>
          </ScrollLag>
        </Reveal>
      </div>
    </section>
  );
};

export default Information;
