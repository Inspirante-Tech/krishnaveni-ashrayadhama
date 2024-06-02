import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//for testing purpose
export async function delayAsyncFunction<T extends (...args: any[]) => Promise<any>>(asyncFunction: T,delay=1000): Promise<ReturnType<T>> {
  return new Promise((resolve) => {
      setTimeout(() => {
        resolve(asyncFunction());
      }, delay);
    });
}

export type ResolvedType<T> = T extends Promise<infer R> ? R : never;
export type ArrayElementType<T> = T extends (infer U)[] ? U : never;


