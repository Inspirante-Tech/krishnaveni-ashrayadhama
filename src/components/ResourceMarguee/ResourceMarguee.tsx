import { FileDown, LinkIcon } from "lucide-react";
import React from "react";
import Marquee from "react-fast-marquee";
import LocaleLink from "../ui/LocaleLink";
const ResourceMarquee = () => {
  const links = [
    {
      type: "plain",
      icon: <FileDown className="inline" size={16} />,
      text: "NominationForm",
      href: "/Nomination form.pdf",
    },
    {
      type: "plain",
      icon: <FileDown className="inline" size={16} />,
      text: "PermanentForm",
      href: "/Permanent form.pdf",
    },
    {
      type: "local",
      icon: <LinkIcon size={16} />,
      text: "RulesRegulations",
      href: "/ashraya-dhama/rules-regulations",
    },
    {
      type: "local",
      icon: <LinkIcon size={16} />,
      text: "Pricing",
      href: "/ashraya-dhama/pricing",
    },
  ];

  return (
    <Marquee
      className="lg:fixed flex  bg-primary-100 py-2  text-sm font-bold text-gray-800"
      pauseOnHover
    >
      {[...links, ...links].map((link, index) => (
        <div key={index} className="  gap-1 flex items-center mr-10  ">
          {link.icon}
          {link.type === "locale" ? (
            <LocaleLink
              href={link.href}
              className="align-middle  h-full block"
            >
              {link.text}
            </LocaleLink>
          ) : (
            <a href={link.href} target="_blank" >
              {link.text}
            </a>
          )}
          
        </div>
      ))}
    </Marquee>
  );
};

export default ResourceMarquee;
