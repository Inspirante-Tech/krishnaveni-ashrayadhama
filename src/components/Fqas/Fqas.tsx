"use client";
import React, { useEffect, useState } from "react";
import { questionAndAnswers } from "~/constants";
import { Button } from "../ui/button";

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
    <div
      className={`group border-s-4 border-secondary-500 bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-gray-900">{question}</h2>
        <span className="shrink-0 rounded-full bg-secondary-50 p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`size-5 shrink-0 transition duration-300 transform ${
              isOpen ? "-rotate-45" : ""
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
      {isOpen && (
        <div
          className={`transition-max-height duration-5000 ease-in-out overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <p className="mt-2 leading-relaxed text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Fqas = () => {
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
    <section className="bg-primary-100 flex justify-center items-center sm:mt-5">
      <div className="max-w-5xl mx-auto px-4 md:p-12 sm:px-2 lg:px-2 lg:py-16 w-full relative sm:mt-2 mt-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right sm:mx-auto lg:text-left">
            <h2 className="text-2xl mt-9 font-bold tracking-tight text-gray-900 sm:text-4xl sm:mt-5">
              Frequently Asked Questions...
            </h2>
            <p className="mt-4 text-gray-700">
              Explore common questions and find answers below. If you don&#39;t
              see what you&#39;re looking for, feel free to contact us for
              assistance.
            </p>
            <Button className="sm:mt-2 bg-secondary-400 p-4 mt-2 rounded-md font-bold hover:bg-orange-400 text-action-950">
              Contact us
            </Button>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div className="space-y-4">
              {questionAndAnswers.map((qa, index) => (
                <QuestionAnswer
                  key={index}
                  question={qa.question}
                  answer={qa.answer}
                  isVisible={visibleIndexes.includes(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fqas;
