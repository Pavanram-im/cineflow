import React from 'react';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Bookmark, 
  ArrowRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { Job, WorkMode, ExperienceLevel } from '../types';

interface JobCardProps {
  job: Job;
  isSaved?: boolean;
  onToggleSave?: (job: Job) => void;
  onSelect: (job: Job) => void;
  onApplyNow?: (job: Job) => void;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  isSaved = false,
  onToggleSave,
  onSelect,
  onApplyNow,
}) => {
  const formatTime = (hours: number) => {
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const getModeBadgeClass = (mode: WorkMode) => {
    switch (mode) {
      case 'Remote':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Hybrid':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'On-site':
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getLevelBadgeClass = (level: ExperienceLevel) => {
    switch (level) {
      case 'Lead':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Senior':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Mid-level':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Entry-level':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Internship':
        return 'bg-teal-50 text-teal-700 border-teal-200';
    }
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#2F4BFF]/40 hover:shadow-xl transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between relative">
      {/* Top Row: Company, Level, Mode, Bookmark */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-display font-bold text-slate-700 text-base shrink-0 group-hover:bg-[#2F4BFF]/10 group-hover:text-[#2F4BFF] transition-colors">
              {job.company.charAt(0)}
            </div>
            <div className="min-w-0">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block truncate">
                {job.company}
              </span>
              <h3 
                onClick={() => onSelect(job)}
                className="font-display font-bold text-lg text-[#0E1726] group-hover:text-[#2F4BFF] transition-colors cursor-pointer leading-snug line-clamp-2"
              >
                {job.title}
              </h3>
            </div>
          </div>

          <button
            onClick={() => onToggleSave && onToggleSave(job)}
            aria-label={isSaved ? 'Remove from saved jobs' : 'Save job to tracker'}
            className={`p-2 rounded-xl transition cursor-pointer shrink-0 ${
              isSaved
                ? 'bg-[#2F4BFF] text-white shadow-xs'
                : 'text-slate-400 hover:text-[#2F4BFF] hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Badges: Location, Work Mode, Level */}
        <div className="flex flex-wrap items-center gap-2 mb-3.5 text-xs">
          <span className="flex items-center gap-1 text-slate-600 bg-slate-100/80 px-2.5 py-1 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate max-w-[150px]">{job.location}</span>
          </span>

          <span className={`px-2.5 py-1 rounded-md font-medium border ${getModeBadgeClass(job.mode)}`}>
            {job.mode}
          </span>

          <span className={`px-2.5 py-1 rounded-md font-medium border ${getLevelBadgeClass(job.level)}`}>
            {job.level}
          </span>

          {job.featured && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Featured
            </span>
          )}
        </div>

        {/* Description snippet */}
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
          {job.description}
        </p>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium bg-[#F6F7F9] text-slate-700 px-2 py-0.5 rounded-md border border-slate-200"
            >
              {skill}
            </span>
          ))}
          {job.skills.length > 4 && (
            <span className="text-[11px] font-medium text-slate-400 px-1.5 py-0.5">
              +{job.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Footer: Salary, Source info, Actions */}
      <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-[#0E1726] font-bold text-sm">
            <DollarSign className="w-4 h-4 text-emerald-600 -mr-1" />
            <span>{job.salary}</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {formatTime(job.postedHoursAgo)}
            </span>
            <span>•</span>
            <span className="text-amber-600/90 font-medium">Demo vacancy</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelect(job)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
          >
            Details
          </button>
          <button
            onClick={() => (onApplyNow ? onApplyNow(job) : onSelect(job))}
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2F4BFF] hover:bg-[#2338C9] text-white shadow-xs transition cursor-pointer"
          >
            <span>Apply</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
