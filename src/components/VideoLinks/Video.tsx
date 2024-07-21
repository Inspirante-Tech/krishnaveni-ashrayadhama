import { Button } from "../ui/button";
import LocaleLink from "../ui/LocaleLink";
import { useTranslations } from "next-intl";

export default async function Video({ videos }: { videos: string[] }) {
  const t = useTranslations("home.video");
  return (
    <>
      {videos.slice(-3).map((item, index) => (
        <div key={index} className="aspect-video">
          <iframe
            src={item}
            title="YouTube video player"
            referrerPolicy="no-referrer"
            className="rounded-lg"
            allowFullScreen
          ></iframe>
          {index === videos.length - 1 && (
            <div className="flex justify-center md:justify-end">
              <LocaleLink href="/events#videos" className="underline body pt-2">
                <Button>{t("more")}</Button>
              </LocaleLink>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
