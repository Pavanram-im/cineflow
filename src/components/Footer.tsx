import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditModal }) => {
  return (
    <footer className="bg-[#0E1726] text-white border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#2F4BFF] to-[#4F6BFF] flex items-center justify-center text-white">
                <Briefcase className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-white">
                Hire<span className="text-[#2F4BFF]">It</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              One feed for every authorized job source. Eliminating duplicate listings, providing transparent compensation bands, and notifying candidates the instant fresh vacancies emerge.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Phase 1 Architecture Audit</span>
              </button>
              <span className="text-xs text-slate-500">
                React 19 • Vite • Tailwind CSS
              </span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-slate-300 mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/jobs" className="hover:text-white transition">
                  Browse Demo Jobs
                </Link>
              </li>
              <li>
                <Link to="/tracker" className="hover:text-white transition">
                  Application Tracker
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="hover:text-white transition">
                  Job Alert Rules
                </Link>
              </li>
              <li>
                <Link to="/auth" className="hover:text-white transition">
                  Demo Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* About & Trust */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-slate-300 mb-4">
              Trust & Transparency
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact & Feedback
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenAuditModal}
                  className="hover:text-white transition text-left flex items-center gap-1 cursor-pointer"
                >
                  <span>Backend Requirements</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  Deduplication Philosophy
                </a>
              </li>
              <li>
                <span className="text-xs text-amber-400/90 font-medium block pt-1">
                  * 40 fictional records for prototype testing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HireIt Job Portal. Prototype preview build.</p>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for clean candidate discovery
          </p>
        </div>
      </div>
    </footer>
  );
};
