import { ENV } from '../config/env';
import { Alert } from '../types';
import { request } from './api';

const STORAGE_KEY = 'hireit_demo_alerts_v1';

const INITIAL_DEMO_ALERTS: Alert[] = [
  {
    id: 'alt-1',
    keyword: 'React OR TypeScript',
    level: 'Senior',
    location: 'Remote',
    frequency: 'Instant',
    channel: 'Dashboard',
    active: true,
    createdAt: '2026-10-01',
    matchedCount: 14,
  },
  {
    id: 'alt-2',
    keyword: 'Full Stack Node.js',
    level: 'Mid-level',
    location: 'Bengaluru',
    frequency: 'Daily',
    channel: 'Email',
    active: true,
    createdAt: '2026-10-05',
    matchedCount: 6,
  },
];

export async function getAlerts(): Promise<Alert[]> {
  if (!ENV.USE_MOCK) {
    const res = await request<{ items: Alert[] }>('alerts');
    if (res.ok && res.data) {
      return res.data.items;
    }
    throw new Error(res.error || 'Failed to fetch job alerts');
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DEMO_ALERTS));
      return INITIAL_DEMO_ALERTS;
    }
    return JSON.parse(raw) as Alert[];
  } catch (err) {
    console.warn('Storage read error for alerts:', err);
    return INITIAL_DEMO_ALERTS;
  }
}

export async function createAlert(data: {
  keyword: string;
  level: string;
  location: string;
  frequency: Alert['frequency'];
  channel?: Alert['channel'];
}): Promise<Alert> {
  if (!data.keyword.trim()) {
    throw new Error('Please specify at least one target keyword or skill.');
  }

  if (!ENV.USE_MOCK) {
    const res = await request<Alert>('alerts', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res.ok && res.data) {
      return res.data;
    }
    throw new Error(res.error || 'Failed to create alert on server');
  }

  const existing = await getAlerts();
  const newAlert: Alert = {
    id: `alt-${Date.now()}`,
    keyword: data.keyword.trim(),
    level: data.level || 'Any Experience',
    location: data.location || 'Anywhere',
    frequency: data.frequency,
    channel: data.channel || 'Dashboard',
    active: true,
    createdAt: new Date().toISOString().split('T')[0],
    matchedCount: Math.floor(Math.random() * 5) + 1,
  };

  const updated = [newAlert, ...existing];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    throw new Error('Failed to save alert rule in browser storage.');
  }

  return newAlert;
}

export async function toggleAlert(alertId: string): Promise<Alert> {
  const existing = await getAlerts();
  const index = existing.findIndex((a) => a.id === alertId);
  if (index === -1) {
    throw new Error('Alert not found');
  }

  existing[index].active = !existing[index].active;

  if (!ENV.USE_MOCK) {
    await request(`alerts/${encodeURIComponent(alertId)}`, {
      method: 'PATCH',
      body: JSON.stringify({ active: existing[index].active }),
    });
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (err) {
    console.warn('Failed saving updated alert status:', err);
  }

  return existing[index];
}

export async function deleteAlert(alertId: string): Promise<void> {
  if (!ENV.USE_MOCK) {
    const res = await request(`alerts/${encodeURIComponent(alertId)}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(res.error || 'Failed to delete alert');
    }
  }

  const existing = await getAlerts();
  const filtered = existing.filter((a) => a.id !== alertId);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  } catch (err) {
    throw new Error('Failed to update storage.');
  }
}
