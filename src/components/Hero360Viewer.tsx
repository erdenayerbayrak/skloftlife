'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Hero360ViewerProps {
  imagePath?: string;
  enabled?: boolean;
  autoRotate?: boolean;
  controlsVisible?: boolean;
}

export function Hero360Viewer({ 
  imagePath, 
  enabled = false,
  autoRotate = true,
  controlsVisible = true 
}: Hero360ViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<number | null>(null);

  // Auto rotation effect - optimized for performance
  useEffect(() => {
    if (autoRotate && !isDragging && enabled) {
      autoRotateRef.current = window.setInterval(() => {
        setRotation(prev => (prev + 0.3) % 360);
      }, 100); // Reduced frequency from 50ms to 100ms
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
        autoRotateRef.current = null;
      }
    };
  }, [autoRotate, isDragging, enabled]);

  // Mouse interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!enabled) return;
    setIsDragging(true);
    setLastMouseX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !enabled) return;
    const deltaX = e.clientX - lastMouseX;
    setRotation(prev => (prev + deltaX * 0.5) % 360);
    setLastMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch interaction handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!enabled) return;
    setIsDragging(true);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !enabled) return;
    const deltaX = e.touches[0].clientX - lastMouseX;
    setRotation(prev => (prev + deltaX * 0.5) % 360);
    setLastMouseX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  if (!enabled || !imagePath) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="text-center space-y-4 opacity-40">
          <div className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">360° Görsel Yüklenecek</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-full relative bg-black cursor-grab active:cursor-grabbing select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 360 Image */}
      <div 
        className="w-full h-full relative overflow-hidden"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d',
          transition: isDragging ? 'none' : 'transform 0.1s ease-out'
        }}
      >
        <Image
          src={imagePath}
          alt="360° Görsel"
          fill
          className="object-cover"
          quality={90}
          priority
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Loading Overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/90">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 animate-spin rounded-full border-2 border-accent border-t-transparent mx-auto"></div>
            <p className="text-muted-foreground text-sm">360° Görsel Yükleniyor...</p>
          </div>
        </div>
      )}

      {/* Controls */}
      {controlsVisible && enabled && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <button
            onClick={() => setRotation(prev => (prev - 90) % 360)}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <span className="text-white text-xs px-2">360°</span>
          
          <button
            onClick={() => setRotation(prev => (prev + 90) % 360)}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Instructions */}
      {enabled && isLoaded && (
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-xs opacity-75">
          Sürükleyerek döndürün
        </div>
      )}
    </div>
  );
}