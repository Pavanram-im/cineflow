import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Briefcase, 
  Bell, 
  Bookmark, 
  Menu, 
  X, 
  Sparkles, 
  User as UserIcon, 
  LogOut, 
  Layers, 
  ShieldCheck, 
  ChevronDown,
  Mail
} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { getApplications } from '../services/applications';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const { user, logout, demoLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [appCount, setAppCount] = useState<number>(0);

  useEffect(() => {
    getApplications().then((apps) => setAppCount(apps.length)).catch(() => {});
  }, [location.pathname]);

  const navLinks = [
    { name: 'Find Jobs', path: '/jobs', icon: Briefcase },
    { 
      name: 'Tracker', 
      path: '/tracker', 
      icon: Bookmark, 
      badge: appCount > 0 ? String(appCount) : undefined 
    },
    { name: 'Alerts', path: '/alerts', icon: Bell },
    { name: 'About', path: '/#about', icon: Layers },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path === '/#about') {
      if (location.pathname !== '/') {
        navigate('/#about');
      } else {
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (path: string) => {
    if (path === '/#about') return false;
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2F4BFF] to-[#4F6BFF] flex items-center justify-center text-white shadow-md shadow-[#2F4BFF]/20 group-hover:scale-105 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-2xl tracking-tight text-[#0E1726] leading-none">
                Hire<span className="text-[#2F4BFF]">It</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B6577] leading-none mt-0.5">
                Unified Feed
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition ${
                    active
                      ? 'text-[#2F4BFF] bg-[#2F4BFF]/10 font-semibold'
                      : 'text-[#5B6577] hover:text-[#0E1726] hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 bg-[#2F4BFF] text-white text-[10px] font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden md:flex items-center gap-3">
            {/* Demo Status Pill */}
            <button
              onClick={onOpenAuditModal}
              title="Click to view Phase 1 Audit & Architecture Roadmap"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Demo Mode</span>
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 bg-white transition cursor-pointer"
                >
                  {user.avatarUrl ? (
                    <img
                      src={user.avatarUrl}
                      alt={user.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-[#2F4BFF] text-white text-xs font-bold flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-xs font-medium text-[#0E1726] max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userDropdownOpen && (
                  <div 
                    className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                    onMouseLeave={() => setUserDropdownOpen(false)}
                  >
                    <div className="px-4 py-2.5 border-b border-slate-100">
                      <p className="text-xs font-bold text-[#0E1726] truncate">{user.name}</p>
                      <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                      <span className="inline-block mt-1 text-[10px] bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded-full">
                        Local Demo Session
                      </span>
                    </div>

                    <Link
                      to="/tracker"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-xs text-[#0E1726] hover:bg-slate-50 transition"
                    >
                      <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                      <span>My Tracked Jobs ({appCount})</span>
                    </Link>

                    <Link
                      to="/alerts"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-xs text-[#0E1726] hover:bg-slate-50 transition"
                    >
                      <Bell className="w-3.5 h-3.5 text-slate-500" />
                      <span>My Job Alerts</span>
                    </Link>

                    <div className="border-t border-slate-100 my-1" />

                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={demoLogin}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#D9F5E8] text-[#0E7044] hover:bg-[#c2efda] transition cursor-pointer"
                  title="Simulate 1-click test login as Alex Morgan"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Quick Demo Login</span>
                </button>
                <Link
                  to="/auth"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2F4BFF] text-white hover:bg-[#2338C9] shadow-xs transition"
                >
                  <UserIcon className="w-3.5 h-3.5" />
                  <span>Sign In</span>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAuditModal}
              className="p-1.5 text-emerald-700 bg-emerald-50 rounded-lg text-xs font-bold"
              aria-label="View demo status"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active
                      ? 'text-[#2F4BFF] bg-[#2F4BFF]/10 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-slate-500" />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 bg-[#2F4BFF] text-white text-xs font-bold rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            {user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#2F4BFF] text-white text-xs font-bold flex items-center justify-center">
                    {user.name.charAt(0)}
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold text-[#0E1726]">{user.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 bg-rose-50 rounded-lg hover:bg-rose-100 transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    demoLogin();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold bg-[#D9F5E8] text-[#0E7044] rounded-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Demo Login</span>
                </button>
                <Link
                  to="/auth"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold bg-[#2F4BFF] text-white rounded-lg"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Sign In</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
