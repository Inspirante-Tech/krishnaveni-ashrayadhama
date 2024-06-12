import Hero from "~/components/Hero/Hero";
import Story from "~/components/Information/Story";
import Information from "~/components/Information/Information";
import Facilities from "~/components/Information/Facilities";
import Testimonials from "~/components/Testimonials/page";
import Fqas from "~/components/Fqas/Fqas";
import { fetchHomePage } from "~/lib/queries";
import { getLocale } from "next-intl/server";
import Link from "next/link";
import { FileDown, Link as LinkIcon } from "lucide-react";
import LocaleLink from "~/components/ui/LocaleLink";

export default async function Home() {
  const locale = await getLocale();
  const data = await fetchHomePage(locale);
  return (
    <>
      <main className="space-y-8">
        <Hero carouselImages={data.carosuel} />
        <section className="content-container">
          <div >
            <h1 className="heading pb-4">Resources</h1>
            <p className="pb-8">quick links for anyone interested in our services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-secondary-300 to-secondary-200/60  hover:shadow-2xl transition-shadow duration-300 p-4 rounded-l-2xl">
              <h2 className="subheading py-4">Forms</h2>
              <ul>
                <li className="flex gap-2 items-center"> <FileDown className="inline" size={16} /> <a href="/pre_admission_rules.pdf">Pre admission rules</a></li>
              </ul>
            </div>
            <div className="bg-gradient-to-bl from-primary-300 to-primary-200/80  hover:shadow-2xl transition-shadow duration-300  p-4 rounded-r-2xl">
              <h2 className="subheading py-4">Links</h2>
              <ul className="space-y-4">
                <li className="flex gap-2 items-center transition-all duration-300 ease-in-out"> <LinkIcon size={16} /><LocaleLink href="/ashraya-dhama/pricing">Pricing</LocaleLink></li>
                <li className="flex gap-2 items-center"> <LinkIcon size={16} /><LocaleLink href="/ashraya-dhama/rules-regulations">Rules and Regulations</LocaleLink></li>
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
