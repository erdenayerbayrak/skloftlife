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
      {/* Premium Hero Section - 360 Viewer Foundation */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0D0F]"
      >
        {/* 360 Viewer Container */}
        <div className="absolute inset-0 z-0">
          {use360Viewer ? (
            <Interactive360Viewer 
              imagePath="/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1gece kopyası.jpg"
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-[#0B0D0F] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-[#C9A36B] rounded-full animate-spin mx-auto"></div>
                <p className="text-[#9AA0A6] text-lg">360° Viewer Loading...</p>
              </div>
            </div>
          )}
        </div>

        {/* 360 Controls */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={() => setUse360Viewer(!use360Viewer)}
            className="glass-morphism px-6 py-3 rounded-full text-sm font-medium text-[#C9A36B] hover:bg-[#C9A36B]/10 transition-all duration-300"
          >
            {use360Viewer ? 'Exit 360°' : 'Enter 360° View'}
          </button>
        </div>
      </section>

      {/* Premium About Section */}
      <section className="py-32 relative stone-texture">
        <div className="absolute inset-0 border-t border-[#1F2733]" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-8 opacity-0"
              style={{ animation: 'fade-up 1s ease-out 0.3s forwards' }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-[#C9A36B] to-transparent" />
                  <span className="text-sm font-medium text-[#C9A36B] uppercase tracking-wider">
                    {t('about.sectionLabel')}
                  </span>
                </div>
                
                <h2>
                  {t('about.title')}
                </h2>
                
                <p className="text-lg text-[#9AA0A6] leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-[#C9A36B] hover:gap-6 transition-all duration-500 text-base font-medium group"
              >
                {t('about.discoverVision')}
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div 
              className="relative opacity-0"
              style={{ animation: 'fade-up 1s ease-out 0.5s forwards' }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <WatermarkedImage
                  src="/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg"
                  alt="Luxury Villa Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  watermarkClassName="opacity-10"
                />
                {/* Gold accent glow */}
                <div className="absolute inset-0 accent-gradient opacity-30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Featured Projects */}
      <section className="py-32 relative architectural-pattern" style={{ backgroundColor: '#111418' }}>
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#C9A36B]" />
              <span className="text-sm font-medium text-[#C9A36B] uppercase tracking-wider">
                {t('projects.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-[#C9A36B] to-transparent" />
            </div>
            
            <h2 className="text-white">
              {t('projects.title')}
            </h2>
            
            <p className="text-lg text-[#9AA0A6] max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1gece kopyası.jpg",
                title: "A BLOK VİLLALAR",
                size: "350-450",
                description: t('projects.ablokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3gece kopyası.jpg", 
                title: "C BLOK VİLLALAR",
                size: "400-500",
                description: t('projects.cblokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera5gece kopyası.jpg",
                title: "TERAS & ORTAK ALANLAR", 
                size: "∞",
                description: t('projects.commonAreasDescription')
              }
            ].map((project, i) => (
              <div
                key={i}
                className="glass-card group relative opacity-0"
                style={{ 
                  animation: `fade-up 1s ease-out ${0.2 + i * 0.15}s forwards`
                }}
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
                  <WatermarkedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    watermarkClassName="opacity-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-playfair text-2xl font-bold text-white uppercase tracking-wider">
                    {project.title}
                  </h3>
                  <p className="text-[#9AA0A6]">
                    <span className="text-[#C9A36B] font-semibold">{project.size} m²</span> • {project.description}
                  </p>
                  <Link
                    href="/plans"
                    className="inline-flex items-center gap-2 text-[#C9A36B] hover:gap-4 transition-all duration-300 font-medium"
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
            <Link
              href="/gallery"
              className="btn-primary"
            >
              {t('projects.viewAll')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}