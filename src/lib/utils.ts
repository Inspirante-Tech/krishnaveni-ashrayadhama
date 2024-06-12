import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//for testing purpose
export async function delayAsyncFunction<T extends (...args: any[]) => Promise<any>>(asyncFunction: T, delay = 1000): Promise<ReturnType<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(asyncFunction());
    }, delay);
  });
}

export function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US').format(new Date(date))
}

export function createYoutubeEmbeddedLink(videoUrl: string) {
  const v = new URL(videoUrl).searchParams.get('v');
  return `https://www.youtube.com/embed/${v}`
}