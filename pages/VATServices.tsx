import React from 'react';
import { motion } from 'framer-motion';
import { 
  Receipt, 
  ArrowRight, 
  FileSearch, 
  ShieldCheck, 
  Scale, 
  ShoppingBag, 
  Hammer, 
  Briefcase, 
  Truck,
  CheckCircle,
  Clock,
  ChevronRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const VATServices: React.FC = () => {
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
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="vatPattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 100 L 100 0" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#vatPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Taxation • Regional Compliance</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              VAT <br/><span className="text-vr-blue italic">Consultancy.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              Since its introduction in 2018, Value Added Tax (VAT) has become a fundamental pillar of the UAE’s fiscal landscape. For businesses in Dubai and across the Emirates, navigating the intricacies of input and output tax requires not just compliance, but strategic foresight to protect margins and ensure uninterrupted operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our VAT Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Service Spectrum</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">Expert VAT <br/><span className="italic text-vr-blue">Management.</span></h3>
              
              <div className="grid gap-8">
                {[
                  { icon: Receipt, title: "VAT Registration", desc: "Seamless handling of mandatory and voluntary registrations with the Federal Tax Authority (FTA)." },
                  { icon: FileSearch, title: "VAT Return Filing", desc: "Precise calculation and submission of quarterly/monthly returns, ensuring zero errors." },
                  { icon: ShieldCheck, title: "VAT Compliance Review", desc: "Diagnostic 'Health Checks' to identify potential liabilities and optimize recovery of input tax." },
                  { icon: Scale, title: "Advisory & Assessments", desc: "Bespoke advice on complex transactions, intra-GCC trade, and representation during FTA audits." }
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
                className="rounded-[3.5rem] overflow-hidden shadow-3xl grayscale contrast-125 brightness-90 aspect-square"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Tax Consultancy" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 bg-vr-blue p-10 rounded-[2rem] shadow-2xl hidden xl:block">
                <Clock className="w-8 h-8 text-white mb-4" />
                <p className="text-white font-bold text-sm uppercase tracking-widest leading-tight">Rigorous <br/> Deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="relative bg-vr-blue/10 rounded-[4rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-12 shadow-[0_40px_100px_rgba(31,78,140,0.1)] overflow-hidden group">
            <HelpCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-vr-blue opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000" />
            <div className="relative z-10 flex flex-col gap-6 md:w-2/3">
              <h3 className="text-4xl md:text-5xl font-bold luxury-font text-vr-navy tracking-tighter">VAT Complexity <br/><span className="italic opacity-70">Clarified.</span></h3>
              <p className="text-vr-slate text-lg font-medium leading-relaxed">From registration thresholds to intra-GCC supply rules, find the answers in our comprehensive VAT guide.</p>
            </div>
            <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
              <Link 
                to="/faq" 
                className="bg-vr-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all shadow-xl flex items-center gap-4 group/btn"
              >
                View VAT FAQ <ArrowRight className="w-4 h-4 text-vr-blue transition-transform group-hover/btn:translate-x-2" />
              </Link>
            </div>
          </div>
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
              Secure Your <span className="text-vr-blue italic">Position.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Consult with our VAT specialists to discuss registration requirements, return cycles, or complex transaction advisory.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-2xl"
            >
              Get VAT Support <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VATServices;