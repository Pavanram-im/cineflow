import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { sendContactMessage } from '../services/contact';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('Feedback & Suggestions');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessResponse(null);
    setSubmitting(true);

    try {
      const res = await sendContactMessage({
        name,
        email,
        inquiryType,
        message,
      });
      setSuccessResponse(res.message);
      setMessage('');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Failed to send message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs font-bold text-[#2F4BFF] uppercase tracking-wider block">
          Get in Touch
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0E1726]">
          Contact HireIt Team
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          Have feedback on the unified job feed, want to report a broken source link, or explore partnership opportunities? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Col: Contact Info & Audit Explanation */}
        <div className="md:col-span-5 space-y-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-display font-bold text-base text-[#0E1726] flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#2F4BFF]" />
              Inquiry Channels
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We respond promptly to job seekers, engineering hiring teams, and developer community inquiries.
            </p>

            <div className="space-y-3 text-xs text-slate-700 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#2F4BFF] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block">Team Inbox</span>
                  <span className="text-slate-500">team@hireit.demo</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold block">Data Protection / Takedowns</span>
                  <span className="text-slate-500">compliance@hireit.demo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 1 Disclaimer */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/90 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Phase One Demo Note</span>
            </div>
            <p className="leading-relaxed">
              In this preview environment, form submissions are validated locally. Real outbound email dispatch requires Phase Two backend provisioning (e.g. Express endpoint + SendGrid/Resend).
            </p>
          </div>
        </div>

        {/* Right Col: Contact Form */}
        <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          {successResponse ? (
            <div className="p-6 bg-emerald-50 border border-emerald-300 rounded-2xl text-center space-y-3 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-emerald-900">
                Message Received!
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {successResponse}
              </p>
              <button
                onClick={() => setSuccessResponse(null)}
                className="mt-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {errorMessage && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={inquiryType}
                  onChange={(e) => setInquiryType(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2F4BFF]"
                >
                  <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                  <option value="Job Board Ingestion Request">Job Board Ingestion Request</option>
                  <option value="Duplicate Listing Report">Duplicate Listing Report</option>
                  <option value="Partnership & Integration">Partnership & Integration</option>
                  <option value="General Question">General Question</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Message *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what's on your mind..."
                  required
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#2F4BFF]/20 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Transmitting...' : 'Send Message'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
