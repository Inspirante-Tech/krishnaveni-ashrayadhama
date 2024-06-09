import { navigation } from "~/constants";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import LocaleLink from "../ui/LocaleLink";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

async function Footer() {
  const t = await getTranslations("links");
  return (
    <footer className="text-white mt-10">
      <div className="bg-secondary-900 h-1/2 w-full ">
        <div className="content-container flex md:flex-row flex-col justify-around items-start">
          <div className="p-5 ">
            <ul>
              <div className="">
                {/* <Image
                  src={"/logo.png"}
                  height={100}
                  width={100}
                  alt="Logo"
                  className="object-center object-contain"
                /> */}
                Logo
              </div>
              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Twitter className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Linkedin className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Youtube className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <p className="heading pb-4 !text-gray-100">Address</p>
            <ul className="">
              <li className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                Lorem ipsum
              </li>
              <li className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
              <li className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
              <li className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
            </ul>
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
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-secondary-950">
        <h1 className="text-gray-300 font-semibold">
          &copy; 2023-2024 All rights reserved
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
