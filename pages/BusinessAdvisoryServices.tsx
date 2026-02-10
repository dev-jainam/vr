import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  ArrowRight, 
  TrendingUp, 
  RefreshCcw, 
  LineChart, 
  Rocket,
  Target,
  Users,
  Building,
  Briefcase,
  Compass,
  PieChart,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useVault } from '../VaultContext.tsx';

const BusinessAdvisoryServices: React.FC = () => {
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
              <pattern id="advisoryPattern" width="150" height="150" patternUnits="userSpaceOnUse">
                <path d="M 0 150 L 150 0" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#advisoryPattern)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Strategic Advisory • Growth Catalyst</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Business <br/><span className="text-vr-blue italic">Advisory.</span>
            </h1>
            <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
              In the competitive ecosystem of Dubai, institutional growth is driven by intelligence rather than just capital. Strategic financial advisory serves as the navigation system for entities scaling through complexity, ensuring that every transition—from market entry to restructuring—is managed with methodological precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Advisory Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div {...fadeInUp}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Strategic Solutions</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">Catalyzing <br/><span className="italic text-vr-blue">Institutional Value.</span></h3>
              
              <div className="grid gap-10">
                {[
                  { icon: Compass, title: "Business Planning", desc: "Developing rigorous financial models and strategic roadmaps for long-term commercial viability." },
                  { icon: RefreshCcw, title: "Financial Restructuring", desc: "Optimizing balance sheets and capital structures to improve liquidity and operational efficiency." },
                  { icon: LineChart, title: "Performance Analysis", desc: "Advanced diagnostic reviews of KPIs and revenue drivers to identify high-impact growth levers." },
                  { icon: TrendingUp, title: "Growth Advisory", desc: "Structured guidance on market expansion, product diversification, and multi-entity scaling strategies." }
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
                className="rounded-[4rem] overflow-hidden shadow-3xl grayscale contrast-125 brightness-90 aspect-square"
              >
                <img 
                  src={localMap['https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200']} 
                  alt="Executive Strategy" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden xl:block max-w-[300px]">
                <Target className="w-8 h-8 text-vr-blue mb-4" />
                <h4 className="text-vr-navy font-bold mb-2 tracking-tight">Data-Driven Growth</h4>
                <p className="text-vr-slate text-xs font-light leading-relaxed uppercase tracking-widest">Transforming financial data into actionable institutional intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic FAQ Callout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-100 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 group"
          >
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-vr-blue shadow-sm group-hover:rotate-12 transition-transform">
                <HelpCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold luxury-font text-vr-navy mb-2">Strategy Queries?</h3>
                <p className="text-vr-slate text-sm font-light">Explore our advisory FAQ for insights on project feasibility and valuation.</p>
              </div>
            </div>
            <Link 
              to="/faq" 
              className="px-10 py-5 bg-vr-navy text-white font-bold uppercase tracking-[0.4em] text-[10px] rounded-full hover:bg-vr-blue transition-all shadow-xl flex items-center gap-4 group/btn"
            >
              Partner FAQ <ArrowRight className="w-4 h-4 text-white transition-transform group-hover/btn:translate-x-2" />
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
              Accelerate Your <span className="text-vr-blue italic">Trajectory.</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-16 leading-relaxed">
              Our partners are available for a private advisory session to discuss your entity's growth objectives and financial architecture.
            </p>
            <Link 
              to="/contact" 
              className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-flex items-center gap-4 shadow-[0_40px_80px_rgba(31,78,140,0.15)]"
            >
              Schedule Advisory Session <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BusinessAdvisoryServices;