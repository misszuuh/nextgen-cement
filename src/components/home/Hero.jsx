import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PdfViewer from '../common/PdfViewer';

const Hero = () => {
  const [pdfOpen, setPdfOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}></div>
      <div className="container-custom py-20 md:py-32 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Building Africa's <span className="gradient-text">Low-Carbon</span> Cement Future
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            NextGen Cement Co Ltd, a subsidiary of GYPSUM Plus Mines Ltd, is developing a 1.2MTPA LC3 Cement Manufacturing Plant
            strategically located in Galu Industrial Area, Mpwapwa District, Dodoma Region, Tanzania.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setPdfOpen(true)}
              className="px-6 py-3 rounded-lg font-semibold bg-deep-green text-white hover:bg-opacity-90 transition-all duration-300"
            >
              View Company Profile
            </button>
            <Link
              to="/partnerships"
              className="px-6 py-3 rounded-lg font-semibold bg-transparent border-2 border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white transition-all duration-300 text-center"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </div>

      {pdfOpen && <PdfViewer onClose={() => setPdfOpen(false)} />}
    </section>
  );
};

export default Hero;