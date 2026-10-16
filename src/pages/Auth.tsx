import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { 
  Briefcase, 
  Lock, 
  Mail, 
  User as UserIcon, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export const Auth: React.FC = () => {
  const { user, login, register, demoLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [mode, setMode] = useState<'signin' | 'register'>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // If already logged in, redirect
  React.useEffect(() => {
    if (user) {
      navigate('/tracker');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      if (mode === 'signin') {
        const res = await login(email, password);
        if (!res.ok) {
          setErrorMsg(res.error || 'Failed to sign in.');
        } else {
          navigate('/tracker');
        }
      } else {
        const res = await register(name, email, password);
        if (!res.ok) {
          setErrorMsg(res.error || 'Failed to create account.');
        } else {
          navigate('/tracker');
        }
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Authentication failed.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleQuickDemo = async () => {
    setSubmitting(true);
    await demoLogin();
    setSubmitting(false);
    navigate('/tracker');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12 sm:py-16 space-y-6">
      {/* Brand Header */}
      <div className="text-center space-y-2">
        <Link to="/" className="inline-flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2F4BFF] to-[#4F6BFF] flex items-center justify-center text-white shadow-md shadow-[#2F4BFF]/20">
            <Briefcase className="w-5 h-5" />
          </div>
          <span className="font-display font-extrabold text-2xl text-[#0E1726]">
            Hire<span className="text-[#2F4BFF]">It</span>
          </span>
        </Link>
        <h1 className="font-display font-bold text-2xl text-[#0E1726]">
          {mode === 'signin' ? 'Welcome Back' : 'Create Candidate Account'}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Access your saved jobs, application status pipeline, and notification alert rules.
        </p>
      </div>

      {/* Quick 1-Click Demo Login Callout */}
      <div className="p-4 bg-gradient-to-br from-[#D9F5E8] to-[#c7f1dd] rounded-2xl border border-emerald-300 shadow-xs space-y-2.5">
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>Quick Evaluation Mode (1-Click)</span>
        </div>
        <p className="text-xs text-emerald-950 leading-relaxed">
          Skip typing credentials. Log in immediately as sample engineer <strong>Alex Morgan</strong> to test saved jobs and tracker features.
        </p>
        <button
          onClick={handleQuickDemo}
          disabled={submitting}
          className="w-full py-2 bg-[#0E7044] hover:bg-[#0c5c37] text-white text-xs font-semibold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-60"
        >
          <span>Instant 1-Click Demo Login</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Auth Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
        {/* Tab Toggle */}
        <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold text-slate-600">
          <button
            onClick={() => {
              setMode('signin');
              setErrorMsg(null);
            }}
            className={`py-2 rounded-lg transition cursor-pointer ${
              mode === 'signin' ? 'bg-white text-[#0E1726] shadow-xs' : 'hover:text-[#0E1726]'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => {
              setMode('register');
              setErrorMsg(null);
            }}
            className={`py-2 rounded-lg transition cursor-pointer ${
              mode === 'register' ? 'bg-white text-[#0E1726] shadow-xs' : 'hover:text-[#0E1726]'
            }`}
          >
            Create Account
          </button>
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          {mode === 'register' && (
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Morgan"
                  required
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-slate-700">Password *</label>
              <span className="text-[11px] text-slate-400">Any password in demo mode</span>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                required
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#2F4BFF]/20 transition cursor-pointer disabled:opacity-60 mt-2"
          >
            {submitting ? 'Authenticating...' : mode === 'signin' ? 'Sign In to Demo' : 'Create Demo Account'}
          </button>
        </form>

        {/* Audit Transparency Disclaimer */}
        <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-100 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
          <span>
            <strong>Simulated Auth:</strong> Sessions are stored in <code>localStorage</code>. No passwords are transmitted over networks or written to a database.
          </span>
        </div>
      </div>
    </div>
  );
};
