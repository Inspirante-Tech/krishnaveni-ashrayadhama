import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//for testing purpose
export async function delayAsyncFunction<
  T extends (...args: any[]) => Promise<any>,
>(asyncFunction: T, delay = 1000): Promise<ReturnType<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asyncFunction());
    }, delay);
  });
}

export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

export function formatDate(date: string,locale?:string) {
  const lang = locale=="kn"?"kn":"en-US"
  return new Intl.DateTimeFormat(lang,{
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date),);
}

export function exhaustiveMatchingGaurd(_: never): never {
  throw new Error(
    "SHould not have reached here; all the cases must be handled"
  );
}

export function createYoutubeEmbeddedLink(videoUrl: string) {
  let v;
  const urlObject = new URL(videoUrl);
  if (urlObject.pathname.includes("watch")) {
    v = urlObject.searchParams.get("v");
  } else if (videoUrl.split("/").includes("live")) {
    v = urlObject.pathname.split("/").at(-1);
  }
  return `https://www.youtube.com/embed/${v}`;
}
