'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'home', href: '/' },
  { name: 'about', href: '/about' },
  { name: 'plans', href: '/plans' },
  { name: 'gallery', href: '/gallery' },
  { name: 'live', href: '/live' },
  { name: 'contact', href: '/contact' },
];

export function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        isScrolled 
          ? 'glass-morphism shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SkLoftLife
            </div>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'relative py-2 text-sm font-medium tracking-wide transition-all duration-300',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              )}
            >
              {t(item.name)}
              <span 
                className={cn(
                  'absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300',
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-8 h-8 flex flex-col items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                isMenuOpen ? 'rotate-45' : '-translate-y-2'
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transition-all duration-300',
                isMenuOpen ? 'opacity-0' : ''
              )}
            />
            <span
              className={cn(
                'absolute h-0.5 w-6 bg-current transform transition-all duration-300',
                isMenuOpen ? '-rotate-45' : 'translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          'lg:hidden absolute top-full left-0 w-full glass-morphism transition-all duration-500 overflow-hidden',
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="container py-6 space-y-4">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'block px-4 py-3 rounded-xl transition-all duration-300 animate-luxury-fade-in',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t(item.name)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}