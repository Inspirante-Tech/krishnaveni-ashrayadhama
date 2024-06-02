import React from "react";
import { krishnaveniVriddhashramRules } from "~/constants";

const RulesandRegulation = () => {
  return (
    <main>
      <section className="space-y-4 content-container mt-3 md:mt-1">
        {krishnaveniVriddhashramRules.map((ruleSet, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-[18px] md:text-[24px] font-bold text-action-900 mb-4 uppercase">
              {ruleSet.heading}
            </h2>
            <ul className="list-disc pl-5">
              {ruleSet.rules.map((rule, i) => (
                <li
                  key={i}
                  className="text-gray-800 text-[14px] md:text-[19px] leading-relaxed tracking-wide text-justify mb-2"
                >
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default RulesandRegulation;
