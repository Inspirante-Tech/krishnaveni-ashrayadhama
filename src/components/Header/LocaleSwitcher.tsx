"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { Languages } from "lucide-react";
import { useLocale } from "next-intl";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const path = usePathname();
  const locale = useLocale();

  const onClick = (checked: boolean) => {
    const toPath = path.split("/");
    toPath[1] = checked ? "kn" : "en";
    const newPath = toPath.join("/");
    startTransition(() => {
      router.replace(newPath);
      router.refresh();
    });
  };
  return (
    <div className="lg:py-6  h-min hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear capitalize w-full group">
      <button className="p-2 flex gap-2 bg-primary-500 rounded border border-action-700" disabled={isPending}>
        <Languages size={24} strokeWidth={1.5} /> <span>{locale === "en" ? "English" : "Kannada"}</span>
      </button>
      <div className="group-hover:h-max absolute h-0 bg-primary-50/95 rounded overflow-hidden w-32 p-1 shadow-xl">

        <div className="flex flex-col gap-1">
          {
            locale === "en" ? (
              <button
                onClick={() => onClick(true)}
                className="p-2 body hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear"
              >
                ಕನ್ನಡ
              </button>
            ) : (
              <button
                onClick={() => onClick(false)}
                className="p-2 body hover:bg-primary-300/50 transition-colors duration-300 rounded-md ease-linear"
              >
                English
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
}
