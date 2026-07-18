import { motion } from 'framer-motion';
import { Target, Eye, Gem, CheckCircle2 } from 'lucide-react';
import aboutImg from '@assets/generated_images/about.jpg';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gray-100 rounded-3xl transform -rotate-3 z-0" />
              <img 
                src={aboutImg} 
                alt="Mediwa Team reviewing plans" 
                className="relative z-10 w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                <p className="text-5xl font-heading font-bold mb-2">2025</p>
                <p className="text-primary-foreground/80 font-medium">Established in<br/>Gulu City</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">About Mediwa General Holdings</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              A New Force in Northern Uganda's Construction Industry
            </h3>
            <div className="prose text-gray-600 mb-8 max-w-none">
              <p>
                Established in 2025 in Gulu City, Mediwa General Holdings is an emerging construction and manufacturing company with a decisive mission: to capture significant market share in Northern Uganda's growing construction sector by delivering quality that the region has long deserved.
              </p>
              <p>
                From day one, we invested in our own concrete manufacturing and steel fabrication capabilities — controlling quality end-to-end and keeping costs competitive. We are lean, focused, and built for rapid growth.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-xl h-fit text-primary">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Mission</h4>
                  <p className="text-sm text-gray-600">To supply premium construction materials and deliver exceptional building services that empower communities across Northern Uganda.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="p-3 bg-secondary/10 rounded-xl h-fit text-secondary">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Our Vision</h4>
                  <p className="text-sm text-gray-600">To be the undisputed leader in sustainable construction and material manufacturing in East Africa.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Gem className="text-primary" /> Core Values
              </h4>
              <ul className="grid grid-cols-2 gap-4">
                {['Uncompromising Quality', 'Integrity & Transparency', 'Community Focus', 'Safety First', 'Innovation', 'Timely Delivery'].map((value, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
