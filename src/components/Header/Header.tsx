
"use client";
import { useEffect, useState } from "react";
import { navigation } from "~/constants";
import Button from "../design/Button";
import MenuSvg from "~/assets/svg/MenuSvg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [currentPathname, setCurrentPathname] = useState("");
  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPathname(window.location.pathname);
    }
  }, []);

  
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-n-8/90 lg:backdrop-blur-md ${openNavigation ? "bg-primary-50" : "bg-blur backdrop-blur-md"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <h1 className="font-bold text-3xl">Logo</h1>
        </a>

        <nav
          className={`fixed top-0 right-0 bottom-0 w-full left-0 max-w-xs bg-primary-50 transition-transform transform ${openNavigation ? "translate-x-0 pt-10  " : "translate-x-full"} lg:static lg:flex lg:translate-x-0 lg:bg-transparent lg:w-auto lg:max-w-none lg:transition-transform lg:duration-500 lg:ease-in-out`}
        >
          <div className="relative z-20 flex flex-col lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`hover:text-orange-600 block relative font-code text-md font-bold uppercase text-n-1 transition-colors px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12 ${item.url === currentPathname ? "text-color-1" : "text-n-1/50"} hover:text-color-1 hover:text-orange-600`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
