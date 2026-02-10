import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  Search, 
  FileText, 
  AlertCircle, 
  Lock, 
  Gavel, 
  CheckCircle, 
  Fingerprint, 
  Scale,
  Activity,
  UserCheck,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const AMLComplianceServices: React.FC = () => {
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
              <pattern id="amlPattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="white" />
                <path d="M 50 0 L 50 100 M 0 50 L 100 50" stroke="white" strokeWidth="0.2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#amlPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Compliance • Institutional Integrity</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              AML <br/><span className="text-vr-blue italic">Compliance.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              As the UAE solidifies its position as a transparent global financial hub, Anti-Money Laundering (AML) and Counter-Financing of Terrorism (CFT) compliance has transitioned from a best practice to an absolute mandate. For Designated Non-Financial Businesses and Professions (DNFBPs), robust compliance is the safeguard against institutional risk and administrative penalties.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our AML Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Capabilities</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">Structured <br/><span className="italic text-vr-blue">Compliance Frameworks.</span></h3>
              
              <div className="grid gap-10">
                {[
                  { icon: FileText, title: "AML Policy Development", desc: "Crafting bespoke AML/CFT manuals and standard operating procedures aligned with UAE Federal Law No. (20) of 2018." },
                  { icon: Fingerprint, title: "Risk Assessment", desc: "Institutional-grade diagnostic reviews to identify customer, geographic, and product-level vulnerabilities." },
                  { icon: Search, title: "Compliance Audits", desc: "Independent and rigorous testing of internal controls to ensure ongoing alignment with Ministry of Economy standards." },
                  { icon: Activity, title: "Regulatory Reporting Support", desc: "Expert management of the GoAML portal, including STR/SAR filing and automated compliance monitoring." }
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[4rem] overflow-hidden shadow-3xl grayscale contrast-125 brightness-75 aspect-[4/5]"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Corporate Security" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute top-1/2 -left-16 -translate-y-1/2 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden xl:block max-w-[280px]">
                <UserCheck className="w-8 h-8 text-vr-blue mb-6" />
                <h4 className="text-vr-navy font-bold mb-2">GoAML Expert</h4>
                <p className="text-vr-slate text-[10px] uppercase tracking-widest font-bold leading-relaxed">Assisting entities in complex portal registration and mandatory reporting cycles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-vr-navy border border-white/10 rounded-[4rem] p-12 md:p-24 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-vr-blue opacity-[0.02] transition-opacity duration-700 group-hover:opacity-[0.05]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-3/4">
                <div className="flex items-center gap-4 text-vr-blue mb-6">
                  <HelpCircle className="w-8 h-8" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Institutional Knowledge Base</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold luxury-font text-white mb-6">Regulatory <span className="text-vr-blue italic">Certainty.</span></h3>
                <p className="text-gray-400 text-lg font-light leading-relaxed">Addressing technical GoAML reporting and UAE Ministry of Economy compliance requirements.</p>
              </div>
              <div className="md:w-1/4 flex justify-center md:justify-end">
                <Link 
                  to="/faq" 
                  className="bg-white text-vr-navy px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue hover:text-white transition-all flex items-center gap-4 group/btn shadow-2xl"
                >
                  Explore FAQ <ArrowRight className="w-4 h-4 text-vr-navy transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </div>
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
              Validate Your <span className="text-vr-blue italic">Safeguards.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Our AML specialists are available for institutional audits and framework development for DNFBPs and financial entities.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-3xl"
            >
              Ensure AML Compliance <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AMLComplianceServices;