'use client';

import { useState, useEffect } from 'react';
import { WatermarkedImage } from '@/components/ui/WatermarkedImage';

interface LiveCameraFeedProps {
  projectId: string;
  projectName: string;
  imageSrc?: string;
  lastUpdate?: string;
  isLive?: boolean;
  liveText?: string; // Add optional translatable live text
}

export function LiveCameraFeed({ 
  projectName, 
  imageSrc, 
  lastUpdate
}: LiveCameraFeedProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('tr-TR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <div className="relative aspect-video group">
        <WatermarkedImage
          src={imageSrc || '/images/placeholder.svg'}
          alt={`${projectName} Canlı Görüntü`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          watermarkClassName="opacity-20"
        />
        
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative max-w-7xl w-full h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full max-h-[80vh] aspect-video">
              <WatermarkedImage
                src={imageSrc || '/images/placeholder.svg'}
                alt={`${projectName} Canlı Görüntü - Fullscreen`}
                fill
                className="object-contain rounded-lg"
                priority
                watermarkClassName="opacity-20"
              />
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}