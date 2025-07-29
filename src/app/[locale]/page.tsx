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
      {/* Hero Section with 360° Interactive Experience */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        {/* Dynamic Background with Parallax or 360° Viewer */}
        <div className="absolute inset-0 z-0">
          {use360Viewer ? (
            <Interactive360Viewer 
              imagePath="/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg"
              className="w-full h-full"
            />
          ) : (
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{ 
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.3}px) scale(1.1)` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
              {/* Hero Villa Image */}
              <WatermarkedImage
                src="/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg"
                alt="SkLoftLife Luxury Villa"
                fill
                className="object-cover"
                priority
                watermarkClassName="opacity-20"
              />
            </div>
          )}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10">
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div 
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent/20 rounded-full animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div 
            className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>

        {/* Hero Content */}
        <div 
          className={`relative z-20 container text-center transition-all duration-1500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-shadow-luxury">
                <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/gallery"
                className="group relative px-10 py-5 bg-primary text-primary-foreground rounded-full text-base font-medium overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">{t('hero.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              </Link>
              
              <Link
                href="/about"
                className="group relative px-10 py-5 border-2 border-primary text-primary rounded-full text-base font-medium transition-all duration-500 hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
{t('hero.learnMore')}
              </Link>
            </div>
          </div>
        </div>

        {/* Interaction Controls */}
        <div 
          className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center gap-4">
            {/* Mode Toggle */}
            <button
              onClick={() => setUse360Viewer(!use360Viewer)}
              className="glass-morphism px-6 py-3 rounded-full text-sm font-medium hover:bg-primary/20 transition-all duration-300 flex items-center gap-3"
            >
              <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-current rounded-full" />
              </div>
{use360Viewer ? t('hero.switchToParallax') : t('hero.enter360')}
            </button>
            
            {/* Interaction Indicator */}
            {!use360Viewer && (
              <div className="flex items-center gap-3 text-muted-foreground animate-pulse">
                <div className="w-8 h-8 border-2 border-current rounded-full animate-spin" style={{ animationDuration: '3s' }}>
                  <div className="w-1 h-1 bg-current rounded-full mt-1 ml-1" />
                </div>
                <span className="text-sm">{t('hero.mouseMoveHint')}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              className="space-y-8 opacity-0 animate-luxury-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    {t('about.sectionLabel')}
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  {t('about.title')}
                </h2>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.description')}
                </p>
              </div>


              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-primary hover:gap-6 transition-all duration-500 text-base font-medium group"
              >
{t('about.discoverVision')}
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div 
              className="relative opacity-0 animate-luxury-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                {/* About Preview Image */}
                <WatermarkedImage
                  src="/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg"
                  alt="Luxury Villa Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  watermarkClassName="opacity-20"
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t('projects.sectionLabel')}
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t('projects.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('projects.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1 kopyası.jpg",
                title: "A Blok Villalar",
                size: "350-450",
                description: t('projects.ablokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2 kopyası.jpg", 
                title: "C Blok Villalar",
                size: "400-500",
                description: t('projects.cblokDescription')
              },
              {
                image: "/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3 kopyası.jpg",
                title: "Teras & Ortak Alanlar", 
                size: "∞",
                description: t('projects.commonAreasDescription')
              }
            ].map((project, i) => (
              <div
                key={i}
                className="group relative opacity-0 animate-luxury-fade-in"
                style={{ 
                  animationDelay: `${0.2 + i * 0.15}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-card shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  {/* Project Image */}
                  <WatermarkedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    watermarkClassName="opacity-20"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">
                        {project.size} m² • {project.description}
                      </p>
                      <Link
                        href="/plans"
                        className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300 font-medium"
                      >
{t('projects.viewDetails')}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 btn-primary text-base"
            >
{t('projects.viewAll')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}