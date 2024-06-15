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

function isInRoute(curr_path: string, route: string) {
  console.log(route)
  if (route == "/") {
    return !curr_path.split("/").slice(2).length
  }
  return curr_path.includes(route)
}

const Header = () => {
  const t = useTranslations("links");
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-primary-50/95 backdrop-blur-[2px] text-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-row justify-between items-center px-3 md:px-12 mx-auto">
        <LocaleLink href="/" className="flex items-center p-1">
          <Image
            height={100}
            width={100}
            src={path.includes("ayurvedic-center") ? "/ayurveda-logo_cropped.png" : "/header_logo.png"}
            alt="Logo"
            className="object-contain object-center h-16 w-auto"
            priority
          />
        </LocaleLink>
        <div className="lg:flex flex-row md:gap-4 lg:gap-8 hidden">
          {navigation.map((item) => {
            if (typeof item.url === "string") {
              return (
                <LocaleLink
                  href={item.url}
                  key={item.id}
                  className="py-4 lg:py-6 "
                >
                  <span
                    className={`block w-max hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear h-full capitalize  border-solid border-black ${isInRoute(path, item.url) ? "border-b-2" : "border-none"}`}
                  >
                    {t(item.id)}
                  </span>
                </LocaleLink>
              );
            }
            return <NestedLink key={item.id} urlObject={item.url} />;
          })}
        </div>
        <div className="flex gap-4 items-center">
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
      if (
        e.target && ((e.target as HTMLElement).tagName === "A")
      )
        if (input.current?.checked && e.target !== input.current) {
          setTimeout(() => {
            if (input.current) {
              input.current.checked = !input.current.checked;
            }
          }, 500);
        }
    };

    window.addEventListener("mousedown", (e) => toggle(e), { passive: false });
    return () => window.removeEventListener("mousedown", (e) => toggle(e));
  }, []);

  return (
    <div
      id={styles.menuToggle}
      className="flex flex-col relative select-none rounded-xl lg:hidden"
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
        className="p-8 list-none fixed top-0 right-0 translate-x-full h-screen bg-primary-50/95 shadow-2xl flex flex-col text-center justify-center transition-all duration-500 ease-in-out z-10 gap-4 subheading max-w-60 w-full"
      >
        {navigation.map((item) => {
          if (typeof item.url === "string") {
            return (
              <LocaleLink
                href={item.url}
                key={item.id}
                className={`w-full flex justify-center`}
              >
                <span
                  className={`block hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear h-full capitalize pointer-events-none border-solid border-black ${isInRoute(router, item.url) ? "border-b-2" : "border-none"}`}
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
