import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowRight,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-vr-navy text-white pt-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-20">
          {/* Column 1: Brand Overview */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              {/* <div className="w-14 h-14 overflow-hidden rounded-full border border-white/10 group-hover:rotate-12 transition-transform duration-500 bg-white p-0.5">
                <img src="/logo.png" alt="VR Global Logo" className="w-full h-full object-contain p-1 rounded-full" />
              </div> */}
              <div className=" flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="VR Global Logo"
                  className="-mt-24 object-cover p-1"
                />
              </div>
              {/* <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-[0.1em] luxury-font leading-none uppercase text-white">
                  VR GLOBAL
                </span>
                <span className="text-[9px] tracking-[0.4em] uppercase text-vr-blue font-bold">Consultancy FZE</span>
              </div> */}
            </Link>
            <p className="text-gray-300 text-[15px] leading-relaxed max-w-xs font-light">
              Dubai’s definitive financial architecture firm, providing
              institutional-grade accounting, tax, and strategic advisory for
              the region's premier commercial entities.
            </p>
            <div className="flex gap-5 pt-2">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-vr-blue hover:border-vr-blue/50 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vr-blue mb-10">
              Institutional Services
            </h4>
            <ul className="space-y-5">
              {[
                {
                  label: "Accounting & Bookkeeping",
                  path: "/services/accounting",
                },
                {
                  label: "Financial Reports",
                  path: "/services/financial-reports",
                },
                {
                  label: "Tax Planning & Filing",
                  path: "/services/tax-planning",
                },
                {
                  label: "AML Compliance Service",
                  path: "/services/aml-compliance",
                },
                { label: "Audit & Assurance", path: "/services/audit" },
                {
                  label: "Business Advisory Services",
                  path: "/services/business-advisory",
                },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-3 group"
                  >
                    <span className="w-1 h-1 bg-vr-blue/30 group-hover:bg-vr-blue rounded-full transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vr-blue mb-10">
              Corporate Hub
            </h4>
            <ul className="space-y-5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Team", path: "/team" },
                { label: "Strategic Insights", path: "/blog" },
                { label: "Partner FAQ", path: "/faq" },
                { label: "Contact HQ", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-[11px] uppercase tracking-[0.2em] font-medium flex items-center gap-3 group"
                  >
                    <span className="w-1 h-1 bg-vr-blue/30 group-hover:bg-vr-blue rounded-full transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] text-vr-blue mb-10">
              Dubai HQ
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <MapPin className="w-5 h-5 text-vr-blue flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] text-white font-medium uppercase tracking-wider">
                    Business Bay
                  </span>
                  <span className="text-[13px] text-gray-400 font-light leading-relaxed">
                    Financial Center Road,
                    <br />
                    Dubai, United Arab Emirates
                  </span>
                </div>
              </li>
              <li className="flex gap-5 items-center">
                <Phone className="w-5 h-5 text-vr-blue flex-shrink-0" />
                <span className="text-[14px] text-white font-light tracking-[0.15em]">
                  +971 4 000 0000
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <Mail className="w-5 h-5 text-vr-blue flex-shrink-0" />
                <span className="text-[14px] text-white font-light tracking-[0.1em]">
                  advisor@vrglobal.ae
                </span>
              </li>
              <li className="flex gap-5 items-center">
                <Globe className="w-5 h-5 text-vr-blue flex-shrink-0" />
                <span className="text-[14px] text-white font-light tracking-[0.1em]">
                  www.vrglobal.ae
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="py-12 border-t border-white/5">
          <div className="bg-vr-blue rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"></div>
            <div className="text-center md:text-left relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold luxury-font text-white mb-3 tracking-tight">
                Elevate your financial architecture.
              </h3>
              <p className="text-blue-100 text-base font-light max-w-xl">
                Join the region's premier enterprises. Secure a private session
                with our senior partners for a comprehensive review.
              </p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 bg-white text-vr-navy px-14 py-5 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-vr-navy hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl flex items-center gap-4 group/btn"
            >
              Free Consultation{" "}
              <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
            </Link>
          </div>
        </div>

        {/* Bottom Section with Confidentiality Notice */}
        <div className="pt-10 pb-12 border-t border-white/5">
          <div className="flex flex-col gap-10">
            <div className="grid lg:grid-cols-3 items-start gap-8">
              <div className="lg:col-span-2">
                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-vr-blue mb-3">
                  Confidentiality Notice
                </h5>
                <p className="text-gray-500 text-[11px] leading-relaxed font-light italic max-w-2xl">
                  This document and the associated web portal contain privileged
                  and confidential information intended solely for the
                  addressee. Unauthorized use, disclosure, or distribution of
                  any data or analysis provided by VR GLOBAL CONSULTANCY FZE is
                  strictly prohibited under UAE Federal Law.
                </p>
              </div>
              <div className="flex justify-end gap-6 items-center">
                <Link
                  to="/privacy-policy"
                  className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-vr-blue transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-of-engagement"
                  className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-vr-blue transition-colors"
                >
                  Terms of Engagement
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.35em] text-gray-500 border-t border-white/5 pt-10">
              <div className="flex items-center gap-2">
                <span>© VR GLOBAL CONSULTANCY FZE</span>
                <span className="text-vr-blue">·</span>
                <span>{currentYear}</span>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-vr-blue/40" />
                <span>Dubai</span>
                <span className="text-vr-blue">·</span>
                <span>United Arab Emirates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
