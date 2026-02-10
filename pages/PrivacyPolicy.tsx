
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Bell } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Institutional Commitment",
      content: "At VR GLOBAL CONSULTANCY FZE, we recognize that the confidentiality of financial and personal data is the cornerstone of our advisory relationship. We are committed to protecting the privacy of our clients and partners in full alignment with the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL) and international best practices."
    },
    {
      icon: Eye,
      title: "2. Data Collection Protocols",
      content: "We collect information necessary for the execution of professional mandates, including legal entity documents, financial records, Ultimate Beneficial Owner (UBO) details, and KYC documentation required by UAE regulatory bodies (FTA, Ministry of Economy, etc.)."
    },
    {
      icon: Lock,
      title: "3. Information Security",
      content: "All client data is housed within our high-security digital vault, utilizing institutional-grade encryption and multi-factor authentication. Physical records, when necessary, are maintained within secure environments under 24/7 surveillance at our Dubai headquarters."
    },
    {
      icon: Globe,
      title: "4. Global Compliance",
      content: "For our international clients, we adhere to global data protection standards, including GDPR, ensuring that cross-border data transfers are handled with the highest level of legal scrutiny and protection."
    },
    {
      icon: Bell,
      title: "5. Disclosure of Information",
      content: "VR GLOBAL does not sell or trade client information. Information is only disclosed to official UAE regulatory authorities (such as the Federal Tax Authority) when mandated by law or necessary for the fulfillment of statutory audit and tax filing obligations."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-vr-blue/20">
      {/* Header */}
      <section className="bg-[#121212] py-40 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Legal Framework • UAE</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter">
              Privacy <span className="text-vr-blue italic">Protocol.</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              Establishing the standard for data sovereignty and professional confidentiality in the Dubai financial sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group p-10 md:p-14 rounded-[3rem] border border-gray-100 hover:border-vr-blue/30 hover:shadow-[0_40px_100px_rgba(31,78,140,0.08)] bg-white transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="w-16 h-16 bg-[#121212] rounded-2xl flex items-center justify-center text-vr-blue shadow-2xl group-hover:bg-vr-blue group-hover:text-white transition-all duration-700 shrink-0">
                    <section.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold luxury-font text-[#121212] mb-6 tracking-tight group-hover:text-vr-blue transition-colors duration-500">
                      {section.title}
                    </h2>
                    <p className="text-gray-500 text-lg font-light leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 p-16 bg-gray-50 rounded-[4rem] border border-gray-100 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-vr-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            <h3 className="text-2xl font-bold luxury-font text-[#121212] mb-6">Privacy Inquiries</h3>
            <p className="text-gray-500 font-light mb-10 max-w-lg mx-auto leading-relaxed text-lg">
              For queries regarding our data protection officer or to exercise your right to access, please contact our compliance desk.
            </p>
            <a 
              href="mailto:compliance@vrglobal.ae" 
              className="inline-flex items-center gap-4 bg-[#121212] text-white px-10 py-5 rounded-full text-vr-blue font-bold uppercase tracking-widest text-[10px] hover:bg-black transition-all transform hover:-translate-y-1"
            >
              compliance@vrglobal.ae
            </a>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-[10px] text-gray-300 uppercase tracking-[0.5em] font-bold">Document ID: VR-PDPL-2024-001 • Last Review: June 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
