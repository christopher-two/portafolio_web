"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

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
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].label.toLowerCase().replace(' ', '-'));
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SlashIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-1 h-3 w-3">
      <path d="M7.5 2.5L2.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
       <div className="hidden md:flex items-center justify-center bg-neutral-800/50 backdrop-blur-sm rounded-full p-2 gap-2 border border-neutral-700/80">
        <nav className="flex items-center text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "transition-colors px-4 py-2 rounded-full text-neutral-300 hover:text-white",
                activeSection === item.label.toLowerCase().replace(' ', '-') ? "bg-neutral-700/80 text-white" : ""
              )}
            >
              {item.label}
              {activeSection === item.label.toLowerCase().replace(' ', '-') && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-md bg-neutral-600/50 border border-neutral-500/50">
                  <SlashIcon />
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
      <div className="md:hidden">
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="bg-neutral-800/50 backdrop-blur-sm text-white hover:bg-neutral-700/80 hover:text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-neutral-900 border-l-neutral-800">
            <div className="flex flex-col space-y-6 pt-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-neutral-300 hover:text-white"
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
