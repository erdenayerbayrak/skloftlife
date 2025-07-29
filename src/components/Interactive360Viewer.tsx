'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Sphere } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';

interface Interactive360ViewerProps {
  imagePath: string;
  className?: string;
}

function Panorama360({ imagePath }: { imagePath: string }) {
  const meshRef = useRef<Mesh>(null);
  const texture = useTexture(imagePath);

  return (
    <Sphere ref={meshRef} args={[500, 64, 64]} scale={[-1, 1, 1]}>
      <meshBasicMaterial map={texture} />
    </Sphere>
  );
}

function LoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground">Loading 360° Experience...</p>
      </div>
    </div>
  );
}

export function Interactive360Viewer({ imagePath, className = '' }: Interactive360ViewerProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 0], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Suspense fallback={null}>
          <Panorama360 imagePath={imagePath} />
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            minDistance={1}
            maxDistance={100}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      
      <Suspense fallback={<LoadingFallback />}>
        <div />
      </Suspense>
      
      {/* Instructions overlay */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="glass-morphism p-4 rounded-xl text-center">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-current rounded-full animate-pulse flex items-center justify-center">
                <div className="w-1 h-1 bg-current rounded-full" />
              </div>
              <span>Drag to explore</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
                <div className="text-xs">⚬</div>
              </div>
              <span>Scroll to zoom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}