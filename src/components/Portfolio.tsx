import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/mockData';
import { ProjectCaseStudy } from '../types';
import { 
  ArrowRight, ExternalLink, X, Check, MapPin, 
  TrendingUp, Layers, CheckCircle2, ShieldCheck 
} from 'lucide-react';

interface PortfolioProps {
  onStartSimilarProject: (project: ProjectCaseStudy) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onStartSimilarProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectCaseStudy | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fintech', label: 'FinTech & Payments' },
    { id: 'crm-systems', label: 'Custom CRM & ERP' },
    { id: 'ecommerce', label: 'E-Commerce Stores' },
    { id: 'web-apps', label: 'Web Apps & SaaS' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
              <span>Verified Case Studies</span>
              <span aria-hidden="true">·</span>
              <span>Measurable Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
              Commercial software engineered for performance.
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
              Explore how we've helped Kenyan and global businesses replace obsolete legacy systems, streamline high-volume M-Pesa checkouts, and scale digital operations.
            </p>
          </div>

          {/* Interactive Filter Controls (Allowed buttons in segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-50 dark:bg-slate-950/70 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden flex flex-col hover:border-teal-500/50 transition-all hover:shadow-md"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-medium bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    {project.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[11px] bg-slate-900/80 backdrop-blur-xs px-2 py-1 rounded-md">
                    <MapPin className="w-3 h-3 text-teal-400" />
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Client: {project.client}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 line-clamp-2">
                    {project.summary}
                  </p>

                  {/* Highlight Metrics */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200/60 dark:border-slate-800">
                        <div className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    {project.techStack[0]} · {project.techStack[1]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Case Study Review */}
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    <span>{activeModalProject.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeModalProject.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                    {activeModalProject.title}
                  </h3>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    Commissioned by {activeModalProject.client}
                  </div>
                </div>

                <div className="aspect-16/8 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={activeModalProject.heroImage}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
                  {activeModalProject.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl sm:text-2xl font-bold font-mono text-teal-600 dark:text-teal-400">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-4 text-sm text-slate-700 dark:text-slate-300">
                  <div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-base mb-1">
                      The Operational Challenge
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeModalProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-950 dark:text-white text-base mb-1">
                      The Architectural Solution
                    </h4>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                      {activeModalProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                    Technologies &amp; Integrations
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalProject(null);
                      onStartSimilarProject(activeModalProject);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    <span>Build a Similar Platform for My Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
