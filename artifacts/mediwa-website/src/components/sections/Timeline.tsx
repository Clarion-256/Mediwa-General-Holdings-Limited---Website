import { motion } from 'framer-motion';

const TIMELINE = [
  { year: '2025', title: 'Company Founded', desc: 'Mediwa General Holdings established in Gulu City — a bold new force entering the construction and manufacturing landscape of Northern Uganda.' },
  { year: '2025', title: 'Concrete Works Division', desc: 'Launched in-house manufacturing of hollow blocks, concrete pavers, and utility poles, delivering quality materials directly to clients.' },
  { year: '2025', title: 'Metal Works Division', desc: 'Opened our steel fabrication workshop, producing precision-made gates, structural steel frames, and custom metalwork.' },
  { year: '2026', title: 'Market Penetration', desc: 'Actively growing our footprint across Gulu City and Northern Uganda, building trust one project at a time.' },
  { year: '2027', title: 'Regional Supply Hub', desc: 'Vision: become the go-to supplier and contractor for construction materials and services across Northern Uganda.' },
  { year: '2030+', title: 'Industry Leadership', desc: 'Target: a fully integrated construction group — manufacturing, fabrication, and project delivery — leading Uganda\'s building sector.' },
];

export function Timeline() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Our Journey</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
            Our Journey — From Launch to Industry Leader
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-white transform -translate-x-[6px] md:-translate-x-1/2 z-10 mt-1.5 md:mt-0" />
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`w-full pl-12 md:pl-0 md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}
                  >
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold rounded-full text-sm mb-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
