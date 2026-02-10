
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, BookOpen, Clock, FileText, Download, ShieldCheck, Gem, Quote } from 'lucide-react';
import { BLOG_POSTS } from '../constants.tsx';
import { useVault } from '../VaultContext.tsx';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const { localMap } = useVault();

  return (
    <div className="pt-24 min-h-screen bg-[#fafafa]">
      {/* Magazine Style Header */}
      <section className="bg-[#121212] py-40 text-center relative overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-vr-blue rounded-full blur-[180px]"></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-600 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-vr-blue font-bold uppercase tracking-[0.6em] text-[10px] mb-8">Executive Intelligence Portfolio</p>
            <h1 className="text-5xl md:text-8xl font-bold luxury-font text-white mb-10 tracking-tighter">
              Insights & <span className="text-vr-blue italic">Advocacy.</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              Professional analysis on UAE taxation, regulatory shifts, and financial best practices for the region's premier enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16 mb-32">
            {/* Featured Article */}
            {BLOG_POSTS.slice(0, 2).map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-[4rem] overflow-hidden border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col"
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={localMap[post.image] || post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-[#121212]/90 backdrop-blur-xl px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-vr-blue border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-12 sm:p-16 flex-grow flex flex-col">
                  <div className="flex items-center gap-8 mb-8 text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em]">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-vr-blue" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-vr-blue" />
                      {post.readTime}
                    </div>
                  </div>

                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-3xl sm:text-4xl font-bold luxury-font text-[#121212] mb-8 group-hover:text-vr-blue transition-colors leading-tight tracking-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-vr-blue" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#121212]">VR Global Editorial</span>
                    </div>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-vr-blue font-bold uppercase tracking-[0.3em] text-[11px] group-hover:gap-5 transition-all">
                      Read Analysis <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Secondary Grid - Refined Layout */}
          <div className="grid lg:grid-cols-2 gap-10">
            {BLOG_POSTS.slice(2).map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row gap-8 group items-stretch bg-white p-8 rounded-[3.5rem] border border-gray-100 hover:border-vr-blue/20 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                <Link to={`/blog/${post.id}`} className="w-full sm:w-60 aspect-square rounded-[2.5rem] overflow-hidden shrink-0 shadow-lg shadow-black/5">
                  <img 
                    src={localMap[post.image] || post.image} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    alt={post.title} 
                  />
                </Link>
                <div className="flex-grow flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-vr-blue text-[9px] font-bold uppercase tracking-[0.3em]">{post.category}</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span className="text-gray-400 text-[9px] font-medium uppercase tracking-widest">{post.readTime}</span>
                    </div>
                    <Link to={`/blog/${post.id}`}>
                      <h3 className="text-2xl font-bold luxury-font text-[#121212] mb-4 group-hover:text-vr-blue transition-colors tracking-tight leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-400 text-[14px] font-light leading-relaxed mb-8 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.4em] text-vr-navy hover:text-vr-blue transition-all group/link">
                      <span>Full Report</span>
                      <ArrowRight className="w-3.5 h-3.5 text-vr-blue transition-transform duration-300 group-hover/link:translate-x-2" />
                    </Link>
                    <div className="text-[8px] font-bold uppercase tracking-widest text-gray-300">
                      Dubai HQ
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* NEW: THE INTELLIGENCE VAULT (Attractive Download Center) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-48 bg-[#0a0a0a] rounded-[5rem] p-12 md:p-24 lg:p-32 text-left relative overflow-hidden shadow-3xl shadow-black/40"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center overflow-hidden">
               <Gem className="w-[800px] h-[800px] text-white rotate-[-25deg] absolute -right-20 -top-20" />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(31,78,140,0.15),transparent_60%)]"></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-4 mb-8"
                >
                  <div className="w-12 h-[1px] bg-vr-blue"></div>
                  <span className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px]">Institutional Assets</span>
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-bold luxury-font text-white mb-10 tracking-tighter leading-[1.1]">
                  The <span className="text-vr-blue italic">Intelligence</span> <br /> Vault.
                </h2>
                <p className="text-gray-400 max-w-xl mb-12 text-xl font-light leading-relaxed">
                  Access our proprietary Whitepapers and Regulatory Briefs. These institutional assets provide the tactical foresight required to navigate the UAE's evolving fiscal landscape.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                   <Link to="/contact" className="bg-vr-blue text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white hover:text-vr-navy transition-all shadow-xl flex items-center justify-center gap-3 group">
                      Request Custom Brief <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
              </div>

              <div className="grid gap-8">
                {[
                  { 
                    title: "UAE Corporate Tax 2025 Outlook", 
                    tag: "Taxation", 
                    size: "2.4 MB PDF",
                    icon: ShieldCheck
                  },
                  { 
                    title: "DDE Compliance Mandate v4.0", 
                    tag: "Regulatory", 
                    size: "1.8 MB PDF",
                    icon: Gem
                  },
                  { 
                    title: "Global Supply Chain Audit Guide", 
                    tag: "Assurance", 
                    size: "3.1 MB PDF",
                    icon: FileText
                  }
                ].map((report, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2.5rem] flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-vr-blue/10 rounded-xl flex items-center justify-center text-vr-blue group-hover:bg-vr-blue group-hover:text-white transition-all">
                        <report.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-vr-blue text-[8px] font-bold uppercase tracking-[0.3em] mb-1 block">
                          {report.tag}
                        </span>
                        <h4 className="text-lg font-bold luxury-font text-white group-hover:text-vr-blue transition-colors">
                          {report.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold block mb-2">{report.size}</span>
                       <Download className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors ml-auto" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* PARTNER SPOTLIGHT (Attractive Commentary Section) */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 py-24 border-t border-gray-100 grid lg:grid-cols-12 gap-16 items-center"
          >
             <div className="lg:col-span-4 relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden grayscale contrast-125 brightness-90 shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    alt="CEO Spotlight"
                   />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-vr-blue p-8 rounded-3xl shadow-xl hidden md:block">
                   <Quote className="w-8 h-8 text-white opacity-20" />
                </div>
             </div>
             <div className="lg:col-span-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="max-w-3xl"
                >
                   <h3 className="text-[10px] font-bold tracking-[0.5em] text-vr-blue uppercase mb-8">Partner Perspective</h3>
                   <blockquote className="text-3xl md:text-5xl font-bold luxury-font text-vr-navy leading-tight mb-12 tracking-tight">
                      "Financial architecture in the UAE is no longer about compliance; it's about <span className="text-vr-blue italic">sovereignty.</span> Those who master their data, master their future."
                   </blockquote>
                   <div className="flex items-center gap-6">
                      <div className="h-[1px] w-12 bg-vr-blue"></div>
                      <div>
                         <p className="text-vr-navy font-bold uppercase tracking-widest text-sm">Parth Gadhiya</p>
                         <p className="text-vr-blue font-bold uppercase tracking-[0.3em] text-[10px] mt-1">CEO & Managing Director</p>
                      </div>
                   </div>
                </motion.div>
             </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default Blog;
