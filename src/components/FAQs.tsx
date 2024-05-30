"use client";
import React, { useState } from "react";
import { questionAndAnswers } from "~/constants";

const QuestionAnswer = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group border-s-4 border-secondary-500 bg-gray-50 p-3 [&_summary::-webkit-details-marker]:hidden">
      <summary
        className="flex cursor-pointer items-center justify-between gap-1.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-medium text-gray-900">{question}</h2>
        <span className="shrink-0 rounded-full bg-secondary-50 p-1.5 text-gray-900 sm:p-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
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
      {isOpen && <p className="mt-2 leading-relaxed text-gray-700">{answer}</p>}
    </div>
  );
};

const QuestionAndAnswers = () => (
  <section className="bg-primary-100 flex justify-center items-center h-screen">
    <div className="max-w-5xl px-4 py-12 sm:px-2 lg:px-2 lg:py-16 w-full relative sm:mt-2 mt-3">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right sm:mx-auto lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions...
          </h2>
          <p className="mt-4 text-gray-700">
            Explore common questions and find answers below. If you don&#39;t see
            what you&#39;re looking for, feel free to
            for assistance.
          </p>
          <button className=" sm:mt-2 bg-secondary-400 p-4  rounded-md font-bold hover:bg-orange-400 text-action-950">Contact ous</button>
        </div>

        <div className="-mx-6 lg:col-span-2 lg:mx-0">
          <div className="space-y-4">
            {questionAndAnswers.map((qa, index) => (
              <QuestionAnswer
                key={index}
                question={qa.question}
                answer={qa.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default QuestionAndAnswers;
