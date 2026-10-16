/**
 * Environment configuration for HireIt.
 * In Phase One (prototype), VITE_USE_MOCK defaults to true.
 */
export const ENV = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  USE_MOCK: import.meta.env.VITE_USE_MOCK !== 'false', // default true for safe demo
  APP_NAME: 'HireIt',
  VERSION: '1.0.0-phase1-demo',
};
