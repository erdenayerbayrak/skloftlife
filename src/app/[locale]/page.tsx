'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { Interactive360Viewer } from '@/components/Interactive360Viewer';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';

export default function HomePage() {
  const t = useTranslations();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [use360Viewer, setUse360Viewer] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen">
      {/* Luxury Light Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <WatermarkedImage
            src="/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1 kopyası.jpg"
            alt="SkLoftLife Luxury Villa"
            fill
            className="object-cover"
            priority
            watermarkClassName="opacity-10"
          />
          {/* Light gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(245,239,230,0.65) 100%)'
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 luxury-container">
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen">
            <div 
              className={`col-span-12 lg:col-span-6 space-y-8 transition-all duration-1500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="space-y-6">
                <h1 className="text-[#1B1B1B] leading-[0.9]">
                  {t('hero.title')}
                </h1>
                
                <p className="text-xl text-[#6A6A6A] max-w-lg leading-relaxed">
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/gallery" className="btn-primary">
                  {t('hero.cta')}
                </Link>
                
                <Link href="/about" className="btn-secondary">
                  {t('hero.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury About Section */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-[#BFA98B]" />
                  <span className="text-sm font-medium text-[#BFA98B] uppercase tracking-wider">
                    {t('about.sectionLabel')}
                  </span>
                </div>
                
                <h2 className="text-[#1B1B1B]">
                  {t('about.title')}
                </h2>
                
                <p className="text-lg text-[#6A6A6A] leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#1B1B1B] hover:gap-6 transition-all duration-300 font-medium group underline underline-offset-4"
              >
                {t('about.discoverVision')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="luxury-card">
                <div className="aspect-[4/5] rounded-xl overflow-hidden">
                  <WatermarkedImage
                    src="/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg"
                    alt="Luxury Villa Interior"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    watermarkClassName="opacity-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Strip Section (Halton Style) */}
      <section className="py-32 relative" style={{ backgroundColor: '#111112' }}>
        <div className="luxury-container">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-white">
              <span className="text-[#BFA98B]">LUXURY</span> LIVING
            </h2>
            
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🏗️",
                title: "Modern Architecture",
                description: "Contemporary design meets timeless elegance"
              },
              {
                icon: "🌟",
                title: "Premium Materials",
                description: "Only the finest finishes and fixtures"
              },
              {
                icon: "🏡",
                title: "Exclusive Location",
                description: "Prime position with stunning views"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-white font-cormorant">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Projects Grid */}
      <section className="luxury-section">
        <div className="luxury-container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#BFA98B]" />
              <span className="text-sm font-medium text-[#BFA98B] uppercase tracking-wider">
                {t('projects.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-[#BFA98B]" />
            </div>
            
            <h2 className="text-[#1B1B1B]">
              {t('projects.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1 kopyası.jpg",
                title: "A Block Villas",
                size: "350-450",
                description: t('projects.ablokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2 kopyası.jpg", 
                title: "C Block Villas",
                size: "400-500",
                description: t('projects.cblokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3 kopyası.jpg",
                title: "Common Areas", 
                size: "∞",
                description: t('projects.commonAreasDescription')
              }
            ].map((project, i) => (
              <div key={i} className="luxury-card group">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6">
                  <WatermarkedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    watermarkClassName="opacity-5"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-cormorant text-2xl font-medium text-[#1B1B1B]">
                    {project.title}
                  </h3>
                  <p className="text-[#6A6A6A]">
                    <span className="text-[#BFA98B] font-semibold">{project.size} m²</span> • {project.description}
                  </p>
                  <Link
                    href="/plans"
                    className="inline-flex items-center gap-2 text-[#1B1B1B] hover:gap-4 transition-all duration-300 font-medium underline underline-offset-4"
                  >
                    {t('projects.viewDetails')}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/gallery" className="btn-primary">
              {t('projects.viewAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}