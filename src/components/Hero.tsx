import React from 'react';
import { ArrowRight, Calculator, CheckCircle2, ShieldCheck, Sparkles, MapPin, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEstimator,
  onOpenBooking,
  onOpenAudit,
}) => {
  const { currency } = useTheme();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid Texture */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/15 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Unboxed Location & Status Label (Anti-slop rule: clean inline text with bullet) */}
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Westlands, Nairobi</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span>Serving Kenyan & Global Enterprises</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
            <span className="font-mono text-slate-500 dark:text-slate-400">Est. 2021</span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.08] mb-6">
            Engineering high-speed web apps, custom CRMs &amp; e-commerce that drive revenue.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Domain Tech Hub is an engineering agency delivering bespoke web applications, automated business management systems, high-converting M-Pesa storefronts, and Google-dominating SEO for ambitious enterprises.
          </p>

          {/* Direct Action Hub */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button
              type="button"
              onClick={onOpenEstimator}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base text-white bg-teal-600 hover:bg-teal-700 shadow-sm hover:shadow transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
            >
              <Calculator className="w-5 h-5" />
              <span>Interactive Cost Estimator</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300/80 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-xs transition-colors cursor-pointer"
            >
              <span>Book Strategy Call</span>
            </button>

            <button
              type="button"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 py-2 px-1 cursor-pointer transition-colors"
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="underline underline-offset-4">Scan your website speed &amp; SEO for free</span>
            </button>
          </div>

          {/* Proof Strip / Trust Signals (No static pill badges) */}
          <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
                120+
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Digital Deployments
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-teal-600 dark:text-teal-400 font-mono tracking-tight">
                99.8%
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                On-Time SLA Delivery
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
                &lt; 1.2s
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Average Page Speed
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-mono tracking-tight">
                24/7
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Dedicated Client Hub
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
