import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import Button from '../components/common/Button';
import { Handshake, Building2, FlaskConical, Landmark } from 'lucide-react';

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: <Landmark className="w-8 h-8 text-deep-green" />,
      title: 'Financial Partners',
      desc: 'Development finance institutions, private equity, and impact investors seeking strong returns with ESG alignment.',
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-deep-green" />,
      title: 'Technology Partners',
      desc: 'LC3 technology licensors, equipment suppliers, and process engineering firms with proven cement manufacturing expertise.',
    },
    {
      icon: <Building2 className="w-8 h-8 text-deep-green" />,
      title: 'Construction Partners',
      desc: 'Large-scale contractors, real estate developers, and government infrastructure agencies across EAC and SADC.',
    },
    {
      icon: <Handshake className="w-8 h-8 text-deep-green" />,
      title: 'Distribution Partners',
      desc: 'Regional distributors, logistics companies, and retail networks to extend our market reach across corridors.',
    },
  ];

  const existingPartners = [
    { name: 'GYPSUM Plus Mines Ltd', role: 'Parent Company & Raw Material Supplier', type: 'Strategic' },
    { name: 'Tanzania Railways Corporation', role: 'Rail Logistics Partner', type: 'Logistics' },
    { name: 'Tanzania Investment Centre', role: 'Investment Facilitation', type: 'Government' },
    { name: 'EPZA Tanzania', role: 'Export Processing Zone Authority', type: 'Government' },
    { name: 'Local Financial Institutions', role: 'Working Capital Financing', type: 'Finance' },
    { name: 'EPC Contractor (TBD)', role: 'Plant Construction', type: 'Construction' },
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
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Partnerships</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Building Together for Greater Impact
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              We actively seek strategic partnerships across finance, technology, construction,
              and distribution to accelerate our mission and maximize regional impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Partnership Opportunities" subtitle="Four ways to partner with NextGen Cement" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {partnerTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="mb-4">{type.icon}</div>
                  <h3 className="text-lg font-bold text-dark-blue mb-3">{type.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{type.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Current Partners & Stakeholders" subtitle="Organizations already engaged in our journey" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {existingPartners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-dark-blue">{partner.name}</h4>
                    <span className="text-xs bg-light-sand text-dark-blue px-2 py-1 rounded-full font-medium flex-shrink-0 ml-2">
                      {partner.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{partner.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-blue text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Partnering?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              We welcome conversations with potential partners across all categories.
              Reach out to explore how we can create value together.
            </p>
            <Button variant="outline">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
