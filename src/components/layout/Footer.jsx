import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Factory, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'X / Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const quickLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/technology', label: 'LC3 Technology' },
  { to: '/products', label: 'Products' },
  { to: '/investment', label: 'Investment' },
  { to: '/esg', label: 'ESG' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Cookie Policy', href: '#' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient fade-in from page into footer */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(10, 61, 44, 0.18))',
        }}
      />

      {/* Main footer body */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(170deg, #0d3d2c 0%, #0a3326 30%, #082b20 60%, #061f17 100%)',
        }}
      >
        {/* Subtle radial glow top-center */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(34,197,94,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Top accent line */}
        <div
          className="w-full h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.5), rgba(15,76,58,0.8), rgba(34,197,94,0.5), transparent)',
          }}
        />

        <div className="container-custom pt-16 pb-10 relative z-10">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand column */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-5 group w-fit">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}>
                  <Factory className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  <span className="text-green-400">NextGen</span>
                  <span className="text-white"> Cement</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Building Africa's low-carbon cement future with advanced LC3 technology from the heart of Tanzania.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -2 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300"
                    style={{
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.2)',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(34,197,94,0.2)';
                      e.currentTarget.style.color = '#4ade80';
                      e.currentTarget.style.borderColor = 'rgba(34,197,94,0.5)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(34,197,94,0.1)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                      e.currentTarget.style.borderColor = 'rgba(34,197,94,0.2)';
                    }}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-green-400">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-1 text-sm transition-all duration-300"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4ade80'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-green-400">
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-all duration-300"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4ade80'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Newsletter teaser */}
              <div className="mt-8 p-4 rounded-xl"
                style={{ background: 'rgba(34,197,94,0.07)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <p className="text-xs font-semibold text-green-400 mb-1">Stay Updated</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Follow our progress as we build Tanzania's green cement future.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest mb-6 text-green-400">
                Contact
              </h4>
              <div className="space-y-4">
                {[
                  { icon: <MapPin className="w-4 h-4 flex-shrink-0 text-green-500 mt-0.5" />, text: 'CBD Area, Sokoine Drive, Dar es Salaam, Tanzania' },
                  { icon: <Phone className="w-4 h-4 flex-shrink-0 text-green-500" />, text: '+255 735 283 711' },
                  { icon: <Mail className="w-4 h-4 flex-shrink-0 text-green-500" />, text: 'ceo@gypsumplusmines.co.tz' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {item.icon}
                    <span className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{
              borderTop: '1px solid rgba(34,197,94,0.15)',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            <p>&copy; {new Date().getFullYear()} NextGen Cement Co Ltd. All rights reserved.</p>
            <p>A subsidiary of <span className="text-green-500/70">GYPSUM Plus Mines Ltd</span></p>
          </div>
        </div>

        {/* Bottom deep glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(6,20,14,0.9), transparent)',
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
