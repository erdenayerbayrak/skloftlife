'use client';

import Image from 'next/image';
import { useState } from 'react';

interface WatermarkedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  watermarkText?: string;
  watermarkClassName?: string;
}

export function WatermarkedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  quality = 80,
  watermarkText = 'skdesign',
  watermarkClassName = '',
}: WatermarkedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (fill) {
    return (
      <>
        <Image
          src={imageError ? '/images/placeholder.svg' : src}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          className={className}
          onError={() => setImageError(true)}
        />
        {/* Watermark overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center pointer-events-none ${watermarkClassName}`}
        >
          <span className="text-gray-600/40 text-4xl md:text-6xl font-bold rotate-[-45deg] select-none">
            {watermarkText}
          </span>
        </div>
      </>
    );
  }

  return (
    <div className="relative inline-block">
      <Image
        src={imageError ? '/images/placeholder.svg' : src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        quality={quality}
        priority={priority}
        className={className}
        onError={() => setImageError(true)}
      />
      {/* Watermark overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center pointer-events-none ${watermarkClassName}`}
      >
        <span className="text-gray-600/40 text-4xl md:text-6xl font-bold rotate-[-45deg] select-none">
          {watermarkText}
        </span>
      </div>
    </div>
  );
}