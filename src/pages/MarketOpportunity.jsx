import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { TrendingUp, Globe, Building2, DollarSign } from 'lucide-react';

const MarketOpportunity = () => {
  const marketStats = [
    { icon: <TrendingUp className="w-8 h-8 text-deep-green" />, value: '8%+', label: 'Tanzania Construction Growth', desc: 'Annual sector growth rate driven by infrastructure investment' },
    { icon: <Globe className="w-8 h-8 text-deep-green" />, value: '200M+', label: 'Target Market Population', desc: 'EAC + SADC combined addressable market' },
    { icon: <Building2 className="w-8 h-8 text-deep-green" />, value: '$4B+', label: 'Regional Cement Market', desc: 'Annual market value across target corridors' },
    { icon: <DollarSign className="w-8 h-8 text-deep-green" />, value: '35%', label: 'Supply Gap', desc: 'Unmet demand in key distribution corridors' },
  ];

  const markets = [
    { region: 'Tanzania (Domestic)', share: '45%', color: 'bg-deep-green' },
    { region: 'Kenya & Uganda', share: '20%', color: 'bg-dark-blue' },
    { region: 'Rwanda & Burundi', share: '10%', color: 'bg-cement-grey' },
    { region: 'DRC (Eastern)', share: '15%', color: 'bg-light-sand' },
    { region: 'Zambia & Malawi', share: '10%', color: 'bg-deep-green/60' },
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
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Market Opportunity</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              A $4B+ Regional Cement Market
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              East and Southern Africa represent one of the world's fastest-growing construction markets,
              with significant unmet demand for quality, affordable cement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-dark-blue mb-2">{stat.value}</div>
                  <h4 className="font-semibold mb-2">{stat.label}</h4>
                  <p className="text-sm text-gray-500">{stat.desc}</p>
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
              <SectionHeading title="Target Market Distribution" centered={false} />
              <p className="text-gray-600 mb-8">
                Our multi-corridor distribution strategy targets key markets across the EAC and SADC regions,
                leveraging Tanzania's central geographic position.
              </p>
              <div className="space-y-4">
                {markets.map((m, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{m.region}</span>
                      <span className="text-gray-500">{m.share}</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${m.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: m.share }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                title="Regional Market Map"
                description="EAC + SADC market coverage visualization"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Market Drivers" subtitle="Key factors fueling demand across our target markets" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Infrastructure Deficit', desc: 'Massive housing, road, and public infrastructure gaps across EAC nations require sustained cement supply for decades.' },
              { title: 'Urbanization Rate', desc: 'Africa\'s urban population is growing at 4% annually, driving unprecedented demand for construction materials.' },
              { title: 'Green Building Codes', desc: 'Emerging sustainability regulations across the region favor low-carbon cement products like LC3 over traditional OPC.' },
            ].map((driver, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="w-10 h-1 bg-deep-green rounded mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-dark-blue">{driver.title}</h3>
                  <p className="text-gray-600">{driver.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketOpportunity;
