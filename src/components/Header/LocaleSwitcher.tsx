"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { Globe, Languages } from "lucide-react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const path = usePathname();
  const localActive = useLocale();

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
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <button className="p-2 block">
          <Globe size={24} strokeWidth={1.5} />
        </button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-secondary-200 w-32 p-1 shadow-xl">
        <div className="flex flex-col gap-1">
          <button
            onClick={() => onClick(true)}
            className="p-2 body hover:bg-secondary-300/50 transition-colors duration-300 rounded-md ease-linear"
          >
            ಕನ್ನಡ
          </button>
          <button
            onClick={() => onClick(false)}
            className="p-2 body hover:bg-secondary-300/50 transition-colors duration-300 rounded-md ease-linear"
          >
            English
          </button>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
