'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';

const galleryImages = [
  // Exterior Views - All 3D DIŞ GÖRSEL Photos (including terrace/amenities moved to exterior)
  { id: 1, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1 kopyası.jpg', category: 'exterior', alt: 'SkLoft Villaları Ana Görünüm' },
  { id: 2, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 2' },
  { id: 3, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 3' },
  { id: 4, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera4 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 4' },
  { id: 5, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera5 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 5' },
  { id: 6, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera6 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 6' },
  { id: 7, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera7 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 7' },
  { id: 8, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera8 kopyası.tif.jpg', category: 'exterior', alt: 'Villa Dış Cephe 8' },
  { id: 9, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera10 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 10' },
  { id: 10, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera11 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 11' },
  { id: 11, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera12 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 12' },
  { id: 12, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera13 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 13' },
  { id: 13, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera14 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 14' },
  { id: 14, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera15 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 15' },
  { id: 15, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera16 kopyası.jpg', category: 'exterior', alt: 'Villa Dış Cephe 16' },
  { id: 16, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1gece kopyası.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 1' },
  { id: 17, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3gece kopyası.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 3' },
  { id: 18, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera4gece kopyası.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 4' },
  { id: 19, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera5gece kopyası.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 5' },
  { id: 20, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera6gece kopyası.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 6' },
  { id: 21, src: '/images/gallery/3D DIŞ GÖRSEL/ctop2 (1) kopyası.jpg', category: 'exterior', alt: 'Villa Çatı Görünümü' },
  { id: 22, src: '/images/gallery/3D DIŞ GÖRSEL/teras1j kopyası.jpg', category: 'exterior', alt: 'Villa Teras Görünümü 1' },
  { id: 23, src: '/images/gallery/3D DIŞ GÖRSEL/teras2j kopyası.jpg', category: 'exterior', alt: 'Villa Teras Görünümü 2' },
  
  // Interior Views - All İÇ MEKAN Photos
  { id: 24, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 1' },
  { id: 25, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera2.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 2' },
  { id: 26, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera3.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 3' },
  { id: 27, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera4.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 4' },
  { id: 28, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera5.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 5' },
  { id: 29, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera6.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı 6' },
  { id: 30, src: '/images/gallery/İÇ MEKAN/skyatakodasi1.jpg', category: 'interior', alt: 'Ana Yatak Odası' },
  { id: 31, src: '/images/gallery/İÇ MEKAN/skyatakodasic2.jpg', category: 'interior', alt: 'Yatak Odası Detay 2' },
  { id: 32, src: '/images/gallery/İÇ MEKAN/skyatakodasic3.jpg', category: 'interior', alt: 'Yatak Odası Detay 3' },
  { id: 33, src: '/images/gallery/İÇ MEKAN/skyatakodasic4.jpg', category: 'interior', alt: 'Yatak Odası Detay 4' },
  { id: 34, src: '/images/gallery/İÇ MEKAN/skyatakodasic5.jpg', category: 'interior', alt: 'Yatak Odası Detay 5' },
  
  // Modern Interior Views - All MODERN İC MEKAN Photos
  { id: 35, src: '/images/gallery/MODERN İC MEKAN/a1.jpg', category: 'interior', alt: 'Modern İç Mekan A1' },
  { id: 36, src: '/images/gallery/MODERN İC MEKAN/a2.jpg', category: 'interior', alt: 'Modern İç Mekan A2' },
  { id: 37, src: '/images/gallery/MODERN İC MEKAN/a3.jpg', category: 'interior', alt: 'Modern İç Mekan A3' },
  { id: 38, src: '/images/gallery/MODERN İC MEKAN/a4.jpg', category: 'interior', alt: 'Modern İç Mekan A4' },
  { id: 39, src: '/images/gallery/MODERN İC MEKAN/a5.jpg', category: 'interior', alt: 'Modern İç Mekan A5' },
  { id: 40, src: '/images/gallery/MODERN İC MEKAN/a6.jpg', category: 'interior', alt: 'Modern İç Mekan A6' },
  { id: 41, src: '/images/gallery/MODERN İC MEKAN/b1.jpg', category: 'interior', alt: 'Modern İç Mekan B1' },
  { id: 42, src: '/images/gallery/MODERN İC MEKAN/b2.jpg', category: 'interior', alt: 'Modern İç Mekan B2' },
  { id: 43, src: '/images/gallery/MODERN İC MEKAN/b4.jpg', category: 'interior', alt: 'Modern İç Mekan B4' },
  { id: 44, src: '/images/gallery/MODERN İC MEKAN/c1.jpg', category: 'interior', alt: 'Modern İç Mekan C1' },
  { id: 45, src: '/images/gallery/MODERN İC MEKAN/c2.jpg', category: 'interior', alt: 'Modern İç Mekan C2' },
  { id: 46, src: '/images/gallery/MODERN İC MEKAN/c3.jpg', category: 'interior', alt: 'Modern İç Mekan C3' },
  { id: 47, src: '/images/gallery/MODERN İC MEKAN/c4.jpg', category: 'interior', alt: 'Modern İç Mekan C4' },
  { id: 48, src: '/images/gallery/MODERN İC MEKAN/d1.jpg', category: 'interior', alt: 'Modern İç Mekan D1' },
  { id: 49, src: '/images/gallery/MODERN İC MEKAN/d2.jpg', category: 'interior', alt: 'Modern İç Mekan D2' },
  { id: 50, src: '/images/gallery/MODERN İC MEKAN/d3.jpg', category: 'interior', alt: 'Modern İç Mekan D3' },
  { id: 51, src: '/images/gallery/MODERN İC MEKAN/d4.jpg', category: 'interior', alt: 'Modern İç Mekan D4' },
];

const categories = [
  { id: 'all', key: 'all' },
  { id: 'exterior', key: 'exterior' },
  { id: 'interior', key: 'interior' },
];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Optimize filtering with useMemo to prevent unnecessary re-renders
  const filteredImages = useMemo(() => 
    selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory),
    [selectedCategory]
  );

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    setSelectedImage(galleryImages[previousIndex].id);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(galleryImages[nextIndex].id);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section - Premium Marble */}
      <section 
        className="py-6 marble-hero-section light-marble-background"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 20%, #141414 40%, #1F1F1F 60%, #0F0F0F 80%, #121212 100%)',
          position: 'relative'
        }}
      >
        <div className="absolute inset-0 light-marble-overlay"></div>
        <div className="container mx-auto py-4 px-4 marble-hero-content">
          <div className="max-w-7xl mx-auto text-center mb-4 space-y-2">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/60" />
            <span className="text-sm font-medium text-white uppercase tracking-wider">
              Visual Collection
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight marble-title text-white" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
            {t('title')}
          </h1>
          
          <p className="text-base text-gray-200 max-w-xl mx-auto" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}>
            SkLoftLife Villalarının muhteşem görsellerini keşfedin ve lüks yaşamın her detayını deneyimleyin
          </p>
          </div>
        </div>
      </section>

      {/* Main Gallery Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-500 transform hover:scale-105',
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card hover:bg-card/80 hover:shadow-md border border-border'
              )}
            >
              <span className="relative z-10">{t(`categories.${category.key}`)}</span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-90" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image.id)}
              style={{
                animation: `fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.03}s both`
              }}
            >
              <WatermarkedImage
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                priority={index < 4} // Load first 4 images immediately
                quality={60} // Optimized quality for faster loading
                watermarkClassName="opacity-30"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                <div className="w-12 h-12 bg-primary/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 backdrop-blur text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {t(`categories.${categories.find(cat => cat.id === image.category)?.key}`)}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="relative max-w-7xl w-full h-full flex items-center justify-center p-16">
              <WatermarkedImage
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1400}
                height={1000}
                className="object-contain max-h-full rounded-lg"
                priority
                watermarkClassName="opacity-20"
              />
            </div>
          </div>
        )}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}