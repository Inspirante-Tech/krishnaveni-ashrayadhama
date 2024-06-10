import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";
import { usePathname } from "next/navigation";

type NestedUrl = {
    heading: string,
    urls: {
        id: string,
        url: string,
    }[]
}

export default function LocalSwitcher({ urlObject }: { urlObject: NestedUrl }) {
    const pathname = usePathname();
    const active = urlObject.urls.some((e) => pathname.includes(e.url));
    const t = useTranslations("links")
    return (
        <div className={`py-4 lg:py-6 block h-min hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear capitalize  border-solid border-black ${active ? "border-b-2" : "border-none"}`}>
            <HoverCard openDelay={300}>
                <HoverCardTrigger asChild>
                    <span>
                        {t(urlObject.heading)}
                    </span>
                </HoverCardTrigger>
                <HoverCardContent className="bg-secondary-200 w-fit p-1 shadow-xl">
                    <div className="flex flex-col gap-1">
                        {urlObject.urls.map(url => (
                            <LocaleLink
                                href={url.url}
                                key={url.id}
                                className="p-2 body hover:bg-secondary-300/50 transition-colors duration-300 rounded-md ease-linear"
                            >
                                {t(url.id)}
                            </LocaleLink>
                        ))}
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    );
}
