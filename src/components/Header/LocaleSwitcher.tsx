"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const path = usePathname();
  const localActive = useLocale();

  const onClick = () => {
    const toPath = path.split("/");
    toPath[1] = localActive === "en" ? "kn" : "en";
    const newPath = toPath.join("/");
    startTransition(() => {
      router.replace(newPath);
      router.refresh();
    });
  };
  return (
    <button
      className="subheading font-medium text-gray-900 hover:text-secondary-800 hover:scale-105 transition-all duration-150 ease-linear align-middle p-2"
      onClick={onClick}
      disabled={isPending}
    >
      {localActive === "en" ? "ಕ" : "en"}
    </button>
  );
}
