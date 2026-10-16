export type WorkMode = 'Remote' | 'Hybrid' | 'On-site';

export type ExperienceLevel = 'Internship' | 'Entry-level' | 'Mid-level' | 'Senior' | 'Lead';

export type ApplicationStatus = 'Saved' | 'Applied' | 'Interviewing' | 'Offer' | 'Rejected';

export type AlertFrequency = 'Instant' | 'Daily' | 'Weekly';

export interface JobSource {
  name: string;
  url: string;
  isDemo?: boolean;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  mode: WorkMode;
  level: ExperienceLevel;
  skills: string[];
  salary: string;
  postedHoursAgo: number;
  sources: JobSource[];
  description: string;
  responsibilities?: string[];
  requirements?: string[];
  benefits?: string[];
  applyUrl: string;
  department?: string;
  featured?: boolean;
}

export interface Application {
  id: string;
  jobId: string;
  job: Job;
  status: ApplicationStatus;
  updatedAt: string;
  appliedDate?: string;
  notes?: string;
  contactPerson?: string;
}

export interface Alert {
  id: string;
  keyword: string;
  level: string;
  location: string;
  frequency: AlertFrequency;
  channel: 'Email' | 'Dashboard' | 'Telegram (Demo)';
  active: boolean;
  createdAt: string;
  matchedCount?: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  title?: string;
  isDemoUser: boolean;
}

export interface FilterState {
  q: string;
  location: string;
  level: string;
  mode: string;
  department: string;
  sort: 'newest' | 'salary-high' | 'salary-low';
  page: number;
  pageSize: number;
}
