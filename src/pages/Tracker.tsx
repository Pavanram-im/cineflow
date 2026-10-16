import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  Edit3, 
  Save, 
  Building2, 
  MapPin, 
  DollarSign, 
  Sparkles, 
  PlusCircle, 
  AlertCircle,
  Eye,
  Send,
  Calendar,
  UserCheck
} from 'lucide-react';
import { Application, ApplicationStatus, Job } from '../types';
import { getApplications, updateApplicationStatus, removeApplication } from '../services/applications';
import { JobDetailModal } from '../components/JobDetailModal';
import { useAuth } from '../hooks/useAuth';

export const Tracker: React.FC = () => {
  const { user, demoLogin } = useAuth();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState<string>('');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const statuses: { label: string; value: string; color: string }[] = [
    { label: 'All Applications', value: 'All', color: 'bg-slate-100 text-slate-800' },
    { label: 'Saved', value: 'Saved', color: 'bg-amber-100 text-amber-800' },
    { label: 'Applied', value: 'Applied', color: 'bg-blue-100 text-blue-800' },
    { label: 'Interviewing', value: 'Interviewing', color: 'bg-purple-100 text-purple-800' },
    { label: 'Offer', value: 'Offer', color: 'bg-emerald-100 text-emerald-800' },
    { label: 'Rejected', value: 'Rejected', color: 'bg-rose-100 text-rose-800' },
  ];

  const loadData = async () => {
    setLoading(true);
    try {
      const apps = await getApplications();
      setApplications(apps);
    } catch (err) {
      console.error('Failed loading applications:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (appId: string, newStatus: ApplicationStatus) => {
    try {
      const updated = await updateApplicationStatus(appId, newStatus);
      setApplications((prev) => prev.map((a) => (a.id === appId ? updated : a)));
    } catch (err) {
      alert(`Could not update status: ${err instanceof Error ? err.message : 'Error'}`);
    }
  };

  const handleStartEditNote = (app: Application) => {
    setEditingId(app.id);
    setNoteDraft(app.notes || '');
  };

  const handleSaveNote = async (appId: string) => {
    try {
      const app = applications.find((a) => a.id === appId);
      if (!app) return;
      const updated = await updateApplicationStatus(appId, app.status, noteDraft);
      setApplications((prev) => prev.map((a) => (a.id === appId ? updated : a)));
      setEditingId(null);
    } catch (err) {
      alert('Failed saving note to browser storage.');
    }
  };

  const handleRemove = async (appId: string) => {
    if (!window.confirm('Remove this opportunity from your application tracker?')) return;
    try {
      await removeApplication(appId);
      setApplications((prev) => prev.filter((a) => a.id !== appId));
    } catch (err) {
      alert('Failed removing record.');
    }
  };

  const filteredApps = applications.filter((a) => {
    if (statusFilter === 'All') return true;
    return a.status === statusFilter;
  });

  const getStatusBadge = (status: ApplicationStatus) => {
    switch (status) {
      case 'Saved':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Applied':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Interviewing':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Offer':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold';
      case 'Rejected':
        return 'bg-rose-50 text-rose-700 border-rose-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#2F4BFF] uppercase tracking-wider block mb-1">
            Candidate Pipeline
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0E1726]">
            Application Tracker
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Organize bookmarked roles, track interview stages, and log personal preparation notes.
          </p>
        </div>

        <Link
          to="/jobs"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#2F4BFF] hover:bg-[#2338C9] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition self-start sm:self-auto cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Browse More Jobs</span>
        </Link>
      </div>

      {/* Demo Session Notice */}
      {!user && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-blue-900">
          <div className="flex items-center gap-2.5">
            <UserCheck className="w-5 h-5 text-[#2F4BFF] shrink-0" />
            <span>
              Your tracked applications are cached in your current browser profile.
            </span>
          </div>
          <button
            onClick={demoLogin}
            className="px-3.5 py-1.5 bg-[#2F4BFF] text-white font-semibold text-xs rounded-lg hover:bg-[#2338C9] transition shrink-0 cursor-pointer"
          >
            Sign in as Demo User
          </button>
        </div>
      )}

      {/* Status Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-slate-200">
        {statuses.map((s) => {
          const active = statusFilter === s.value;
          const count =
            s.value === 'All'
              ? applications.length
              : applications.filter((a) => a.status === s.value).length;

          return (
            <button
              key={s.value}
              onClick={() => setStatusFilter(s.value)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition cursor-pointer ${
                active
                  ? 'bg-[#0E1726] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{s.label}</span>
              <span
                className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                  active ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-700'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* List / Board Content */}
      {loading ? (
        <div className="py-12 text-center text-slate-400 text-sm">
          Loading application pipeline...
        </div>
      ) : filteredApps.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-slate-200 max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-[#0E1726]">
            No applications in {statusFilter === 'All' ? 'your tracker' : `"${statusFilter}"`}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Click the bookmark icon on any job card or use the "Simulate Apply" action to automatically populate your tracker.
          </p>
          <Link
            to="/jobs"
            className="inline-block px-4 py-2 bg-[#2F4BFF] text-white text-xs font-semibold rounded-xl hover:bg-[#2338C9] transition"
          >
            Discover Openings
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs p-5 flex flex-col justify-between space-y-4 transition"
            >
              {/* Card Header: Company, Title, Remove */}
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block truncate">
                      {app.job.company}
                    </span>
                    <h3 
                      onClick={() => setSelectedJob(app.job)}
                      className="font-display font-bold text-base text-[#0E1726] hover:text-[#2F4BFF] transition cursor-pointer line-clamp-2 leading-snug"
                    >
                      {app.job.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => handleRemove(app.id)}
                    className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition cursor-pointer shrink-0"
                    title="Remove from tracker"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Sub info */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{app.job.location}</span>
                  </span>
                  <span>•</span>
                  <span>{app.job.salary}</span>
                </div>

                {/* Status Stage Selector */}
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 mb-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">Pipeline Stage:</span>
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[11px] border ${getStatusBadge(app.status)}`}>
                      {app.status}
                    </span>
                  </div>

                  <select
                    value={app.status}
                    onChange={(e) => handleStatusChange(app.id, e.target.value as ApplicationStatus)}
                    className="w-full text-xs font-semibold bg-white border border-slate-200 rounded-lg py-1.5 px-2.5 text-[#0E1726] focus:outline-none focus:border-[#2F4BFF] cursor-pointer"
                  >
                    <option value="Saved">Stage: Saved (Considering)</option>
                    <option value="Applied">Stage: Applied (Submitted)</option>
                    <option value="Interviewing">Stage: Interviewing</option>
                    <option value="Offer">Stage: Offer Received 🎉</option>
                    <option value="Rejected">Stage: Archived / Rejected</option>
                  </select>
                </div>

                {/* Notes Section */}
                <div className="text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-500 font-medium">
                    <span>Preparation Notes:</span>
                    {editingId !== app.id && (
                      <button
                        onClick={() => handleStartEditNote(app)}
                        className="text-[#2F4BFF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Edit</span>
                      </button>
                    )}
                  </div>

                  {editingId === app.id ? (
                    <div className="space-y-2">
                      <textarea
                        rows={3}
                        value={noteDraft}
                        onChange={(e) => setNoteDraft(e.target.value)}
                        placeholder="Add interview notes, referrals, follow-up deadlines..."
                        className="w-full p-2 bg-slate-50 border border-[#2F4BFF] rounded-lg text-xs text-[#0E1726] focus:outline-none"
                      />
                      <div className="flex justify-end gap-1.5">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-2 py-1 text-slate-500 hover:text-slate-800 text-[11px] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleSaveNote(app.id)}
                          className="flex items-center gap-1 px-2.5 py-1 bg-[#2F4BFF] text-white rounded-md text-[11px] font-semibold cursor-pointer"
                        >
                          <Save className="w-3 h-3" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs italic min-h-[42px]">
                      {app.notes || 'No notes added yet. Click edit to log recruiter conversations or prep topics.'}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Updated {new Date(app.updatedAt).toLocaleDateString()}</span>
                </span>
                <button
                  onClick={() => setSelectedJob(app.job)}
                  className="flex items-center gap-1 text-[#2F4BFF] hover:underline font-semibold cursor-pointer"
                >
                  <Eye className="w-3 h-3" />
                  <span>Job Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      <JobDetailModal
        job={selectedJob}
        isOpen={Boolean(selectedJob)}
        onClose={() => setSelectedJob(null)}
        isSaved={true}
        onToggleSave={() => {}}
        onApplySimulated={() => {}}
      />
    </div>
  );
};
