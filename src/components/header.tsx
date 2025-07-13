"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '#trabajos', label: 'Trabajos' },
  { href: '#sobre-mi', label: 'Sobre mi' },
  { href: '#blog', label: 'Blog' },
  { href: '#override', label: 'Override' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('trabajos');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const sectionId = section.getAttribute('id');
          if (sectionId) {
             setActiveSection(sectionId);
             break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SlashIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-3 w-3">
      <path d="M7.5 2.5L2.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
       <div className="hidden md:flex items-center justify-center bg-card/50 backdrop-blur-sm rounded-full p-2 gap-2 border border-border/80">
        <nav className="flex items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "transition-colors px-4 py-2 rounded-full text-muted-foreground hover:text-foreground",
                activeSection === item.href.substring(1) ? "bg-secondary/80 text-foreground" : ""
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-md bg-muted/50 border border-border/50">
                  <SlashIcon />
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-card/50 backdrop-blur-sm text-foreground hover:bg-secondary/80 hover:text-foreground">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-border">
            <div className="flex flex-col space-y-6 pt-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
