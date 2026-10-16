import React, { createContext, useContext, useEffect, useState } from 'react';
import { DEFAULT_DEMO_USER, getCurrentUser, login as authLogin, logout as authLogout, register as authRegister } from '../services/auth';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<{ ok: boolean; error?: string }>;
  register: (name: string, email: string, password?: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => Promise<void>;
  demoLogin: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    getCurrentUser()
      .then((curr) => {
        if (mounted) {
          setUser(curr);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (mounted) setIsLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const login = async (email: string, password?: string) => {
    setIsLoading(true);
    const res = await authLogin(email, password);
    setIsLoading(false);
    if (res.ok && res.user) {
      setUser(res.user);
      return { ok: true };
    }
    return { ok: false, error: res.error || 'Login failed' };
  };

  const register = async (name: string, email: string, password?: string) => {
    setIsLoading(true);
    const res = await authRegister(name, email, password);
    setIsLoading(false);
    if (res.ok && res.user) {
      setUser(res.user);
      return { ok: true };
    }
    return { ok: false, error: res.error || 'Registration failed' };
  };

  const logout = async () => {
    await authLogout();
    setUser(null);
  };

  const demoLogin = async () => {
    setIsLoading(true);
    const res = await authLogin(DEFAULT_DEMO_USER.email, 'demo-password-123');
    setIsLoading(false);
    if (res.ok && res.user) {
      setUser({ ...res.user, name: DEFAULT_DEMO_USER.name, title: DEFAULT_DEMO_USER.title });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, demoLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
