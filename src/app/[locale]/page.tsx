'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';
import { Hero360Viewer } from '@/components/Hero360Viewer';

export default function HomePage() {
  const t = useTranslations();
  
  // 360 Viewer configuration - easily changeable
  const [viewer360Config] = useState({
    enabled: false, // Set to true when you have the 360 image
    imagePath: '', // Add your 360 image path here
    autoRotate: true,
    controlsVisible: true
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section - 360 Viewer Container */}
      <section className="h-screen bg-background">
        <div className="w-full h-full flex items-center justify-center p-4">
          <div 
            id="hero-360-viewer" 
            className="w-full h-full max-w-7xl mx-auto rounded-2xl bg-card border border-border shadow-2xl overflow-hidden relative"
          >
            <Hero360Viewer 
              enabled={viewer360Config.enabled}
              imagePath={viewer360Config.imagePath}
              autoRotate={viewer360Config.autoRotate}
              controlsVisible={viewer360Config.controlsVisible}
            />
          </div>
        </div>
      </section>

      {/* Luxury About Section - Subtle Cream Accent */}
      <section className="py-16 md:py-20 relative cream-marble-background">
        <div className="absolute inset-0 cream-marble-overlay opacity-30"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-px bg-accent" />
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {t('about.sectionLabel')}
                  </span>
                </div>
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-cormorant font-medium text-foreground">
                  {t('about.title')}
                </h2>
                
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                  {t('about.description')}
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-foreground hover:gap-5 transition-all duration-300 font-medium group underline underline-offset-4 text-sm lg:text-base"
              >
                {t('about.discoverVision')}
                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <div className="relative bg-card rounded-2xl p-4 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-gradient-to-br from-muted/20 to-muted/40">
                  <WatermarkedImage
                    src="/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg"
                    alt="Luxury Villa Interior"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority={true}
                    quality={80}
                    watermarkClassName="opacity-10"
                  />
                  
                  {/* Light mode visibility enhancement */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 dark:opacity-0 transition-opacity duration-300"></div>
                  
                  {/* Black frame for light mode */}
                  <div className="absolute inset-0 rounded-xl border-2 border-black/80 dark:border-transparent transition-all duration-300"></div>
                </div>
                
                {/* Decorative elements for better light mode visibility */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full blur-sm dark:opacity-0"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/10 rounded-full blur-lg dark:opacity-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marble Luxury Section */}
      <section className="py-32 relative marble-background">
        {/* Marble overlay for luxury feel */}
        <div className="absolute inset-0 marble-overlay"></div>
        <div className="luxury-container relative z-10">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-white font-bold" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
              <span className="text-accent font-bold">LÜKS</span> YAŞAM
            </h2>
            
            <p className="text-lg text-white max-w-2xl mx-auto font-medium" style={{textShadow: '1px 1px 6px rgba(0,0,0,0.7)'}}>
              {t('projects.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: "🏗️",
                title: "Modern Mimari",
                description: "Çağdaş tasarım ve zamansız zarafet"
              },
              {
                icon: "🌟",
                title: "Premium Malzemeler",
                description: "Sadece en kaliteli malzeme ve dokunuşlar"
              },
              {
                icon: "🏡",
                title: "Özel Konum",
                description: "Muhteşem manzaralı birinci sınıf lokasyon"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white font-cormorant" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
                  {feature.title}
                </h3>
                <p className="text-white font-medium" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.7)'}}>
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
              <div className="w-16 h-px bg-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                {t('projects.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-accent" />
            </div>
            
            <h2 className="text-foreground">
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
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <WatermarkedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0} // Priority for first image only
                    quality={80}
                    watermarkClassName="opacity-5"
                  />
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-cormorant text-2xl font-medium text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    <span className="text-accent font-semibold">{project.size} m²</span> • {project.description}
                  </p>
                  <Link
                    href="/plans"
                    className="inline-flex items-center gap-2 text-foreground hover:gap-4 transition-all duration-300 font-medium underline underline-offset-4"
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