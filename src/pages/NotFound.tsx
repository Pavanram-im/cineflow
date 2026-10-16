import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home as HomeIcon, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-[#2F4BFF]/10 text-[#2F4BFF] flex items-center justify-center mx-auto font-display font-extrabold text-3xl">
        404
      </div>

      <div className="space-y-2">
        <h1 className="font-display font-bold text-2xl text-[#0E1726]">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          The link you followed may be broken or the listing may have expired.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="w-full sm:w-auto px-5 py-2.5 bg-[#0E1726] hover:bg-[#1A263D] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition"
        >
          <HomeIcon className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
        <Link
          to="/jobs"
          className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition"
        >
          <Search className="w-4 h-4" />
          <span>Browse Jobs</span>
        </Link>
      </div>
    </div>
  );
};
