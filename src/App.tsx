import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModeModal } from './components/DemoModeModal';

import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Tracker } from './pages/Tracker';
import { Alerts } from './pages/Alerts';
import { Auth } from './pages/Auth';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F6F7F9] text-[#0E1726] selection:bg-[#2F4BFF]/20 selection:text-[#2F4BFF]">
          {/* Top Demo Notice Announcement */}
          <DemoNoticeBanner onOpenAuditModal={() => setAuditModalOpen(true)} />

          {/* Sticky Navbar */}
          <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

          {/* Main Content Area */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home onOpenAuditModal={() => setAuditModalOpen(true)} />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/tracker" element={<Tracker />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/login" element={<Navigate to="/auth" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Platform Footer */}
          <Footer onOpenAuditModal={() => setAuditModalOpen(true)} />

          {/* Audit & Backend Architecture Modal */}
          <DemoModeModal
            isOpen={auditModalOpen}
            onClose={() => setAuditModalOpen(false)}
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
