import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  localeDetection: false, // Prevent automatic locale detection mixing
  alternateLinks: false // Prevent cross-language contamination
});

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    // - … static files in public folder
    '/((?!api|_next|_vercel|images|favicon.ico|robots.txt|.*\\..*).*)'
  ],
};