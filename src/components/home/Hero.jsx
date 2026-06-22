import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PdfViewer from '../common/PdfViewer';

const Hero = () => {
  const [pdfOpen, setPdfOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Ensure autoplay on mobile by attempting play on mount
    video.play().catch(() => {});
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        aria-hidden="true"
      />

      {/* Fallback poster / skeleton while video loads */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-opacity duration-700 ${
          videoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base uppercase tracking-widest text-emerald-400 font-semibold mb-4"
          >
            Tanzania · East Africa
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Building Africa's{' '}
            <span className="text-emerald-400">Low-Carbon</span>{' '}
            Cement Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            NextGen Cement Co Ltd is developing a 1.2MTPA LC3 Cement Manufacturing Plant
            in Gulwe Industrial Area, Dodoma Region, Tanzania — redefining sustainable
            construction across East and Southern Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => setPdfOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95 transition-all duration-300 shadow-lg shadow-emerald-500/30 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              View Company Profile
            </button>
            <Link
              to="/partnerships"
              className="w-full sm:w-auto px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 active:scale-95 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"
        />
      </motion.div>

      {pdfOpen && <PdfViewer onClose={() => setPdfOpen(false)} />}
    </section>
  );
};

export default Hero;
