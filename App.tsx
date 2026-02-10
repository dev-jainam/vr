import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Team from './pages/Team.tsx';
import Services from './pages/Services.tsx';
import AccountingServices from './pages/AccountingServices.tsx';
import AuditServices from './pages/AuditServices.tsx';
import BusinessAdvisoryServices from './pages/BusinessAdvisoryServices.tsx';
import AMLComplianceServices from './pages/AMLComplianceServices.tsx';
import FinancialReportsServices from './pages/FinancialReportsServices.tsx';
import TaxPlanningServices from './pages/TaxPlanningServices.tsx';
import Industries from './pages/Industries.tsx';
import Contact from './pages/Contact.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
import FAQ from './pages/FAQ.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import TermsOfEngagement from './pages/TermsOfEngagement.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import Chatbot from './components/Chatbot.tsx';
import { VaultProvider, useVault } from './VaultContext.tsx';
import { Loader2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { pathname } = useLocation();
  const { isReady, progress } = useVault();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!isReady) {
    return (
      <div className="fixed inset-0 bg-vr-navy flex flex-col items-center justify-center z-[9999]">
        <div className="relative mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-vr-blue/30 p-1 animate-pulse bg-white flex items-center justify-center">
            <img src="/logo.png" alt="VR Global" className="w-full h-full object-contain rounded-full" />
          </div>
          <div className="absolute inset-0 bg-vr-blue blur-3xl opacity-10"></div>
        </div>
        <h2 className="luxury-font text-white text-4xl mb-4 tracking-widest uppercase text-center px-6">VR GLOBAL</h2>
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.5em] mb-8 font-semibold">Institutional Excellence</p>
        
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
          <div 
            className="h-full bg-vr-blue transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="flex items-center gap-2 text-vr-blue font-mono text-[10px] uppercase tracking-widest">
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>Syncing Global Assets {progress}%</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-vr-blue/20">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/accounting" element={<AccountingServices />} />
          <Route path="/services/financial-reports" element={<FinancialReportsServices />} />
          <Route path="/services/tax-planning" element={<TaxPlanningServices />} />
          <Route path="/services/business-advisory" element={<BusinessAdvisoryServices />} />
          <Route path="/services/aml-compliance" element={<AMLComplianceServices />} />
          <Route path="/services/audit" element={<AuditServices />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-engagement" element={<TermsOfEngagement />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <VaultProvider>
      <AppContent />
    </VaultProvider>
  );
};

export default App;
