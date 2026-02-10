import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Gavel, Briefcase, CreditCard, ShieldAlert, FileCheck } from 'lucide-react';

const TermsOfEngagement: React.FC = () => {
  const clauses = [
    {
      icon: Briefcase,
      title: "Scope of Professional Services",
      content: "The specific services to be provided (Accounting, VAT, Audit, etc.) are detailed in the individual Letter of Engagement signed by the client. VR GLOBAL CONSULTANCY FZE will perform these services with reasonable skill and care in accordance with the professional standards of the UAE."
    },
    {
      icon: CreditCard,
      title: "Professional Fees & Disbursements",
      content: "Our fees are based on the complexity of the mandate and the professional level of the staff assigned. Unless otherwise agreed in writing, invoices are payable within 14 business days of issuance. Statutory fees paid to UAE government bodies are billed as direct disbursements."
    },
    {
      icon: ShieldAlert,
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by UAE law, our aggregate liability for any claim arising out of or in connection with the engagement shall be limited to the professional fees paid by the client for the specific service from which the claim arises."
    },
    {
      icon: Scale,
      title: "Conflict of Interest",
      content: "VR GLOBAL maintains rigorous internal protocols to identify and manage potential conflicts of interest. We reserve the right to decline any engagement that might compromise our professional independence or integrity."
    },
    {
      icon: Gavel,
      title: "Governing Law & Jurisdiction",
      content: "These terms and all professional engagements are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Any disputes shall be subject to the exclusive jurisdiction of the Dubai Courts, or where applicable, the DIFC Courts."
    },
    {
      icon: FileCheck,
      title: "Client Responsibilities",
      content: "Clients are responsible for the accuracy and completeness of all data provided to VR GLOBAL. Timely provision of financial records is essential for meeting UAE statutory filing deadlines (e.g., VAT returns, Corporate Tax filings)."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-vr-blue/20">
      {/* Header */}
      <section className="bg-vr-navy py-40 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Regulatory Framework • Dubai</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter">
              Terms of <span className="text-vr-blue italic">Engagement.</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              The institutional parameters governing our professional advisory relationships and strategic partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {clauses.map((clause, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group p-10 rounded-[2.5rem] border border-gray-100 hover:border-vr-blue/30 bg-white hover:shadow-[0_30px_70px_rgba(31,78,140,0.08)] transition-all duration-500"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-vr-blue group-hover:bg-vr-navy group-hover:text-vr-blue transition-all duration-700 shadow-sm">
                    <clause.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold luxury-font text-vr-navy tracking-tight group-hover:text-vr-blue transition-colors duration-500">
                    {clause.title}
                  </h3>
                </div>
                <p className="text-vr-slate font-light leading-relaxed text-lg">
                  {clause.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 py-20 border-t border-gray-100 text-center">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="w-12 h-1 bg-vr-blue mx-auto mb-10 opacity-40"></div>
              <p className="text-vr-slate text-lg font-light italic leading-relaxed mb-12">
                "These terms constitute the framework under which VR GLOBAL CONSULTANCY FZE provides institutional-grade advisory. Every engagement is further detailed in a specific, confidential Letter of Engagement (LOE) tailored to the mandate."
              </p>
              <p className="text-[10px] text-gray-300 font-bold uppercase tracking-[0.5em]">VR GLOBAL CONSULTANCY FZE • Dubai Financial Hub • © 2024</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfEngagement;