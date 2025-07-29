'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = "", size = 'md' }: LogoProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });
    
    return () => observer.disconnect();
  }, []);

  const sizeClasses = {
    sm: 'w-36 h-36',
    md: 'w-44 h-44', 
    lg: 'w-52 h-52'
  };

  if (!mounted) {
    return (
      <div className={`${sizeClasses[size]} ${className} animate-pulse bg-muted/20 rounded`} />
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src={isDark ? "/skdesinglogo-2.png" : "/skdesinglogo-1.png"}
        alt="SK Design Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain transition-opacity duration-300"
        priority
      />
    </div>
  );
}