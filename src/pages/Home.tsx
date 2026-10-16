import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Bell, 
  Bookmark, 
  TrendingUp, 
  Building2,
  Clock,
  ExternalLink
} from 'lucide-react';
import { POPULAR_SEARCH_TAGS } from '../data/mockData';
import { MOCK_JOBS } from '../data/mockData';
import { JobCard } from '../components/JobCard';
import { JobDetailModal } from '../components/JobDetailModal';
import { Job } from '../types';
import { getApplications, saveApplication } from '../services/applications';

interface HomeProps {
  onOpenAuditModal: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAuditModal }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set());

  React.useEffect(() => {
    getApplications().then((apps) => {
      setSavedJobIds(new Set(apps.map((a) => a.jobId)));
    }).catch(() => {});
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchTerm.trim()) params.set('q', searchTerm.trim());
    if (locationTerm.trim()) params.set('location', locationTerm.trim());
    navigate(`/jobs?${params.toString()}`);
  };

  const handleTagClick = (tag: string) => {
    navigate(`/jobs?q=${encodeURIComponent(tag)}`);
  };

  const handleToggleSave = async (job: Job) => {
    const isSaved = savedJobIds.has(job.id);
    if (isSaved) {
      // Remove or keep state
      const next = new Set(savedJobIds);
      next.delete(job.id);
      setSavedJobIds(next);
    } else {
      await saveApplication(job, 'Saved');
      const next = new Set(savedJobIds);
      next.add(job.id);
      setSavedJobIds(next);
    }
  };

  const handleApplySimulated = async (job: Job) => {
    await saveApplication(job, 'Applied', 'Applied via HireIt demo interface');
    const next = new Set(savedJobIds);
    next.add(job.id);
    setSavedJobIds(next);
  };

  const featuredJobs = MOCK_JOBS.filter((j) => j.featured || j.postedHoursAgo <= 15).slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="relative pt-8 sm:pt-16 pb-12 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#2F4BFF]/10 to-[#F5B642]/10 blur-3xl rounded-full -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Unified Career Aggregator</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#2F4BFF]">Phase 1 Demo Mode</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0E1726] tracking-tight leading-[1.1]">
            One feed for every <span className="text-[#2F4BFF]">authorized</span> job source.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate duplicate postings, cut through recruiter spam, and track genuine opportunities across top verified tech boards in one clean dashboard.
          </p>

          {/* Search Box Card */}
          <div className="max-w-3xl mx-auto bg-white p-2.5 sm:p-3 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 mt-8">
            <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2">
              <div className="relative flex-1 w-full">
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Job title, skills (e.g. React, Python), or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-[#0E1726] placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="relative flex-1 w-full">
                <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Location or 'Remote'..."
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-transparent text-sm text-[#0E1726] placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#2F4BFF]/20 flex items-center justify-center gap-2 transition cursor-pointer shrink-0"
              >
                <span>Find Jobs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Popular Tag Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-500">
            <span className="font-medium text-slate-400">Popular searches:</span>
            {POPULAR_SEARCH_TAGS.slice(0, 6).map((tag) => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className="bg-white hover:bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg border border-slate-200 transition cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-center p-3 border-r border-slate-100 last:border-r-0">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#0E1726]">40+</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Sample Demo Listings</p>
          </div>
          <div className="text-center p-3 md:border-r border-slate-100 last:border-r-0">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-[#2F4BFF]">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Client-Side Responsive</p>
          </div>
          <div className="text-center p-3 border-r border-slate-100 last:border-r-0">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-600">3 Modes</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Remote, Hybrid, On-site</p>
          </div>
          <div className="text-center p-3">
            <p className="font-display font-extrabold text-2xl sm:text-3xl text-amber-600">0 Secrets</p>
            <p className="text-xs text-slate-500 font-medium mt-1">Safe Mock Architecture</p>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="font-display font-bold text-3xl text-[#0E1726]">
            Built for candidate clarity, not clickbait.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Most job portals copy-paste stale listings from each other. HireIt is engineered around provenance, deduplication, and direct career paths.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#2F4BFF]/30 transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2F4BFF] flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#0E1726]">Unified Ingest</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Consolidates career listings from official ATS systems (Greenhouse, Lever, Workable) into a single high-speed feed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#2F4BFF]/30 transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#0E1726]">Anti-Duplicate Engine</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Canonical title and location hashing collapses duplicate listings from multiple boards into one clean vacancy card.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#2F4BFF]/30 transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#0E1726]">Application Tracker</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Track openings through Saved, Applied, Interviewing, and Offer stages with custom notes in your personal pipeline.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#2F4BFF]/30 transition space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-base text-[#0E1726]">Instant Alert Rules</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Define target skills, experience level, and work mode rules to receive instant notifications when vacancies open.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Jobs Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
          <div>
            <span className="text-xs font-bold text-[#2F4BFF] uppercase tracking-wider block mb-1">
              Fresh Openings
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0E1726]">
              Featured Opportunities
            </h2>
          </div>
          <Link
            to="/jobs"
            className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2F4BFF] hover:text-[#2338C9] transition"
          >
            <span>Explore all 40 demo listings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobIds.has(job.id)}
              onToggleSave={handleToggleSave}
              onSelect={(j) => setSelectedJob(j)}
              onApplyNow={(j) => setSelectedJob(j)}
            />
          ))}
        </div>
      </section>

      {/* About HireIt & Architecture Section (Targeted by /#about) */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0E1726] to-[#1A263D] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-[#2F4BFF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> About the HireIt Architecture
            </span>

            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white leading-tight">
              Honest Engineering: How Phase 1 Connects to Phase 2
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              This preview operates in <strong>Phase One</strong>: a complete frontend prototype with full in-browser search, multi-filter, application tracking, alert rules, and simulated authentication. No passwords or private keys are transmitted.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Phase 1 (Active Preview)
                </h4>
                <p className="text-xs text-slate-300">
                  Runs with <code>VITE_USE_MOCK=true</code>. Fast, deterministic, zero-backend dependency, and safe to evaluate in any browser preview.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                <h4 className="font-bold text-white text-sm mb-1 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  Phase 2 (Production Launch)
                </h4>
                <p className="text-xs text-slate-300">
                  Sets <code>VITE_USE_MOCK=false</code> to connect with Node.js/Express, PostgreSQL relational schema, Redis BullMQ alert delivery, and live career feeds.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAuditModal}
                className="px-5 py-2.5 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer"
              >
                Inspect Technical Audit Report
              </button>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-xl transition"
              >
                Submit Feedback / Questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        isOpen={Boolean(selectedJob)}
        onClose={() => setSelectedJob(null)}
        isSaved={selectedJob ? savedJobIds.has(selectedJob.id) : false}
        onToggleSave={handleToggleSave}
        onApplySimulated={handleApplySimulated}
      />
    </div>
  );
};
