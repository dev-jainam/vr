import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();

  const services = [
    { label: 'Accounting & Bookkeeping', path: '/services/accounting' },
    { label: 'Financial Reports', path: '/services/financial-reports' },
    { label: 'Tax Planning & Filing', path: '/services/tax-planning' },
    { label: 'AML Compliance Service', path: '/services/aml-compliance' },
    { label: 'Audit & Assurance', path: '/services/audit' },
    { label: 'Business Advisory Services', path: '/services/business-advisory' },
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Team', path: '/team' },
    { label: 'Our Service', path: '/services', isDropdown: true },
    { label: 'Blog / Insights', path: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string, isDropdown = false) => {
    if (isDropdown) return location.pathname.startsWith('/services');
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';
  const isLightMode = scrolled || !isHomePage;

  const navBase = 'fixed w-full z-50 transition-all duration-500 ease-in-out';
  const navBg = isLightMode
    ? 'bg-white h-20 border-b border-black/5 shadow-lg shadow-black/5'
    : 'bg-transparent h-24 border-b border-transparent shadow-none';

  const textColor = isLightMode ? 'text-vr-navy' : 'text-white';
  const activeLinkColor = 'text-vr-blue';
  const ctaClasses = isLightMode
    ? 'bg-vr-navy text-white hover:bg-vr-blue'
    : 'bg-white text-vr-navy hover:bg-vr-blue hover:text-white';

  return (
    <nav className={`${navBase} ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-full">
        <div className="flex items-center justify-between h-full">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className=" flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="VR Global Logo" 
                className="w-48 h-32 object-cover p-1"
              />
            </div>
            {/* <div className="flex flex-col leading-none">
              <span className={`text-xl font-bold tracking-[0.15em] luxury-font transition-colors duration-500 ${textColor}`}>
                VR GLOBAL
              </span>
              <span
                className={`text-[8px] tracking-[0.3em] uppercase font-bold transition-colors duration-500 ${isLightMode ? 'text-vr-slate' : 'text-vr-blue'
                  }`}
              >
                Consultancy FZE
              </span>
            </div> */}
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative h-full flex items-center"
                onMouseEnter={() => link.isDropdown && setShowDropdown(true)}
                onMouseLeave={() => link.isDropdown && setShowDropdown(false)}
              >
                <Link
                  to={link.isDropdown ? '#' : link.path}
                  onClick={(e) => link.isDropdown && e.preventDefault()}
                  className={`text-[11px] uppercase tracking-[0.25em] font-bold transition-colors duration-500 ${isActive(link.path, link.isDropdown)
                      ? activeLinkColor
                      : `${textColor} hover:${activeLinkColor}`
                    }`}
                >
                  {link.label}
                  {link.isDropdown && (
                    <ChevronDown className={`inline-block ml-1 w-3 h-3 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* ACTIVE UNDERLINE */}
                {isActive(link.path, link.isDropdown) && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-vr-blue"
                  />
                )}

                {/* DROPDOWN */}
                <AnimatePresence>
                  {link.isDropdown && showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 rounded-2xl overflow-hidden border shadow-2xl ${isLightMode
                          ? 'bg-white border-gray-100'
                          : 'bg-vr-navy border-white/10'
                        }`}
                    >
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className={`block px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold transition ${location.pathname === s.path
                              ? 'text-vr-blue'
                              : isLightMode
                                ? 'text-vr-slate hover:bg-gray-50'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className={`px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all duration-300 hover:scale-105 active:scale-95 ${ctaClasses}`}
            >
              Free Consultation
            </Link>
          </div>

          {/* MOBILE */}
          <button
            className={`md:hidden transition-colors duration-500 ${textColor}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="fixed inset-0 bg-white z-[60] p-8 pt-24"
          >
            <div className="space-y-6">
              {navLinks.map((link) => (
                <div key={link.path} className="space-y-3">
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block text-2xl luxury-font font-bold ${isActive(link.path, link.isDropdown)
                        ? 'text-vr-blue'
                        : 'text-vr-navy'
                      }`}
                  >
                    {link.label}
                  </Link>
                  {link.isDropdown && (
                    <div className="pl-3 border-l border-gray-100 space-y-3">
                      {services.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          onClick={() => setIsOpen(false)}
                          className={`block text-base font-semibold ${location.pathname === s.path ? 'text-vr-blue' : 'text-vr-navy/70 hover:text-vr-blue'}`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
