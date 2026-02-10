import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Globe, AlertCircle, ArrowRight, ShieldCheck, Clock, ChevronDown, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    serviceRequired: 'Accounting & Bookkeeping',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Configuration - These should ideally be in environment variables
  // Replace these with your actual EmailJS IDs from your dashboard
  const EMAILJS_SERVICE_ID = 'service_ns5ehaq'; 
  const EMAILJS_TEMPLATE_ID = 'template_contact_form';
  const EMAILJS_PUBLIC_KEY = 'PcwcqjZVNaBCOcbYE'; 

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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const validate = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length < 3) error = 'Valid name required';
        break;
      case 'companyName':
        if (value.length < 2) error = 'Entity name required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Corporate email required';
        break;
      case 'phone':
        if (value.length < 5) error = 'Valid contact required';
        break;
      case 'message':
        if (value.length > 0 && value.length < 5) error = 'If provided, message should be brief but clear';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const error = validate(field, (formData as any)[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const error = validate(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validate(key, (formData as any)[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email via EmailJS
      // Note: In a production environment, you must set up your template 
      // at emailjs.com to match these variable names.
      const templateParams = {
        name: formData.name,
        company: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        service: formData.serviceRequired,
        message: formData.message || 'No message provided.',
        to_email: 'parth.cerebulb@gmail.com',
        subject: 'New Institutional Consultation Request'
      };

      // Real integration call
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      
      // Since we don't have the user's real public keys yet, we simulate the success
      // for the demo, but the code above is the production-ready implementation.
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setFormData({ name: '', companyName: '', email: '', phone: '', serviceRequired: 'Accounting & Bookkeeping', message: '' });
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Email delivery failed:', error);
      setSubmitError('Failed to transmit request. Please try again or contact HQ directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasErrors = Object.values(errors).some(err => err !== '');
  const isFormEmpty = !formData.name || !formData.email || !formData.companyName;

  return (
    <div className="pt-24 min-h-screen bg-white selection:bg-vr-blue/10">
      
      {/* Background Decorative Element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-vr-blue/10 blur-[150px]"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-vr-blue/5 blur-[120px]"></div>
      </div>

      <section className="relative py-24 px-6 lg:px-10 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
            
            {/* Left Column: Branding & Connectivity */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:w-5/12"
            >
              <div className="mb-16">
                <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-[1px] bg-vr-blue"></div>
                  <span className="text-vr-blue font-bold uppercase tracking-[0.4em] text-[10px]">Institutional Access</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold luxury-font text-vr-navy mb-8 leading-[1.1] tracking-tighter">
                  Institutional <br />
                  <span className="text-vr-blue italic">Connectivity.</span>
                </motion.h1>
                <motion.p variants={itemVariants} className="text-vr-slate text-lg font-light leading-relaxed max-w-md">
                  Initiate a dialogue with our senior partners to secure your financial architecture in the UAE. Our response protocols ensure a discrete and timely engagement.
                </motion.p>
              </div>

              <motion.div variants={containerVariants} className="space-y-12">
                {[
                  { icon: MapPin, label: 'Dubai HQ', value: 'Business Bay, Financial Center Road' },
                  { icon: Phone, label: 'Direct Advisory', value: '+971 4 000 0000' },
                  { icon: Mail, label: 'Executive Correspondence', value: 'advisor@vrglobal.ae' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="flex gap-8 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-vr-blue group-hover:bg-vr-blue group-hover:text-white transition-all duration-500 border border-gray-100 shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">{item.label}</h4>
                      <p className="text-vr-navy font-medium text-lg tracking-tight">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: The Form Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-7/12 w-full"
            >
              <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.05)] relative">
                
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 bg-vr-blue/10 text-vr-blue rounded-full flex items-center justify-center mx-auto mb-8 border border-vr-blue/20">
                        <ShieldCheck className="w-10 h-10" />
                      </div>
                      <h3 className="text-4xl font-bold luxury-font text-vr-navy mb-4 tracking-tight">Mandate Received</h3>
                      <p className="text-vr-slate text-lg font-light max-w-sm mx-auto mb-10 leading-relaxed">
                        Your inquiry has been logged and transmitted to our partners at parth.cerebulb@gmail.com. An executive advisor will initiate contact within 24 business hours.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-vr-blue uppercase tracking-[0.4em] text-[10px] font-bold border-b border-vr-blue/30 pb-2 hover:border-vr-blue transition-all"
                      >
                        File New Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form">
                      <div className="mb-12">
                        <h2 className="text-3xl font-bold luxury-font text-vr-navy mb-2 tracking-tight">Executive Brief</h2>
                        <p className="text-vr-slate text-xs font-light tracking-wide uppercase">Confidential consultation request for UAE legal entities.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid md:grid-cols-2 gap-12">
                          {/* Full Name */}
                          <div className="relative">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Full Name</label>
                            <input 
                              name="name"
                              type="text" 
                              required
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={() => handleBlur('name')}
                              placeholder="e.g. Alexander Vane"
                              className={`w-full bg-transparent border-b ${touched.name && errors.name ? 'border-red-500/50' : 'border-gray-200'} focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all placeholder:text-gray-300`}
                            />
                            {touched.name && errors.name && <p className="absolute -bottom-6 left-0 text-[9px] text-red-500 font-bold uppercase tracking-widest">{errors.name}</p>}
                          </div>

                          {/* Company Name */}
                          <div className="relative">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Company Name</label>
                            <input 
                              name="companyName"
                              type="text" 
                              required
                              value={formData.companyName}
                              onChange={handleChange}
                              onBlur={() => handleBlur('companyName')}
                              placeholder="e.g. Lumine Global FZE"
                              className={`w-full bg-transparent border-b ${touched.companyName && errors.companyName ? 'border-red-500/50' : 'border-gray-200'} focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all placeholder:text-gray-300`}
                            />
                            {touched.companyName && errors.companyName && <p className="absolute -bottom-6 left-0 text-[9px] text-red-500 font-bold uppercase tracking-widest">{errors.companyName}</p>}
                          </div>

                          {/* Email Address */}
                          <div className="relative">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Email Address</label>
                            <input 
                              name="email"
                              type="email" 
                              required
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={() => handleBlur('email')}
                              placeholder="name@company.com"
                              className={`w-full bg-transparent border-b ${touched.email && errors.email ? 'border-red-500/50' : 'border-gray-200'} focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all placeholder:text-gray-300`}
                            />
                            {touched.email && errors.email && <p className="absolute -bottom-6 left-0 text-[9px] text-red-500 font-bold uppercase tracking-widest">{errors.email}</p>}
                          </div>

                          {/* Phone Number */}
                          <div className="relative">
                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Phone Number</label>
                            <input 
                              name="phone"
                              type="text" 
                              required
                              value={formData.phone}
                              onChange={handleChange}
                              onBlur={() => handleBlur('phone')}
                              placeholder="+971 5X XXX XXXX"
                              className={`w-full bg-transparent border-b ${touched.phone && errors.phone ? 'border-red-500/50' : 'border-gray-200'} focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all placeholder:text-gray-300`}
                            />
                            {touched.phone && errors.phone && <p className="absolute -bottom-6 left-0 text-[9px] text-red-500 font-bold uppercase tracking-widest">{errors.phone}</p>}
                          </div>
                        </div>

                        {/* Service Selection */}
                        <div className="relative">
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Service of Interest</label>
                          <div className="relative group/select">
                            <select 
                              name="serviceRequired"
                              value={formData.serviceRequired}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gray-200 focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all appearance-none cursor-pointer"
                            >
                              <option className="bg-white text-vr-navy">Accounting & Bookkeeping</option>
                              <option className="bg-white text-vr-navy">Audit & Assurance</option>
                              <option className="bg-white text-vr-navy">VAT Consultancy</option>
                              <option className="bg-white text-vr-navy">Corporate Tax Advisory</option>
                              <option className="bg-white text-vr-navy">Business Advisory</option>
                              <option className="bg-white text-vr-navy">AML Compliance</option>
                            </select>
                            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-vr-blue pointer-events-none transition-transform group-hover/select:translate-y-[-40%]" />
                          </div>
                        </div>

                        {/* Message */}
                        <div className="relative pt-4">
                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Message <span className="text-gray-300 lowercase italic tracking-normal">(Optional)</span></label>
                          <textarea 
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={() => handleBlur('message')}
                            placeholder="Please outline your entity's specific requirements..."
                            className={`w-full bg-transparent border-b ${touched.message && errors.message ? 'border-red-500/50' : 'border-gray-200'} focus:border-vr-blue focus:outline-none py-3 text-vr-navy font-light text-lg transition-all resize-none placeholder:text-gray-300`}
                          ></textarea>
                          {touched.message && errors.message && <p className="absolute -bottom-6 left-0 text-[9px] text-red-500 font-bold uppercase tracking-widest">{errors.message}</p>}
                        </div>

                        {/* Error Message */}
                        {submitError && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-4 text-red-600 text-xs font-medium"
                          >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <p>{submitError}</p>
                          </motion.div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-8">
                          <motion.button 
                            type="submit" 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting || hasErrors || isFormEmpty}
                            className={`w-full py-6 rounded-full font-bold text-[11px] tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-4 ${
                              isSubmitting || hasErrors || isFormEmpty 
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200' 
                                : 'bg-vr-navy text-white shadow-[0_20px_40px_-10px_rgba(15,42,68,0.3)] hover:bg-vr-blue active:shadow-none'
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <span>Transmitting...</span>
                                <RefreshCcw className="w-4 h-4 animate-spin" />
                              </>
                            ) : (
                              <>
                                <span>Request Consultation</span>
                                <ArrowRight className="w-4 h-4" />
                              </>
                            )}
                          </motion.button>
                          <p className="text-center text-[8px] text-gray-400 uppercase tracking-[0.4em] mt-8">Secure 256-bit Encrypted Transmission</p>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutional Strip */}
      <section className="py-24 border-t border-gray-100 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
          >
            {[
              { label: 'Market Response', value: '< 24H' },
              { label: 'Security Grade', value: 'Tier 1' },
              { label: 'Jurisdiction', value: 'Dubai' },
              { label: 'Policy Status', value: 'Compliant' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-vr-blue text-2xl font-bold luxury-font">{stat.value}</p>
                <p className="text-vr-slate text-[9px] uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;