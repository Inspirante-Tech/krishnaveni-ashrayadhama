import { PortableText } from '@portabletext/react'
import "./style.css"

const RulesandRegulation = ({ rules }: { rules: [any] }) => {
  return (
    <article>
      <section className="space-y-4 mt-3 md:mt-1 leading-relaxed">
        <PortableText value={rules} />
      </section>
    </article>
  );
};

export default RulesandRegulation;
