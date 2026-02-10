import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  CheckCircle, 
  ClipboardList, 
  ShieldCheck, 
  PieChart, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const FinancialReportsServices: React.FC = () => {
  const { localMap } = useVault();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  };

  const heroImg = localMap['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="bg-vr-navy py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="reportPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M0 0 L120 120 M120 0 L0 120" stroke="white" strokeWidth="0.6" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#reportPattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Institutional Reporting</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Financial <br /><span className="text-vr-blue italic">Reports.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              IFRS-led statements, board-ready packs, and audit-proof working papers that keep leadership informed and regulators confident.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reporting Suite */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Reporting Suite</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">
                Statements that <br /><span className="italic text-vr-blue">stand scrutiny.</span>
              </h3>

              <div className="grid gap-8">
                {[
                  { icon: FileText, title: 'IFRS Financials', desc: 'Complete primary statements and notes prepared in line with UAE standards.' },
                  { icon: BarChart3, title: 'Management Reporting', desc: 'Monthly dashboards, KPIs, and variance analysis tailored for decision-makers.' },
                  { icon: CheckCircle, title: 'Audit-Ready Files', desc: 'Clean reconciliations, schedules, and supporting packs for external auditors.' },
                  { icon: PieChart, title: 'Board & Investor Packs', desc: 'Presentation-ready briefs that translate performance into strategic insight.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-vr-blue group-hover:bg-vr-navy group-hover:text-white transition-all shadow-sm">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-vr-navy font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-vr-slate text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-[3.5rem] overflow-hidden shadow-3xl grayscale contrast-110 brightness-90 aspect-[4/5]"
              >
                <img 
                  src={heroImg} 
                  alt="Financial reporting" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute bottom-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block max-w-[280px]">
                <ClipboardList className="w-8 h-8 text-vr-blue mb-4" />
                <h4 className="text-vr-navy font-bold mb-2">Audit Proof</h4>
                <p className="text-vr-slate text-[10px] uppercase tracking-widest font-bold leading-relaxed">Supporting schedules aligned to your auditor's PBC lists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls & Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >
            {[
              { icon: ShieldCheck, title: 'Policy Alignment', copy: 'Accounting policies and disclosures consistent with UAE and international standards.' },
              { icon: BarChart3, title: 'Controls Testing', copy: 'Periodic review of reconciliations, approvals, and evidence trails for audit reliance.' },
              { icon: CheckCircle, title: 'Close Calendar', copy: 'Month- and year-end timetables with ownership, dependencies, and sign-offs.' }
            ].map((card, idx) => (
              <div key={idx} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_30px_70px_rgba(31,78,140,0.06)] hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-vr-blue/10 rounded-2xl flex items-center justify-center text-vr-blue mb-6">
                  <card.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-vr-navy mb-3">{card.title}</h4>
                <p className="text-vr-slate font-light leading-relaxed">{card.copy}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 bg-vr-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12 p-12 md:p-24 rounded-[4rem] border border-white/10 bg-white/5 group"
          >
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-3 text-vr-blue mb-6">
                <HelpCircle className="w-6 h-6" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Reporting Clarity</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold luxury-font text-white mb-6 tracking-tight">Need a reporting <span className="italic text-vr-blue">reset?</span></h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">See how we standardize working papers, disclosures, and governance so your statements pass audit without rework.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <Link 
                to="/faq" 
                className="bg-vr-blue text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-vr-navy transition-all transform hover:-translate-y-1 flex items-center gap-4 group/btn"
              >
                Explore FAQ <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy mb-12 tracking-tighter">
              Publish with <span className="text-vr-blue italic">confidence.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Let us prepare your next set of management reports or year-end financials with complete governance, clarity, and board-ready presentation.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-[0_30px_60px_rgba(31,78,140,0.15)]"
            >
              Schedule Reporting Support <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialReportsServices;
