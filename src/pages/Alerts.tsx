import React, { useState, useEffect } from 'react';
import { 
  Bell, 
  PlusCircle, 
  Trash2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  MapPin, 
  Layers, 
  ToggleLeft, 
  ToggleRight,
  Mail,
  Send
} from 'lucide-react';
import { Alert, AlertFrequency } from '../types';
import { getAlerts, createAlert, toggleAlert, deleteAlert } from '../services/alerts';
import { useAuth } from '../hooks/useAuth';

export const Alerts: React.FC = () => {
  const { user, demoLogin } = useAuth();
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  // Form State
  const [keyword, setKeyword] = useState('');
  const [level, setLevel] = useState('Any Experience');
  const [location, setLocation] = useState('Remote');
  const [frequency, setFrequency] = useState<AlertFrequency>('Daily');
  const [channel, setChannel] = useState<'Dashboard' | 'Email' | 'Telegram (Demo)'>('Dashboard');
  const [creating, setCreating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const loadAlerts = async () => {
    setLoading(true);
    try {
      const data = await getAlerts();
      setAlerts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!keyword.trim()) {
      setErrorMsg('Please specify target keywords, skills, or titles.');
      return;
    }

    setCreating(true);
    try {
      const newAlert = await createAlert({
        keyword,
        level,
        location,
        frequency,
        channel,
      });
      setAlerts([newAlert, ...alerts]);
      setKeyword('');
      setSuccessMsg('Job alert rule created successfully in browser cache!');
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed creating alert rule');
    } finally {
      setCreating(false);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      const updated = await toggleAlert(id);
      setAlerts((prev) => prev.map((a) => (a.id === id ? updated : a)));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this job alert rule?')) return;
    try {
      await deleteAlert(id);
      setAlerts((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      alert('Failed deleting alert.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#2F4BFF] uppercase tracking-wider block mb-1">
            Proactive Notifications
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0E1726]">
            Job Alert Manager
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Specify customized search criteria to receive real-time updates as soon as verified openings go live.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold self-start sm:self-auto">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>Phase 1 Simulated Alerts</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Col: Create Alert Form */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-[#2F4BFF]/10 text-[#2F4BFF] flex items-center justify-center">
              <PlusCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-[#0E1726]">
              Create New Job Alert
            </h3>
          </div>

          {errorMsg && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleCreate} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Target Keywords / Skills / Titles *
              </label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. React, Staff Engineer, AI / ML..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2F4BFF]/20 focus:border-[#2F4BFF]"
                required
              />
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Separate multiple terms with OR or commas.
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Experience Level
                </label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2F4BFF]"
                >
                  <option value="Any Experience">Any Experience</option>
                  <option value="Entry-level">Entry-level</option>
                  <option value="Mid-level">Mid-level</option>
                  <option value="Senior">Senior</option>
                  <option value="Lead">Lead</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Location Preference
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2F4BFF]"
                >
                  <option value="Remote">Remote Only</option>
                  <option value="United States">United States</option>
                  <option value="Europe / UK">Europe / UK</option>
                  <option value="India / Asia">India / Asia</option>
                  <option value="Anywhere">Anywhere</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Alert Frequency
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as AlertFrequency)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2F4BFF]"
                >
                  <option value="Instant">Instant (Real-time)</option>
                  <option value="Daily">Daily Digest</option>
                  <option value="Weekly">Weekly Summary</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Delivery Channel
                </label>
                <select
                  value={channel}
                  onChange={(e) => setChannel(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-[#2F4BFF]"
                >
                  <option value="Dashboard">Dashboard Feed</option>
                  <option value="Email">Email Notification</option>
                  <option value="Telegram (Demo)">Telegram Bot</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={creating}
                className="w-full py-2.5 bg-[#2F4BFF] hover:bg-[#2338C9] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#2F4BFF]/20 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-60"
              >
                <Bell className="w-4 h-4" />
                <span>{creating ? 'Saving Alert...' : 'Create Alert Rule'}</span>
              </button>
            </div>
          </form>

          {/* Backend Explanation Footnote */}
          <div className="p-3 bg-slate-50 rounded-xl text-[11px] text-slate-500 border border-slate-100 space-y-1">
            <span className="font-bold text-slate-700 block">Production Phase 2 Architecture:</span>
            <span>
              Real-world alerts will trigger via an automated Redis queue worker and transactional email provider whenever newly ingested ATS vacancies match candidate rules.
            </span>
          </div>
        </div>

        {/* Right Col: Active Alerts List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-lg text-[#0E1726]">
              Configured Alerts ({alerts.length})
            </h3>
            <span className="text-xs text-slate-500">
              Browser Storage Sync
            </span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              Loading active alert configurations...
            </div>
          ) : alerts.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
              <Bell className="w-8 h-8 text-slate-300 mx-auto" />
              <h4 className="font-display font-bold text-base text-[#0E1726]">
                No alert rules configured yet
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Use the form on the left to set up criteria for your preferred roles.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {alerts.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl border p-4 sm:p-5 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    item.active
                      ? 'border-slate-200 shadow-xs'
                      : 'border-slate-200/60 opacity-60 bg-slate-50/50'
                  }`}
                >
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-display font-bold text-base text-[#0E1726]">
                        {item.keyword}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                        {item.level}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {item.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-500 flex-wrap">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.frequency}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.channel}</span>
                      </span>
                      <span>•</span>
                      <span className="text-emerald-600 font-medium">
                        {item.matchedCount} sample matches
                      </span>
                    </div>
                  </div>

                  {/* Actions: Toggle Active and Delete */}
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0E1726] transition cursor-pointer"
                      title={item.active ? 'Pause alert' : 'Resume alert'}
                    >
                      {item.active ? (
                        <>
                          <ToggleRight className="w-6 h-6 text-emerald-600" />
                          <span className="text-emerald-700">Active</span>
                        </>
                      ) : (
                        <>
                          <ToggleLeft className="w-6 h-6 text-slate-400" />
                          <span className="text-slate-500">Paused</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-slate-400 hover:text-rose-600 p-2 rounded-xl hover:bg-rose-50 transition cursor-pointer"
                      title="Delete alert"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
