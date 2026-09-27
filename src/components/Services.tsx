import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';
import { 
  Code2, ShoppingCart, Layers, Search, TrendingUp, Sparkles, 
  Check, ArrowRight, Clock, ShieldCheck, Cpu 
} from 'lucide-react';

interface ServicesProps {
  onSelectServiceForEstimation: (serviceId: string) => void;
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onSelectServiceForEstimation,
  onOpenBooking,
}) => {
  const { formatCurrency } = useTheme();
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find(s => s.id === activeServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Search':
        return <Search className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-t border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <span>Capabilities &amp; Specializations</span>
            <span aria-hidden="true">·</span>
            <span>Production-Grade Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Full-lifecycle digital engineering &amp; commercial software.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We do not sell generic templates. Every platform is built for security, high-concurrency throughput, mobile responsiveness, and measurable business growth.
          </p>
        </div>

        {/* Interactive Segmented Selector for Services */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl mb-10 border border-slate-200 dark:border-slate-800">
          {SERVICES.map((service) => {
            const isSelected = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveServiceId(service.id)}
                className={`flex items-center gap-2 p-3 text-left rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm border border-slate-200/60 dark:border-slate-700'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className={`p-1.5 rounded-md ${isSelected ? 'bg-teal-50 dark:bg-teal-950 text-teal-600' : 'text-slate-500'}`}>
                  {getServiceIcon(service.icon)}
                </div>
                <span className="truncate">{service.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 shadow-sm transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: Description, Deliverables, Ideal For */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400">
                  {getServiceIcon(activeService.icon)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                    {activeService.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Typical turnaround: {activeService.turnaroundWeeks}</span>
                    <span aria-hidden="true">·</span>
                    <span>30-Day Post-Launch Warranty</span>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {activeService.fullDesc}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Scope Deliverables Included
                </h4>
                <ul className="space-y-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Ideal For: </span>
                  {activeService.idealFor}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Pricing, Tech Stack & Action Hub */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-950/60 rounded-xl p-6 sm:p-7 border border-slate-200/70 dark:border-slate-800 space-y-6">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Starting Investment
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white font-mono">
                    {formatCurrency(activeService.basePriceKES, activeService.basePriceUSD)}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    / tailored scope
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Flexible milestone payments (40% start / 30% staging / 30% launch)
                </p>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-2.5">
                  Core Technologies Deployed
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {activeService.techStack.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={() => onSelectServiceForEstimation(activeService.id)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-sm transition-colors cursor-pointer text-sm"
                >
                  <span>Configure in Cost Estimator</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium rounded-lg border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer text-sm"
                >
                  <span>Speak with Lead Architect</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                <span>Source code ownership transferred 100% upon final delivery.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
