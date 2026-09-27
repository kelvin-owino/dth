import React from 'react';
import { 
  Cpu, Database, Shield, Zap, Cloud, Smartphone, 
  Terminal, Globe2, Layers, CheckCircle2 
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackCategories = [
    {
      category: 'Frontend & Reactive UI',
      icon: <Layers className="w-4 h-4 text-teal-500" />,
      items: [
        { name: 'React 19 & Next.js', note: 'App router, Server Components, Streaming SSR' },
        { name: 'TypeScript', note: 'Strict end-to-end type safety and compile-time verification' },
        { name: 'Tailwind CSS', note: 'Zero-runtime utility CSS, responsive and accessible' },
        { name: 'Motion / Framer Motion', note: 'Smooth 60fps micro-interactions without layout thrashing' },
      ],
    },
    {
      category: 'Backend & Data Architecture',
      icon: <Database className="w-4 h-4 text-sky-500" />,
      items: [
        { name: 'Node.js & Express / FastAPI', note: 'High throughput async REST & WebSocket endpoints' },
        { name: 'PostgreSQL & Prisma / Drizzle', note: 'ACID-compliant relational data modeling' },
        { name: 'Redis Edge Cache', note: 'Sub-millisecond session state and rate-limiting' },
        { name: 'Vector DBs (pgvector / Pinecone)', note: 'Semantic embeddings for internal AI search & assistants' },
      ],
    },
    {
      category: 'Payments & Kenyan Gateways',
      icon: <Zap className="w-4 h-4 text-amber-500" />,
      items: [
        { name: 'Safaricom Daraja 2.0 API', note: 'Direct STK Push, C2B Paybill, B2C automated disbursements' },
        { name: 'Stripe & PayPal', note: 'Multi-currency credit/debit card merchant processing' },
        { name: 'Pesapal & DPO Pay', note: 'Pan-African localized card and mobile money aggregators' },
        { name: 'Automated Invoicing & Tax', note: 'KRA eTIMS compliant invoice generation workflows' },
      ],
    },
    {
      category: 'DevOps & Edge Infrastructure',
      icon: <Cloud className="w-4 h-4 text-emerald-500" />,
      items: [
        { name: 'Cloudflare Edge CDN', note: 'Global low-latency DNS, DDoS protection, edge caching' },
        { name: 'AWS & DigitalOcean', note: 'Containerized Docker deployments with autoscaling' },
        { name: 'GitHub Actions CI/CD', note: 'Automated test suite, linting, and zero-downtime deployment' },
        { name: 'Automated Daily Backups', note: 'Encrypted off-site snapshot backups and point-in-time recovery' },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>Engineering Discipline</span>
            <span aria-hidden="true">·</span>
            <span>Zero Slop Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Battle-tested technologies chosen for velocity and uptime.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            We avoid fragile bloated templates and heavy monolithic WordPress sites. Every system is built on scalable modern codebases that grow with your company for years without technical debt.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stackCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              <div className="space-y-3.5">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="text-xs">
                    <div className="font-mono font-bold text-slate-900 dark:text-slate-100">
                      {item.name}
                    </div>
                    <div className="text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Comparison Table */}
        <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
            Why Modern React/Next.js Beats Legacy Bloated CMS
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
            Compare the technical benchmarks of a custom Domain Tech Hub application vs standard legacy site builders:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 uppercase font-mono">
                  <th className="py-3 pr-4">Metric / Quality</th>
                  <th className="py-3 px-4 text-teal-600 dark:text-teal-400 font-bold">Domain Tech Hub Solution</th>
                  <th className="py-3 px-4 text-slate-500">Legacy CMS / Monolithic Builders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white">Mobile Load Speed</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-teal-600 dark:text-teal-400">&lt; 1.0s (Edge Pre-rendered)</td>
                  <td className="py-3.5 px-4 text-slate-500">4.5s – 8.0s (Heavy plugin bloat)</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white">Daraja M-Pesa Checkout</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-teal-600 dark:text-teal-400">Direct STK push &amp; Instant Webhooks</td>
                  <td className="py-3.5 px-4 text-slate-500">Manual SMS codes or slow iframes</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white">Security Vulnerabilities</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-teal-600 dark:text-teal-400">Zero public admin backdoors / Headless</td>
                  <td className="py-3.5 px-4 text-slate-500">Frequent SQL injection &amp; plugin exploits</td>
                </tr>
                <tr>
                  <td className="py-3.5 pr-4 font-semibold text-slate-900 dark:text-white">Codebase Ownership</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-teal-600 dark:text-teal-400">100% Owned by Client (Git Repo)</td>
                  <td className="py-3.5 px-4 text-slate-500">Locked in proprietary platform subscription</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
