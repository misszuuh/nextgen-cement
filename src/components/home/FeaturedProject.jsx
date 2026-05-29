import { motion } from 'framer-motion';
import ImagePlaceholder from '../common/ImagePlaceholder';
import Button from '../common/Button';
import { MapPin, Train, Leaf } from 'lucide-react';

const FeaturedProject = () => {
  const highlights = [
    { icon: <MapPin className="w-5 h-5 text-deep-green" />, text: 'Galu Industrial Area, Mpwapwa, Dodoma' },
    { icon: <Train className="w-5 h-5 text-deep-green" />, text: 'SGR & Central Line rail connectivity' },
    { icon: <Leaf className="w-5 h-5 text-deep-green" />, text: 'LC3 low-carbon cement technology' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-deep-green uppercase tracking-widest">Featured Project</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mt-2 mb-6">
              1.2MTPA Cement Plant — Dodoma, Tanzania
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A greenfield LC3 cement manufacturing facility positioned at the heart of Tanzania's
              central transport corridor, designed for regional export across EAC and SADC markets.
            </p>
            <div className="space-y-4 mb-8">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  {h.icon}
                  <span className="text-gray-700">{h.text}</span>
                </div>
              ))}
            </div>
            <Button variant="primary">View Full Project Details</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ImagePlaceholder
              title="Plant Site — Galu Industrial Area"
              description="Aerial view / site plan of the 1.2MTPA facility"
              height="h-96"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
