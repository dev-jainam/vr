import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  FileCheck, 
  BarChart, 
  AlertTriangle,
  Scale,
  CheckCircle,
  Eye,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const AuditServices: React.FC = () => {
  const { localMap } = useVault();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="bg-vr-navy py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="auditPattern" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M 120 0 L 0 0 0 120" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#auditPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Assurance • Regulatory Excellence</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Audit & <br/><span className="text-vr-blue italic">Assurance.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              In an era of increasing fiscal oversight, audit and assurance have become the twin pillars of corporate trust in Dubai’s business corridors. A rigorous audit process does more than satisfy legal mandates; it ensures institutional integrity and provides stakeholders with the confidence necessary for strategic growth and capital stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Audit Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Scope of Service</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight">Rigorous Quality <br/><span className="italic text-vr-blue">Control.</span></h3>
              
              <div className="grid gap-10">
                {[
                  { icon: Eye, title: "Internal Audit", desc: "Independent evaluation of internal controls, corporate governance, and operational accounting processes." },
                  { icon: FileCheck, title: "External Audit Support", desc: "Liaising with statutory auditors and ensuring full preparation of IFRS-compliant schedules and disclosures." },
                  { icon: Search, title: "Compliance Reviews", desc: "Detailed assessments to ensure alignment with UAE Corporate Tax, VAT, and Economic Substance Regulations." },
                  { icon: AlertTriangle, title: "Risk Assessment", desc: "Identifying financial and operational vulnerabilities to protect entity assets and shareholder value." }
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
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[3.5rem] overflow-hidden shadow-2xl grayscale contrast-125 brightness-75"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Audit Documentation" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-white p-8 rounded-[2rem] shadow-2xl border border-gray-100 hidden xl:block">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-vr-blue"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-vr-slate">Transparency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-vr-blue"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-vr-slate">Integrity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-vr-blue"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-vr-slate">Validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
      <section className="py-24 bg-vr-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-vr-navy border border-white/5 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-vr-blue opacity-[0.02] transition-opacity duration-1000 group-hover:opacity-[0.05]"></div>
            <HelpCircle className="w-16 h-16 text-vr-blue mx-auto mb-10 opacity-60 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl md:text-5xl font-bold luxury-font text-white mb-8 tracking-tight">Audit Procedural <span className="text-vr-blue">Queries?</span></h3>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto mb-12">Understand our methodology and UAE-specific statutory requirements through our partner FAQ.</p>
            <Link 
              to="/faq" 
              className="inline-flex items-center gap-4 text-vr-blue font-bold uppercase tracking-[0.4em] text-[11px] border-b-2 border-vr-blue/30 pb-2 hover:border-vr-blue hover:gap-6 transition-all"
            >
              Access Audit FAQ <ArrowRight className="w-4 h-4" />
            </Link>
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
              Validate Your <span className="text-vr-blue italic">Integrity.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Our audit specialists are available to discuss your annual reporting cycles and compliance requirements.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-2xl"
            >
              Request Audit Consultation <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AuditServices;