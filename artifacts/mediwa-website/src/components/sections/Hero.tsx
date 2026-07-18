import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Factory, Truck, MapPin } from 'lucide-react';
import heroImage from '@assets/generated_images/hero_2.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Mediwa Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Building Northern Uganda's Future — <span className="text-secondary">One Structure at a Time</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
          >
            Gulu City's premier destination for high-grade concrete products, precision steel fabrication, and world-class commercial and residential construction services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Button size="lg" className="text-lg px-8 bg-secondary hover:bg-secondary/90 text-white border-0">
              Request a Quote
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-gray-900 bg-transparent">
              Contact Us
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20"
          >
            <div className="flex items-center gap-3 text-white">
              <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
              <span className="text-sm font-medium leading-tight">Quality<br/>Construction</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Factory className="text-primary w-6 h-6 shrink-0" />
              <span className="text-sm font-medium leading-tight">In-house<br/>Manufacturing</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <Truck className="text-primary w-6 h-6 shrink-0" />
              <span className="text-sm font-medium leading-tight">Reliable<br/>Delivery</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <MapPin className="text-primary w-6 h-6 shrink-0" />
              <span className="text-sm font-medium leading-tight">Northern Uganda<br/>Based</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
