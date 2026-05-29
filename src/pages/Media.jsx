import { motion } from 'framer-motion';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import ImagePlaceholder from '../components/common/ImagePlaceholder';
import { FileText, Download, ExternalLink, Calendar } from 'lucide-react';

const Media = () => {
  const pressReleases = [
    { title: 'NextGen Cement Announces 1.2MTPA Plant Development in Dodoma', date: 'March 2025', category: 'Press Release' },
    { title: 'GYPSUM Plus Mines Ltd Launches Green Cement Subsidiary', date: 'January 2025', category: 'Press Release' },
    { title: 'LC3 Technology Partnership Agreement Signed', date: 'November 2024', category: 'Announcement' },
    { title: 'Tanzania Investment Centre Approves NextGen Cement Project', date: 'September 2024', category: 'Announcement' },
  ];

  const downloads = [
    { title: 'Investment Overview Deck', type: 'PDF', size: '4.2 MB' },
    { title: 'Company Profile', type: 'PDF', size: '2.8 MB' },
    { title: 'LC3 Technology Brief', type: 'PDF', size: '1.5 MB' },
    { title: 'ESG Framework Document', type: 'PDF', size: '3.1 MB' },
    { title: 'Project Feasibility Summary', type: 'PDF', size: '5.6 MB' },
    { title: 'Market Analysis Report', type: 'PDF', size: '2.2 MB' },
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
            <span className="text-light-sand text-sm font-semibold uppercase tracking-widest">Media & Resources</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
              News, Downloads & Media Kit
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Stay updated with the latest news from NextGen Cement and access our library
              of documents, presentations, and media resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Photo Gallery" subtitle="Site visits, events, and project milestones" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {[
              { title: 'Site Location — Galu Industrial Area', desc: 'Aerial view' },
              { title: 'Dodoma Region Landscape', desc: 'Project surroundings' },
              { title: 'LC3 Technology Process', desc: 'Manufacturing flow' },
              { title: 'Rail Connectivity', desc: 'SGR & Central Line' },
              { title: 'Community Engagement', desc: 'Local stakeholder meeting' },
              { title: 'Management Team', desc: 'Leadership photo' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <ImagePlaceholder title={item.title} description={item.desc} height="h-48" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Latest News" subtitle="Press releases and announcements" />
          <div className="space-y-4 mt-12 max-w-3xl mx-auto">
            {pressReleases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover={false} className="flex items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-deep-green flex-shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-semibold text-deep-green uppercase">{item.category}</span>
                      <h4 className="font-semibold text-dark-blue mt-1">{item.title}</h4>
                      <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
                        <Calendar className="w-3 h-3" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0 cursor-pointer hover:text-deep-green transition" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Document Library" subtitle="Download our key documents and presentations" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {downloads.map((doc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="flex items-center justify-between gap-4 cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-blue text-sm">{doc.title}</p>
                      <p className="text-xs text-gray-400">{doc.type} · {doc.size}</p>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-deep-green transition flex-shrink-0" />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
