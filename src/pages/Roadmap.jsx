import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Project Development & Financing',
      period: '2024 – 2025',
      status: 'in-progress',
      milestones: [
        'Feasibility study completion',
        'Environmental Impact Assessment (EIA)',
        'Land acquisition and site preparation',
        'Investment deck and roadshow',
        'Financial close — equity and debt',
      ],
    },
    {
      phase: 'Phase 2',
      title: 'Construction & Commissioning',
      period: '2025 – 2027',
      status: 'upcoming',
      milestones: [
        'EPC contractor procurement',
        'Civil works and foundation',
        'Equipment installation',
        'Utility connections (power, water)',
        'Trial production and quality testing',
      ],
    },
    {
      phase: 'Phase 3',
      title: 'Commercial Operations',
      period: '2027 – 2028',
      status: 'upcoming',
      milestones: [
        'Full commercial production launch',
        'Distribution network activation',
        'Export market entry (EAC)',
        'Ramp-up to 1.2MTPA capacity',
        'ISO certification and quality accreditation',
      ],
    },
    {
      phase: 'Phase 4',
      title: 'Expansion & Scale',
      period: '2028 – 2030',
      status: 'upcoming',
      milestones: [
        'SADC market expansion',
        'Capacity expansion to 2.4MTPA',
        'Second plant feasibility study',
        'IPO or strategic exit preparation',
        'Net-zero roadmap implementation',
      ],
    },
  ];

  const statusConfig = {
    completed: { icon: <CheckCircle2 className="w-6 h-6 text-deep-green" />, label: 'Completed', bg: 'bg-deep-green' },
    'in-progress': { icon: <Clock className="w-6 h-6 text-dark-blue" />, label: 'In Progress', bg: 'bg-dark-blue' },
    upcoming: { icon: <Circle className="w-6 h-6 text-gray-400" />, label: 'Upcoming', bg: 'bg-gray-300' },
  };

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
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Development Roadmap</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              From Vision to Full-Scale Production
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              A clear, phased development plan taking NextGen Cement from project development
              through to regional market leadership by 2030.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Development Timeline" subtitle="Four phases to full-scale regional operations" />
          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />

            <div className="space-y-12">
              {phases.map((phase, idx) => {
                const config = statusConfig[phase.status];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative md:pl-24"
                  >
                    {/* Timeline dot */}
                    <div className={`hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full ${config.bg} items-center justify-center z-10`}>
                      <span className="text-white text-xs font-bold">{idx + 1}</span>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-sm font-bold text-deep-green uppercase tracking-widest">{phase.phase}</span>
                        <span className="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border">{phase.period}</span>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${config.bg}`}>
                          {config.label}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-dark-blue mb-6">{phase.title}</h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {phase.milestones.map((milestone, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                            {config.icon}
                            <span>{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
