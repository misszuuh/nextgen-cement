import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Factory, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Navigation structure — grouped into dropdowns
const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'Company',
    children: [
      { label: 'About Us', path: '/about', desc: 'Our story, mission & team' },
      { label: 'ESG', path: '/esg', desc: 'Environmental & social commitment' },
      { label: 'Media', path: '/media', desc: 'News, press & downloads' },
    ],
  },
  {
    label: 'Project',
    children: [
      { label: 'Technology', path: '/technology', desc: 'LC3 low-carbon cement process' },
      { label: 'Location', path: '/location', desc: 'Galu Industrial Area, Dodoma' },
      { label: 'Products', path: '/products', desc: 'Our cement product range' },
      { label: 'Roadmap', path: '/roadmap', desc: 'Development timeline & phases' },
    ],
  },
  {
    label: 'Invest',
    children: [
      { label: 'Market Opportunity', path: '/market', desc: 'EAC + SADC market analysis' },
      { label: 'Investment', path: '/investment', desc: 'Capital structure & returns' },
      { label: 'Partnerships', path: '/partnerships', desc: 'Strategic partner opportunities' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

// Dropdown menu component
const DropdownMenu = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  const isGroupActive = item.children?.some((c) => location.pathname === c.path);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 px-1 py-1 rounded
          ${isGroupActive ? 'text-deep-green' : 'text-gray-600 hover:text-deep-green'}`}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.span>
        {/* Active underline dot */}
        {isGroupActive && (
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-deep-green" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden z-50"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(15,76,58,0.12), 0 4px 16px rgba(0,0,0,0.08)',
              border: '1px solid rgba(15,76,58,0.1)',
            }}
          >
            {/* Top accent */}
            <div className="h-0.5 w-full" style={{ background: 'linear-gradient(to right, #0F4C3A, #0B2B5B)' }} />
            <div className="p-2">
              {item.children.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  onClick={() => { setOpen(false); onClose?.(); }}
                  className={({ isActive }) =>
                    `flex flex-col px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive
                      ? 'bg-deep-green/8 text-deep-green'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-deep-green'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={`text-sm font-semibold ${isActive ? 'text-deep-green' : ''}`}>
                        {child.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5 group-hover:text-gray-500 transition-colors">
                        {child.desc}
                      </span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile accordion section
const MobileSection = ({ item, onClose }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isGroupActive = item.children?.some((c) => location.pathname === c.path);

  if (!item.children) {
    return (
      <NavLink
        to={item.path}
        onClick={onClose}
        className={({ isActive }) =>
          `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
          ${isActive ? 'bg-deep-green text-white' : 'text-gray-700 hover:bg-gray-50 hover:text-deep-green'}`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
          ${isGroupActive ? 'text-deep-green' : 'text-gray-700 hover:bg-gray-50'}`}
      >
        {item.label}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-1 mb-2 pl-4 space-y-1"
              style={{ borderLeft: '2px solid rgba(15,76,58,0.15)' }}>
              {item.children.map((child) => (
                <NavLink
                  key={child.path}
                  to={child.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                    ${isActive ? 'text-deep-green font-semibold' : 'text-gray-600 hover:text-deep-green'}`
                  }
                >
                  {child.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.95)'
          : 'rgba(255,255,255,1)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled
          ? '0 4px 24px rgba(15,76,58,0.08), 0 1px 0 rgba(15,76,58,0.06)'
          : '0 1px 0 rgba(0,0,0,0.06)',
      }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18" style={{ height: '72px' }}>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #0F4C3A, #0B2B5B)' }}>
              <Factory className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              <span style={{ color: '#0F4C3A' }}>NextGen</span>
              <span style={{ color: '#0B2B5B' }}> Cement</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label} item={item} />
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium px-3 py-1.5 rounded transition-colors duration-200
                    ${isActive ? 'text-deep-green' : 'text-gray-600 hover:text-deep-green'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-deep-green"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              )
            )}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center text-sm font-semibold px-5 py-2.5 rounded-xl text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0F4C3A, #0B2B5B)' }}
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200"
              style={{ background: mobileOpen ? 'rgba(15,76,58,0.08)' : 'transparent' }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5 text-gray-700" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{ borderTop: '1px solid rgba(15,76,58,0.08)' }}
          >
            <div className="container-custom py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <MobileSection
                  key={item.label}
                  item={item}
                  onClose={() => setMobileOpen(false)}
                />
              ))}
              <div className="pt-3 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-sm font-semibold px-5 py-3 rounded-xl text-white"
                  style={{ background: 'linear-gradient(135deg, #0F4C3A, #0B2B5B)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
