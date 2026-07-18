import { motion } from 'framer-motion';
import { HardHat, Home, Building2, PaintBucket, Briefcase, Ruler, Factory } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SERVICES = [
  {
    icon: Building2,
    title: 'Commercial Construction',
    desc: 'Office buildings, retail spaces, and industrial facilities built to international standards.',
  },
  {
    icon: Home,
    title: 'Residential Construction',
    desc: 'From single-family homes to large-scale housing developments and apartment complexes.',
  },
  {
    icon: Factory,
    title: 'Institutional Buildings',
    desc: 'Specialized construction for schools, hospitals, churches, and NGO facilities.',
  },
  {
    icon: PaintBucket,
    title: 'Renovations & Refurbishment',
    desc: 'Breathing new life into existing structures with modern upgrades and structural reinforcements.',
  },
  {
    icon: Briefcase,
    title: 'Project Management',
    desc: 'End-to-end oversight ensuring projects are delivered on time, within budget, and to spec.',
  },
  {
    icon: Ruler,
    title: 'Civil Works',
    desc: 'Roads, drainage systems, site clearing, and major earthworks preparation.',
  },
  {
    icon: HardHat,
    title: 'Turnkey Construction',
    desc: 'Complete design-and-build solutions from conceptualization to final handover.',
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Construction Services</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Building the Infrastructure of Tomorrow
            </h3>
            <p className="text-lg text-gray-600">
              With a highly skilled workforce, modern equipment, and our own supply of raw materials, Mediwa executes construction projects of any scale with unmatched efficiency.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            // Make the first card span 2 columns on large screens to break the grid monotony
            const isLarge = i === 0;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <Card className={`h-full border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group ${isLarge ? 'bg-primary text-white border-primary' : 'bg-white'}`}>
                  <CardHeader>
                    <div className={`p-4 rounded-xl w-fit mb-4 transition-colors ${isLarge ? 'bg-white/10 text-white' : 'bg-gray-50 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <CardTitle className={`text-2xl ${isLarge ? 'text-white' : 'text-gray-900'}`}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`text-base ${isLarge ? 'text-white/80' : 'text-gray-600'}`}>
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
