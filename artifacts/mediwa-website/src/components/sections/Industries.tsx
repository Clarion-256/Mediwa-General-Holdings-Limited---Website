import { Home, Briefcase, Landmark, Building, Cross, GraduationCap, Stethoscope, HardHat, Building2, Factory } from 'lucide-react';

const INDUSTRIES = [
  { icon: Home, label: 'Homeowners' },
  { icon: Briefcase, label: 'Businesses' },
  { icon: Landmark, label: 'Government' },
  { icon: Building, label: 'NGOs / UN' },
  { icon: Cross, label: 'Churches' },
  { icon: GraduationCap, label: 'Schools' },
  { icon: Stethoscope, label: 'Hospitals' },
  { icon: HardHat, label: 'Contractors' },
  { icon: Building2, label: 'Developers' },
  { icon: Factory, label: 'Manufacturers' },
];

export function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Who We Serve</h2>
          <h3 className="text-3xl font-heading font-bold text-gray-900">Industries & Clients</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div key={i} className="flex flex-col items-center justify-center p-6 text-center rounded-xl bg-gray-50 hover:bg-primary hover:text-white transition-colors group cursor-default">
                <Icon className="w-8 h-8 mb-3 text-gray-400 group-hover:text-white transition-colors" />
                <span className="font-semibold text-gray-900 group-hover:text-white">{ind.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
