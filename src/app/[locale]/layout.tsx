import type { Metadata } from "next";
import { Oxanium, Merriweather } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { StructuredData } from '@/components/StructuredData';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import "../globals.css";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  weight: ['400', '500', '600', '700'],
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ['300', '400'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  
  return {
    title: messages.metadata?.title || 'SkLoftLife Villas',
    description: messages.metadata?.description || 'Luxury villa living',
    keywords: 'luxury villas, modern architecture, premium real estate, villa plans, gallery, live construction',
    authors: [{ name: 'SkLoftLife' }],
    creator: 'SkLoftLife',
    publisher: 'SkLoftLife',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://skloftlife-villas.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'tr': '/tr',
        'ru': '/ru',
      },
    },
    openGraph: {
      title: messages.metadata?.title || 'SkLoftLife Villas',
      description: messages.metadata?.description || 'Luxury villa living',
      url: 'https://skloftlife-villas.com',
      siteName: 'SkLoftLife Villas',
      images: [
        {
          url: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg',
          width: 1200,
          height: 630,
          alt: 'SkLoftLife Luxury Villas',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.metadata?.title || 'SkLoftLife Villas',
      description: messages.metadata?.description || 'Luxury villa living',
      images: ['/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <StructuredData 
          type="organization" 
          data={{
            name: "SkLoftLife Villas",
            url: "https://skloftlife-villas.com",
            description: "Luxury villa construction and architecture company specializing in modern design and premium craftsmanship.",
            telephone: "+90 535 717 8282",
            email: "skloftlife@gmail.com",
            address: {
              city: "Alanya",
              region: "Antalya", 
              country: "TR"
            }
          }} 
        />
        <StructuredData 
          type="website" 
          data={{
            name: "SkLoftLife Villas",
            url: "https://skloftlife-villas.com",
            description: "Explore luxury villa designs, construction progress, and architectural excellence.",
            languages: ["tr", "en", "ru"]
          }} 
        />
        <StructuredData 
          type="realEstate" 
          data={{
            name: "SkLoftLife Luxury Villas",
            description: "Premium luxury villas with modern architecture and premium amenities.",
            url: "https://skloftlife-villas.com",
            images: [
              "https://skloftlife-villas.com/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg",
              "https://skloftlife-villas.com/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2.jpg"
            ],
            rooms: "3-5",
            size: 300
          }} 
        />
      </head>
      <body className={`${oxanium.variable} ${merriweather.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col bohemian-pattern luxury-gradient">
              <Header />
              <main className="flex-1 pt-20">
                {children}
              </main>
              <Footer />
              <WhatsAppButton />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}