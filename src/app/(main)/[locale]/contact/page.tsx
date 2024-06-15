"use client"
import Image from "next/image";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useLocale, useTranslations } from "next-intl";
import Contactform from "~/components/ContactForm/ContactForm";
import { recaptchaClientKey } from "~/lib/env";

export default  function Contact() {
  const locale =  useLocale();
  const t = useTranslations("contact")
  return (
    <main className="content-container">
      <div className="lg:grid  lg:grid-cols-12 pt-20">
        <section className="relative flex h-full items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 rounded-l-xl">
          <Image
            alt=""
            width={1000}
            height={1000}
            src="/contactus.jpg"
            className="absolute inset-0 h-full w-full object-cover  opacity-80 rounded-l-xl object-right-bottom"
          />

          <div className="hidden  lg:relative lg:block lg:p-4 p-1 bg-white/60 m-4 rounded-lg">
            <h2 className="text-gray-800 heading">
            {t("heading")}
            </h2>

            <p className="mt-4 body text-gray-800">
              {t("content")}
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-4 py-6 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-secondary-200/50 rounded-xl lg:rounded-l-none">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative md:-mt-16  mt-5 block lg:hidden">
              <h1 className="mt-2  text-gray-900 heading">
                {t("heading")}
              </h1>

              <p className="mt-4 body text-gray-500">
                {t("content")}
              </p>
            </div>

            <GoogleReCaptchaProvider reCaptchaKey={recaptchaClientKey} language={locale == "kn" ? "kannada" : "english"}>
              <Contactform />
            </GoogleReCaptchaProvider>
          </div>
        </main>
      </div>
    </main>
  );
}
