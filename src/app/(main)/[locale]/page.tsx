import Hero from "~/components/Hero/Hero";
import Story from "~/components/Information/Story";
import Information from "~/components/Information/Information";
import Facilities from "~/components/Information/Facilities";
import Testimonials from "~/components/Testimonials/page";
import Fqas from "~/components/Fqas/Fqas";
import { fetchHomePage } from "~/lib/queries";
import { getLocale, getTranslations } from "next-intl/server";
import { FileDown, Link as LinkIcon } from "lucide-react";
import LocaleLink from "~/components/ui/LocaleLink";
import Heading from "~/components/Animations/Heading";

export default async function Home() {
  const locale = await getLocale();
  const data = await fetchHomePage(locale);

  const t = await getTranslations("home");
  return (
    <>
      <main className="space-y-8">
        <Hero carouselImages={data.carosuel} />
        <section className="content-container">
          <div >
            <Heading >
              {t("resources.heading")}
            </Heading>
            <p className="pb-8">{t("resources.content")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 capitalize">
            <div className="bg-gradient-to-br from-secondary-300 to-secondary-200/60  hover:shadow-2xl transition-shadow duration-300 p-4 rounded-l-2xl">
              <h2 className="subheading py-4">{t("resources.forms.heading")}</h2>
              <ul className="space-y-2">
                {/* <li className="flex gap-2 items-center"> <FileDown className="inline" size={16} /> <a href="/pre_admission_rules.pdf">Pre admission rules</a></li> */}
                <li className="flex gap-2 items-center"> <FileDown className="inline" size={16} /> <a href="/Nomination form.pdf">{t("resources.forms.nominationForm")}</a></li>
                <li className="flex gap-2 items-center"> <FileDown className="inline" size={16} /> <a href="/Permanent form.pdf">{t("resources.forms.permanentForm")}</a></li>
              </ul>
            </div>
            <div className="bg-gradient-to-bl from-primary-300 to-primary-200/80  hover:shadow-2xl transition-shadow duration-300  p-4 rounded-r-2xl">
              <h2 className="subheading py-4">{t("resources.links.heading")}</h2>
              <ul className="space-y-2">
                <li className="flex gap-2 items-center transition-all duration-300 ease-in-out"> <LinkIcon size={16} /><LocaleLink href="/ashraya-dhama/pricing">{t("resources.links.pricing")}</LocaleLink></li>
                <li className="flex gap-2 items-center"> <LinkIcon size={16} /><LocaleLink href="/ashraya-dhama/rules-regulations">{t("resources.links.rulesRegulations")}</LocaleLink></li>
              </ul>
            </div>
          </div>
        </section>
        <Story data={data.story} />
        <Facilities facilities={data.facilities} />

        <Information data={data.whoweare} />
        <Fqas fqas={data.fqas} />
        <Testimonials testimonials={data.testimonials} />


      </main>
    </>
  );
}
