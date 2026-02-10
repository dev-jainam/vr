
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Bookmark, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { BLOG_POSTS } from '../constants.tsx';
import { useVault } from '../VaultContext.tsx';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const { localMap } = useVault();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find(p => p.id === Number(id));

  // Get 3 related posts, prioritizing same category
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== Number(id))
    .sort((a, b) => {
      if (post && a.category === post.category && b.category !== post.category) return -1;
      if (post && a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center">
          <h2 className="luxury-font text-4xl mb-4 text-[#121212]">Analysis Not Found</h2>
          <Link to="/blog" className="text-vr-blue uppercase tracking-[0.3em] text-[10px] font-bold border-b border-vr-blue pb-2">Back to Insights</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 selection:bg-vr-blue/20">
      {/* Article Header */}
      <header className="relative pt-20 pb-20 overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <button 
              onClick={() => navigate('/blog')}
              className="flex items-center gap-3 text-gray-400 hover:text-vr-blue transition-colors text-[10px] font-bold uppercase tracking-[0.3em] mb-12 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Intelligence
            </button>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-vr-blue text-white px-5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.25em]">
                {post.category}
              </span>
              <div className="h-[1px] w-12 bg-gray-100"></div>
              <span className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-vr-blue" /> {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold luxury-font text-[#121212] mb-10 tracking-tight leading-[1.15]">
              {post.title}
            </h1>

            <div className="flex items-center justify-between py-10 border-y border-gray-100">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex items-center justify-center shadow-lg shadow-black/10">
                  <User className="w-6 h-6 text-vr-blue" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#121212] uppercase tracking-[0.2em]">VR Global Editorial Desk</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2 mt-1">
                    <Calendar className="w-3.5 h-3.5" /> {post.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <Share2 className="w-5 h-5 hover:text-vr-blue cursor-pointer transition-colors" />
                <Bookmark className="w-5 h-5 hover:text-vr-blue cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Featured Image Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[21/9] rounded-[4rem] overflow-hidden shadow-2xl grayscale contrast-110 brightness-95"
        >
          <img 
            src={localMap[post.image] || post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-6 border-b border-gray-50 pb-32">
        <div className="prose prose-xl prose-gray max-w-none">
          <p className="text-2xl font-light text-[#121212] leading-relaxed mb-16 italic border-l-4 border-vr-blue pl-10">
            {post.excerpt}
          </p>

          <div className="space-y-16 text-gray-600 font-light leading-relaxed text-lg">
            {post.content ? (
              post.content.sections.map((section, idx) => (
                <div key={idx} className="space-y-8">
                  <h2 className="text-3xl md:text-5xl font-bold luxury-font text-[#121212] tracking-tight">{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              ))
            ) : (
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold luxury-font text-[#121212] tracking-tight">Executive Summary</h2>
                <p>
                  The regulatory environment in the United Arab Emirates has undergone a paradigm shift over the last 24 months. From the widespread adoption of Value Added Tax (VAT) to the recent implementation of a Federal Corporate Tax regime, entities operating within the UAE must now adhere to institutional-grade standards of financial transparency and accountability.
                </p>
              </div>
            )}

            {post.content?.keyTakeaways && (
              <div className="bg-[#fafafa] p-12 md:p-16 rounded-[4rem] border border-gray-100 my-20 shadow-sm">
                <h3 className="text-2xl font-bold luxury-font text-[#121212] mb-8 flex items-center gap-4">
                  <ShieldCheck className="w-7 h-7 text-vr-blue" /> Strategic Takeaways
                </h3>
                <ul className="space-y-8">
                  {post.content.keyTakeaways.map((item, i) => (
                    <li key={i} className="flex gap-5">
                      <div className="w-2 h-2 rounded-full bg-vr-blue mt-3 flex-shrink-0"></div>
                      <span className="text-gray-600 font-medium text-lg leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-8 pt-10">
              <h2 className="text-3xl md:text-5xl font-bold luxury-font text-[#121212] tracking-tight">Institutional Advisory</h2>
              <p>
                At VR GLOBAL, we believe that fiscal resilience is achieved through proactive financial architecture. For entities in DMCC, DIFC, and the Mainland, the focus must shift from mere 'bookkeeping' to strategic governance. Our partners remain at the forefront of these regulatory shifts to protect the commercial interests of our clients.
              </p>
            </div>
            
            <div className="py-24 flex flex-col items-center text-center">
              <div className="w-20 h-0.5 bg-gray-100 mb-12"></div>
              <p className="text-xs font-bold uppercase tracking-[0.5em] text-gray-400 mb-6">Conclusion of Mandate</p>
              <p className="text-gray-400 font-light italic max-w-2xl mx-auto text-base">
                VR GLOBAL CONSULTANCY FZE remains committed to the fiscal integrity of our partners. For a private consultation regarding the specifics of this analysis, please contact our Dubai HQ.
              </p>
            </div>
          </div>
        </div>

        {/* Post Actions */}
        <div className="pt-20 flex flex-col sm:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-10">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Share Insight</h4>
            <div className="flex gap-8 text-[#121212]">
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-vr-blue transition-colors" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-vr-blue transition-colors" />
              <Facebook className="w-5 h-5 cursor-pointer hover:text-vr-blue transition-colors" />
            </div>
          </div>
          <Link 
            to="/contact"
            className="bg-[#121212] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-blue transition-all flex items-center gap-4 shadow-2xl group"
          >
            Connect with an Advisor <ArrowRight className="w-4 h-4 text-vr-blue transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-20 gap-8">
            <div>
              <p className="text-vr-blue font-bold uppercase tracking-[0.5em] text-[10px] mb-4">Further Intelligence</p>
              <h2 className="text-4xl md:text-6xl font-bold luxury-font text-[#121212] tracking-tighter leading-none">
                Related <span className="italic text-gray-400">Analysis.</span>
              </h2>
            </div>
            <Link to="/blog" className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-vr-blue transition-colors border-b border-gray-200 pb-2 group">
              Explore All Insights <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {relatedPosts.map((related, idx) => (
              <motion.article
                key={related.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:border-vr-blue/30 hover:shadow-[0_40px_100px_rgba(31,78,140,0.08)] transition-all duration-700 h-full"
              >
                <Link to={`/blog/${related.id}`} className="block aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={localMap[related.image] || related.image} 
                    alt={related.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#121212]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest text-vr-blue border border-white/5 shadow-lg">
                      {related.category}
                    </span>
                  </div>
                </Link>
                <div className="p-8 lg:p-12 flex-grow flex flex-col">
                  <div className="flex items-center gap-5 text-gray-400 text-[9px] font-bold uppercase tracking-[0.25em] mb-6">
                    <Calendar className="w-3.5 h-3.5 text-vr-blue" /> {related.date}
                  </div>
                  <Link to={`/blog/${related.id}`}>
                    <h3 className="text-xl lg:text-2xl font-bold luxury-font text-[#121212] mb-6 group-hover:text-vr-blue transition-colors leading-tight tracking-tight line-clamp-2">
                      {related.title}
                    </h3>
                  </Link>
                  <p className="text-gray-500 text-sm font-light leading-relaxed mb-10 line-clamp-3">
                    {related.excerpt}
                  </p>
                  <div className="mt-auto pt-8 border-t border-gray-50">
                    <Link 
                      to={`/blog/${related.id}`} 
                      className="group/cta inline-flex items-center justify-between bg-[#121212] text-white px-8 py-5 rounded-full text-[9px] font-bold uppercase tracking-[0.4em] hover:bg-vr-blue transition-all shadow-xl shadow-black/5 w-full"
                    >
                      <span>Read Full Analysis</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
