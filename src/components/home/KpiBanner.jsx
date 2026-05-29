import StatsCounter from '../common/StatsCounter';

const KpiBanner = () => {
  const stats = [
    { value: '1200000', suffix: ' T', label: 'Annual Production Capacity' },
    { value: '40', suffix: '%', label: 'CO₂ Reduction vs OPC' },
    { value: '6', suffix: '+', label: 'Distribution Corridors' },
    { value: '200', suffix: 'M+', label: 'Target Market Population' },
  ];

  return (
    <section className="bg-deep-green text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-light-sand">
                {stat.value === '1200000' ? '1.2MTPA' : `${stat.value}${stat.suffix}`}
              </div>
              <div className="text-gray-300 mt-2 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KpiBanner;
