import createMiddleware from 'next-intl/middleware';
import { defaultLocale } from './lib/env';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'kn'],
 
  // Used when no locale matches
  defaultLocale
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(kn|en)/:path*']
};