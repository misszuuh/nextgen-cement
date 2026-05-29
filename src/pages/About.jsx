import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import Button from '../components/common/Button';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Target className="w-8 h-8 text-deep-green" />, title: 'Mission', desc: 'To manufacture and supply high-quality, low-carbon LC3 cement across East and Southern Africa, driving sustainable infrastructure development.' },
    { icon: <Eye className="w-8 h-8 text-deep-green" />, title: 'Vision', desc: 'To become the leading low-carbon cement producer in Sub-Saharan Africa by 2030, setting the benchmark for green construction materials.' },
    { icon: <Users className="w-8 h-8 text-deep-green" />, title: 'Community', desc: 'Creating over 500 direct jobs and thousands of indirect employment opportunities in the Dodoma region and beyond.' },
    { icon: <Award className="w-8 h-8 text-deep-green" />, title: 'Excellence', desc: 'Committed to world-class manufacturing standards, quality assurance, and continuous innovation in cement technology.' },
  ];

  const team = [
    { name: 'Executive Leadership', role: 'Strategic Direction & Vision', placeholder: 'CEO / Managing Director' },
    { name: 'Technical Team', role: 'LC3 Process Engineering', placeholder: 'Chief Technical Officer' },
    { name: 'Finance & Investment', role: 'Capital Structure & Investor Relations', placeholder: 'Chief Financial Officer' },
    { name: 'Operations', role: 'Plant Management & Logistics', placeholder: 'Chief Operations Officer' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark-blue to-deep-green text-white py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              Pioneering Sustainable Cement in East Africa
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              NextGen Cement Co Ltd is a subsidiary of GYPSUM Plus Mines Ltd, established to develop
              Tanzania's first large-scale LC3 cement manufacturing facility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Our Story" centered={false} />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded as a strategic venture under GYPSUM Plus Mines Ltd, NextGen Cement was created
                to address the growing demand for sustainable construction materials across East and
                Southern Africa.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With Tanzania's construction sector growing at over 8% annually and a significant
                infrastructure deficit across the EAC region, NextGen Cement is positioned to deliver
                a transformative solution — high-quality, low-carbon cement at competitive prices.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our 1.2MTPA greenfield plant in Galu Industrial Area, Mpwapwa District, leverages
                LC3 technology to reduce CO₂ emissions by up to 40% compared to ordinary Portland cement.
              </p>
              <Button variant="primary">Download Company Profile</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                title="Company Overview"
                description="GYPSUM Plus Mines Ltd — Parent company profile image"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide everything we do" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <div className="mb-4">{v.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-dark-blue">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Leadership Team" subtitle="Experienced professionals driving our vision forward" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <ImagePlaceholder
                    title={member.placeholder}
                    description="Team member photo"
                    height="h-40"
                  />
                  <h4 className="font-semibold text-dark-blue mt-4">{member.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
