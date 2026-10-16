import React from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, Code2, Database, ShieldAlert, X } from 'lucide-react';

interface DemoModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModeModal: React.FC<DemoModeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0E1726] text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2F4BFF] flex items-center justify-center text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg leading-tight">HireIt Architecture & Audit Status</h3>
              <p className="text-xs text-slate-300">Phase One Frontend Prototype vs Phase Two Production Roadmap</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#0E1726]">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Demonstration Honesty Guarantee</h4>
                <p className="text-amber-800 text-xs sm:text-sm leading-relaxed">
                  As detailed in the <strong>Technical Audit and Remediation Report</strong>, all 40 jobs shown in this preview are simulated records created with realistic modern titles, salaries, and skills. They are <strong>not live, verified vacancies</strong>, and simulated applications do not transmit to real hiring teams.
                </p>
              </div>
            </div>
          </div>

          {/* Phase 1 vs Phase 2 Comparison Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
              <div className="flex items-center gap-2 font-bold text-emerald-800 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Working in this Preview (Phase 1)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-emerald-950">
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Interactive job search across 40 fictional listings</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Multi-filter by Experience Level, Work Mode & Department</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Detailed Job Drawer with skills, requirements & benefits</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Application Tracker with status stages & custom notes</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Job Alert rule builder with frequency preferences</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Instant 1-Click Demo Login and form validation</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
              <div className="flex items-center gap-2 font-bold text-blue-900 mb-2">
                <Database className="w-4 h-4 text-blue-600" />
                <span>Requires Real Backend (Phase 2)</span>
              </div>
              <ul className="space-y-1.5 text-xs text-blue-950">
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Authorized scrapers / ATS feeds (Greenhouse, Lever)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>PostgreSQL database for deduplication & persistent state</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Server-side Argon2id password hashing & HttpOnly cookies</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Email / Telegram delivery worker queue (Redis / BullMQ)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Automated stale job expiration and canonical deduplication</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Local Run Instructions */}
          <div className="bg-[#F6F7F9] p-4 rounded-xl border border-slate-200">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500 mb-2">
              How to Run Locally in VS Code
            </h4>
            <div className="bg-[#0E1726] text-slate-200 p-3 rounded-lg font-mono text-xs overflow-x-auto space-y-1">
              <div><span className="text-slate-500"># 1. Install dependencies</span></div>
              <div className="text-emerald-400">npm install</div>
              <div><span className="text-slate-500"># 2. Copy environment file</span></div>
              <div className="text-emerald-400">cp .env.example .env</div>
              <div><span className="text-slate-500"># 3. Start local development server</span></div>
              <div className="text-emerald-400">npm run dev</div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="flex items-center gap-3 p-3 bg-slate-100 rounded-xl text-xs text-slate-600">
            <ShieldAlert className="w-4 h-4 text-slate-500 shrink-0" />
            <span>
              All client environment variables start with <code>VITE_</code> and are public in browser bundles. No private secrets or passwords should ever be stored client-side.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0E1726] text-white text-xs font-semibold rounded-lg hover:bg-[#1A263D] transition cursor-pointer"
          >
            Close & Continue Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
