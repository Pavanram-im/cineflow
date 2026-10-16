import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterBar } from '../components/FilterBar';
import { JobCard } from '../components/JobCard';
import { JobDetailModal } from '../components/JobDetailModal';
import { Pagination } from '../components/Pagination';
import { FilterState, Job } from '../types';
import { getJobs, JobsResult } from '../services/jobs';
import { getApplications, saveApplication } from '../services/applications';
import { SearchX, Sparkles, Filter } from 'lucide-react';

export const Jobs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse filters from URL
  const filters: FilterState = useMemo(() => ({
    q: searchParams.get('q') || '',
    location: searchParams.get('location') || '',
    level: searchParams.get('level') || 'All',
    mode: searchParams.get('mode') || 'All',
    department: searchParams.get('department') || 'All',
    sort: (searchParams.get('sort') as FilterState['sort']) || 'newest',
    page: parseInt(searchParams.get('page') || '1', 10),
    pageSize: 8,
  }), [searchParams]);

  const [data, setData] = useState<JobsResult>({
    items: [],
    total: 0,
    page: 1,
    pageSize: 8,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [savedJobIds, setSavedJobIds] = useState<Set<string>>(new Set());

  // Load saved application IDs
  useEffect(() => {
    getApplications().then((apps) => {
      setSavedJobIds(new Set(apps.map((a) => a.jobId)));
    }).catch(() => {});
  }, []);

  // Fetch jobs whenever filters change
  useEffect(() => {
    let active = true;
    setLoading(true);
    getJobs(filters)
      .then((res) => {
        if (active) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching jobs:', err);
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [filters]);

  const updateFilters = (newParams: Partial<FilterState>) => {
    const updated = { ...filters, ...newParams };
    const sp = new URLSearchParams();

    if (updated.q) sp.set('q', updated.q);
    if (updated.location) sp.set('location', updated.location);
    if (updated.level && updated.level !== 'All') sp.set('level', updated.level);
    if (updated.mode && updated.mode !== 'All') sp.set('mode', updated.mode);
    if (updated.department && updated.department !== 'All') sp.set('department', updated.department);
    if (updated.sort && updated.sort !== 'newest') sp.set('sort', updated.sort);
    if (updated.page && updated.page > 1) sp.set('page', String(updated.page));

    setSearchParams(sp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setSearchParams(new URLSearchParams());
  };

  const handleToggleSave = async (job: Job) => {
    const isSaved = savedJobIds.has(job.id);
    if (isSaved) {
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
    await saveApplication(job, 'Applied', 'Applied via job listings view');
    const next = new Set(savedJobIds);
    next.add(job.id);
    setSavedJobIds(next);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#2F4BFF] uppercase tracking-wider block mb-1">
            Explore Opportunities
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0E1726]">
            Find Your Next Career Move
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse through 40 clearly labeled demonstration roles across software engineering, AI, design, and operations.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#2F4BFF]" />
          <span>Fictional Demo Catalog</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <FilterBar
        filters={filters}
        onChange={updateFilters}
        onReset={handleReset}
        totalResults={data.total}
      />

      {/* Main Jobs Listing */}
      {loading ? (
        <div className="grid sm:grid-cols-2 gap-5 py-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 animate-pulse"
            >
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 bg-slate-200 rounded-xl" />
                <div className="w-8 h-8 bg-slate-200 rounded-lg" />
              </div>
              <div className="h-5 bg-slate-200 rounded-md w-3/4" />
              <div className="h-4 bg-slate-200 rounded-md w-1/2" />
              <div className="h-12 bg-slate-100 rounded-md w-full" />
            </div>
          ))}
        </div>
      ) : data.items.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 shadow-xs max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#0E1726]">
            No matching demo jobs found
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Try broadening your search keywords or clearing the active work mode or experience filters.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-xs sm:text-sm rounded-xl transition cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-5">
            {data.items.map((job) => (
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

          {/* Pagination */}
          <Pagination
            currentPage={data.page}
            totalPages={data.totalPages}
            onPageChange={(p) => updateFilters({ page: p })}
          />
        </div>
      )}

      {/* Job Details Modal */}
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
