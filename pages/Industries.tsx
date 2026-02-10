
import React, { useRef } from 'react';
import { INDUSTRIES } from '../constants.tsx';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Diamond } from 'lucide-react';
import { useVault } from '../VaultContext.tsx';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const IndustryCard: React.FC<{ industry: any; localImg: string }> = ({ industry, localImg }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  const rawY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y = useSpring(rawY, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700"
    >
      <div className="h-80 relative overflow-hidden">
        <motion.img 
          style={{ y, scale: 1.35 }}
          src={localImg} 
          alt={industry.name} 
          className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
        <div className="absolute bottom-8 left-10">
          <h3 className="text-4xl font-bold luxury-font text-white group-hover:text-vr-blue transition-colors duration-300 tracking-tight">
            {industry.name}
          </h3>
          <div className="w-12 h-1 bg-vr-blue mt-2 group-hover:w-24 transition-all duration-500"></div>
        </div>
      </div>
      <div className="p-10">
        <p className="text-gray-500 mb-10 leading-relaxed text-lg font-light h-24 overflow-hidden">
          {industry.description}
        </p>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 text-[#121212] font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-vr-blue pb-2 hover:text-vr-blue transition-all group/link"
        >
          Partner with Parth Gadhiya <ArrowUpRight className="w-5 h-5 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const Industries: React.FC = () => {
  const { localMap } = useVault();
  const mainRef = useRef(null);
  const regionalRef = useRef(null);
  
  const { scrollYProgress: mainScroll } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"]
  });
  const watermarkY = useTransform(mainScroll, [0, 1], ["0%", "30%"]);

  const { scrollYProgress: regionalScroll } = useScroll({
    target: regionalRef,
    offset: ["start end", "end start"]
  });
  
  const rawRegY = useTransform(regionalScroll, [0, 1], ["-25%", "25%"]);
  const regionalY = useSpring(rawRegY, { stiffness: 50, damping: 20 });

  return (
    <div ref={mainRef} className="pt-24 min-h-screen bg-[#fafafa] relative overflow-hidden">
      {/* Background Watermark */}
      <motion.div 
        style={{ y: watermarkY }}
        className="absolute top-40 right-[-10%] opacity-[0.02] pointer-events-none"
      >
        <Diamond className="w-[800px] h-[800px] text-vr-blue rotate-12" />
      </motion.div>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold luxury-font text-[#121212] mb-8"
            >
              The Global <span className="text-vr-blue italic">Supply Chain</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-gray-500 max-w-2xl mx-auto text-xl font-light leading-relaxed"
            >
              From artisanal mines to high-end retail maisons, our financial architecture supports every facet of the precious gem lifecycle.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {INDUSTRIES.map((industry) => (
              <IndustryCard 
                key={industry.id} 
                industry={industry} 
                localImg={localMap[industry.image]} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={regionalRef} className="bg-[#121212] rounded-[4rem] p-16 lg:p-32 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tight leading-none">
                  The Dubai Hub
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto mb-20 text-xl font-light leading-relaxed">
                  Embedded in the heart of the Dubai Diamond Exchange, Parth Gadhiya Consultancy provides the specialized local intelligence required to thrive in the world's premier diamond trading floor.
                </p>
                
                <div className="flex flex-wrap justify-center gap-16 lg:gap-24 text-vr-blue">
                  {[
                    { label: "DMCC", sub: "Approved Advisory" },
                    { label: "DDE", sub: "Certified Compliance" },
                    { label: "TAX", sub: "VAT Specialist" }
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <span className="text-4xl lg:text-5xl font-bold luxury-font tracking-tighter">
                        {stat.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mt-4">
                        {stat.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
