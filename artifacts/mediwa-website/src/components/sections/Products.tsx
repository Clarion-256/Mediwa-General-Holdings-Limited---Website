import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import concreteBlocksImg from '@assets/generated_images/concrete-blocks.jpg';
import concretePaversImg from '@assets/generated_images/concrete-pavers.jpg';
import concretePolesImg from '@assets/generated_images/concrete-poles.jpg';
import steelGateImg from '@assets/generated_images/steel-gate.jpg';
import steelStructImg from '@assets/generated_images/steel-structure.jpg';

const CONCRETE_PRODUCTS = [
  {
    name: 'Concrete Poles',
    desc: 'High-strength precast concrete utility poles for electrical and telecommunication infrastructure.',
    image: concretePolesImg,
    apps: ['Power distribution', 'Street lighting', 'Telecom networks']
  },
  {
    name: 'Hollow Blocks',
    desc: 'Standard load-bearing and non-load-bearing masonry blocks for walls and partitions.',
    image: concreteBlocksImg,
    apps: ['Commercial walls', 'Residential housing', 'Boundary walls']
  },
  {
    name: 'Interlocking Pavers',
    desc: 'Heavy-duty concrete pavers designed for high-traffic areas and aesthetic landscaping.',
    image: concretePaversImg,
    apps: ['Driveways', 'Walkways', 'Industrial yards']
  },
  {
    name: 'Concrete Slabs & Kerbstones',
    desc: 'Precast floor/roof slabs and durable kerbstones for road edge and drainage management.',
    image: concreteBlocksImg, // reuse placeholder
    apps: ['Road construction', 'Multi-story flooring', 'Drainage']
  },
];

const STEEL_PRODUCTS = [
  {
    name: 'Security Gates & Doors',
    desc: 'Ornamental and heavy-duty security steel gates and doors custom fabricated to exact specifications.',
    image: steelGateImg,
    apps: ['Residential compounds', 'Commercial entries', 'Industrial facilities']
  },
  {
    name: 'Structural Steel',
    desc: 'Precision-fabricated beams, columns, and trusses for large-scale construction.',
    image: steelStructImg,
    apps: ['Warehouses', 'Multi-story frames', 'Roof trusses']
  },
  {
    name: 'Windows & Balustrades',
    desc: 'Steel window frames, stair railings, and balcony balustrades offering both security and design.',
    image: steelGateImg, // reuse placeholder
    apps: ['Schools', 'Hospitals', 'Residential apartments']
  },
  {
    name: 'Custom Fabrication',
    desc: 'Bespoke metalwork including security grilles, cages, and specialized industrial components.',
    image: steelStructImg, // reuse placeholder
    apps: ['Bank security', 'Factory equipment', 'Specialized storage']
  },
];

function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{product.desc}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wider">Common Applications</h4>
          <ul className="space-y-1">
            {product.apps.map((app: string, i: number) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {app}
              </li>
            ))}
          </ul>
        </div>
        
        <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors" asChild>
          <a href="#contact">Request Quote <ArrowRight className="w-4 h-4 ml-2" /></a>
        </Button>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">In-House Manufacturing</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Premium Building Materials
          </h3>
          <p className="text-lg text-gray-600">
            We operate our own state-of-the-art concrete plant and steel fabrication workshop, ensuring complete quality control and reliable supply for all our projects and clients.
          </p>
        </div>

        <Tabs defaultValue="concrete" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white border shadow-sm p-1 rounded-lg">
              <TabsTrigger value="concrete" className="text-base px-8 py-3 rounded-md data-[state=active]:bg-primary data-[state=active]:text-white">
                Concrete Products
              </TabsTrigger>
              <TabsTrigger value="steel" className="text-base px-8 py-3 rounded-md data-[state=active]:bg-secondary data-[state=active]:text-white">
                Steel Fabrication
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="concrete" className="mt-0 outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONCRETE_PRODUCTS.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="steel" className="mt-0 outline-none">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {STEEL_PRODUCTS.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
