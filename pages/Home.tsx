import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Lock,
  Award,
  Globe,
  Gem,
  Calendar,
  Linkedin,
  ChevronDown,
  Building2,
  Diamond,
  Zap,
  Search,
  CheckCircle2,
  PieChart,
  BarChart3,
  HeartHandshake,
  UserCheck,
  Maximize2,
  Cpu,
  Fingerprint,
  Layers,
  AlertTriangle,
  Receipt,
  Mail,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { SERVICES, SERVICE_ICONS, TEAM_MEMBERS, BLOG_POSTS, FAQS } from '../constants.tsx';
import { useVault } from '../VaultContext.tsx';

const InstitutionalLattice = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center scale-75 lg:scale-100">
      {/* Central Core */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-2 h-2 bg-vr-blue rounded-full shadow-[0_0_15px_rgba(31,78,140,0.8)]"
      />

      {/* Abstract Structural Orbits */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 25 + i * 10, repeat: Infinity, ease: "linear" }}
          className="absolute border border-vr-blue/10 rounded-full flex items-center justify-center"
          style={{ width: `${i * 140}px`, height: `${i * 140}px` }}
        >
          {/* Connection Nodes */}
          {[0, 90, 180, 270].map((angle, idx) => (
            <div
              key={idx}
              className="absolute w-1 h-1 bg-vr-blue/20 rounded-full"
              style={{
                transform: `rotate(${angle}deg) translateY(-${i * 70}px)`
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Geometric Lattice Web (SVG) */}
      <motion.svg
        viewBox="0 0 400 400"
        className="absolute w-[500px] h-[500px] opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2 }}
      >
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        >
          <path
            d="M 200,50 L 350,200 L 200,350 L 50,200 Z"
            fill="none"
            stroke="currentColor"
            className="text-vr-blue"
            strokeWidth="0.5"
          />
          <circle cx="200" cy="50" r="1.5" className="fill-vr-blue" />
          <circle cx="350" cy="200" r="1.5" className="fill-vr-blue" />
          <circle cx="200" cy="350" r="1.5" className="fill-vr-blue" />
          <circle cx="50" cy="200" r="1.5" className="fill-vr-blue" />
          
          <path
            d="M 200,100 L 300,200 L 200,300 L 100,200 Z"
            fill="none"
            stroke="currentColor"
            className="text-vr-blue"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
        </motion.g>

        {/* Floating Intelligence Nodes */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: 'center' }}
        >
          <circle cx="120" cy="120" r="1" className="fill-vr-blue" />
          <circle cx="280" cy="280" r="1" className="fill-vr-blue" />
          <line x1="120" y1="120" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-vr-blue/30" />
          <line x1="280" y1="280" x2="200" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-vr-blue/30" />
        </motion.g>
      </motion.svg>

      {/* Depth Aura */}
      <div className="absolute w-64 h-64 bg-vr-blue blur-[120px] rounded-full opacity-10" />
      <div className="absolute w-[500px] h-[500px] border border-white/[0.03] rounded-full" />
    </div>
  );
};

const Home: React.FC = () => {
  const { localMap } = useVault();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isCalm, setIsCalm] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.08 * i + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const headlineWords = [
    { text: 'Avoid', color: null },
    { text: 'UAE', color: null },
    { text: 'Compliance', color: 'blue' },
    { text: 'Fines.', color: 'blue', newLine: true },
    { text: 'Focus', color: null },
    { text: 'on', color: null },
    { text: 'Growing', color: 'green' },
    { text: 'Your', color: 'green' },
    { text: 'Business.', color: 'green' }
  ];

  useEffect(() => {
    const t = setTimeout(() => setIsCalm(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="overflow-hidden bg-white selection:bg-vr-blue/30">
      
      {/* 1. HERO (Compliance Focused) */}
      <section className="relative overflow-hidden bg-white">
        {/* subtle grid / map-inspired texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_20%,#1E3A8A_0,transparent_22%),radial-gradient(circle_at_80%_10%,#2563EB_0,transparent_18%),linear-gradient(90deg,#0F172A0f_1px,transparent_1px),linear-gradient(0deg,#0F172A0f_1px,transparent_1px)] bg-[length:320px_320px,240px_240px,80px_80px,80px_80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left content */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
              <motion.span variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-[#1E3A8A]/15 bg-[#1E3A8A]/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#1E3A8A]">
                Accounting & Advisory • UAE Specialists
              </motion.span>

              <motion.div variants={itemVariants} className="relative">
                <motion.div
                  aria-hidden
                  className="absolute -left-10 -top-8 w-64 h-64 bg-[#1E3A8A]/8 blur-3xl rounded-[40%]"
                  animate={{ y: [0, 10, 0], x: [0, 8, 0] }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#0F172A] relative z-10 flex flex-wrap sm:block">
                  {headlineWords.map((w, i) => (
                    <motion.span
                      key={`${w.text}-${i}`}
                      variants={wordVariants}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      className={`relative inline-block mr-2 sm:mr-3 mb-2 sm:mb-3 ${w.newLine ? 'w-full' : ''}`}
                    >
                      {w.color && (
                        <motion.span
                          aria-hidden
                          className={`absolute inset-y-1 -left-1 -right-1 rounded-full ${w.color === 'blue' ? 'bg-[#2563EB]/20' : 'bg-[#16A34A]/20'}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                          style={{ transformOrigin: '0% 50%' }}
                        />
                      )}
                      <span className={`${w.color ? 'text-[#0F172A]' : 'text-[#0F172A]'}`}>
                        {w.text}
                      </span>
                    </motion.span>
                  ))}
                </h1>
              </motion.div>

              <motion.p variants={itemVariants} className="text-lg leading-relaxed text-slate-600 max-w-2xl">
                We help Dubai and UAE companies manage accounting, VAT filing, corporate tax, payroll, and audit compliance — so you never worry about penalties or deadlines.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-6 sm:px-8 py-4 rounded-full bg-[#1E3A8A] text-white font-semibold tracking-wide shadow-lg shadow-[#1E3A8A]/25 transition transform hover:-translate-y-0.5 hover:bg-[#153072]">
                  Talk to an Advisor (Free)
                </Link>
                <Link to="/services" className="px-6 sm:px-8 py-4 rounded-full border border-[#1E3A8A] text-[#1E3A8A] font-semibold tracking-wide transition transform hover:-translate-y-0.5 hover:bg-[#1E3A8A] hover:text-white">
                  View Our Services
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-sm font-semibold text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" /> 7+ Years Experience
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" /> 200+ Businesses Supported
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1E3A8A]" /> Corporate Tax & VAT Experts
                </div>
              </motion.div>
            </motion.div>

            {/* Right visual: Penalty protection to compliant approval */}
            <motion.div
              initial={{ opacity: 0.2, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 blur-3xl bg-[#1E3A8A]/12 -z-10" />
              <div className="rounded-3xl bg-white shadow-2xl shadow-[#0F172A]/10 border border-slate-100 p-8 sm:p-10 max-w-lg w-full ml-auto overflow-hidden">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1E3A8A]">
                      Penalty Protection 
                    </p>
                    <h3 className="text-2xl font-bold text-[#0F172A]">Compliance Safeguard</h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center text-[#1E3A8A] text-xs font-semibold">
                    VR
                  </div>
                </div>

                {/* Document + shield animation */}
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.98, opacity: 0.9 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-semibold text-[#0F172A]">UAE Compliance Notice</div>
                      <div className="text-[10px] text-slate-500">Ref: CTX-2026</div>
                    </div>
                    <div className="space-y-2 text-[12px] text-slate-700">
                      <div className="flex items-center justify-between">
                        <span>Late VAT Filing</span>
                        <span className="text-[#B91C1C] font-semibold">Overdue</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Compliance Violation</span>
                        <span className="text-[#B91C1C] font-semibold">Penalty Issued</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Audit Request</span>
                        <span className="text-[#B91C1C] font-semibold">Pending</span>
                      </div>
                    </div>

                    {/* Penalty stamp */}
                    <motion.div
                      initial={{ opacity: 1, rotate: -8, scale: 1 }}
                      animate={{ opacity: isCalm ? 0 : 1, scale: isCalm ? 0.8 : 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="absolute -top-4 -right-6 px-4 py-2 border-2 border-[#B91C1C] text-[#B91C1C] font-black uppercase tracking-[0.2em] text-[11px] rounded rotate-[-8deg] bg-white"
                    >
                      Penalty Issued
                    </motion.div>

                    {/* Approved stamp */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 6 }}
                      animate={{ opacity: isCalm ? 1 : 0, scale: isCalm ? 1 : 0.8 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="absolute -bottom-4 -left-4 px-4 py-2 border-2 border-[#16A34A] text-[#15803D] font-black uppercase tracking-[0.2em] text-[11px] rounded rotate-[6deg] bg-white"
                    >
                      Compliant & Approved
                    </motion.div>

                    {/* Shield overlay */}
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: isCalm ? 1 : 0.6, opacity: isCalm ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div className="w-24 h-24 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/30 flex items-center justify-center shadow-lg shadow-[#1E3A8A]/10">
                        <ShieldCheck className="w-10 h-10 text-[#1E3A8A]" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Final clean panel */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: isCalm ? 1 : 0, y: isCalm ? 0 : 6 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
                  className="mt-6 rounded-2xl border border-[#1E3A8A]/15 bg-[#1E3A8A]/5 px-4 py-4 text-center"
                >
                  <div className="flex justify-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                    <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                    <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />
                  </div>
                  <p className="text-sm font-semibold text-[#0F172A]">We Handle The Numbers. You Handle The Business.</p>
                  <p className="text-xs text-[#2563EB] mt-1">Penalties prevented • Filings aligned • Approvals secured</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1.5 IMPORTANT STRIP (Black Background) */}
      <section className="relative py-16 bg-[#050505] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid lg:grid-cols-3 gap-10 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-vr-blue">Important</p>
              <h3 className="text-3xl md:text-4xl font-bold luxury-font leading-tight text-white">
                Compliance you can rely on.
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                A concise assurance strip to keep your stakeholders confident between first impression and our safeguards.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="lg:col-span-2 grid sm:grid-cols-3 gap-6"
            >
              {[
                { icon: ShieldCheck, title: "FTA / DMCC Ready", desc: "Filings and ledgers aligned to UAE mandates for instant review." },
                { icon: Layers, title: "Audit Trail Intact", desc: "Evidence-packed workpapers versioned, linked, and inspection-ready." },
                { icon: CheckCircle2, title: "Response <24h", desc: "Priority answers on tax and compliance queries, every business day." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full flex flex-col gap-3 hover:border-vr-blue/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-vr-blue/15 text-vr-blue flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold luxury-font text-white tracking-tight">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST PILLARS (Sleek Reduced Height Version) */}
      <section className="relative py-24 bg-white border-b border-gray-100 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-5"
            >
              <div className="w-10 h-[1px] bg-vr-blue"></div>
              <span className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px]">Institutional Safeguards</span>
              <div className="w-10 h-[1px] bg-vr-blue"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy tracking-tighter"
            >
              The Pillars of <span className="text-vr-blue italic">Institutional Trust.</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { 
                icon: ShieldCheck, 
                title: "Regulated", 
                sub: "FTA & DMCC Compliance", 
                desc: "We operate under strict UAE federal frameworks, ensuring absolute national accountability and full audit readiness for all FTA mandates." 
              },
              { 
                icon: Award, 
                title: "Excellence", 
                sub: "IFRS Standard Reporting", 
                desc: "Every report is meticulously crafted in accordance with IFRS standards, providing a global benchmark of institutional clarity." 
              },
              { 
                icon: Lock, 
                title: "Sovereignty", 
                sub: "Secure Asset Governance", 
                desc: "Commercial data is protected by institutional-grade protocols designed to safeguard sensitive financial information and assets." 
              },
              { 
                icon: Globe, 
                title: "Global Reach", 
                sub: "Cross-Border Advisory", 
                desc: "Authoritative tax solutions navigating the complex nexus of global trade for multinational maisons and high-net-worth entities." 
              }
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="group relative bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:border-vr-blue/30 hover:shadow-[0_30px_70px_-15px_rgba(15,42,68,0.1)] transition-all duration-500 flex flex-col h-full items-start overflow-hidden min-h-[340px]"
              >
                {/* Visual Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-vr-blue/[0.02] rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000 ease-out"></div>

                {/* Icon Container with Sleek Proportions */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 group-hover:bg-vr-navy group-hover:shadow-vr-blue/20 transition-all duration-500 relative z-10"
                >
                  <pillar.icon className="w-8 h-8 text-vr-blue group-hover:text-white transition-colors duration-500" />
                </motion.div>
                
                <div className="relative z-10 flex flex-col h-full w-full">
                  <h4 className="text-vr-navy font-bold text-2xl luxury-font mb-1.5 tracking-tight group-hover:text-vr-blue transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-vr-blue text-[9px] font-bold uppercase tracking-[0.35em] mb-5 pb-3 border-b border-gray-50">
                    {pillar.sub}
                  </p>
                  <p className="text-vr-navy text-[15px] font-light leading-relaxed text-gray-600 group-hover:text-vr-navy transition-colors duration-500">
                    {pillar.desc}
                  </p>
                </div>

                {/* Subtle Bottom Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50">
                  <div className="h-full w-0 bg-vr-blue transition-all duration-700 group-hover:w-full ease-out" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: INSTITUTIONAL VISION SECTION (Black Background) */}
      <section className="relative py-48 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <motion.div 
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,78,140,0.2),transparent_70%)]"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-[10px] font-bold tracking-[0.6em] text-vr-blue uppercase mb-8">Strategic Vision</h2>
              <h3 className="text-4xl md:text-7xl font-bold luxury-font text-white mb-10 tracking-tighter leading-[1.1]">
                Mastering the Art of <br/><span className="text-vr-blue italic">Financial Governance.</span>
              </h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                We bridge the gap between fast-moving business operations and rigorous UAE compliance requirements. Our approach is defined by precision and global standards, ensuring your legacy is protected by resilient financial architecture.
              </p>
              <div className="flex items-center gap-12">
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold text-3xl">IFRS</span>
                  <span className="text-[9px] text-vr-blue font-bold uppercase tracking-widest">Global Standards</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold text-3xl">FTA</span>
                  <span className="text-[9px] text-vr-blue font-bold uppercase tracking-widest">Local Authority</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="flex flex-col gap-2">
                  <span className="text-white font-bold text-3xl">AML</span>
                  <span className="text-[9px] text-vr-blue font-bold uppercase tracking-widest">Compliance Desk</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Cpu, label: "Digital Ledger", desc: "Institutional-grade cloud integration." },
                { icon: Fingerprint, label: "Secure Identity", desc: "Rigorous KYC and UBO verification." },
                { icon: Layers, label: "Asset Flow", desc: "Consolidated group reporting." },
                { icon: Lock, label: "Sovereignty", desc: "Confidential advisory protocols." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 glass rounded-[2.5rem] border border-white/5 group hover:bg-white/5 transition-all duration-500">
                  <item.icon className="w-8 h-8 text-vr-blue mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-bold luxury-font text-white mb-2">{item.label}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (White Background) */}
      <section className="relative py-32 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="text-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-vr-blue"></div>
              <span className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px]">Why Choose Us</span>
              <div className="w-12 h-[1px] bg-vr-blue"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy tracking-tight leading-[1.1] mb-12"
            >
              Discover faithfulness service with <span className="text-vr-blue italic">Simplicity,</span> <br />
              personalized attention, and commitment to <br />
              your <span className="text-vr-blue italic">business success.</span>
            </motion.h2>
          </div>

          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { 
                icon: Maximize2, 
                title: "Simplicity", 
                desc: "We distill complex UAE regulations into clear, actionable financial architecture, removing administrative friction from your growth journey." 
              },
              { 
                icon: UserCheck, 
                title: "Personalized Attention", 
                desc: "Every mandate is partner-led. We provide bespoke advisory tailored to the unique fiscal heartbeat of your specific commercial enterprise." 
              },
              { 
                icon: HeartHandshake, 
                title: "Business Success", 
                desc: "Your legacy is our mandate. We are unwavering in our commitment to fortifying your entity's long-term financial stability and market trust." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants} 
                className="group p-12 bg-white rounded-[3.5rem] border border-gray-100 hover:border-vr-blue/20 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-vr-navy rounded-2xl flex items-center justify-center text-vr-blue mb-8 group-hover:bg-vr-blue group-hover:text-white transition-all duration-500 shadow-lg">
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold luxury-font text-vr-navy mb-4 group-hover:text-vr-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-vr-slate text-base font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Watermark */}
        <div className="absolute -bottom-24 -left-24 opacity-[0.03] pointer-events-none select-none">
          <Gem className="w-[600px] h-[600px] text-vr-blue" />
        </div>
      </section>

      {/* 4. CORPORATE IDENTITY (Black Background) */}
      <section className="py-48 bg-[#050505] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">The Institution</h2>
              <h3 className="text-4xl md:text-7xl font-bold luxury-font text-white mb-12 tracking-tighter leading-[1.1]">
                A Legacy of <br /><span className="text-vr-blue italic">Unyielding</span> Precision.
              </h3>
              <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                VR Global Consultancy partners with businesses across Dubai and the UAE, aligning everyday operations with institutional financial standards and compliance expectations.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <h4 className="text-4xl font-bold luxury-font text-vr-blue mb-2">AED 15B+</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Managed Asset Flow</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold luxury-font text-vr-blue mb-2">500+</h4>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Trading Mandates</p>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
              <img src={localMap['https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=2000']} className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000" alt="Precious Stones" />
              <div className="absolute inset-0 bg-gradient-to-t from-vr-navy/80 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT THE FIRM (White Background) */}
      <section className="py-48 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Our Philosophy</h2>
            <h3 className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy mb-12 tracking-tighter">
              Orchestrating <span className="italic text-vr-blue">Absolute Clarity.</span>
            </h3>
            <p className="text-vr-slate text-2xl font-light leading-relaxed mb-16">
              Founded in the heart of Dubai's commercial corridors, VR Global provides the tactical foresight necessary to navigate the complexities of UAE's evolving tax and regulatory landscape.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 text-vr-blue font-bold uppercase tracking-[0.4em] text-[10px] border-b-2 border-vr-blue/30 pb-2 hover:border-vr-blue transition-all">
              Discover Our History <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. LEADERSHIP (Black Background) */}
      <section className="py-48 bg-[#050505] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Partners</h2>
              <h3 className="text-4xl md:text-7xl font-bold luxury-font text-white tracking-tighter">
                Institutional <span className="text-vr-blue italic">Leadership.</span>
              </h3>
            </motion.div>
            <Link to="/team" className="text-vr-blue font-bold text-[10px] uppercase tracking-[0.4em] mb-4 border-b border-vr-blue/30 pb-2 hover:border-vr-blue transition-all">
              Complete Bench
            </Link>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.slice(0, 4).map((member) => (
              <motion.div key={member.id} variants={itemVariants} className="group relative flex flex-col">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl grayscale group-hover:grayscale-0 border border-white/5 transition-all duration-700">
                  <img src={localMap[member.image] || member.image} alt={member.name} className="w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-vr-navy via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                    <Linkedin className="w-6 h-6 text-vr-blue mb-4" />
                  </div>
                </div>
                <h4 className="text-2xl font-bold luxury-font text-white mb-2 group-hover:text-vr-blue transition-colors">{member.name}</h4>
                <p className="text-vr-blue text-[9px] font-bold uppercase tracking-[0.4em] mb-4">{member.designation}</p>
                <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">{member.summary}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. INDUSTRY FOCUS (White Background) */}
      <section className="py-48 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-32">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Specialized Sectors</h2>
              <h3 className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy tracking-tighter">
                Diamond & <span className="italic text-vr-blue">Industrial Mastery.</span>
              </h3>
            </motion.div>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Diamond, title: "Diamond Trading", desc: "Specialized accounting for high-value gemstone trade within the DMCC/DDE framework." },
              { icon: Zap, title: "Energy & Infrastructure", desc: "Corporate tax and asset governance for high-stakes oil, gas, and renewable projects." },
              { icon: Building2, title: "Multinational Finance", desc: "Consolidated group reporting and cross-border tax optimization for global corporations." }
            ].map((sector, i) => (
              <motion.div key={i} variants={itemVariants} className="p-12 bg-gray-50 rounded-[3rem] border border-gray-100 group hover:bg-vr-navy transition-all duration-500">
                <sector.icon className="w-12 h-12 text-vr-blue mb-10 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold luxury-font text-vr-navy mb-6 group-hover:text-white transition-colors">{sector.title}</h4>
                <p className="text-vr-slate text-lg font-light leading-relaxed group-hover:text-gray-400 transition-colors">{sector.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. SERVICES (Black Background) */}
      <section className="py-48 bg-[#050505] relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-32">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Capabilities</h2>
              <h3 className="text-4xl md:text-7xl font-bold luxury-font text-white tracking-tighter">
                Strategic <span className="text-vr-blue italic">Solutions.</span>
              </h3>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || Gem;
              return (
                <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="group p-12 rounded-[3rem] border border-white/5 bg-transparent hover:bg-vr-blue transition-all duration-500 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-12">
                    <span className="luxury-font text-4xl text-white/5 group-hover:text-white/20">{(idx + 1).toString().padStart(2, '0')}</span>
                    <div className="w-14 h-14 bg-vr-blue/10 flex items-center justify-center text-vr-blue rounded-2xl group-hover:bg-white group-hover:text-vr-navy shadow-xl transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold luxury-font text-white mb-6 tracking-tight leading-tight">{service.title.split(' in ')[0]}</h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 group-hover:text-white transition-colors flex-grow">{service.description}</p>
                  <Link to={`/services/${service.id.replace('-advisory', '').replace('-compliance', '')}`} className="text-[9px] font-bold uppercase tracking-[0.4em] text-vr-blue group-hover:text-white flex items-center gap-3">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. STRATEGIC METHODOLOGY (White Background) */}
      <section className="py-48 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-1/3">
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Our Process</h2>
                <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tighter leading-[1.1]">
                  The VR <br /><span className="italic text-vr-blue">Advantage.</span>
                </h3>
                <p className="text-vr-slate text-lg font-light leading-relaxed mb-12">
                  Our proprietary framework for institutional success ensures that every commercial mandate is treated with artisanal precision and corporate rigor.
                </p>
                <Link to="/contact" className="bg-vr-navy text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[9px] hover:bg-vr-blue transition-all shadow-xl inline-block">
                  Download Framework
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
              {[
                { icon: Search, title: "01. Diagnostic Review", desc: "A granular audit of your current financial architecture and regulatory nexus." },
                { icon: BarChart3, title: "02. Strategic Modeling", desc: "Crafting bespoke financial models aligned with DMCC and FTA requirements." },
                { icon: ShieldCheck, title: "03. Managed Governance", desc: "Rigorous ongoing compliance, VAT filing, and corporate tax optimization." },
                { icon: PieChart, title: "04. Insight Synthesis", desc: "Executive-level MIS reporting and tactical foresight for future scaling." }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-vr-blue mb-8 shadow-sm group-hover:bg-vr-blue group-hover:text-white transition-all">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-bold luxury-font text-vr-navy mb-4">{step.title}</h4>
                  <p className="text-vr-slate text-sm font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. INSIGHTS / FAQ (Black Background) */}
      <section className="py-48 bg-[#050505] relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Insights Column */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Intelligence</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-white mb-12 tracking-tighter">Market <span className="italic text-vr-blue">Pulse.</span></h3>
              <div className="space-y-12">
                {BLOG_POSTS.slice(0, 2).map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="group block pb-12 border-b border-white/10 last:border-0">
                    <div className="flex items-center gap-4 text-vr-blue text-[9px] font-bold uppercase tracking-widest mb-6">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </div>
                    <h4 className="text-3xl font-bold luxury-font text-white mb-4 group-hover:text-vr-blue transition-colors leading-tight">{post.title}</h4>
                    <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* FAQ Column */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">FAQ</h2>
              <h3 className="text-4xl md:text-6xl font-bold luxury-font text-white mb-12 tracking-tighter">Executive <span className="italic text-vr-blue">FAQ.</span></h3>
              <div className="space-y-4">
                {FAQS.slice(0, 4).map((faq, idx) => (
                  <div key={idx} className={`border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 ${openFaq === idx ? 'bg-white/5 border-vr-blue/20 shadow-2xl' : 'bg-transparent'}`}>
                    <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full px-8 py-6 text-left flex justify-between items-center group">
                      <span className={`text-sm font-bold luxury-font transition-colors ${openFaq === idx ? 'text-vr-blue' : 'text-gray-200 group-hover:text-vr-blue'}`}>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform text-vr-blue ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <p className="px-8 pb-8 text-gray-400 text-sm font-light leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
              <Link to="/faq" className="inline-flex items-center gap-4 text-vr-blue font-bold uppercase tracking-[0.4em] text-[10px] mt-12 border-b-2 border-vr-blue/30 pb-2 hover:border-vr-blue transition-all">
                All Queries <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA (White Background) */}
      <section className="py-40 bg-white text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy mb-12 tracking-tighter leading-none">
              Secure Your <br /><span className="text-vr-blue italic relative inline-block">
                Institutional Legacy.
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-vr-blue/20"></span>
              </span>
            </h2>
            <Link to="/contact" className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 inline-block shadow-3xl">
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
