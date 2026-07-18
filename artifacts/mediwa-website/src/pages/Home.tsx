import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { About } from '@/components/sections/About';
import { Timeline } from '@/components/sections/Timeline';
import { Products } from '@/components/sections/Products';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Industries } from '@/components/sections/Industries';
import { Projects } from '@/components/sections/Projects';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Partners } from '@/components/sections/Partners';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { FloatingElements } from '@/components/layout/FloatingElements';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <About />
        <Timeline />
        <Products />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Projects />
        <Gallery />
        <Testimonials />
        <Partners />
        <Contact />
      </main>

      <Footer />
      <FloatingElements />
    </div>
  );
}
