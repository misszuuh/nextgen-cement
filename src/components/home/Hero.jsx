import { motion } from 'framer-motion';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576692851006-76910d7e3da2?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
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
            <Button variant="primary">Download Investment Overview</Button>
            <Button variant="secondary">Partner With Us</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;