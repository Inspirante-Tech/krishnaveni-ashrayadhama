import { Variable } from "lucide-react";
import { Button } from "../ui/button";
import LocaleLink from "../ui/LocaleLink";
import { useTranslations } from "next-intl";
import { size } from "valibot";

export default async function Video({ videos }: { videos: string[] }) {
  const t = useTranslations("home.video");
  return (
    <>
      {videos.slice(-3).map((item, index) => (
        <div key={index}>
          <iframe
            src={item}
            title="YouTube video player"
            referrerPolicy="no-referrer"
            className="rounded-lg bg-secondary-100"
            allowFullScreen
          ></iframe>
          {index === videos.length - 1 && (
            <div className="flex justify-end">
              <LocaleLink href="/events#videos" className="pt-3">
                <Button>{t("more")}</Button>
              </LocaleLink>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
