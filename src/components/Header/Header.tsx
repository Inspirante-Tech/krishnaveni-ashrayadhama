"use client";
import { navigation } from "~/constants";
import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import LocalSwitcher from "./LocaleSwitcher";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import NestedLink from "./NestedLink";
import Image from "next/image";

const Header = () => {
  const t = useTranslations("links");
  const router = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary-50/95 backdrop-blur-[2px] text-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-row justify-between items-center px-3 md:px-12 mx-auto">
        <LocaleLink href="/" className="flex items-center">
          <Image
            height={100}
            width={100}
            src={"/logo.png"}
            alt="Logo"
            className="object-contain object-center h-16 w-16"
          />
        </LocaleLink>
        <div className="lg:flex flex-row md:gap-4 lg:gap-8 hidden">
          {navigation.map((item) => {
            if (typeof item.url === "string") {
              return (
                <LocaleLink href={item.url} key={item.id}>
                  <span
                    className={`py-4 lg:py-6 block hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear h-full capitalize  border-solid border-black ${router.includes(item.url) ? "border-b-2" : "border-none"}`}
                  >
                    {t(item.id)}
                  </span>
                </LocaleLink>
              );
            }
            return <NestedLink key={item.id} urlObject={item.url} />;
          })}
        </div>
        <div className="flex gap-4">
          <LocalSwitcher />
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;

function MobileNav() {
  const t = useTranslations("links");
  const router = usePathname();
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const toggle = (e: MouseEvent) => {
      if (e.target)
        if (input.current?.checked && e.target !== input.current) {
          setTimeout(() => {
            if (input.current) {
              input.current.checked = !input.current.checked;
            }
          }, 500);
        }
    };

    window.addEventListener("mousedown", (e) => toggle(e));
    return () => window.removeEventListener("mousedown", (e) => toggle(e));
  }, []);

  return (
    <div
      id={styles.menuToggle}
      className="flex flex-col relative select-none rounded-xl lg:hidden "
    >
      <input
        ref={input}
        id="toggleSwitch"
        type="checkbox"
        className={`absolute h-full w-full cursor-pointer z-50 opacity-0 ${styles.input}`}
      />
      <div className="relative w-6 h-[14px] overflow-clip py-6 mb-3">
        <span
          className={`flex w-6 h-[2px] mb-1 relative rounded-full z-20 origin-[left_center] transition-all duration-500 bg-gray-900 ${styles.span}`}
        ></span>
        <span
          className={`flex w-6 h-[2px] mb-1 relative rounded-full z-20 transition-all duration-500 bg-gray-900 ${styles.span}`}
        ></span>
        <span
          className={`flex w-6 h-[2px] relative rounded-full z-20 transition-all duration-500 bg-gray-900 origin-[left_center] ${styles.span}`}
        ></span>
      </div>
      <div
        id={styles.menu}
        className="p-8 list-none fixed top-0 right-0 translate-x-full h-screen bg-secondary-200 flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-10 gap-4 subheading"
      >
        {/* {navigation.map((item) => (
          <LocaleLink
            key={item.id}
            href={item.url}
            style={{
              textTransform: "capitalize",
              borderBottom:
                "/" + router.split("/")[router.split("/").length - 1] ===
                  item.url
                  ? "2px solid"
                  : "none",
            }}
            className="hover:border-secondary-800 hover:text-secondary-800 hover:scale-105"
          >
            {t(item.id)}
          </LocaleLink>
        ))} */}

        {navigation.map((item) => {
          if (typeof item.url === "string") {
            return (
              <LocaleLink href={item.url} key={item.id}>
                <span
                  className={`py-4 lg:py-6 block hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear h-full capitalize  border-solid border-black ${router.includes(item.url) ? "border-b-2" : "border-none"}`}
                >
                  {t(item.id)}
                </span>
              </LocaleLink>
            );
          }
          return <NestedLink key={item.id} urlObject={item.url} />;
        })}
      </div>
    </div>
  );
}
