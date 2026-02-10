import React from 'react';
import { Shield, Scale, Lightbulb, Zap, CheckCircle2, Award, Users, Target } from 'lucide-react';
import { useVault } from '../VaultContext.tsx';
import { motion, Variants } from 'framer-motion';

const About: React.FC = () => {
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
      {/* Section 1: Introduction */}
      <section className="bg-vr-navy py-40 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Established in Dubai</motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Institutional <span className="text-vr-blue">Advisory</span> Hub.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-4xl mx-auto text-xl font-light leading-relaxed">
              VR GLOBAL CONSULTANCY FZE is a Dubai-based professional accounting and business consultancy firm delivering comprehensive financial, tax, audit, and advisory services across the UAE.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Who We Are */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 variants={itemVariants} className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Who We Are</motion.h2>
              <motion.h3 variants={itemVariants} className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-10 tracking-tight leading-tight">
                Authoritative Expertise. <br/><span className="italic text-vr-blue">Local Mastery.</span>
              </motion.h3>
              <motion.div variants={itemVariants} className="space-y-6 text-vr-slate text-lg font-light leading-relaxed">
                <p>
                  VR GLOBAL CONSULTANCY FZE is more than a service provider; we are the strategic financial architects for Dubai’s premier enterprises. Our foundation is built upon deep local UAE expertise and an unwavering commitment to professional ethics.
                </p>
                <p>
                  We navigate the complexities of the UAE regulatory ecosystem with a client-centric approach, ensuring that our partners benefit from our profound understanding of regional laws and international best practices.
                </p>
              </motion.div>
            </motion.div>
            <div className="relative">
              <motion.img 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                src={localMap['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200']} 
                className="rounded-[3.5rem] shadow-2xl grayscale contrast-125 brightness-90" 
                alt="Dubai Commercial District" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Mission */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="bg-vr-navy rounded-[4rem] p-16 lg:p-32 relative overflow-hidden">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 grid lg:grid-cols-2 gap-20 items-center"
            >
              <div className="space-y-4">
                <motion.h2 variants={itemVariants} className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">Our Mission</motion.h2>
                <motion.h3 variants={itemVariants} className="text-4xl md:text-7xl font-bold luxury-font text-white mb-8 tracking-tighter leading-none italic">
                  Redefining Financial Clarity.
                </motion.h3>
              </div>
              <div className="space-y-8">
                <motion.p variants={itemVariants} className="text-gray-400 text-xl font-light leading-relaxed">
                  Our mission is to establish the benchmark for accuracy, transparency, and compliance within the UAE's commercial corridors.
                </motion.p>
                <motion.p variants={itemVariants} className="text-gray-500 text-lg font-light leading-relaxed">
                  We are dedicated to forging long-term partnerships through authoritative leadership and a relentless pursuit of fiscal stability for every client we represent.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center mb-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-6">
              Our Core Values
            </motion.h2>
            <motion.h3 variants={itemVariants} className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy tracking-tighter">
              Institutional Integrity
            </motion.h3>
          </motion.div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          >
            {[
              { icon: Shield, title: "Integrity & Confidentiality", desc: "The foundational bedrock of our practice. Every engagement is protected by tier-1 privacy protocols." },
              { icon: Scale, title: "Regulatory Compliance", desc: "Absolute adherence to UAE Law, FTA circulars, and global IFRS reporting standards." },
              { icon: Target, title: "Precision & Accountability", desc: "Meticulous attention to detail. We hold ourselves to the highest grade of fiscal accountability." },
              { icon: Award, title: "Professional Excellence", desc: "Exceeding expectations through continuous innovation and authoritative leadership." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                className="group bg-white p-12 rounded-[2.5rem] border border-gray-100 hover:border-vr-blue/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-16 h-16 bg-vr-navy rounded-2xl flex items-center justify-center text-vr-blue mb-8 group-hover:bg-vr-blue group-hover:text-white transition-all">
                  <value.icon className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold luxury-font text-vr-navy mb-4">{value.title}</h4>
                <p className="text-vr-slate text-sm font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Final Strip */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-24"
          >
            {[
              { label: "10+ Years", sub: "UAE Market Legacy" },
              { label: "500+", sub: "Institutional Mandates" },
              { label: "AED 15B+", sub: "Asset Governance" },
              { label: "50+", sub: "Industry Sectors" }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="space-y-3">
                <p className="text-vr-navy text-4xl lg:text-5xl font-bold luxury-font">{stat.label}</p>
                <p className="text-vr-slate text-[10px] uppercase tracking-widest font-bold">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;