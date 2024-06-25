import React, { useState, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import { CareerType } from "~/lib/types";
import { useTranslations } from "next-intl";

export default function RolesAndDescriptions({ data }: { data: CareerType }) {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("career");

  const openDrawer = (tabTitle: string) => {
    setSelectedTab(tabTitle);
    setIsDrawerOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeDrawer = () => {
    setSelectedTab(null);
    setIsDrawerOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const sendEmail = () => {
    const email = "info@kvdhama.com";
    window.location.href = `mailto:${email}`;
  };

  const tabData = data.roles.map((role, index) => ({
    id: index,
    title: role.title,
    jobRole: role.description,
    eligibility: role.eligibility,
  }));

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDrawerOpen]);

  return (
    <section className="flex gap-1">
      <div className="flex flex-wrap justify-center">
        {tabData.map((tab) => (
          <div key={tab.id} className="flex justify-center m-1">
            <button
              className="p-2 px-4 border border-black rounded-md w-max text-md font-medium tracking-wide bg-primary-200 hover:bg-primary-100 hover:shadow-lg focus:outline-none transform hover:scale-105 transition duration-300"
              onClick={() => openDrawer(tab.title)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <DrawerContent
          ref={drawerRef}
          className="bg-primary-100 leading-relaxed max-h-full "
        >
          {selectedTab && (
            <div className="mx-auto w-full max-w-lg">
              <DrawerHeader>
                <DrawerTitle className="title">{selectedTab}</DrawerTitle>
                <DrawerDescription className="body">
                  {tabData.find((item) => item.title === selectedTab)?.jobRole}
                </DrawerDescription>
                <div className="flex flex-col md:flex-row items-center gap-2 border border-black p-2 rounded-2xl">
                  <h1 className="font-bold text-lg">{t("elegibility")}:</h1>
                  <h2 className="text-md">
                    {
                      tabData.find((item) => item.title === selectedTab)
                        ?.eligibility
                    }
                  </h2>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <Button onClick={sendEmail}>{t("buttons.send")}</Button>
                <DrawerClose asChild>
                  <Button
                    onClick={closeDrawer}
                    className="border border-black bg-white hover:bg-gray-300"
                  >
                    {t("buttons.close")}
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
}
