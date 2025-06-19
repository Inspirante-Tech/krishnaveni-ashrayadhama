import { navigation } from "~/constants";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import LocaleLink from "../ui/LocaleLink";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

async function Footer() {
  const t = await getTranslations("links");
  const locale = await getLocale();
  return (
    <footer className="text-white mt-10">
      <div className="bg-secondary-900 h-1/2 w-full ">
        <div className="content-container flex md:flex-row flex-col justify-around items-start">
          <div className="p-5 ">
            <ul className="flex flex-col justify-center items-center gap-4">
              <LocaleLink
                href={"/about-us/krishnaveni#logo"}
                className="flex gap-2 bg-primary-100 rounded-full justify-between items-center px-4 py-2"
              >
                <Image
                  src={"/logo.png"}
                  height={100}
                  width={100}
                  alt="Logo"
                  className="object-center object-contain"
                />
                <Image
                  src={"/ayurveda-logo.png"}
                  height={100}
                  width={100}
                  alt="Logo"
                  className="object-center object-contain"
                />
              </LocaleLink>

              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Twitter className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Linkedin className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Youtube className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
              </div>
            </ul>
          </div>
          <div className="flex flex-col p-5 gap-4 ">
            <p className="heading !text-gray-100">Address</p>
            <p className="">
              Salmara House,
              <br /> P O Shankerpura, Kaup Tq,
              <br /> Udupi Dist. - 574115.
              <br />
              <br />
              Ph No: 9036171652
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3883.4705301687577!2d74.77530487508139!3d13.25851008708388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDE1JzMwLjYiTiA3NMKwNDYnNDAuNCJF!5e0!3m2!1sen!2sin!4v1750348879031!5m2!1sen!2sin" style={{ border: 0 }}
              className="rounded-lg"
              aria-hidden="false">
            </iframe>
          </div>
          <div className="p-5 flex flex-col gap-1">
            <p className="heading mb-4 !text-gray-100">{t("heading")}</p>
            {navigation.map((item) => {
              if (typeof item.url === "string") {
                return (
                  <LocaleLink
                    key={item.id}
                    href={item.url}
                    style={{ textTransform: "capitalize" }}
                    className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer"
                  >
                    {t(item.id)}
                  </LocaleLink>
                );
              }
              return item.url.urls.map((subItem) => (
                <LocaleLink
                  key={subItem.id}
                  href={subItem.url}
                  style={{ textTransform: "capitalize" }}
                  className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer"
                >
                  {t(subItem.id)}
                </LocaleLink>
              ));
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-secondary-950">
        <h1 className="text-gray-300 font-semibold mb-4">
          <a href="https://inspirantech.in/" className="hover:text-blue-500">
            Powered by Inspirante Technologies Pvt. Ltd.
          </a>
        </h1>

        <h1>&copy; 2023-2024 All rights reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
