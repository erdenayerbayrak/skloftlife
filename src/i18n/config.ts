export const locales = ['en', 'tr', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  tr: 'Türkçe',
  ru: 'Русский',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  tr: '🇹🇷',
  ru: '🇷🇺',
};