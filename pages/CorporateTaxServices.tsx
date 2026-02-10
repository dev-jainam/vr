import React from 'react';
import { motion } from 'framer-motion';
import { 
  Scale, 
  ArrowRight, 
  UserPlus, 
  Compass, 
  FileCheck, 
  Activity,
  ShieldAlert,
  Target,
  Gavel,
  PieChart,
  CheckCircle,
  Briefcase,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const CorporateTaxServices: React.FC = () => {
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
              <pattern id="taxPattern" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#taxPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Strategic Taxation • National Mandate</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Corporate <br/><span className="text-vr-blue italic">Tax Advisory.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              The introduction of the UAE’s 9% Federal Corporate Tax marks the most significant evolution in the region’s economic history. In this new era, institutional advisory is not merely about calculating tax; it is about re-architecting corporate structures to ensure long-term wealth preservation and absolute compliance with the Ministry of Finance guidelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Corporate Tax Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Engagement Scope</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">Institutional <br/><span className="italic text-vr-blue">Tax Oversight.</span></h3>
              
              <div className="grid gap-8">
                {[
                  { icon: UserPlus, title: "Tax Registration", desc: "Formalized registration with the FTA, ensuring accurate classification of 'Qualifying' or 'Non-Qualifying' status." },
                  { icon: Compass, title: "Planning & Advisory", desc: "Strategic structuring of nexus, transfer pricing, and group relief to optimize the entity's global tax footprint." },
                  { icon: FileCheck, title: "Filing & Compliance", desc: "Rigorous preparation and submission of annual Corporate Tax returns and supporting financial schedules." },
                  { icon: ShieldAlert, title: "Risk Evaluation", desc: "Diagnostic impact assessments to identify potential liabilities across Free Zone and Mainland operations." }
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
                className="rounded-[3.5rem] overflow-hidden shadow-3xl grayscale contrast-125 brightness-75 aspect-[4/5]"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Corporate Strategy" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute bottom-12 -left-12 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block max-w-[280px]">
                <Gavel className="w-8 h-8 text-vr-blue mb-4" />
                <h4 className="text-vr-navy font-bold mb-2">9% Rate Alignment</h4>
                <p className="text-vr-slate text-[10px] uppercase tracking-widest font-bold leading-relaxed">Ensuring your entity meets the small business relief and qualifying person criteria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
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
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Knowledge Repository</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold luxury-font text-white mb-6 tracking-tight">Technical Tax <span className="italic text-vr-blue">Briefs.</span></h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">Explore in-depth answers regarding qualifying persons, small business relief, and multi-jurisdictional tax nexus.</p>
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
              Orchestrate Your <span className="text-vr-blue italic">Strategy.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Our partners are available for high-level consultations regarding Corporate Tax registration, impact analysis, and structuring.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-[0_30px_60px_rgba(31,78,140,0.15)]"
            >
              Consult Corporate Tax Experts <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateTaxServices;