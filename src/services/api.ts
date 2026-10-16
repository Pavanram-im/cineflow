import { ENV } from '../config/env';

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  ok: boolean;
  status: number;
}

/**
 * Normalized API client wrapper.
 * In Phase One (VITE_USE_MOCK=true), services handle mock data directly.
 * In Phase Two (VITE_USE_MOCK=false), requests hit VITE_API_BASE_URL.
 */
export async function request<T = unknown>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  // Normalize base and endpoint to prevent double slashes
  const baseUrl = ENV.API_BASE_URL.replace(/\/+$/, '');
  const cleanEndpoint = endpoint.replace(/^\/+/, '');
  const url = `${baseUrl}/${cleanEndpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...options.headers,
      },
      credentials: 'include',
    });

    const contentType = res.headers.get('content-type');
    let data: unknown = null;
    if (contentType && contentType.includes('application/json')) {
      data = await res.json();
    } else {
      const text = await res.text();
      data = text ? { message: text } : null;
    }

    if (!res.ok) {
      const errorMessage =
        data && typeof data === 'object' && 'message' in data
          ? String((data as { message: unknown }).message)
          : `HTTP error ${res.status}`;
      return { ok: false, status: res.status, error: errorMessage };
    }

    return { ok: true, status: res.status, data: data as T };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network connection failed';
    return { ok: false, status: 0, error: message };
  }
}
