import React from 'react';
import { Search, MapPin, SlidersHorizontal, RotateCcw, ArrowUpDown } from 'lucide-react';
import { FilterState } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onChange: (newFilters: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onChange,
  onReset,
  totalResults,
}) => {
  const modes = ['All', 'Remote', 'Hybrid', 'On-site'];
  const levels = ['All', 'Internship', 'Entry-level', 'Mid-level', 'Senior', 'Lead'];
  const departments = [
    'All',
    'Engineering',
    'AI & Research',
    'Design',
    'Product',
    'Infrastructure',
    'Security',
    'Data',
    'Marketing',
  ];

  const hasActiveFilters = Boolean(
    filters.q ||
    filters.location ||
    (filters.mode && filters.mode !== 'All') ||
    (filters.level && filters.level !== 'All') ||
    (filters.department && filters.department !== 'All') ||
    filters.sort !== 'newest'
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-5 space-y-4">
      {/* Top Search Inputs Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Keyword Search */}
        <div className="md:col-span-7 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search job title, skills (e.g. React, Python), or company..."
            value={filters.q}
            onChange={(e) => onChange({ q: e.target.value, page: 1 })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0E1726] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF] transition"
          />
        </div>

        {/* Location Search */}
        <div className="md:col-span-5 relative">
          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="City or country (e.g. San Francisco, Bengaluru, London)..."
            value={filters.location}
            onChange={(e) => onChange({ location: e.target.value, page: 1 })}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-[#0E1726] placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF] transition"
          />
        </div>
      </div>

      {/* Filter Chips & Dropdowns Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Work Mode Toggle Pills */}
          <div className="flex items-center bg-slate-100 p-0.5 rounded-lg">
            {modes.map((mode) => {
              const active = (filters.mode || 'All') === mode;
              return (
                <button
                  key={mode}
                  onClick={() => onChange({ mode, page: 1 })}
                  className={`px-3 py-1.5 rounded-md font-medium transition cursor-pointer ${
                    active
                      ? 'bg-white text-[#2F4BFF] font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {mode}
                </button>
              );
            })}
          </div>

          {/* Level Dropdown */}
          <select
            value={filters.level || 'All'}
            onChange={(e) => onChange({ level: e.target.value, page: 1 })}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-[#2F4BFF] cursor-pointer"
          >
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl === 'All' ? 'Experience: All' : lvl}
              </option>
            ))}
          </select>

          {/* Department Dropdown */}
          <select
            value={filters.department || 'All'}
            onChange={(e) => onChange({ department: e.target.value, page: 1 })}
            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:border-[#2F4BFF] cursor-pointer"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept === 'All' ? 'Department: All' : dept}
              </option>
            ))}
          </select>
        </div>

        {/* Sort & Reset */}
        <div className="flex items-center gap-2 text-xs ml-auto">
          <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={filters.sort}
              onChange={(e) => onChange({ sort: e.target.value as FilterState['sort'], page: 1 })}
              className="bg-transparent font-medium focus:outline-none cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="salary-high">Highest Salary</option>
              <option value="salary-low">Lowest Salary</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="flex items-center gap-1 px-2.5 py-1.5 text-slate-500 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition cursor-pointer font-medium"
              title="Reset all filters"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
        <span>
          Showing <strong className="text-[#0E1726]">{totalResults}</strong> demonstration listing{totalResults === 1 ? '' : 's'}
        </span>
        {hasActiveFilters && (
          <span className="text-[#2F4BFF] font-medium">
            Active filters applied
          </span>
        )}
      </div>
    </div>
  );
};
