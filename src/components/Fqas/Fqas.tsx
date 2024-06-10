"use client";
import React, { useEffect, useState } from "react";
import { questionAndAnswers } from "~/constants";
import { Button } from "../ui/button";
import { FqaType } from "~/lib/types";
import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import Reveal from "../Animations/reveal";

const QuestionAnswer = ({
  question,
  answer,
  isVisible,
}: {
  question: string;
  answer: string;
  isVisible: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`  group border-s-4 border-primary-800/80 bg-gray-50 p-3 transform transition-opacity duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-gray-900">{question}</h2>
        <span className="shrink-0 rounded-full bg-primary-200 p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-5 shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </summary>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0" }}
      >
        <p className="mt-2 leading-relaxed text-gray-700">{answer}</p>
      </div>
    </section>
  );
};

const Fqas = ({ fqas }: { fqas: FqaType[] }) => {
  const t = useTranslations("home.fqas");
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  useEffect(() => {
    const timeoutIds = questionAndAnswers.map(
      (_, index) =>
        setTimeout(() => {
          setVisibleIndexes((prev) => [...prev, index]);
        }, index * 100) // Stagger the animations by 100ms
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <section className="">
      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16 justify-between content-container">
        <div className="sm:mx-auto lg:col-span-1 flex flex-col md:gap-4 gap-2">
          <h2 className="heading text-gray-900">{t("heading")}</h2>
          <div className="h-1 w-14 bg-primary-800/80 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <p className="body text-gray-700">{t("description")}</p>
            <LocaleLink href={"/contact"}>
              <Button className="bg-primary-500 transition-colors duration-150 rounded-md font-bold hover:bg-primary-600 text-action-950 max-w-fit">
                {t("contactUs")}
              </Button>
            </LocaleLink>
          </div>
        </div>
        <div className="lg:col-span-2 lg:mx-0 sm:w-full md:w-3/4 lg:w-full">
          <div className="space-y-4">
            {fqas.map((fqa, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <QuestionAnswer
                  question={fqa.question}
                  answer={fqa.answer}
                  isVisible={visibleIndexes.includes(index)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fqas;
