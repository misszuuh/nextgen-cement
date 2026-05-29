import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { MapPin, Train, Ship, Truck } from 'lucide-react';

const LocationNetwork = () => {
  const corridors = [
    { name: 'Central Corridor', markets: 'Dodoma, Singida' },
    { name: 'Western Corridor', markets: 'Tabora, Kigoma, Mpanda' },
    { name: 'North-Western Corridor', markets: 'Kahama, Ngara, Bukoba, Mwanza' },
    { name: 'Northern Corridor', markets: 'Babati, Arusha, Kilimanjaro, Kenya' },
    { name: 'Eastern Corridor', markets: 'Morogoro, Dar es Salaam' },
    { name: 'Southern Corridor', markets: 'Iringa, Njombe, Mbeya, Songea, Zambia, Malawi' },
  ];

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container-custom">
          <SectionHeading
            title="Strategic Location & Distribution"
            subtitle="Integrated multi-corridor logistics network"
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <div className="bg-dark-blue text-white p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold mb-2">Galu Industrial Area</h3>
                <p className="text-gray-200">Mpwapwa District, Dodoma Region, Tanzania</p>
                <div className="mt-4 flex gap-4">
                  <div className="flex items-center gap-2"><Train className="w-5 h-5" /> SGR + Central Line</div>
                  <div className="flex items-center gap-2"><Ship className="w-5 h-5" /> Dar es Salaam Port</div>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Strategically positioned within Tanzania's central transport corridor with integrated connectivity
                to national railway systems and regional export routes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Truck className="text-deep-green" />
                  <span>Reduced logistics cost per ton</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-deep-green" />
                  <span>Multi-market coverage</span>
                </div>
              </div>
            </div>
            <ImagePlaceholder
              title="Tanzania Logistics & Rail Map"
              description="SGR overlay, export routes, and corridor visualization"
              height="h-96"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h3 className="text-2xl font-bold text-center mb-12">Multi-Corridor Distribution Network</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corridors.map((corridor, idx) => (
              <Card key={idx} className="border-l-4 border-deep-green">
                <h4 className="text-xl font-semibold mb-2">{corridor.name}</h4>
                <p className="text-gray-600">{corridor.markets}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationNetwork;