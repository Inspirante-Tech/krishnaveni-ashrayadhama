"use client";
import { navigation } from "~/constants";
import { useTranslations } from "next-intl";
import LocaleLink from "../ui/LocaleLink";
import LocalSwitcher from "./LocaleSwitcher";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";

const Header = () => {
  const t = useTranslations("links");
  const router = usePathname();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-secondary-200/95 backdrop:blur-lg text-gray-900 shadow-lg">
      <div className="max-w-screen-xl flex flex-row justify-between items-center px-3 md:px-12 mx-auto">
        <LocaleLink href="/" className="flex items-center">
          Logo
        </LocaleLink>
        <div className="lg:flex flex-row md:gap-4 lg:gap-8 hidden">
          {navigation.map((item) => (
            <div
              className="py-4 lg:py-6 border-gray-900 hover:border-secondary-800 hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear"
              key={item.id}
            >
              <LocaleLink
                href={item.url}
                className="h-full "
                style={{
                  textTransform: "capitalize",
                  borderBottom:
                    "/" + router.split("/")[router.split("/").length - 1] ===
                    item.url
                      ? "2px solid"
                      : "none",
                }}
              >
                {t(item.id)}
              </LocaleLink>
            </div>
          ))}
        </div>
        <div className="flex gap-6 justify-center items-center">
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

  return (
    <div
      id={styles.menuToggle}
      className="flex flex-col relative select-none rounded-xl lg:hidden py-6"
    >
      <input
        id={styles.input}
        type="checkbox"
        className="absolute h-full w-full cursor-pointer z-50 opacity-0"
      />
      <div className="relative w-6 h-[14px] overflow-clip">
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
        className="p-8 list-none fixed top-0 right-0 translate-x-full h-screen bg-secondary-300 flex flex-col justify-center items-center transition-all duration-500 ease-in-out z-10 gap-4 subheading"
      >
        {navigation.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
