import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { CheckCircle2, Factory, Recycle, Zap } from 'lucide-react';

const Technology = () => {
  const benefits = [
    'Up to 40% lower CO₂ emissions',
    'Reduced energy consumption',
    'Improved sustainability profile',
    'Lower clinker factor',
    'Competitive production costs',
    'High structural performance',
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container-custom">
          <SectionHeading
            title="LC3 Technology"
            subtitle="Next-generation low-carbon cement technology"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-700 mb-6">
                LC3 (Limestone Calcined Clay Cement) is a revolutionary cement technology designed to reduce clinker dependency
                and significantly lower carbon emissions while maintaining superior structural performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-deep-green" />
                    <span>{benefit}</span>
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
                title="LC3 Production Flow Diagram"
                description="CO₂ reduction comparison & process flow visualization"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Factory className="w-12 h-12" />, title: 'Lower Clinker Factor', desc: '50% clinker replacement reduces emissions significantly' },
              { icon: <Recycle className="w-12 h-12" />, title: 'Calcined Clay', desc: 'Using locally available clay and limestone' },
              { icon: <Zap className="w-12 h-12" />, title: 'Energy Efficient', desc: 'Lower firing temperature reduces energy costs' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="text-deep-green flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;