import React, { useState } from 'react';
import { 
  X, Calendar, Clock, Video, MapPin, MessageSquare, 
  CheckCircle2, ArrowRight, User, Mail, Phone, Building2 
} from 'lucide-react';
import { BookingSubmission } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledNotes?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledNotes = '',
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2>(1);
  const [meetingType, setMeetingType] = useState('Initial Project Discovery (30 min)');
  const [channel, setChannel] = useState<'google-meet' | 'whatsapp' | 'in-person'>('google-meet');
  const [selectedDate, setSelectedDate] = useState('2026-09-29');
  const [selectedTime, setSelectedTime] = useState('10:00 AM EAT');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    companyName: '',
    projectSummary: prefilledNotes,
  });

  const availableDates = [
    { label: 'Tue, Sep 29', value: '2026-09-29' },
    { label: 'Wed, Sep 30', value: '2026-09-30' },
    { label: 'Thu, Oct 1', value: '2026-10-01' },
    { label: 'Fri, Oct 2', value: '2026-10-02' },
    { label: 'Mon, Oct 5', value: '2026-10-05' },
    { label: 'Tue, Oct 6', value: '2026-10-06' },
  ];

  const availableTimes = [
    '09:00 AM EAT',
    '10:30 AM EAT',
    '01:30 PM EAT',
    '03:00 PM EAT',
    '04:30 PM EAT',
  ];

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
              Consultation Confirmed!
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              We have reserved <span className="font-semibold text-slate-900 dark:text-white">{selectedDate}</span> at <span className="font-semibold text-slate-900 dark:text-white">{selectedTime}</span> for <span className="font-semibold text-slate-900 dark:text-white">{formData.clientName}</span>.
            </p>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono text-left space-y-1.5">
              <div className="text-slate-500">Meeting Session:</div>
              <div className="font-bold text-slate-900 dark:text-white">{meetingType}</div>
              <div className="text-slate-500 mt-2">Channel:</div>
              <div className="font-bold text-teal-600 dark:text-teal-400">
                {channel === 'google-meet' && 'Google Meet Video (Link: meet.google.com/dth-consult)'}
                {channel === 'whatsapp' && `Direct WhatsApp Call to ${formData.clientPhone}`}
                {channel === 'in-person' && 'Westlands Commercial Center, Chiromo Road, Nairobi'}
              </div>
            </div>

            <p className="text-xs text-slate-500">
              A calendar invitation with meeting links has been sent to {formData.clientEmail}.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400 mb-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Executive Strategy Session</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                Book a Free Discovery Consultation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Speak directly with an engineering lead. No sales fluff—just technical and commercial clarity.
              </p>
            </div>

            {step === 1 ? (
              <div className="space-y-5">
                {/* Meeting Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    1. Consultation Type
                  </label>
                  <select
                    value={meetingType}
                    onChange={(e) => setMeetingType(e.target.value)}
                    className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option>Initial Project Discovery &amp; Commercial Scope (30 min)</option>
                    <option>Full Architectural &amp; Systems Deep Dive (45 min)</option>
                    <option>Technical SEO &amp; Core Web Vitals Remediation (30 min)</option>
                    <option>Safaricom Daraja M-Pesa Integration Review (30 min)</option>
                  </select>
                </div>

                {/* Meeting Channel */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    2. Meeting Channel
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setChannel('google-meet')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        channel === 'google-meet'
                          ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <Video className="w-4 h-4 mx-auto mb-1 text-teal-600" />
                      <span className="text-xs block">Google Meet</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setChannel('whatsapp')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        channel === 'whatsapp'
                          ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <MessageSquare className="w-4 h-4 mx-auto mb-1 text-emerald-600" />
                      <span className="text-xs block">WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setChannel('in-person')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        channel === 'in-person'
                          ? 'border-teal-600 bg-teal-50/50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 font-semibold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      <MapPin className="w-4 h-4 mx-auto mb-1 text-sky-600" />
                      <span className="text-xs block">Nairobi Office</span>
                    </button>
                  </div>
                </div>

                {/* Date Picker */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    3. Select Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableDates.map((d) => (
                      <button
                        key={d.value}
                        type="button"
                        onClick={() => setSelectedDate(d.value)}
                        className={`p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-all ${
                          selectedDate === d.value
                            ? 'border-teal-600 bg-teal-600 text-white font-bold'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    4. Select Time Slot (East Africa Time / UTC+3)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {availableTimes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`p-2 rounded-lg border text-xs font-mono cursor-pointer transition-all ${
                          selectedTime === t
                            ? 'border-teal-600 bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 font-bold ring-1 ring-teal-500'
                            : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    <span>Proceed to Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="p-3 bg-teal-50/50 dark:bg-teal-950/30 rounded-xl border border-teal-200/60 dark:border-teal-800/40 text-xs flex justify-between items-center">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{selectedDate}</span> at <span className="font-bold text-teal-600">{selectedTime}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[11px] text-teal-600 hover:underline font-semibold cursor-pointer"
                  >
                    Change Slot
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g. Kelvin Mutua"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.clientEmail}
                      onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                      placeholder="kelvin@company.co.ke"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.clientPhone}
                      onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                      placeholder="+254 712 345 678"
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Logistics Ltd"
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Specific Questions or Project Focus
                  </label>
                  <textarea
                    rows={3}
                    value={formData.projectSummary}
                    onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                    placeholder="Tell us what you want to cover during the consultation..."
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="py-3 px-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Confirm &amp; Generate Calendar Invite
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
