import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Train, Factory } from 'lucide-react';

const photos = [
  { src: '/images/plant-site.jpg', title: 'Gulwe Industrial Area', tag: 'Project Site', icon: Factory },
  { src: '/images/lc3map.jpg', title: 'Distribution Network', tag: 'Logistics', icon: MapPin },
  { src: '/images/gulwerailway.jpg', title: 'Gulwe Railway Corridor', tag: 'Infrastructure', icon: Train },
];

const Media = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-blue via-[#0d3d2c] to-deep-green text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -top-8 -right-8 w-56 h-56 rounded-full border border-white/5 pointer-events-none" />
        <div className="container-custom py-24 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-light-sand text-xs font-bold uppercase tracking-[0.2em] mb-4">
              
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Project <span className="text-green-400">Gallery</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Photography from the NextGen Cement project site in Dodoma, Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">

          {/* Featured — first image large */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-lg group mb-4 cursor-pointer"
          >
            <img
              src={photos[0].src}
              alt={photos[0].title}
              className="w-full h-64 sm:h-80 md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-dark-blue/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                <Factory className="w-3 h-3" />
                {photos[0].tag}
              </span>
              <span className="text-white font-semibold text-sm">{photos[0].title}</span>
            </div>
          </motion.div>

          {/* Two images side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {photos.slice(1).map((photo, idx) => {
              const Icon = photo.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl overflow-hidden shadow-md group cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-dark-blue/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
                      <Icon className="w-3 h-3" />
                      {photo.tag}
                    </span>
                    <span className="text-white font-semibold text-sm">{photo.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-dark-blue mb-3">Media Enquiries</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              For high-resolution images, site visits, or press enquiries — contact our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-deep-green text-white hover:bg-opacity-90 transition-all duration-200"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Media;
