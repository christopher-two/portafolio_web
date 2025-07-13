
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { href: '/', label: 'Trabajos' },
  { href: '/sobre-mi', label: 'Sobre mi' },
  { href: '/blog', label: 'Blog' },
  { href: '/override', label: 'Override' },
];

export function Header() {
  const pathname = usePathname();

  const SlashIcon = () => (
    <svg width="1em" height="1em" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block h-3 w-3">
      <path d="M7.5 2.5L2.5 7.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header className="fixed top-4 w-full px-4 z-50 flex items-center justify-center">
       <div className="flex items-center justify-center bg-card/50 backdrop-blur-sm rounded-full p-1 border border-border/80 w-full max-w-sm md:max-w-lg">
        <nav className="flex items-center text-xs md:text-sm font-medium w-full justify-around">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "transition-colors px-2 py-1 md:px-4 md:py-2 rounded-full text-muted-foreground hover:text-foreground",
                pathname === item.href ? "bg-secondary/80 text-foreground" : ""
              )}
            >
              {item.label}
              {pathname === item.href && (
                <span className="ml-2 hidden md:inline-flex items-center justify-center w-5 h-5 rounded-md bg-muted/50 border border-border/50">
                  <SlashIcon />
                </span>
              )}
            </Link>
          ))}
        </nav>
        <div className="mx-2 h-6 border-l border-border/80"></div>
        <ThemeToggle />
      </div>
    </header>
  );
}
