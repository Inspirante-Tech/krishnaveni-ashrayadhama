import { navigation } from "~/constants";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import LocaleLink from "../ui/LocaleLink";
import { getTranslations } from "next-intl/server";

async function Footer() {
  const t = await getTranslations("links");
  return (
    <footer className="text-white">
      <div className="bg-secondary-900 h-1/2 w-full ">
        <div className="content-container flex md:flex-row flex-col justify-around items-start">
          <div className="p-5 ">
            <ul>
              <p className="font-bold text-3xl pb-6">LOGO</p>
              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Twitter className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Linkedin className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
                <Youtube className="text-2xl cursor-pointer transition-colors duration-150 hover:text-secondary-300" />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <p className="semibold pb-4">Address</p>
            <ul className="text-gray-300">
              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                Lorem ipsum
              </li>
              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                lorem ipsum
              </li>
            </ul>
          </div>
          <div className="p-5 flex flex-col gap-1">
            <h1 className="heading mb-4">{t("heading")}</h1>
            {navigation.map((item) => (
              <LocaleLink
                key={item.id}
                href={item.url}
                style={{ textTransform: "capitalize" }}
                className="text-gray-300 body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer"
              >
                {t(item.id)}
              </LocaleLink>
            ))}
          </div>
          <div className="p-5">
            <p className="semibold pb-4">Support</p>
            <ul className="text-gray-300 ">
              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                Contact
              </li>

              <li className=" body pb-2 font-semibold transition-colors duration-150 hover:text-secondary-300 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-secondary-950">
        <h1 className=" font-semibold">&copy; 2023-2024 All rights reserved</h1>
      </div>
    </footer>
  );
}

export default Footer;
