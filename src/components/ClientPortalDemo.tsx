import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Clock, GitBranch, Terminal, 
  ExternalLink, FileCode, Lock, FileCheck, MessageSquare, 
  ChevronRight, Laptop, Server, Check 
} from 'lucide-react';

export const ClientPortalDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprints' | 'staging' | 'invoicing'>('sprints');

  const milestones = [
    {
      sprint: 'Sprint 01',
      title: 'Architectural Blueprint & UI/UX Design System',
      status: 'completed',
      completion: '100%',
      deliverable: 'Figma prototypes, ERD Schema diagrams, API endpoints spec',
      dates: 'Week 1 - 2',
    },
    {
      sprint: 'Sprint 02',
      title: 'Core Frontend & Daraja M-Pesa Sandbox Integration',
      status: 'completed',
      completion: '100%',
      deliverable: 'React 19 views, Safaricom STK Push sandbox callbacks, C2B webhooks',
      dates: 'Week 3 - 4',
    },
    {
      sprint: 'Sprint 03',
      title: 'Admin Management CRM & Role-Based Permissions',
      status: 'in-progress',
      completion: '75%',
      deliverable: 'Multi-tenant auth, PDF quote generator, analytics dashboard',
      dates: 'Week 5 - 6 (Current)',
    },
    {
      sprint: 'Sprint 04',
      title: 'Load Testing, Security Audit & Cloudflare Production Launch',
      status: 'upcoming',
      completion: '0%',
      deliverable: 'SSL hardening, Lighthouse 95+ score check, staff handoff workshop',
      dates: 'Week 7',
    },
  ];

  return (
    <section id="client-hub" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>The Domain Tech Hub Experience</span>
            <span aria-hidden="true">·</span>
            <span>Total Transparency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Live client visibility from Day 1 to Production.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            No radio silence or vague updates. Every client receives a private command center to inspect weekly staging builds, review sprint milestones, and collaborate directly with assigned engineers.
          </p>
        </div>

        {/* Interactive Mock Dashboard */}
        <div className="bg-slate-950 text-slate-100 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Window Bar */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-800">
                hub.domaintechhub.com/clients/safaripay-staging
              </span>
            </div>

            {/* Portal Tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('sprints')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'sprints' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Sprint Milestones
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('staging')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'staging' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Staging &amp; Code
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('invoicing')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'invoicing' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Milestone Escrow
              </button>
            </div>
          </div>

          {/* Portal Body */}
          <div className="p-6 sm:p-8">
            {activeTab === 'sprints' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Active Deployment: SafariPay Merchant Portal
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                      <span>Assigned Pod: Martin O. (Lead), Sharon K. (Frontend)</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-teal-400">Weekly Demo Every Thursday 3:00 PM EAT</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
                    <span>Sprint 03 / 04 In Progress (78% Overall)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {milestones.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold text-teal-400">
                            {m.sprint}
                          </span>
                          <span aria-hidden="true" className="text-slate-700">·</span>
                          <span className="text-sm font-bold text-white">
                            {m.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Deliverables: {m.deliverable}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 shrink-0">
                        <span className="text-xs font-mono text-slate-400">
                          {m.dates}
                        </span>

                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold ${
                          m.status === 'completed'
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60'
                            : m.status === 'in-progress'
                            ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60'
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {m.status === 'completed' && <Check className="w-3.5 h-3.5" />}
                          {m.status === 'in-progress' && <Clock className="w-3.5 h-3.5 animate-spin" />}
                          <span className="capitalize">{m.status.replace('-', ' ')}</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'staging' && (
              <div className="space-y-6">
                <div className="p-6 bg-slate-900/70 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-teal-400">
                      LIVE PROTECTED PREVIEW LINK
                    </div>
                    <div className="text-base font-bold text-white font-mono">
                      https://staging-safaripay.dth-sandbox.co.ke
                    </div>
                    <p className="text-xs text-slate-400">
                      Protected with HTTP Basic Auth. Automatically rebuilt upon every git push to main branch.
                    </p>
                  </div>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    <span>Launch Staging Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Last CI/CD Build:</span>
                    <div className="text-white font-bold">Passed (38s)</div>
                    <span className="text-[11px] text-emerald-400">✓ 42 Automated Unit Tests</span>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Daraja M-Pesa Hook:</span>
                    <div className="text-white font-bold">Active (Sandbox)</div>
                    <span className="text-[11px] text-teal-400">STK Push Latency: 1.8s</span>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
                    <span className="text-slate-400">Git Commit:</span>
                    <div className="text-white font-bold">feat: STK auto-retry</div>
                    <span className="text-[11px] text-slate-400">Pushed 2 hours ago</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'invoicing' && (
              <div className="space-y-6">
                <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white uppercase tracking-wider">
                      Contract Milestone Breakdown
                    </span>
                    <span className="text-teal-400 font-mono">
                      Escrow Agreement #DTH-2026-084
                    </span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <div>
                        <div className="font-semibold text-white">Milestone 1: Kickoff &amp; UI Architecture (40%)</div>
                        <div className="text-[11px] text-slate-400">Verified &amp; Released upon wireframe sign-off</div>
                      </div>
                      <span className="text-emerald-400 font-bold font-mono">Paid &amp; Reconciled</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <div>
                        <div className="font-semibold text-white">Milestone 2: Functional Staging &amp; APIs (30%)</div>
                        <div className="text-[11px] text-slate-400">Currently in sprint review</div>
                      </div>
                      <span className="text-amber-400 font-bold font-mono">Pending Client Review</span>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                      <div>
                        <div className="font-semibold text-white">Milestone 3: Production Handoff &amp; Warranty (30%)</div>
                        <div className="text-[11px] text-slate-400">Due upon live domain deployment</div>
                      </div>
                      <span className="text-slate-500 font-bold font-mono">Scheduled</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
