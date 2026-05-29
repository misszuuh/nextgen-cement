import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import Button from '../components/common/Button';
import { CheckCircle2, Package } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'LC3-50 Standard',
      grade: 'CEM II/A-LL 42.5N',
      description: 'General purpose low-carbon cement for residential and commercial construction.',
      applications: ['Housing & residential', 'Commercial buildings', 'General concrete works', 'Plastering & masonry'],
      highlight: 'Most Popular',
    },
    {
      name: 'LC3-50 Premium',
      grade: 'CEM II/B-LL 52.5R',
      description: 'High-strength rapid-hardening cement for demanding structural applications.',
      applications: ['High-rise structures', 'Bridges & infrastructure', 'Precast concrete', 'Industrial floors'],
      highlight: 'High Strength',
    },
    {
      name: 'LC3 Blended',
      grade: 'CEM IV/B 32.5N',
      description: 'Economy grade blended cement for non-structural and general use applications.',
      applications: ['Block making', 'Non-structural fills', 'Soil stabilization', 'Road base works'],
      highlight: 'Economy Grade',
    },
  ];

  const specs = [
    { label: 'Clinker Factor', value: '~50%', note: 'vs 95% in OPC' },
    { label: 'CO₂ per ton', value: '~400 kg', note: 'vs ~800 kg OPC' },
    { label: 'Compressive Strength', value: '42.5–52.5 MPa', note: 'at 28 days' },
    { label: 'Setting Time', value: '45–600 min', note: 'initial to final' },
    { label: 'Fineness', value: '≥ 300 m²/kg', note: 'Blaine surface area' },
    { label: 'Soundness', value: '≤ 10 mm', note: 'Le Chatelier expansion' },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-dark-blue to-deep-green text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              LC3 Cement Product Range
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              A complete range of low-carbon LC3 cement products engineered for East Africa's
              diverse construction needs — from residential housing to major infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Product Range" subtitle="Three grades designed for every construction application" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {idx === 0 && (
                  <div className="absolute -top-3 left-6 bg-deep-green text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {product.highlight}
                  </div>
                )}
                <Card className={`h-full ${idx === 0 ? 'border-2 border-deep-green' : ''}`}>
                  <div className="mb-4">
                    <Package className="w-10 h-10 text-deep-green" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-1">{product.name}</h3>
                  <span className="text-xs font-mono text-cement-grey bg-gray-100 px-2 py-1 rounded">{product.grade}</span>
                  <p className="text-gray-600 mt-4 mb-6 text-sm leading-relaxed">{product.description}</p>
                  <h4 className="font-semibold text-sm mb-3">Applications:</h4>
                  <ul className="space-y-2">
                    {product.applications.map((app, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-deep-green flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Technical Specifications" centered={false} />
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-lg font-bold text-deep-green">{spec.value}</div>
                    <div className="font-medium text-dark-blue text-sm mt-1">{spec.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{spec.note}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary">Download Technical Data Sheet</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                title="LC3 Cement Product Packaging"
                description="Product bag design and branding visualization"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
