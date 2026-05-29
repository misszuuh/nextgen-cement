import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { Leaf, Users, Shield, Sun } from 'lucide-react';

const ESG = () => {
  const pillars = [
    {
      icon: <Leaf className="w-10 h-10 text-deep-green" />,
      title: 'Environmental',
      color: 'border-deep-green',
      items: [
        '40% CO₂ reduction vs ordinary Portland cement',
        'Lower energy consumption per ton produced',
        'Reduced clinker factor through LC3 technology',
        'Water recycling and waste minimization systems',
        'Biodiversity protection in plant surroundings',
      ],
    },
    {
      icon: <Users className="w-10 h-10 text-dark-blue" />,
      title: 'Social',
      color: 'border-dark-blue',
      items: [
        '500+ direct employment opportunities',
        '2,000+ indirect jobs in supply chain',
        'Local community development programs',
        'Skills training and capacity building',
        'Women and youth empowerment initiatives',
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-cement-grey" />,
      title: 'Governance',
      color: 'border-cement-grey',
      items: [
        'Transparent financial reporting standards',
        'Independent board oversight',
        'Anti-corruption and compliance policies',
        'Stakeholder engagement framework',
        'Regular ESG performance audits',
      ],
    },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-deep-green to-dark-blue text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">ESG Commitment</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Building Green, Building Right
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Our ESG framework is embedded in every aspect of our operations — from technology selection
              to community engagement and corporate governance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Our ESG Pillars" subtitle="Environmental, Social, and Governance commitments" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className={`border-t-4 ${pillar.color} h-full`}>
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-2xl font-bold mb-6 text-dark-blue">{pillar.title}</h3>
                  <ul className="space-y-3">
                    {pillar.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-green mt-2 flex-shrink-0" />
                        {item}
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
              <span className="text-sm font-semibold text-deep-green uppercase tracking-widest">Climate Action</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mt-2 mb-6">
                Aligned with Global Climate Goals
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                NextGen Cement's LC3 technology directly supports Tanzania's Nationally Determined
                Contributions (NDCs) under the Paris Agreement, contributing to a 30-40% reduction
                in cement sector emissions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are committed to achieving net-zero operations by 2040, with interim milestones
                aligned to the Science Based Targets initiative (SBTi) framework.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '40%', label: 'CO₂ Reduction' },
                  { value: '2040', label: 'Net-Zero Target' },
                  { value: '500+', label: 'Jobs Created' },
                  { value: '100%', label: 'Local Sourcing Goal' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-deep-green">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
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
                title="ESG Impact Visualization"
                description="Carbon reduction chart and community impact infographic"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ESG;
