import React from 'react';
import { SERVICES, SERVICE_ICONS } from '../constants.tsx';
import { ArrowRight, ChevronRight, Gem } from 'lucide-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const getServiceLink = (id: string) => {
    switch (id) {
      case 'accounting-bookkeeping':
        return '/services/accounting';
      case 'financial-reports':
        return '/services/financial-reports';
      case 'tax-planning':
        return '/services/tax-planning';
      case 'audit-assurance':
        return '/services/audit';
      case 'business-advisory':
        return '/services/business-advisory';
      case 'aml-compliance':
        return '/services/aml-compliance';
      default:
        return '/contact';
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Intro Section */}
      <section className="bg-vr-navy py-48 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Service Portfolio</motion.p>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter leading-none">
              Comprehensive <span className="text-vr-blue relative inline-block">
                Solutions.
                <span className="absolute -bottom-2 left-0 w-1/4 h-1 bg-vr-blue/30"></span>
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-400 max-w-4xl mx-auto text-xl font-light leading-relaxed">
              VR GLOBAL CONSULTANCY FZE offers a comprehensive portfolio of accounting, tax, audit, and advisory services designed to support businesses operating in Dubai and across the UAE.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List Grid - Blue Hover Style */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon] || Gem;
              const detailLink = getServiceLink(service.id);
              const isDetailed = detailLink !== '/contact';
              const number = (idx + 1).toString().padStart(2, '0');

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-transparent p-12 rounded-[3rem] border border-gray-100 flex flex-col h-full transition-all duration-500 hover:bg-vr-blue hover:border-vr-blue hover:shadow-[0_30px_60px_rgba(31,78,140,0.2)]"
                >
                  {/* Institutional Accents */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100 transition-colors duration-500 group-hover:border-white/10">
                    <span className="luxury-font text-5xl text-gray-50 group-hover:text-white/10 transition-colors duration-500">
                      {number}
                    </span>
                    <div className="w-14 h-14 bg-vr-blue/5 rounded-xl flex items-center justify-center text-vr-blue transition-all duration-500 group-hover:bg-white group-hover:text-vr-navy shadow-xl">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold luxury-font text-vr-navy mb-6 tracking-tight leading-tight transition-colors duration-500 group-hover:text-white">
                    {service.title.split(' in ')[0]}
                  </h3>

                  <p className="text-vr-slate text-base font-light leading-relaxed mb-10 flex-grow transition-colors duration-500 group-hover:text-white/90">
                    {service.description}
                  </p>

                  <div className="pt-6">
                    <Link 
                      to={detailLink} 
                      className="text-[10px] font-bold uppercase tracking-[0.4em] text-vr-blue transition-all duration-500 group-hover:text-white group-hover:gap-5 flex items-center gap-3 group/link"
                    >
                      {isDetailed ? 'Explore details' : 'Inquire now'} 
                      <ChevronRight className="w-4 h-4 transition-transform duration-500 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Strategic Engagement CTA */}
      <section className="py-40 bg-gray-50 border-t border-gray-100 overflow-hidden relative">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-bold luxury-font text-vr-navy mb-12 tracking-tighter leading-tight">
              Ready for <span className="italic text-vr-blue relative inline-block">
                Institutional
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-vr-blue/30"></span>
              </span> Grade Advisory?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-vr-slate text-xl font-light mb-16 max-w-2xl mx-auto">
              Our partners are available for private consultations to discuss your entity's specific financial and regulatory requirements.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/contact" 
                className="bg-vr-navy text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all transform hover:-translate-y-1 shadow-3xl"
              >
                Request Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
