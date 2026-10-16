import { ENV } from '../config/env';
import { MOCK_JOBS } from '../data/mockData';
import { FilterState, Job } from '../types';
import { request } from './api';

export interface JobsResult {
  items: Job[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export async function getJobs(filters: Partial<FilterState> = {}): Promise<JobsResult> {
  if (!ENV.USE_MOCK) {
    // Phase Two real API integration
    const params = new URLSearchParams();
    if (filters.q) params.set('q', filters.q);
    if (filters.location) params.set('location', filters.location);
    if (filters.level) params.set('level', filters.level);
    if (filters.mode) params.set('mode', filters.mode);
    if (filters.department) params.set('department', filters.department);
    if (filters.sort) params.set('sort', filters.sort);
    if (filters.page) params.set('page', String(filters.page));
    if (filters.pageSize) params.set('pageSize', String(filters.pageSize));

    const response = await request<{ items: Job[]; total: number; page: number; pageSize: number }>(
      `jobs?${params.toString()}`
    );

    if (response.ok && response.data) {
      const { items, total, page, pageSize } = response.data;
      return {
        items,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize) || 1,
      };
    }
    throw new Error(response.error || 'Failed to fetch jobs from API');
  }

  // Phase One: Fast and robust in-browser filtering
  await new Promise((resolve) => setTimeout(resolve, 80)); // realistic micro-tick

  const q = (filters.q || '').trim().toLowerCase();
  const location = (filters.location || '').trim().toLowerCase();
  const level = (filters.level || '').trim();
  const mode = (filters.mode || '').trim();
  const department = (filters.department || '').trim();
  const sort = filters.sort || 'newest';
  const page = Math.max(1, filters.page || 1);
  const pageSize = Math.max(1, filters.pageSize || 10);

  let filtered = MOCK_JOBS.filter((job) => {
    // Keyword search in title, company, skills, description
    if (q) {
      const matchTitle = job.title.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchSkills = job.skills.some((s) => s.toLowerCase().includes(q));
      const matchDesc = job.description.toLowerCase().includes(q);
      if (!matchTitle && !matchCompany && !matchSkills && !matchDesc) {
        return false;
      }
    }

    // Location filter
    if (location) {
      const matchLocation = job.location.toLowerCase().includes(location);
      if (!matchLocation) return false;
    }

    // Level filter
    if (level && level !== 'All') {
      if (job.level.toLowerCase() !== level.toLowerCase()) return false;
    }

    // Work Mode filter
    if (mode && mode !== 'All') {
      if (job.mode.toLowerCase() !== mode.toLowerCase()) return false;
    }

    // Department filter
    if (department && department !== 'All') {
      if (job.department?.toLowerCase() !== department.toLowerCase()) return false;
    }

    return true;
  });

  // Sorting
  if (sort === 'newest') {
    filtered.sort((a, b) => a.postedHoursAgo - b.postedHoursAgo);
  } else if (sort === 'salary-high') {
    filtered.sort((a, b) => {
      const extractNum = (str: string) => {
        const matches = str.match(/\d+[\d,]*/g);
        if (!matches) return 0;
        return parseInt(matches[matches.length - 1].replace(/,/g, ''), 10);
      };
      return extractNum(b.salary) - extractNum(a.salary);
    });
  } else if (sort === 'salary-low') {
    filtered.sort((a, b) => {
      const extractNum = (str: string) => {
        const matches = str.match(/\d+[\d,]*/g);
        if (!matches) return 0;
        return parseInt(matches[0].replace(/,/g, ''), 10);
      };
      return extractNum(a.salary) - extractNum(b.salary);
    });
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / pageSize) || 1;
  const startIndex = (page - 1) * pageSize;
  const paginatedItems = filtered.slice(startIndex, startIndex + pageSize);

  return {
    items: paginatedItems,
    total,
    page,
    pageSize,
    totalPages,
  };
}

export async function getJobById(id: string): Promise<Job | null> {
  if (!ENV.USE_MOCK) {
    const response = await request<Job>(`jobs/${encodeURIComponent(id)}`);
    return response.ok && response.data ? response.data : null;
  }

  const found = MOCK_JOBS.find((j) => j.id === id);
  return found || null;
}
