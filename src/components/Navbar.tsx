import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Menu, X, Sun, Moon, ArrowRight, Phone, MessageSquare, 
  Sparkles, Calculator, Search, ShieldCheck 
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onNavigateToEstimator: () => void;
  onNavigateToAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onNavigateToEstimator,
  onNavigateToAudit,
}) => {
  const { isDark, toggleTheme, currency, setCurrency } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'Cost Estimator', href: '#estimator', onClick: onNavigateToEstimator },
    { label: 'Free SEO Audit', href: '#audit-tool', onClick: onNavigateToAudit },
    { label: 'Client Hub', href: '#client-hub' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-slate-900 dark:bg-slate-800 flex items-center justify-center border border-teal-500/30 shadow-xs group-hover:border-teal-500 transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 100 100" fill="none">
                <defs>
                  <linearGradient id="navLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#14b8a6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <path d="M30 26 H48 C62 26 70 36 70 50 C70 64 62 74 48 74 H30 V26 Z" fill="none" stroke="url(#navLogoGrad)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="50" cy="50" r="6" fill="#38bdf8" />
                <circle cx="30" cy="26" r="5" fill="#14b8a6" />
                <circle cx="30" cy="74" r="5" fill="#10b981" />
                <circle cx="70" cy="50" r="5" fill="#38bdf8" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white leading-none">
                  DOMAIN <span className="text-teal-600 dark:text-teal-400">TECH HUB</span>
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Innovate · Connect · Succeed
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.onClick) {
                    e.preventDefault();
                    link.onClick();
                  }
                }}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-500 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Controls & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Currency Switcher */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-0.5 rounded-lg border border-slate-200/80 dark:border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === 'KES'
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch pricing to Kenyan Shillings"
              >
                KES
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  currency === 'USD'
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
                title="Switch pricing to US Dollars"
              >
                USD
              </button>
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Direct Consultation CTA */}
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-slate-900 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 dark:text-slate-400"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Display Currency</span>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setCurrency('KES')}
                  className={`px-3 py-1 rounded-md ${currency === 'KES' ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400' : 'text-slate-500'}`}
                >
                  KES (KSh)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded-md ${currency === 'USD' ? 'bg-white dark:bg-slate-700 text-teal-600 dark:text-teal-400' : 'text-slate-500'}`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 text-white font-semibold rounded-xl"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/254700000000?text=Hello%20Domain%20Tech%20Hub,%20I%20would%20like%20to%20inquire%20about%20a%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl font-medium text-sm border border-emerald-200 dark:border-emerald-800/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
