import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://skloftlife-villas.com';
  const locales = ['tr', 'en', 'ru'];
  const routes = ['', '/about', '/plans', '/gallery', '/live', '/contact'];

  const sitemap: MetadataRoute.Sitemap = [];

  // Add homepage without locale prefix
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        locales.map(locale => [locale, `${baseUrl}/${locale}`])
      )
    }
  });

  // Add localized routes
  locales.forEach(locale => {
    routes.forEach(route => {
      const url = route === '' ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}${route}`;
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/live' ? 'daily' : 'weekly',
        priority: route === '' ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, route === '' ? `${baseUrl}/${l}` : `${baseUrl}/${l}${route}`])
          )
        }
      });
    });
  });

  return sitemap;
}