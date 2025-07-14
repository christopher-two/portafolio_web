
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Trabajos' },
  { href: '/sobre-mi', label: 'Sobre mi' },
  { href: '/blog', label: 'Blog' },
  { href: '/override', label: 'Override' },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 w-full px-4 z-50 flex items-center justify-center">
       <div className={cn(
         "flex items-center justify-center rounded-full p-1 transition-all duration-300 w-full max-w-sm md:max-w-lg",
         scrolled ? "bg-card/50 backdrop-blur-sm border border-border/80" : "bg-transparent border-transparent"
       )}>
        <nav className="flex items-center text-xs md:text-sm font-medium w-full justify-around">
          {navItems.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "transition-colors px-2 py-1 md:px-4 md:py-2 rounded-full text-muted-foreground hover:text-foreground",
                  pathname === item.href ? "bg-secondary/80 text-foreground" : ""
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className={cn("mx-2 h-6 border-l transition-colors duration-300", scrolled ? "border-border/80" : "border-transparent")}></div>
        <ThemeToggle scrolled={scrolled} />
      </div>
    </header>
  );
}
