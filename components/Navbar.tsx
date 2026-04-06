'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About Us', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-[100] transition-all duration-500',
        scrolled 
          ? 'py-2 sm:py-3 md:py-4' 
          : 'py-4 sm:py-6 md:py-8'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between items-center transition-all duration-500 rounded-[1.25rem] sm:rounded-[2rem] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 border",
          scrolled
            ? "bg-background/60 backdrop-blur-2xl border-border shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-transparent"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 space-x-0 group">
            <div className="relative shrink-0">
              <div className="absolute -inset-1.5 bg-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 bg-card border border-border rounded-lg text-foreground">
                <Calculator className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-bold text-sm sm:text-lg tracking-tight text-foreground leading-none truncate">
                Petkar Accounting
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-indigo-400 font-bold mt-1">
                & Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-all hover:text-foreground',
                  pathname === item.href ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            </button>

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2 group shadow-xl shadow-primary/5"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </button>
            <button
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-[calc(100%+0.75rem)] left-4 right-4 md:hidden bg-background/95 backdrop-blur-3xl border border-border rounded-[1.5rem] shadow-2xl overflow-hidden z-[101]"
          >
            <div className="p-5 sm:p-6 flex flex-col gap-4 sm:gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-lg sm:text-xl font-semibold transition-colors flex items-center justify-between group",
                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <ArrowRight className={cn(
                    "h-6 w-6 opacity-0 group-hover:opacity-100 transition-all",
                    pathname === item.href && "opacity-100"
                  )} />
                </Link>
              ))}
              <div className="h-px bg-border my-2" />
              <Link
                href="/contact"
                className="w-full py-3.5 sm:py-4 bg-primary text-primary-foreground font-extrabold rounded-2xl text-center text-base sm:text-lg shadow-2xl shadow-primary/10 active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
