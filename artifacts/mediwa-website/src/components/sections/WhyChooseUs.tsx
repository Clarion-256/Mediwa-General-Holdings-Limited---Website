import { motion } from 'framer-motion';
import { Factory, HardHat, ShieldCheck, Banknote, PackageCheck, Clock, CheckSquare, Map, HeartHandshake, Award } from 'lucide-react';

const REASONS = [
  { icon: Factory, title: 'In-house Concrete', desc: 'Our own concrete manufacturing plant ensures quality and steady supply.' },
  { icon: HardHat, title: 'In-house Steel', desc: 'Custom structural and ornamental steel fabrication right from our workshop.' },
  { icon: ShieldCheck, title: 'Experienced Workforce', desc: 'Highly trained engineers, artisans, and construction professionals.' },
  { icon: Banknote, title: 'Competitive Pricing', desc: 'Direct manufacturing means no middleman markups on materials.' },
  { icon: PackageCheck, title: 'Quality Materials', desc: 'Sourcing and producing only the highest grade construction materials.' },
  { icon: Clock, title: 'Timely Delivery', desc: 'A proven track record of meeting strict project deadlines.' },
  { icon: CheckSquare, title: 'Project Management', desc: 'Professional end-to-end oversight for complete peace of mind.' },
  { icon: Map, title: 'Local Knowledge', desc: 'Deep understanding of Northern Uganda\'s terrain, climate, and logistics.' },
  { icon: HeartHandshake, title: 'Customer Satisfaction', desc: 'We build long-term relationships, not just structures.' },
  { icon: Award, title: 'Trusted Supplier', desc: 'The regional partner of choice for NGOs, government, and developers.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPgoJCTxwYXRoIGQ9Ik0wIDIwaDQwTTIwIDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">Why Choose Mediwa</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            The Mediwa Advantage
          </h3>
          <p className="text-lg text-gray-400">
            We don't just build; we engineer solutions. Our integrated approach to manufacturing and construction sets us apart in East Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-gray-800 border border-gray-700 p-6 rounded-xl hover:bg-gray-800/80 hover:border-primary transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
