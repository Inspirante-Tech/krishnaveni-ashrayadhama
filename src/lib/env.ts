import { assertValue } from "./utils";

export const defaultLocale = assertValue(
  process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  'Missing environment variable: NEXT_PUBLIC_DEFAULT_LOCALE'
)

export const recaptchaClientKey = assertValue(
  process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
  'Missing environment variable: NEXT_PUBLIC_RECAPTCHA_KEY'
)