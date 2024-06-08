import { assertValue } from "./utils";

export const defaultLocale = assertValue(
    process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    'Missing environment variable: NEXT_PUBLIC_DEFAULT_LOCALE'
  )