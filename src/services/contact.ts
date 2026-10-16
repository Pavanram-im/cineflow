import { ENV } from '../config/env';
import { request } from './api';

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  inquiryType?: string;
  message: string;
}

export async function sendContactMessage(
  payload: ContactPayload
): Promise<{ ok: boolean; message: string }> {
  if (!payload.name || payload.name.trim().length < 2) {
    throw new Error('Please enter your name.');
  }
  if (!payload.email || !payload.email.includes('@')) {
    throw new Error('Please enter a valid email address.');
  }
  if (!payload.message || payload.message.trim().length < 10) {
    throw new Error('Please enter a message of at least 10 characters.');
  }

  if (!ENV.USE_MOCK) {
    const res = await request<{ ok: boolean; message?: string }>('contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      return { ok: true, message: 'Message sent successfully.' };
    }
    throw new Error(res.error || 'Failed to submit contact request.');
  }

  // Phase One demo submission: micro-delay and transparent feedback
  await new Promise((r) => setTimeout(r, 200));

  return {
    ok: true,
    message:
      'Thank you! In this Phase One demo mode, your inquiry has been simulated and validated. (Real backend email/ticket ingestion will connect in Phase Two).',
  };
}
