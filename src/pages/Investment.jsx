import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/common/SectionHeading';
import {
  TrendingUp,
  Clock,
  ShieldCheck,
  Rocket,
  Users,
  ArrowRight,
  CheckCircle2,
  BadgeDollarSign,
  BarChart3,
  Landmark,
} from 'lucide-react';

/* ─── Data ────────────────────────────────────────────────────── */
const highlights = [
  {
    icon: BadgeDollarSign,
    label: 'Total Project Cost',
    value: 'TZS 306B',
    sub: '≈ USD 120M',
    desc: 'Full greenfield LC3 plant development',
    accent: '#0F4C3A',
  },
  {
    icon: TrendingUp,
    label: 'Projected IRR',
    value: '22–28%',
    sub: 'Internal rate of return',
    desc: 'Above-market risk-adjusted returns',
    accent: '#0B2B5B',
  },
  {
    icon: Landmark,
    label: 'Equity Sought',
    value: 'TZS 102B',
    sub: '≈ USD 40M',
    desc: 'Strategic equity partnership',
    accent: '#0F4C3A',
  },
  {
    icon: Clock,
    label: 'Payback Period',
    value: '5–7 Yrs',
    sub: 'Full capital recovery',
    desc: 'Accelerated by rail logistics advantage',
    accent: '#0B2B5B',
  },
];

const structure = [
  { label: 'Equity', share: 33, display: '33%', amount: 'TZS 102B', usd: 'USD 40M', color: 'bg-deep-green' },
  { label: 'Senior Debt', share: 50, display: '50%', amount: 'TZS 153B', usd: 'USD 60M', color: 'bg-dark-blue' },
  { label: 'Mezzanine / DFI', share: 17, display: '17%', amount: 'TZS 51B', usd: 'USD 20M', color: 'bg-cement-grey' },
];

const reasons = [
  { icon: Rocket, title: 'First-Mover Advantage', desc: "Tanzania's first large-scale LC3 cement producer — capturing the market before competition." },
  { icon: TrendingUp, title: 'Rail-Integrated Logistics', desc: 'Direct SGR & Central Line access dramatically reduces cost-per-ton vs road transport.' },
  { icon: ShieldCheck, title: 'Government Backed', desc: 'Strong regulatory support, TIC approval, and EPZA incentives de-risk the project.' },
  { icon: BarChart3, title: 'Proven Technology', desc: 'LC3 is globally proven across Asia, Europe, and Latin America — zero technology risk.' },
  { icon: Users, title: 'Experienced Team', desc: 'Management brings deep regional expertise across cement, finance, and infrastructure.' },
  { icon: CheckCircle2, title: 'Clear Exit Strategy', desc: 'Defined pathways via IPO on DSE / NSE or strategic trade sale by 2030.' },
];

const timeline = [
  { year: '2024–25', label: 'Financing & Development', status: 'active' },
  { year: '2025–27', label: 'Construction', status: 'upcoming' },
  { year: '2027–28', label: 'Commercial Launch', status: 'upcoming' },
  { year: '2028–30', label: 'Scale & Exit', status: 'upcoming' },
];

/* ─── Component ───────────────────────────────────────────────── */
const Investment = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-dark-blue via-[#0d3d2c] to-deep-green text-white overflow-hidden">
        {/* decorative rings */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/3 blur-3xl pointer-events-none" />

        <div className="container-custom py-24 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-light-sand text-xs font-bold uppercase tracking-[0.2em] mb-4">
              
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Compelling Investment<br />
              <span className="text-green-400">in Africa's Green Future</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
              NextGen Cement offers investors a rare combination of strong financial returns,
              full ESG alignment, and first-mover positioning in one of the world's
              fastest-growing construction markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-green-400 text-dark-blue hover:bg-green-300 transition-all duration-200"
              >
                Contact Investment Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-200"
              >
                Schedule a Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Metrics ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                    style={{ background: h.accent }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${h.accent}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: h.accent }} />
                  </div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{h.label}</p>
                  <p className="text-3xl font-bold text-gray-900 leading-none mb-1">{h.value}</p>
                  <p className="text-sm font-medium text-gray-500 mb-3">{h.sub}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{h.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Capital Structure ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-deep-green uppercase tracking-[0.18em]">Financing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mt-2 mb-4">Capital Structure</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                A balanced mix of equity, senior debt, and development finance — designed
                to optimise investor returns while distributing project risk appropriately.
              </p>
              <div className="space-y-5">
                {structure.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="font-semibold text-gray-800">{item.label}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900">{item.amount}</span>
                        <span className="text-gray-400 ml-2 text-xs">({item.usd})</span>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.share}%` }}
                        transition={{ duration: 1.2, delay: idx * 0.2, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1 text-right">{item.display} of total</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — donut-style visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm">
                {/* Total box */}
                <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Total Financing</p>

                  {/* Visual bar stack */}
                  <div className="flex rounded-xl overflow-hidden h-10 mb-8 w-full">
                    <div className="bg-deep-green" style={{ width: '33%' }} />
                    <div className="bg-dark-blue" style={{ width: '50%' }} />
                    <div className="bg-cement-grey" style={{ width: '17%' }} />
                  </div>

                  <div className="space-y-4">
                    {structure.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`w-3 h-3 rounded-sm ${item.color}`} />
                          <span className="text-sm text-gray-600">{item.label}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-gray-900">{item.amount}</p>
                          <p className="text-xs text-gray-400">{item.display}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">Total</span>
                    <div className="text-right">
                      <p className="text-lg font-bold text-dark-blue">TZS 306B</p>
                      <p className="text-xs text-gray-400">≈ USD 120M</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Invest ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Why Invest in NextGen Cement?"
            subtitle="Six reasons this opportunity stands apart"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {reasons.map((r, idx) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md hover:border-green-100 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-deep-green/8 flex items-center justify-center flex-shrink-0 group-hover:bg-deep-green/12 transition">
                    <Icon className="w-5 h-5 text-deep-green" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-blue mb-1">{r.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Investment Timeline" subtitle="From financial close to exit" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {timeline.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* connector line */}
                {idx < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-300 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm mb-3 ${
                    t.status === 'active'
                      ? 'bg-deep-green text-white shadow-lg shadow-deep-green/30'
                      : 'bg-white border-2 border-gray-200 text-gray-400'
                  }`}>
                    {idx + 1}
                  </div>
                  <p className={`text-xs font-bold mb-1 ${t.status === 'active' ? 'text-deep-green' : 'text-gray-400'}`}>
                    {t.year}
                  </p>
                  <p className="text-sm font-semibold text-dark-blue leading-tight">{t.label}</p>
                  {t.status === 'active' && (
                    <span className="mt-2 text-xs bg-green-100 text-deep-green px-2 py-0.5 rounded-full font-semibold">
                      In Progress
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-dark-blue to-deep-green text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore This Opportunity?</h2>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              We welcome serious inquiries from institutional investors, DFIs, family offices,
              and strategic partners. Let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold bg-green-400 text-dark-blue hover:bg-green-300 transition-all duration-200 text-base"
              >
                Contact Investment Team <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/partnerships"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold border border-white/25 text-white hover:bg-white/10 transition-all duration-200 text-base"
              >
                View Partnerships
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Investment;
