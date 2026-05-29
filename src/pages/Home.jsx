import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import KpiBanner from '../components/home/KpiBanner';
import FeaturedProject from '../components/home/FeaturedProject';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Leaf, Train, Globe, BarChart3 } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-deep-green" />,
      title: 'Low Carbon',
      description: 'Up to 40% CO2 reduction with advanced LC3 technology',
    },
    {
      icon: <Train className="w-8 h-8 text-deep-green" />,
      title: 'Rail Integrated',
      description: 'Direct SGR & Central Line connectivity',
    },
    {
      icon: <Globe className="w-8 h-8 text-deep-green" />,
      title: 'Regional Export',
      description: 'Covering EAC + SADC markets',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-deep-green" />,
      title: '1.2MTPA Capacity',
      description: 'Scalable production platform',
    },
  ];

  return (
    <>
      <Hero />
      <KpiBanner />
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why NextGen Cement?"
            subtitle="Pioneering sustainable cement manufacturing in East Africa"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FeaturedProject />
      <section className="bg-light-sand py-20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Shape Africa's Infrastructure Future?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join us in building sustainable, low-carbon cement solutions across East and Southern Africa.
          </p>
          <Button variant="primary">Contact Investment Team</Button>
        </div>
      </section>
    </>
  );
};

export default Home;