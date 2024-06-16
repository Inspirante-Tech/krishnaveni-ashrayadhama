import RichText from "../RichText/RichText";

const RulesandRegulation = ({ rules }: { rules: [any] }) => {
  return (
    <RichText value={rules} className="bg-white/60 p-4 md:p-8 rounded-lg" />
  );
};

export default RulesandRegulation;
