import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS } from '../constants.tsx';
import { Link } from 'react-router-dom';

const AccordionItem: React.FC<{ question: string; answer: string; index: number; isOpen: boolean; onClick: () => void }> = ({ question, answer, index, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`border-b border-gray-100 transition-all duration-500 ${isOpen ? 'bg-gray-50/50' : 'bg-white'}`}
    >
      <button 
        onClick={onClick}
        className="w-full py-8 px-6 md:px-10 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-6">
          <span className="text-vr-blue font-bold luxury-font text-lg opacity-40 group-hover:opacity-100 transition-opacity">
            {(index + 1).toString().padStart(2, '0')}
          </span>
          <h3 className={`text-xl font-bold luxury-font transition-colors duration-300 ${isOpen ? 'text-vr-blue' : 'text-vr-navy group-hover:text-vr-blue'}`}>
            {question}
          </h3>
        </div>
        <div className={`p-2 rounded-full border border-gray-100 transition-all duration-500 ${isOpen ? 'rotate-180 bg-vr-blue border-vr-blue' : 'bg-white'}`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-10 md:px-24 pb-10 text-vr-slate font-light leading-relaxed text-lg max-w-4xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-vr-navy py-40 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <HelpCircle className="w-[800px] h-[800px] absolute -top-40 -right-40 text-white rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-8">Strategic Intelligence Hub</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter">
              Partner <span className="text-vr-blue italic">Insights.</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              Addressing the most critical regulatory and financial queries for our institutional clients in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-gray-100">
            {FAQS.map((faq, idx) => (
              <AccordionItem 
                key={idx}
                index={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Engagement CTA */}
      <section className="py-40 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-white rounded-[4rem] p-16 md:p-24 shadow-2xl border border-gray-100">
            <MessageCircle className="w-16 h-16 text-vr-blue mx-auto mb-10" />
            <h2 className="text-4xl md:text-6xl font-bold luxury-font text-vr-navy mb-8 tracking-tighter">
              Further <span className="italic text-vr-slate">Consultation?</span>
            </h2>
            <p className="text-vr-slate text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Our FAQs cover the landscape, but your entity's specific requirements deserve a bespoke review from our senior partners.
            </p>
            <Link 
              to="/contact"
              className="bg-vr-navy text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all inline-flex items-center gap-4 group"
            >
              Request Private Session <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;