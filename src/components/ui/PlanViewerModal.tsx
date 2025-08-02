'use client';

import { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PlanViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planImage: string;
}

export function PlanViewerModal({ isOpen, onClose, planName, planImage }: PlanViewerModalProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset zoom and rotation when opening
      setZoom(1);
      setRotation(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Disable right-click on modal content
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  // Disable drag
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  if (!isOpen) return null;

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.25, 0.5));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      onContextMenu={handleContextMenu}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full h-full max-w-7xl max-h-[90vh] mx-4 my-8 bg-background rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-background/95 backdrop-blur border-b">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-semibold">{planName}</h3>
            
            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomOut}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              
              <span className="px-3 py-1 bg-muted rounded-lg text-sm font-medium min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              
              <button
                onClick={handleZoomIn}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              
              <button
                onClick={handleRotate}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                title="Rotate"
              >
                <RotateCw className="w-5 h-5" />
              </button>
              
              <div className="w-px h-6 bg-border mx-2" />
              
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-muted hover:bg-destructive hover:text-destructive-foreground transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div 
          className="relative w-full h-full pt-16 overflow-auto bg-muted/20"
          onContextMenu={handleContextMenu}
        >
          <div className="flex items-center justify-center min-h-full p-8">
            <div 
              className="relative"
              style={{
                transform: `scale(${zoom}) rotate(${rotation}deg)`,
                transition: 'transform 0.3s ease',
                transformOrigin: 'center center'
              }}
            >
              {/* Watermark Overlay */}
              <div className="absolute inset-0 pointer-events-none z-10">
                {/* Diagonal Watermarks */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center overflow-hidden">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-6xl font-bold text-foreground/10 select-none"
                      style={{
                        top: `${15 + (i % 4) * 25}%`,
                        left: `${10 + Math.floor(i / 4) * 35}%`,
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none'
                      }}
                    >
                      SKLOFTLIFE
                    </div>
                  ))}
                </div>
                
                {/* Center Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl font-bold text-foreground/15 select-none rotate-[-30deg]">
                    SKLOFTLIFE
                  </div>
                </div>
              </div>

              {/* Plan Image */}
              <img
                src={planImage}
                alt={planName}
                className={cn(
                  "max-w-none select-none pointer-events-none",
                  "shadow-2xl rounded-lg"
                )}
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none'
                } as React.CSSProperties}
                onDragStart={handleDragStart}
                onContextMenu={handleContextMenu}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-background/90 backdrop-blur px-4 py-2 rounded-lg">
          <p className="text-xs text-muted-foreground text-center">
            © SKLOFTLIFE - Tüm hakları saklıdır | Kopyalanamaz
          </p>
        </div>
      </div>
    </div>
  );
}