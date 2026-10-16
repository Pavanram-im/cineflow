import React from 'react';
import { Info, Sparkles, X } from 'lucide-react';

interface DemoNoticeBannerProps {
  onOpenAuditModal: () => void;
}

export const DemoNoticeBanner: React.FC<DemoNoticeBannerProps> = ({ onOpenAuditModal }) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gradient-to-r from-[#0E1726] via-[#1A263D] to-[#0E1726] text-white px-4 py-2.5 text-xs sm:text-sm border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-1 min-w-0">
          <span className="inline-flex items-center gap-1 bg-[#2F4BFF] text-white text-[11px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider">
            <Sparkles className="w-3 h-3" /> Phase 1 Demo
          </span>
          <p className="truncate text-slate-200">
            <span className="font-semibold text-white">Client-Side Prototype:</span> Vacancies, simulated login, and tracker data run locally in your browser. No real external applications are sent.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenAuditModal}
            className="flex items-center gap-1 text-[#F5B642] hover:text-[#ffd277] underline underline-offset-2 font-medium transition cursor-pointer"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Audit & Backend Guide</span>
          </button>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="text-slate-400 hover:text-white p-1 rounded transition cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
