"use client"
import { useEffect, useState } from "react";
import { navigation } from "~/constants";
import Button from "./design/Button";
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
    <div className={`fixed top-0 left-0 w-full z-50   lg:bg-n-8/90 lg:backdrop-blur-md ${openNavigation ? "bg-primary-50" : "bg-blur backdrop-blur-md "}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <h1 className="font-bold text-3xl">Logo</h1>
        </a>

        <nav className={`${openNavigation ? "flex bg-primary-50  " : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 lg:bg-blur lg:backdrop-blur lg:static lg:flex lg:mx-auto `}>
          <div className="relative z-2 flex flex-col right-0 justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-md font-bold uppercase text-n-1 transition-colors hover:text-color-1  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === currentPathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"} lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        

        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
