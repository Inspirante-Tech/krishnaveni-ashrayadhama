"use client"
import {  navigation } from "~/constants";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
function Footer() {
  const t = useTranslations("links");
  return (
    <footer>
      <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">LOGO</p>
            <div className="flex gap-6 pb-5">
              <Instagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <Twitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <Linkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <Youtube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Address</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Lorem ipsum
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              lorem ipsum
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              lorem ipsum
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
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
              className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer"
            >
              {t(item.id)}
            </LocaleLink>
          ))}
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact
            </li>

            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2023-2024 All rights reserved
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
