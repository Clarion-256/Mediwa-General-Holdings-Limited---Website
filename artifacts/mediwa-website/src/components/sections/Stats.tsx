import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, LayoutGrid, Building, Truck, MapPin, HeartHandshake } from 'lucide-react';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

function StatCounter({ end, suffix = '', label, icon }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [end, isInView]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="p-4 bg-gray-50 rounded-full text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-heading font-bold text-gray-900 mb-2">
        {count}{suffix}
      </h3>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
}

export function Stats() {
  const stats = [
    { end: 10, suffix: '+', label: 'Skilled Employees', icon: <Users size={28} /> },
    { end: 8, suffix: '+', label: 'Product Lines', icon: <LayoutGrid size={28} /> },
    { end: 2025, suffix: '', label: 'Year Established', icon: <Building size={28} /> },
    { end: 100, suffix: '%', label: 'Local Production', icon: <Truck size={28} /> },
    { end: 100, suffix: '%', label: 'Northern Uganda Focus', icon: <MapPin size={28} /> },
    { end: 100, suffix: '%', label: 'Client-First Approach', icon: <HeartHandshake size={28} /> },
  ];

  return (
    <section className="py-20 bg-gray-50 relative z-20 -mt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
