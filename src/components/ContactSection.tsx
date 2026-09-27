import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, MessageSquare, 
  Send, CheckCircle, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const { currency, formatValue } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Custom Web & SaaS Development',
    budget: 'kes-100k-250k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office & Agency Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
                <span>Direct Access</span>
                <span aria-hidden="true">·</span>
                <span>Nairobi Commercial Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
                Let's engineer your digital advantage.
              </h2>
              <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                Whether you need a full enterprise web application, Daraja M-Pesa integration, or custom internal CRM, our senior engineers are ready to consult.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Physical Headquarters
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                    Westlands Commercial Center
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Chiromo Road, Westlands, Nairobi, Kenya
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Direct Telephone
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono mt-0.5">
                    +254 (0) 790 123 456 / +254 (0) 20 800 1234
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Mon - Fri: 8:00 AM - 6:00 PM EAT
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Email Desks
                  </div>
                  <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 font-mono mt-0.5">
                    projects@domaintechhub.com
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Guaranteed response within 2 business hours
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Action */}
            <div className="p-5 bg-teal-50/70 dark:bg-teal-950/30 rounded-xl border border-teal-200/80 dark:border-teal-800/50 space-y-3">
              <div className="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider">
                Prefer Quick WhatsApp or Video Call?
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/254700000000?text=Hello%20Domain%20Tech%20Hub,%20I%20would%20like%20to%20consult%20on%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <span>Book Google Meet</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  Proposal Request Dispatched!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900 dark:text-white">{formState.name}</span>. An engineering director from Domain Tech Hub will review your specifications and email you an architectural proposal within 2 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Custom Web & SaaS Development',
                        budget: 'kes-100k-250k',
                        message: '',
                      });
                    }}
                    className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                    Request a Formal Architectural Proposal
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Fill out your project requirements below to receive a detailed breakdown within 2 business hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Kelvin Mutua"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. kelvin@company.co.ke"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp Active) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="e.g. +254 712 345 678"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Service Requirement *
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    >
                      <option>Custom Web &amp; SaaS Development</option>
                      <option>E-Commerce &amp; M-Pesa Integration</option>
                      <option>Custom CRM &amp; Operations Portal</option>
                      <option>Technical SEO &amp; Speed Optimization</option>
                      <option>Digital Marketing &amp; Paid Ads</option>
                      <option>AI Integrations &amp; Chatbot</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Estimated Budget Bracket ({currency})
                  </label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    {currency === 'KES' ? (
                      <>
                        <option value="kes-50k-100k">KES 50,000 - 100,000 (Small / MVP)</option>
                        <option value="kes-100k-250k">KES 100,000 - 250,000 (Standard Commercial)</option>
                        <option value="kes-250k-500k">KES 250,000 - 500,000 (Advanced / Custom CRM)</option>
                        <option value="kes-500k-plus">KES 500,000+ (Enterprise Multi-Module)</option>
                      </>
                    ) : (
                      <>
                        <option value="usd-500-1000">$500 - $1,000 (MVP / Startup)</option>
                        <option value="usd-1000-2500">$1,000 - $2,500 (Commercial Scale)</option>
                        <option value="usd-2500-5000">$2,500 - $5,000 (Custom ERP / Portal)</option>
                        <option value="usd-5000-plus">$5,000+ (Full Enterprise)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Brief &amp; Current Pain Points *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe what you want to build, existing systems (if any), and your target deadline..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-sm transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Specifications...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Proposal Request</span>
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mt-3">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    <span>Strict confidentiality guaranteed. We never share client contact data.</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
