import { ENV } from '../config/env';
import { MOCK_JOBS } from '../data/mockData';
import { Application, ApplicationStatus, Job } from '../types';
import { request } from './api';

const STORAGE_KEY = 'hireit_demo_applications_v1';

const INITIAL_DEMO_APPLICATIONS: Application[] = [
  {
    id: 'app-demo-1',
    jobId: 'job-1',
    job: MOCK_JOBS[0],
    status: 'Applied',
    updatedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    appliedDate: '2 days ago',
    notes: 'Submitted resume highlighting React 19 architecture and TypeScript experience.',
    contactPerson: 'Sarah Jenkins (Talent Partner)',
  },
  {
    id: 'app-demo-2',
    jobId: 'job-2',
    job: MOCK_JOBS[1],
    status: 'Interviewing',
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    appliedDate: '5 days ago',
    notes: 'Technical screen scheduled for Thursday. Review PostgreSQL indexing and Node microservices.',
    contactPerson: 'Rajiv Sharma (Engineering Lead)',
  },
  {
    id: 'app-demo-3',
    jobId: 'job-4',
    job: MOCK_JOBS[3],
    status: 'Saved',
    updatedAt: new Date().toISOString(),
    notes: 'Exciting design system role. Prepare Figma portfolio case study.',
  },
];

export async function getApplications(): Promise<Application[]> {
  if (!ENV.USE_MOCK) {
    const res = await request<{ items: Application[] }>('applications');
    if (res.ok && res.data) {
      return res.data.items;
    }
    throw new Error(res.error || 'Failed to fetch applications');
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Seed with sample demo applications on first visit
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_APPLICATIONS));
      return INITIAL_DEMO_APPLICATIONS;
    }
    return JSON.parse(raw) as Application[];
  } catch (err) {
    console.warn('Storage read error for applications:', err);
    return INITIAL_DEMO_APPLICATIONS;
  }
}

export async function saveApplication(
  job: Job,
  status: ApplicationStatus = 'Saved',
  notes?: string
): Promise<Application> {
  if (!ENV.USE_MOCK) {
    const res = await request<Application>('applications', {
      method: 'POST',
      body: JSON.stringify({ jobId: job.id, status, notes }),
    });
    if (res.ok && res.data) {
      return res.data;
    }
    throw new Error(res.error || 'Failed to save application');
  }

  const existing = await getApplications();
  const alreadySaved = existing.find((a) => a.jobId === job.id);

  if (alreadySaved) {
    // Update existing
    return updateApplicationStatus(alreadySaved.id, status, notes);
  }

  const newApp: Application = {
    id: `app-${Date.now()}`,
    jobId: job.id,
    job,
    status,
    updatedAt: new Date().toISOString(),
    appliedDate: status === 'Applied' ? 'Today' : undefined,
    notes: notes || '',
  };

  const updatedList = [newApp, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
  } catch (err) {
    throw new Error(
      `Could not save to browser storage: ${err instanceof Error ? err.message : 'Storage full'}`
    );
  }

  return newApp;
}

export async function updateApplicationStatus(
  applicationId: string,
  status: ApplicationStatus,
  notes?: string
): Promise<Application> {
  if (!ENV.USE_MOCK) {
    const res = await request<Application>(`applications/${encodeURIComponent(applicationId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ status, notes }),
    });
    if (res.ok && res.data) {
      return res.data;
    }
    throw new Error(res.error || 'Failed to update application');
  }

  const existing = await getApplications();
  const index = existing.findIndex((a) => a.id === applicationId);
  if (index === -1) {
    throw new Error('Application record not found');
  }

  const target = existing[index];
  const updated: Application = {
    ...target,
    status,
    notes: notes !== undefined ? notes : target.notes,
    updatedAt: new Date().toISOString(),
    appliedDate: status === 'Applied' && !target.appliedDate ? 'Today' : target.appliedDate,
  };

  existing[index] = updated;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    throw new Error(
      `Could not persist change to browser storage: ${err instanceof Error ? err.message : 'Storage error'}`
    );
  }

  return updated;
}

export async function removeApplication(applicationId: string): Promise<void> {
  if (!ENV.USE_MOCK) {
    const res = await request(`applications/${encodeURIComponent(applicationId)}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(res.error || 'Failed to remove application');
    }
    return;
  }

  const existing = await getApplications();
  const filtered = existing.filter((a) => a.id !== applicationId);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {
    throw new Error('Failed to update storage');
  }
}
