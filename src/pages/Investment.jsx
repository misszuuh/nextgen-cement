import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { DollarSign, TrendingUp, PieChart, FileText } from 'lucide-react';

const Investment = () => {
  const highlights = [
    { icon: <DollarSign className="w-8 h-8 text-deep-green" />, title: 'Total Project Cost', value: '$120M', desc: 'Full greenfield plant development' },
    { icon: <TrendingUp className="w-8 h-8 text-deep-green" />, title: 'Projected IRR', value: '22–28%', desc: 'Internal rate of return' },
    { icon: <PieChart className="w-8 h-8 text-deep-green" />, title: 'Equity Sought', value: '$40M', desc: 'Strategic equity partnership' },
    { icon: <FileText className="w-8 h-8 text-deep-green" />, title: 'Payback Period', value: '5–7 Yrs', desc: 'Full capital recovery timeline' },
  ];

  const structure = [
    { label: 'Equity', share: '33%', amount: '$40M', color: 'bg-deep-green' },
    { label: 'Senior Debt', share: '50%', amount: '$60M', color: 'bg-dark-blue' },
    { label: 'Mezzanine / DFI', share: '17%', amount: '$20M', color: 'bg-cement-grey' },
  ];

  const reasons = [
    'First-mover advantage in Tanzania\'s LC3 cement market',
    'Strategic rail-integrated location reducing logistics costs',
    'Strong government support and investment incentives',
    'Proven LC3 technology with global track record',
    'Experienced management team with regional expertise',
    'Clear exit pathways via IPO or strategic sale',
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
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Investment Opportunity</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              A Compelling Investment in Africa's Green Future
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              NextGen Cement offers investors a rare combination of strong financial returns,
              ESG alignment, and first-mover positioning in a high-growth market.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <div className="flex justify-center mb-4">{h.icon}</div>
                  <div className="text-3xl font-bold text-dark-blue mb-2">{h.value}</div>
                  <h4 className="font-semibold mb-2">{h.title}</h4>
                  <p className="text-sm text-gray-500">{h.desc}</p>
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
              <SectionHeading title="Capital Structure" centered={false} />
              <p className="text-gray-600 mb-8">
                A balanced financing structure combining equity, senior debt, and development finance
                to optimize returns while managing risk.
              </p>
              <div className="space-y-6">
                {structure.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-gray-500">{item.amount} ({item.share})</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: item.share }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4 flex-wrap">
                <Button variant="primary">Download Investment Deck</Button>
                <Button variant="secondary">Schedule a Call</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                title="Financial Projections Chart"
                description="Revenue, EBITDA, and IRR projection graphs"
                height="h-96"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Why Invest in NextGen Cement?" subtitle="Six compelling reasons to partner with us" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <span className="w-8 h-8 rounded-full bg-deep-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Investment;
