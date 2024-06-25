import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

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
    <>
      <div className="hidden md:block lg:py-6  h-min hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear capitalize w-full  group z-10 cursor-pointer">
        <span
          className={`w-full block  border-solid border-black whitespace-nowrap ${active ? "border-b-2" : "border-none"}`}
        >
          {t(urlObject.heading)}
        </span>

        <div className="group-hover:h-max md:absolute h-0 bg-primary-50/95 rounded overflow-hidden  shadow-xl group-hover:p-2">
          <div className="flex flex-col gap-1 w-full text-center ">
            {urlObject.urls.map((url) => (
              <LocaleLink
                href={url.url}
                key={url.id}
                className="p-2 min-w-max w-full hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear multiLink "
              >
                {t(url.id)}
              </LocaleLink>
            ))}
          </div>
        </div>
      </div>

      <details className="md:hidden h-min hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear capitalize w-full group">
        <summary
          className={`w-full flex justify-between items-center  border-solid border-black cursor-pointer ${active ? "border-b-2" : "border-none"}`}
        >
          <span className="flex-grow">{t(urlObject.heading)}</span>
          <ChevronDown
            className={`group-open:rotate-180 transition-all duration-300 ease-linear rotate-0`}
          />
        </summary>

        <div className="bg-primary-50/95 rounded">
          <div className="flex flex-col gap-1 w-full text-center ">
            {urlObject.urls.map((url) => (
              <LocaleLink
                href={url.url}
                key={url.id}
                className="p-2 w-full body hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear text-wrap"
              >
                {t(url.id)}
              </LocaleLink>
            ))}
          </div>
        </div>
      </details>
    </>
  );
}
