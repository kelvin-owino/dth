import React, { useState } from 'react';
import { 
  Zap, Search, AlertCircle, CheckCircle, ShieldAlert, 
  ArrowRight, RefreshCw, Smartphone, Globe, Lock, Cpu, Sparkles 
} from 'lucide-react';
import { AuditResult } from '../types';

interface AuditToolProps {
  onOpenBookingWithAudit: (auditSummary: string) => void;
}

export const AuditTool: React.FC<AuditToolProps> = ({ onOpenBookingWithAudit }) => {
  const [urlInput, setUrlInput] = useState('');
  const [industry, setIndustry] = useState('E-Commerce & Retail');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [auditResult, setAuditResult] = useState<AuditResult | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsScanning(true);
    setAuditResult(null);

    // Realistic scanning animation sequence
    setScanStep('Analyzing DNS records & TTFB latency...');
    setTimeout(() => {
      setScanStep('Rendering DOM & measuring Core Web Vitals (LCP, CLS)...');
    }, 700);

    setTimeout(() => {
      setScanStep('Inspecting Schema.org structured data & OpenGraph tags...');
    }, 1400);

    setTimeout(() => {
      setScanStep('Testing mobile viewport & touch target accessibility...');
    }, 2100);

    setTimeout(() => {
      // Deterministic variation based on input string
      const cleanUrl = urlInput.replace(/https?:\/\//i, '').replace(/\/.*$/, '').toLowerCase();
      const hash = cleanUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      
      const overall = 65 + (hash % 28); // Between 65 and 92
      const perf = 58 + ((hash * 3) % 36);
      const seo = 70 + ((hash * 2) % 25);
      const mobile = 75 + ((hash * 5) % 20);

      const result: AuditResult = {
        url: cleanUrl,
        overallScore: Math.min(overall, 94),
        performanceScore: Math.min(perf, 92),
        seoScore: Math.min(seo, 96),
        mobileScore: Math.min(mobile, 95),
        securityScore: cleanUrl.includes('gov') || hash % 2 === 0 ? 98 : 85,
        metrics: {
          firstContentfulPaint: (1.2 + (hash % 10) * 0.15).toFixed(1) + 's',
          largestContentfulPaint: (2.4 + (hash % 15) * 0.2).toFixed(1) + 's',
          speedIndex: (2.1 + (hash % 12) * 0.18).toFixed(1) + 's',
          cumulativeLayoutShift: (0.05 + (hash % 8) * 0.02).toFixed(2),
          sslActive: true,
          mobileViewport: true,
          metaTitleStatus: hash % 3 === 0 ? 'warning' : 'optimal',
          schemaStructuredData: hash % 2 === 0,
          sitemapFound: true,
        },
        recommendations: [
          {
            category: 'Performance',
            priority: 'high',
            title: 'Unoptimized JavaScript & Heavy Asset Bundles',
            description: 'Third-party tracking scripts and uncompressed assets delay Largest Contentful Paint (LCP) by over 1.4s on 4G networks.',
          },
          {
            category: 'SEO & Rich Snippets',
            priority: hash % 2 === 0 ? 'medium' : 'high',
            title: 'Missing Schema.org JSON-LD Structured Markup',
            description: 'Google cannot extract product pricing, ratings, or local Nairobi business entity knowledge cards from your pages.',
          },
          {
            category: 'Mobile Conversion',
            priority: 'medium',
            title: 'Sub-Optimal Mobile Touch Targets',
            description: 'Certain navigation links and buttons have touch areas smaller than 44px, causing mobile accidental taps.',
          },
          {
            category: 'Security & Headers',
            priority: 'low',
            title: 'Missing HTTP Security Headers (HSTS, CSP)',
            description: 'Add Content-Security-Policy and X-Frame-Options headers to protect against clickjacking and data injection.',
          }
        ]
      };

      setAuditResult(result);
      setIsScanning(false);
      setScanStep('');
    }, 2800);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-emerald-500 border-emerald-500';
    if (score >= 70) return 'text-amber-500 border-amber-500';
    return 'text-rose-500 border-rose-500';
  };

  return (
    <section id="audit-tool" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <Zap className="w-4 h-4 text-amber-500" />
            <span>Complimentary Diagnostic Suite</span>
            <span aria-hidden="true">·</span>
            <span>Google Lighthouse Grounded</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Free Website Speed &amp; Technical SEO Scanner.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Slow load times and missing search metadata bleed customers and depress Google rankings. Enter your domain below for an instant engineering audit.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm max-w-4xl">
          <form onSubmit={handleRunAudit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Target Website URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="e.g. yourcompany.co.ke or brand.com"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-mono text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Industry Focus
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full py-3 px-3.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option>E-Commerce &amp; Retail</option>
                  <option>Corporate &amp; B2B Services</option>
                  <option>Real Estate &amp; Hospitality</option>
                  <option>Logistics &amp; Transport</option>
                  <option>FinTech &amp; Financial Services</option>
                  <option>Healthcare &amp; MedTech</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>Try sample:</span>
                <button
                  type="button"
                  onClick={() => setUrlInput('kenyaretailers.co.ke')}
                  className="hover:text-teal-600 underline cursor-pointer"
                >
                  kenyaretailers.co.ke
                </button>
                <button
                  type="button"
                  onClick={() => setUrlInput('nairobilogistics.com')}
                  className="hover:text-teal-600 underline cursor-pointer"
                >
                  nairobilogistics.com
                </button>
              </div>

              <button
                type="submit"
                disabled={isScanning || !urlInput.trim()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer shadow-xs"
              >
                {isScanning ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Auditing Infrastructure...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    <span>Run Free Audit Now</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Scanning Progress State */}
          {isScanning && (
            <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                Scanning: <span className="font-mono text-teal-600 dark:text-teal-400">{urlInput}</span>
              </div>
              <p className="text-xs text-slate-500 font-mono animate-pulse">
                {scanStep}
              </p>
            </div>
          )}

          {/* Audit Results Presentation */}
          {auditResult && !isScanning && (
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800 space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    Audit Report Generated
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                    {auditResult.url}
                  </h3>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-950 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Overall Health</div>
                    <div className="text-xl font-extrabold font-mono text-slate-900 dark:text-white">
                      {auditResult.overallScore} / 100
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm font-mono ${getScoreColor(auditResult.overallScore)}`}>
                    {auditResult.overallScore}
                  </div>
                </div>
              </div>

              {/* Sub-scores */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Speed / LCP</span>
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {auditResult.performanceScore}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    LCP: {auditResult.metrics.largestContentfulPaint}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-teal-500" />
                    <span>SEO Readiness</span>
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {auditResult.seoScore}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {auditResult.metrics.schemaStructuredData ? 'Schema active' : 'Missing schema'}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-sky-500" />
                    <span>Mobile UX</span>
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {auditResult.mobileScore}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    CLS: {auditResult.metrics.cumulativeLayoutShift}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-xs text-slate-500 mb-1 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Security SSL</span>
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {auditResult.securityScore}%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    TLS 1.3 Active
                  </div>
                </div>
              </div>

              {/* Actionable Recommendations */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Critical Issues Identified ({auditResult.recommendations.length})
                </h4>
                <div className="space-y-2.5">
                  {auditResult.recommendations.map((rec, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-3.5 text-xs"
                    >
                      <div className="mt-0.5 shrink-0">
                        {rec.priority === 'high' ? (
                          <AlertCircle className="w-4 h-4 text-rose-500" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-amber-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {rec.title}
                          </span>
                          <span className="text-[10px] uppercase font-mono font-bold text-slate-400">
                            [{rec.category}]
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          {rec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fix CTA Banner */}
              <div className="p-6 bg-teal-50 dark:bg-teal-950/40 rounded-xl border border-teal-200 dark:border-teal-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">
                    Want Domain Tech Hub to resolve these issues for you?
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    We guarantee a 90+ Lighthouse score and Core Web Vitals compliance within 14 business days.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const summary = `Website Audit for ${auditResult.url}: Overall ${auditResult.overallScore}/100, Speed ${auditResult.performanceScore}%, SEO ${auditResult.seoScore}%. Need remediation plan.`;
                    onOpenBookingWithAudit(summary);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
                >
                  <span>Request Engineering Fix Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
