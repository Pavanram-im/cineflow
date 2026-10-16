import { ENV } from '../config/env';
import { User } from '../types';
import { request } from './api';

const STORAGE_KEY = 'hireit_demo_user_v1';

export const DEFAULT_DEMO_USER: User = {
  id: 'usr-demo-01',
  name: 'Alex Morgan',
  email: 'alex.morgan@hireit.demo',
  title: 'Full Stack Engineer',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
  isDemoUser: true,
};

export async function getCurrentUser(): Promise<User | null> {
  if (!ENV.USE_MOCK) {
    const res = await request<User>('auth/me');
    return res.ok && res.data ? res.data : null;
  }

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY) || localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored) as User;
    }
  } catch (err) {
    console.warn('Unable to access browser storage for user session:', err);
  }
  return null;
}

export async function login(email: string, _password?: string): Promise<{ ok: boolean; user?: User; error?: string }> {
  if (!email || !email.includes('@')) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  if (!ENV.USE_MOCK) {
    const res = await request<{ user: User }>('auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password: _password }),
    });
    if (res.ok && res.data) {
      return { ok: true, user: res.data.user };
    }
    return { ok: false, error: res.error || 'Login failed.' };
  }

  // Phase One demo authentication
  await new Promise((r) => setTimeout(r, 120));

  const namePart = email.split('@')[0].replace(/[._-]/g, ' ');
  const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

  const demoUser: User = {
    id: `usr-${Date.now()}`,
    name: formattedName || 'Demo Jobseeker',
    email,
    title: 'Software Engineer',
    avatarUrl: DEFAULT_DEMO_USER.avatarUrl,
    isDemoUser: true,
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(demoUser));
  } catch (err) {
    console.warn('Failed saving user to storage:', err);
  }

  return { ok: true, user: demoUser };
}

export async function register(
  name: string,
  email: string,
  _password?: string
): Promise<{ ok: boolean; user?: User; error?: string }> {
  if (!name || name.trim().length < 2) {
    return { ok: false, error: 'Please enter a full name (minimum 2 characters).' };
  }
  if (!email || !email.includes('@')) {
    return { ok: false, error: 'Please provide a valid email address.' };
  }

  if (!ENV.USE_MOCK) {
    const res = await request<{ user: User }>('auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password: _password }),
    });
    if (res.ok && res.data) {
      return { ok: true, user: res.data.user };
    }
    return { ok: false, error: res.error || 'Registration failed.' };
  }

  // Phase One demo registration
  await new Promise((r) => setTimeout(r, 150));

  const newUser: User = {
    id: `usr-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    title: 'Candidate',
    isDemoUser: true,
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
  } catch (err) {
    console.warn('Failed saving user to storage:', err);
  }

  return { ok: true, user: newUser };
}

export async function logout(): Promise<void> {
  if (!ENV.USE_MOCK) {
    await request('auth/logout', { method: 'POST' });
  }

  try {
    sessionStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.warn('Failed clearing user from storage:', err);
  }
}
