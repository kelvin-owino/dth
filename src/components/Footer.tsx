import React from 'react';
import { ArrowUp, MapPin, Mail, Phone, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-teal-500/40 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 100 100" fill="none">
                  <path d="M30 26 H48 C62 26 70 36 70 50 C70 64 62 74 48 74 H30 V26 Z" fill="none" stroke="#14b8a6" strokeWidth="8" strokeLinecap="round" />
                  <circle cx="50" cy="50" r="5" fill="#38bdf8" />
                </svg>
              </div>
              <span className="font-extrabold text-base tracking-tight text-white">
                DOMAIN <span className="text-teal-400">TECH HUB</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Innovate. Connect. Succeed. Nairobi's premier digital technology agency engineering bespoke web applications, high-converting M-Pesa storefronts, and enterprise operations systems.
            </p>

            <div className="flex items-center gap-2 text-slate-400 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300">Engineering Pods: Accepting Q4 Deployments</span>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Specializations
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Web &amp; SaaS Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  E-Commerce &amp; M-Pesa STK
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Custom CRM &amp; ERP Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Technical SEO &amp; Speed Audits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-teal-400 transition-colors">
                  Generative AI &amp; Chatbots
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Interactive Tools
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#estimator" className="hover:text-teal-400 transition-colors">
                  Project Cost Calculator
                </a>
              </li>
              <li>
                <a href="#audit-tool" className="hover:text-teal-400 transition-colors">
                  Free SEO &amp; Speed Scanner
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-400 transition-colors">
                  Case Studies &amp; Metrics
                </a>
              </li>
              <li>
                <a href="#client-hub" className="hover:text-teal-400 transition-colors">
                  Client Portal Staging
                </a>
              </li>
            </ul>
          </div>

          {/* Nairobi Office */}
          <div className="space-y-3">
            <div className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
              Nairobi Hub
            </div>
            <div className="space-y-1.5 text-slate-400">
              <p className="font-semibold text-slate-300">Westlands Commercial Center</p>
              <p>Chiromo Road, Nairobi, Kenya</p>
              <p className="font-mono text-teal-400">+254 (0) 790 123 456</p>
              <p className="font-mono">projects@domaintechhub.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Domain Tech Hub Ltd. All rights reserved. Registered in Kenya.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-500">
              Engineered with modern TypeScript, React 19 &amp; Tailwind CSS.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
