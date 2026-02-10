import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  PieChart, 
  FileText, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Settings,
  Lock,
  Building2,
  Rocket,
  Globe,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const AccountingServices: React.FC = () => {
  const { localMap } = useVault();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="bg-vr-navy py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p variants={itemVariants} className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Service Detail • Core Advisory</motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Accounting & <br/><span className="text-vr-blue italic relative inline-block">
                Bookkeeping.
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-vr-blue/30"></span>
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              In the UAE’s rapidly evolving commercial landscape, maintaining impeccable financial records is no longer optional—it is a strategic imperative. As regulatory scrutiny intensifies with VAT and Corporate Tax, businesses require robust accounting frameworks that ensure transparency and provide a clear view of operational health.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Accounting Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 variants={itemVariants} className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Our Capabilities</motion.h2>
              <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight">
                Precise Financial <br/><span className="italic text-vr-blue relative inline-block">
                  Architecture.
                  <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-vr-blue/20"></span>
                </span>
              </motion.h3>
              <motion.p variants={itemVariants} className="text-vr-slate text-lg font-light leading-relaxed mb-12">
                We provide end-to-end accounting solutions that go beyond simple data entry. Our approach integrates technology with senior-level expertise to deliver a financial foundation that supports high-stakes decision-making.
              </motion.p>
              
              <motion.div variants={containerVariants} className="grid gap-6">
                {[
                  { icon: Settings, title: "Day-to-day Bookkeeping", desc: "Systematic recording of all financial transactions with daily reconciliations." },
                  { icon: FileText, title: "Financial Statements", desc: "IFRS-compliant preparation of balance sheets, P&L, and equity statements." },
                  { icon: Layers, title: "Ledger Maintenance", desc: "Rigorous oversight of general ledgers to ensure absolute data integrity." }
                ].map((item, i) => (
                  <motion.div 
                    variants={itemVariants} 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex gap-6 group p-6 rounded-3xl border border-transparent hover:border-vr-blue/10 hover:bg-gray-50/50 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-vr-blue/5 rounded-2xl flex items-center justify-center text-vr-blue group-hover:bg-vr-blue group-hover:text-white transition-all duration-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-vr-navy font-bold text-xl mb-1 group-hover:text-vr-blue transition-colors duration-300">{item.title}</h4>
                      <p className="text-vr-slate text-base font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-[3rem] overflow-hidden shadow-2xl grayscale contrast-125"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Financial Analysis" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white border border-gray-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden group hover:shadow-[0_40px_80px_-20px_rgba(31,78,140,0.1)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-vr-blue opacity-[0.03] rounded-full -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-20 h-20 bg-vr-navy rounded-full flex items-center justify-center text-vr-blue shrink-0 shadow-2xl transition-transform duration-500 group-hover:rotate-12">
                <HelpCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold luxury-font text-vr-navy mb-2">Technical Clarifications?</h3>
                <p className="text-vr-slate font-light max-w-md">Our knowledge base addresses technical accounting standards and UAE federal mandates in detail.</p>
              </div>
            </div>
            <Link 
              to="/faq" 
              className="relative z-10 px-10 py-5 bg-white border-2 border-vr-navy text-vr-navy font-bold uppercase tracking-[0.3em] text-[10px] rounded-full hover:bg-vr-navy hover:text-white transition-all flex items-center gap-4 group/btn"
            >
              Explore Partner FAQ <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy mb-12 tracking-tighter">
              Ready for <span className="text-vr-blue italic relative inline-block">
                Clarity?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-vr-blue/20"></span>
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Our partners are available for a detailed review of your bookkeeping and accounting requirements.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/contact" 
                className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 group shadow-2xl"
              >
                Speak to Our Accounting Experts 
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AccountingServices;