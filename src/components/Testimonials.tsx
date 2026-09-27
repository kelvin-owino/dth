import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/mockData';
import { MessageSquare, Plus, Minus, Star, ShieldCheck, Check } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <span>Client Feedback &amp; Verification</span>
            <span aria-hidden="true">·</span>
            <span>Reputation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Trusted by founders, CTOs &amp; commercial leaders.
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Read direct feedback from clients whose operations and revenue run on Domain Tech Hub codebases.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-slate-950/60 p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}, {t.company}
                  </div>
                  <div className="text-[10px] text-teal-600 dark:text-teal-400 font-mono mt-0.5">
                    Verified: {t.verifiedProject}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-12 border-t border-slate-200/80 dark:border-slate-800">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Everything you need to know about working with Domain Tech Hub.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden bg-slate-50/50 dark:bg-slate-950/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-teal-600 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div className="p-1 rounded-md bg-white dark:bg-slate-800 shrink-0 ml-4">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
