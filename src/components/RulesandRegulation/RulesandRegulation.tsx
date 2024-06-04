import { PortableText } from '@portabletext/react'
import "./style.css"

const RulesandRegulation = ({ rules }: { rules: [any] }) => {
  return (
    <article>
      <section className="space-y-4 content-container mt-3 md:mt-1">
        <PortableText value={rules} />
      </section>
    </article>
  );
};

export default RulesandRegulation;
