import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { usePathname } from "next/navigation";
import { ChevronUp } from "lucide-react";
import styles from "./mobilenav.module.css";

type NestedUrl = {
  heading: string;
  urls: {
    id: string;
    url: string;
  }[];
};

export default function LocalSwitcher({ urlObject }: { urlObject: NestedUrl }) {
  const pathname = usePathname();
  const active = urlObject.urls.some((e) => pathname.includes(e.url));
  const t = useTranslations("links");
  return (
    <div
      className={`lg:py-6 block h-min hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear capitalize w-full`}
    >
      <HoverCard openDelay={300}>
        <HoverCardTrigger className="w-full hidden lg:block cursor-pointer">
          <span
            className={`w-full block  border-solid border-black multiLink ${active ? "border-b-2" : "border-none"}`}
          >
            {t(urlObject.heading)}
          </span>
        </HoverCardTrigger>
        <HoverCardContent className="bg-primary-50/95 p-1 w-min shadow-xl">
          <div className="flex flex-col gap-1 w-full text-center">
            {urlObject.urls.map((url) => (
              <LocaleLink
                href={url.url}
                key={url.id}
                className="p-2 min-w-max w-full body hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear multiLink"
              >
                {t(url.id)}
              </LocaleLink>
            ))}
          </div>
        </HoverCardContent>
      </HoverCard>

      <details className={`${styles.dialog} lg:hidden flex`}>
          <summary
            className={`${styles.summary} multiLink flex flex-row gap-2 items-center justify-center`}
          >
            <span className="multiLink text-center">{t(urlObject.heading)}</span>
            <ChevronUp
              className={`${styles.marker} multiLink transition-all duration-300 ease-linear rotate-180`}
            />
          </summary>
          <div className="flex flex-col gap-2 subheading ">
            {urlObject.urls.map((url) => (
              <LocaleLink
                href={url.url}
                key={url.id}
                className="body hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear text-wrap"
              >
                {t(url.id)}
              </LocaleLink >
            ))}
        </div>
      </details>
    

    </div>
  );
}
