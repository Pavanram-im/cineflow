import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  Sparkles, 
  Layers, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Job } from '../types';
import { useNavigate } from 'react-router-dom';

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (job: Job) => void;
  onApplySimulated: (job: Job) => void;
}

export const JobDetailModal: React.FC<JobDetailModalProps> = ({
  job,
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onApplySimulated,
}) => {
  const navigate = useNavigate();
  const [appliedNotice, setAppliedNotice] = useState(false);

  if (!isOpen || !job) return null;

  const handleApplyClick = () => {
    onApplySimulated(job);
    setAppliedNotice(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 bg-[#0E1726] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition cursor-pointer"
            aria-label="Close job details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-4 pr-10">
            <div className="w-14 h-14 rounded-2xl bg-[#2F4BFF] text-white flex items-center justify-center font-display font-extrabold text-2xl shrink-0 shadow-lg shadow-[#2F4BFF]/20">
              {job.company.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#2F4BFF]" />
                  {job.company}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-300">{job.department || 'General'}</span>
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-white leading-tight">
                {job.title}
              </h2>
            </div>
          </div>

          {/* Quick Stats Pill Ribbon */}
          <div className="flex flex-wrap items-center gap-2.5 mt-5 text-xs">
            <span className="flex items-center gap-1 bg-white/10 text-slate-200 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-[#F5B642]" />
              {job.location}
            </span>
            <span className="bg-[#2F4BFF]/20 border border-[#2F4BFF]/40 text-blue-200 px-3 py-1.5 rounded-lg font-medium">
              {job.mode}
            </span>
            <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 px-3 py-1.5 rounded-lg font-medium">
              {job.level}
            </span>
            <span className="flex items-center gap-1 bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg font-bold">
              <DollarSign className="w-3.5 h-3.5 -mr-1" />
              {job.salary}
            </span>
          </div>
        </div>

        {/* Demo Data Disclaimer Ribbon */}
        <div className="px-6 py-2.5 bg-amber-50 border-b border-amber-200/80 text-amber-900 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Demo Record:</strong> Fictional vacancy for prototype testing. In Phase Two, this card connects to verified company career pages.
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md shrink-0">
            ID: {job.id}
          </span>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#0E1726]">
          {/* Simulated Application Feedback Box */}
          {appliedNotice && (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center gap-2 text-emerald-800 font-bold">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Simulated Application Recorded!</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                This opening was added to your <strong>Application Tracker</strong> with the status <span className="font-semibold underline">Applied</span>. In Phase One, no real third-party submissions occur.
              </p>
              <div className="pt-1 flex items-center gap-2">
                <button
                  onClick={() => {
                    onClose();
                    navigate('/tracker');
                  }}
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                >
                  View in Application Tracker →
                </button>
              </div>
            </div>
          )}

          {/* Overview */}
          <div>
            <h3 className="font-display font-bold text-base text-[#0E1726] mb-2">Role Overview</h3>
            <p className="text-slate-600 leading-relaxed text-sm">{job.description}</p>
          </div>

          {/* Required Skills */}
          <div>
            <h3 className="font-display font-bold text-base text-[#0E1726] mb-2.5">Key Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[#F6F7F9] text-slate-800 border border-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-base text-[#0E1726] mb-2.5">What You Will Do</h3>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F4BFF] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-base text-[#0E1726] mb-2.5">Candidate Requirements</h3>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && job.benefits.length > 0 && (
            <div>
              <h3 className="font-display font-bold text-base text-[#0E1726] mb-2.5">Perks & Compensation</h3>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                {job.benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ingested Sources (Audit Compliance) */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-slate-500" />
              Source Feed Transparency
            </h4>
            <p className="text-xs text-slate-500">
              In production, HireIt displays direct source citations and canonical career board verification.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {job.sources.map((src, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-700 font-mono"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  {src.name} (Simulated Feed)
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(job)}
              className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                isSaved
                  ? 'bg-[#2F4BFF] text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
              <span>{isSaved ? 'Saved in Tracker' : 'Save to Tracker'}</span>
            </button>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleApplyClick}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md shadow-[#2F4BFF]/20 transition cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Simulate Apply (Phase 1)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
