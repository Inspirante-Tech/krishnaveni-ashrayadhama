import React from "react";
import { krishnaveniVriddhashramRules } from "~/constants";

const RulesandRegulation = () => {
  return (
    <main>
      <section className="space-y-4 mt-18  mx-auto p-8">
        {krishnaveniVriddhashramRules.map((ruleSet, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-[22px] md:text-[26px] font-bold mb-4 uppercase">

              {ruleSet.title}
            </h2>
            {ruleSet.rules.map((rule, i) => (
              <p
                key={i}
                className="  text-gray-800 text-[15px] md:text-[20px] leading-relaxed tracking-wide text-justify"
              >
                {rule}
              </p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default RulesandRegulation;