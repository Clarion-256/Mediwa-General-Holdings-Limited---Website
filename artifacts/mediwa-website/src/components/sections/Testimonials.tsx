import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    name: 'Sarah Akello',
    role: 'Project Director',
    org: 'Northern Education NGO',
    content: 'Mediwa delivered the school extension project three weeks ahead of schedule. Their in-house materials meant we never faced supply delays. Exceptional professionalism from day one.',
    rating: 5,
  },
  {
    name: 'David Ocheng',
    role: 'Lead Developer',
    org: 'Ocheng Properties',
    content: 'We source all our concrete pavers and steel gates from Mediwa. The quality is unmatched in Gulu, and their structural steel fabrication has saved us immensely on transport costs from Kampala.',
    rating: 5,
  },
  {
    name: 'Hon. Peter Okot',
    role: 'District Official',
    org: 'Local Government',
    content: 'A true Northern Uganda success story. Mediwa\'s commercial construction work on the new CBD complex demonstrates their capacity to handle major government contracts with total transparency.',
    rating: 5,
  },
  {
    name: 'Dr. Jane Kinyera',
    role: 'Medical Director',
    org: 'Hope Clinic',
    content: 'Building a medical facility requires strict adherence to regulations. Mediwa\'s project management team guided us flawlessly. The steel windows and doors they fabricated are incredibly robust.',
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Client Success</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-gray-900">
            Trusted by the Region's Leaders
          </h3>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto relative px-8 md:px-16"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {TESTIMONIALS.map((t, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4 md:pl-6">
                  <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col relative">
                    <Quote className="absolute top-8 right-8 text-gray-100 w-16 h-16 rotate-180 -z-0" />
                    
                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic mb-8 flex-grow text-lg relative z-10">"{t.content}"</p>
                    
                    <div className="relative z-10">
                      <p className="font-bold text-gray-900">{t.name}</p>
                      <p className="text-sm text-primary font-medium">{t.role}, {t.org}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 bg-white hover:bg-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-4 md:-right-12 bg-white hover:bg-primary hover:text-white" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
