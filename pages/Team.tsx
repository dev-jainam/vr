import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants.tsx';
import { useVault } from '../VaultContext.tsx';

const Team: React.FC = () => {
  const { localMap } = useVault();

  const ceo = TEAM_MEMBERS.find(m => m.id === 'ceo')!;
  const coreTeam = TEAM_MEMBERS.filter(m => m.id !== 'ceo');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-vr-blue/20">
      {/* Page Header */}
      <section className="bg-white py-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold luxury-font text-vr-navy mb-6 tracking-tighter">
              Our <span className="text-vr-blue italic">Team.</span>
            </h1>
            <p className="text-vr-slate text-lg md:text-xl font-light max-w-2xl mx-auto uppercase tracking-widest text-[11px] font-bold">
              A team of experienced professionals committed to institutional excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: LEADERSHIP FEATURE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            {/* Left Column: Portrait & Title */}
            <motion.div variants={itemVariants} className="space-y-10 group">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-700 grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100">
                <img 
                  src={localMap[ceo.image] || ceo.image} 
                  alt={ceo.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity duration-700"></div>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold luxury-font text-vr-navy mb-3 tracking-tight">
                  {ceo.name}
                </h2>
                <p className="text-vr-blue font-bold uppercase tracking-[0.4em] text-[10px] mb-6">
                  {ceo.designation}
                </p>
                <p className="text-vr-navy font-bold text-lg leading-relaxed italic border-l-2 border-vr-blue pl-6 max-w-md mx-auto lg:mx-0">
                  {ceo.summary}
                </p>
              </div>
            </motion.div>

            {/* Right Column: Bio Content */}
            <motion.div variants={itemVariants} className="space-y-8 text-vr-slate font-light leading-relaxed text-lg">
              <h3 className="text-[10px] font-bold tracking-[0.6em] text-gray-400 uppercase mb-8">Executive Mandate</h3>
              <p>{ceo.bio}</p>
              <div className="pt-10">
                <div className="w-16 h-0.5 bg-gray-100"></div>
                <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-300 mt-6">Corporate Leadership • UAE</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: CORE TEAM GRID */}
      <section className="py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-24">
            <h2 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-4">Core Advisory</h2>
            <h3 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy tracking-tighter">Strategic Bench</h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-12 lg:gap-16"
          >
            {coreTeam.map((member) => (
              <motion.div 
                key={member.id}
                variants={itemVariants}
                className="bg-white rounded-[3rem] p-10 lg:p-14 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex flex-col sm:flex-row gap-10 items-center">
                  <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg border border-gray-50 transition-all duration-700 grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:contrast-100">
                    <img 
                      src={localMap[member.image] || member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-2xl font-bold luxury-font text-vr-navy mb-2 tracking-tight">
                      {member.name}
                    </h4>
                    <p className="text-vr-blue font-bold uppercase tracking-[0.3em] text-[9px] mb-6">
                      {member.designation}
                    </p>
                    <p className="text-vr-slate text-sm font-light leading-relaxed">
                      {member.summary}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Institutional Accent */}
      <section className="py-24 bg-white border-t border-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300 italic font-light text-xl">
            "Institutional success at VR GLOBAL is the derivative of collective precision and uncompromising accountability."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;