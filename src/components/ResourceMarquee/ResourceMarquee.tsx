"use client";
import { FileDown, LinkIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import LocaleLink from "../ui/LocaleLink";
import { useTranslations } from "next-intl";
import { resources } from "~/constants";

const ResourceMarquee = () => {
  const t = useTranslations("resources");

  return (
    <Marquee
      className="lg:fixed bg-primary-100 py-2  text-sm font-bold text-gray-800"
      pauseOnHover
    >
      {[...resources, ...resources].map((link, index) => (
        <div
          key={index}
          className="gap-1 flex items-center mr-10 capitalize hover:underline underline-offset-2"
        >
          {link.type === "doc" ? (
            <>
              <FileDown size={14} />
              <a href={link.href} target="_blank">
                {t(link.id)}
              </a>
            </>
          ) : (
            <>
              <LinkIcon size={14} />
              <LocaleLink href={link.href}>{t(link.id)}</LocaleLink>
            </>
          )}
        </div>
      ))}
    </Marquee>
  );
};

export default ResourceMarquee;
