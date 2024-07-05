import { getTranslations } from "next-intl/server";
import Heading from "~/components/Heading/Heading";
import ZigZag from "~/components/ZigZag/ZigZag";
import { fetchAboutPage } from "~/lib/queries";
import { LocaleParamProp } from "~/lib/types";
import Image from "next/image";
import RichText from "~/components/RichText/RichText";

async function About({ params }: LocaleParamProp) {
  const t = await getTranslations("aboutUs");
  const data = await fetchAboutPage(params.locale);
  return (
    <main className="flex flex-col md:gap-4 gap-2 min-h-screen content-container mt-24">
      <Heading>{t("heading")}</Heading>

      <div className="space-y-16 md:space-y-20 ">
        <ZigZag contents={data.sections} />

        {/* logo description */}
        <section
          className="flex flex-col-reverse gap-6 md:flex-row md:gap-10 hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-bl from-primary-300/50 to-primary-100/30"
          id="logo"
        >
          <div className="md:basis-1/2 basis-auto flex flex-col  gap-2 md:gap-4 px-10 md:py-12 pb-8">
            <p
              className="subheading text-gray-900"
              style={{ textTransform: "capitalize" }}
            >
              {t("logo")}
            </p>
            <RichText value={data.logodescription} />
          </div>
          <div className="relative rounded-2xl hover:shadow-xl transition ease-out duration-500 basis-auto md:basis-1/2 overflow-clip aspect-video md:aspect-auto group flex flex-col justify-center items-center">
            <Image
              className="object-cover group-hover:scale-105 transition ease-out duration-700"
              src={data.logo1}
              alt={"Ayurveda"}
              height={270}
              width={270}
            />
            <Image
              className="object-cover group-hover:scale-105 transition ease-out duration-700"
              src={data.logo2}
              alt={"Ashrayadhama"}
              height={270}
              width={270}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
export default About;
