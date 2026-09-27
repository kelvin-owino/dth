import React, { useState, useId } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  ESTIMATOR_SERVICES, ESTIMATOR_SCALE_TIERS, ESTIMATOR_FEATURES 
} from '../data/mockData';
import { 
  Calculator, Check, ArrowRight, MessageSquare, Download, 
  Copy, CheckCheck, Clock, Users, Sparkles, FileText 
} from 'lucide-react';

interface ProjectEstimatorProps {
  initialServiceId?: string;
  onOpenBooking: () => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({
  initialServiceId,
  onOpenBooking,
}) => {
  const { currency, formatCurrency, formatValue } = useTheme();
  const idPrefix = useId();

  // Find initial service matching
  const defaultService = ESTIMATOR_SERVICES.find(s => s.id === initialServiceId) || ESTIMATOR_SERVICES[0];

  const [selectedServiceId, setSelectedServiceId] = useState<string>(defaultService.id);
  const [selectedScaleId, setSelectedScaleId] = useState<string>('growth');
  const [selectedFeatureIds, setSelectedFeatureIds] = useState<string[]>(['mpesa-daraja', 'seo-audit-bundle']);
  const [urgency, setUrgency] = useState<'standard' | 'accelerated' | 'flexible'>('standard');
  const [copied, setCopied] = useState(false);

  const currentService = ESTIMATOR_SERVICES.find(s => s.id === selectedServiceId) || ESTIMATOR_SERVICES[0];
  const currentScale = ESTIMATOR_SCALE_TIERS.find(s => s.id === selectedScaleId) || ESTIMATOR_SCALE_TIERS[1];

  const toggleFeature = (featureId: string) => {
    setSelectedFeatureIds(prev => 
      prev.includes(featureId) ? prev.filter(id => id !== featureId) : [...prev, featureId]
    );
  };

  // Cost calculation
  const baseKES = currentService.baseCostKES * currentScale.multiplier;
  const baseUSD = currentService.baseCostUSD * currentScale.multiplier;

  const featuresKES = selectedFeatureIds.reduce((sum, fId) => {
    const f = ESTIMATOR_FEATURES.find(item => item.id === fId);
    return sum + (f ? f.costKES : 0);
  }, 0);

  const featuresUSD = selectedFeatureIds.reduce((sum, fId) => {
    const f = ESTIMATOR_FEATURES.find(item => item.id === fId);
    return sum + (f ? f.costUSD : 0);
  }, 0);

  const urgencyMultiplier = urgency === 'accelerated' ? 1.25 : urgency === 'flexible' ? 0.95 : 1.0;

  const totalCostKES = Math.round((baseKES + featuresKES) * urgencyMultiplier);
  const totalCostUSD = Math.round((baseUSD + featuresUSD) * urgencyMultiplier);

  // Weeks calculation
  const baseWeeks = currentService.baseWeeks + currentScale.weeksAdd;
  const featureWeeks = selectedFeatureIds.reduce((sum, fId) => {
    const f = ESTIMATOR_FEATURES.find(item => item.id === fId);
    return sum + (f ? f.weeks : 0);
  }, 0);

  const totalWeeksEstimated = Math.max(
    urgency === 'accelerated' ? 2 : 3,
    Math.round((baseWeeks + featureWeeks) * (urgency === 'accelerated' ? 0.75 : 1.0))
  );

  const selectedFeaturesList = ESTIMATOR_FEATURES.filter(f => selectedFeatureIds.includes(f.id));

  // WhatsApp pre-formatted link
  const getWhatsAppMessage = () => {
    const text = `Hello Domain Tech Hub Team! 👋\n\nI just configured an estimate on your website:\n- Project: ${currentService.name}\n- Scale: ${currentScale.name}\n- Features: ${selectedFeaturesList.map(f => f.name).join(', ') || 'None selected'}\n- Urgency: ${urgency}\n- Estimated Budget: ${formatCurrency(totalCostKES, totalCostUSD)}\n- Estimated Timeline: ~${totalWeeksEstimated} weeks\n\nI would like to discuss next steps and receive a formal proposal.`;
    return `https://wa.me/254700000000?text=${encodeURIComponent(text)}`;
  };

  const handleCopySummary = () => {
    const text = `Domain Tech Hub - Project Scope Estimate\n---------------------------------------\nProject Type: ${currentService.name}\nScale: ${currentScale.name}\nDelivery Speed: ${urgency}\nEstimated Timeline: ~${totalWeeksEstimated} Weeks\nEstimated Budget: ${formatCurrency(totalCostKES, totalCostUSD)}\nFeatures Included:\n${selectedFeaturesList.map(f => ` • ${f.name}`).join('\n')}\n\nGenerated via domaintechhub.com`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Calculator</span>
            <span aria-hidden="true">·</span>
            <span>Real-time Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Transparent investment &amp; timeline calculator.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No hidden fees or vague timelines. Configure your project scope below to receive an instant commercial estimate in {currency === 'KES' ? 'Kenyan Shillings (KES)' : 'US Dollars (USD)'}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configuration Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Project Type */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <label className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                1. Select Core Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ESTIMATOR_SERVICES.map((srv) => {
                  const isChecked = srv.id === selectedServiceId;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-teal-600 bg-teal-50/40 dark:bg-teal-950/30 dark:border-teal-500 ring-1 ring-teal-500'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-sm text-slate-900 dark:text-white">
                          {srv.name}
                        </span>
                        {isChecked && (
                          <div className="w-5 h-5 rounded-full bg-teal-600 text-white flex items-center justify-center shrink-0">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
                        {srv.description}
                      </p>
                      <div className="mt-3 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold">
                        Base: {formatCurrency(srv.baseCostKES, srv.baseCostUSD)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Scale & Maturity Tier */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <label className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                2. Project Scale &amp; Scope Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {ESTIMATOR_SCALE_TIERS.map((tier) => {
                  const isChecked = tier.id === selectedScaleId;
                  return (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedScaleId(tier.id)}
                      className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? 'border-teal-600 bg-teal-50/40 dark:bg-teal-950/30 dark:border-teal-500 ring-1 ring-teal-500'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {tier.name}
                        </span>
                        {isChecked && <Check className="w-4 h-4 text-teal-600" />}
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
                        {tier.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Modules & Features */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  3. Specialized Capabilities &amp; Add-Ons
                </label>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedFeatureIds.length} selected
                </span>
              </div>
              <div className="space-y-2.5">
                {ESTIMATOR_FEATURES.map((feat) => {
                  const isSelected = selectedFeatureIds.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-start justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-teal-600/70 bg-teal-50/30 dark:bg-teal-950/20 dark:border-teal-500/60'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center border transition-colors ${
                          isSelected 
                            ? 'bg-teal-600 border-teal-600 text-white' 
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">
                            {feat.name}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {feat.description}
                          </div>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-3">
                        <span className="text-xs font-mono font-semibold text-slate-800 dark:text-slate-200">
                          +{formatCurrency(feat.costKES, feat.costUSD)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Urgency / Velocity */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <label className="block text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                4. Deployment Velocity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', name: 'Standard Sprint', note: 'Normal paced engineering delivery' },
                  { id: 'accelerated', name: 'Accelerated Fast-Track', note: '+25% Dedicated sprint surge' },
                  { id: 'flexible', name: 'Flexible Delivery', note: '-5% Extended milestone buffer' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`text-left p-3.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      urgency === item.id
                        ? 'border-teal-600 bg-teal-50/40 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 font-semibold ring-1 ring-teal-500'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="font-bold text-slate-900 dark:text-white">{item.name}</div>
                    <div className="text-[11px] text-slate-500 mt-1">{item.note}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Quotation Card (5 Cols Sticky) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider">
                  Live Scope Estimate
                </span>
                <span className="text-xs font-mono text-slate-400">
                  REF: DTH-{Math.floor(Math.random() * 900 + 100)}
                </span>
              </div>

              {/* Total Price Display */}
              <div>
                <div className="text-xs text-slate-400 mb-1">
                  Estimated Total Investment
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white">
                  {formatCurrency(totalCostKES, totalCostUSD)}
                </div>
                <div className="text-xs text-teal-400 mt-1.5 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Includes full source code transfer &amp; 30d warranty</span>
                </div>
              </div>

              {/* Timeline & Team Composition */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div className="bg-slate-800/60 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-teal-400" />
                    <span>Est. Delivery</span>
                  </div>
                  <div className="font-bold font-mono text-white text-base">
                    ~{totalWeeksEstimated} Weeks
                  </div>
                </div>

                <div className="bg-slate-800/60 p-3 rounded-xl">
                  <div className="flex items-center gap-1.5 text-slate-400 mb-1">
                    <Users className="w-3.5 h-3.5 text-teal-400" />
                    <span>Engineering Pod</span>
                  </div>
                  <div className="font-bold text-white text-sm">
                    Lead + 2 Engineers
                  </div>
                </div>
              </div>

              {/* Specification Breakdown List */}
              <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected System:</span>
                  <span className="font-semibold text-white">{currentService.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Scale Tier:</span>
                  <span className="font-semibold text-white">{currentScale.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Modules Selected:</span>
                  <span className="font-semibold text-white">{selectedFeatureIds.length} Features</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Payment Milestones:</span>
                  <span className="font-semibold text-white">40% / 30% / 30%</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Scope to WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-xl text-sm transition-all cursor-pointer"
                >
                  <span>Lock In Sprint &amp; Book Discovery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Scope Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Scope Summary</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
                Domain Tech Hub Guarantees
              </div>
              <p>
                ✓ Written Non-Disclosure Agreement (NDA) signed before codebase access.
              </p>
              <p>
                ✓ Weekly interactive staging links so you test features as they are built.
              </p>
              <p>
                ✓ Direct Safaricom Daraja sandbox and production test credentials setup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
