'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { locales, localeFlags, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    router.push(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={cn(
            'relative p-1.5 rounded-lg transition-all duration-200',
            loc === locale
              ? 'bg-accent/20 ring-2 ring-accent ring-offset-2 ring-offset-background'
              : 'hover:bg-muted hover:scale-110'
          )}
          aria-label={`Switch to ${loc}`}
          title={loc.toUpperCase()}
        >
          <span className="text-2xl block leading-none">{localeFlags[loc]}</span>
          {loc === locale && (
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
}