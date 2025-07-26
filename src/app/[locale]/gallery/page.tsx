'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const galleryImages = [
  // Exterior Views
  { id: 1, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1.jpg', category: 'exterior', alt: 'SkLoft Villaları Ana Görünüm' },
  { id: 2, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera2.jpg', category: 'exterior', alt: 'Villa Dış Cephe 2' },
  { id: 3, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3.jpg', category: 'exterior', alt: 'Villa Dış Cephe 3' },
  { id: 4, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera4.jpg', category: 'exterior', alt: 'Villa Dış Cephe 4' },
  { id: 5, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera5.jpg', category: 'exterior', alt: 'Villa Dış Cephe 5' },
  { id: 6, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera1gece.jpg', category: 'exterior', alt: 'Villa Gece Görünümü' },
  { id: 7, src: '/images/gallery/3D DIŞ GÖRSEL/sk-villacamera3gece.jpg', category: 'exterior', alt: 'Villa Gece Görünümü 2' },
  { id: 8, src: '/images/gallery/3D DIŞ GÖRSEL/teras1j.jpg', category: 'amenities', alt: 'Teras Görünüm 1' },
  { id: 9, src: '/images/gallery/3D DIŞ GÖRSEL/teras2j.jpg', category: 'amenities', alt: 'Teras Görünüm 2' },
  
  // Interior Views
  { id: 10, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera1.jpg', category: 'interior', alt: 'Lüks Salon Tasarımı' },
  { id: 11, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera2.jpg', category: 'interior', alt: 'Salon Detay 2' },
  { id: 12, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera3.jpg', category: 'interior', alt: 'Salon Detay 3' },
  { id: 13, src: '/images/gallery/İÇ MEKAN/skvillasaloncamera4.jpg', category: 'interior', alt: 'Salon Detay 4' },
  { id: 14, src: '/images/gallery/İÇ MEKAN/skyatakodasi1.jpg', category: 'interior', alt: 'Ana Yatak Odası' },
  { id: 15, src: '/images/gallery/İÇ MEKAN/skyatakodasic2.jpg', category: 'interior', alt: 'Yatak Odası Detay 2' },
  { id: 16, src: '/images/gallery/İÇ MEKAN/skyatakodasic3.jpg', category: 'interior', alt: 'Yatak Odası Detay 3' },
  
  // Modern Interior
  { id: 17, src: '/images/gallery/MODERN İC MEKAN/a1.jpg', category: 'interior', alt: 'Modern İç Mekan 1' },
  { id: 18, src: '/images/gallery/MODERN İC MEKAN/a2.jpg', category: 'interior', alt: 'Modern İç Mekan 2' },
  { id: 19, src: '/images/gallery/MODERN İC MEKAN/b1.jpg', category: 'interior', alt: 'Modern İç Mekan 3' },
  { id: 20, src: '/images/gallery/MODERN İC MEKAN/c1.jpg', category: 'interior', alt: 'Modern İç Mekan 4' },
  { id: 21, src: '/images/gallery/MODERN İC MEKAN/d1.jpg', category: 'interior', alt: 'Modern İç Mekan 5' },
];

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'exterior', name: 'Dış Mekan' },
  { id: 'interior', name: 'İç Mekan' },
  { id: 'amenities', name: 'Olanaklar' },
];

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

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
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Visual Collection
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {t('title')}
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SkLoftLife Villalarının muhteşem görsellerini keşfedin ve lüks yaşamın her detayını deneyimleyin
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'relative px-8 py-4 rounded-full font-medium transition-all duration-500 transform hover:scale-105',
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-card hover:bg-card/80 hover:shadow-md border border-border'
              )}
            >
              <span className="relative z-10">{category.name}</span>
              {selectedCategory === category.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-90" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]"
              onClick={() => setSelectedImage(image.id)}
              style={{
                animation: `fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                <div className="w-16 h-16 bg-primary/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {categories.find(cat => cat.id === image.category)?.name}
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
              <Image
                src={galleryImages.find(img => img.id === selectedImage)?.src || ''}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt || ''}
                width={1400}
                height={1000}
                className="object-contain max-h-full rounded-lg"
                priority
              />
            </div>
          </div>
        )}
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