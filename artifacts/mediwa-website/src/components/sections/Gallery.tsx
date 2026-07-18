import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';

// Import images
import projComImg from '@assets/generated_images/project-commercial.jpg';
import projEduImg from '@assets/generated_images/project-school.jpg';
import projResImg from '@assets/generated_images/project-residential.jpg';
import blocksImg from '@assets/generated_images/concrete-blocks.jpg';
import paversImg from '@assets/generated_images/concrete-pavers.jpg';
import polesImg from '@assets/generated_images/concrete-poles.jpg';
import gateImg from '@assets/generated_images/steel-gate.jpg';
import structImg from '@assets/generated_images/steel-structure.jpg';
import aboutImg from '@assets/generated_images/about.jpg';

const CATEGORIES = ['All', 'Construction', 'Products', 'Steel', 'Facility'];

const GALLERY_ITEMS = [
  { id: 1, src: projComImg, category: 'Construction', alt: 'Commercial Construction' },
  { id: 2, src: blocksImg, category: 'Products', alt: 'Hollow Blocks Manufacturing' },
  { id: 3, src: gateImg, category: 'Steel', alt: 'Custom Steel Gate' },
  { id: 4, src: projEduImg, category: 'Construction', alt: 'School Building Project' },
  { id: 5, src: paversImg, category: 'Products', alt: 'Interlocking Pavers' },
  { id: 6, src: aboutImg, category: 'Facility', alt: 'Engineers on Site' },
  { id: 7, src: structImg, category: 'Steel', alt: 'Structural Steel Assembly' },
  { id: 8, src: projResImg, category: 'Construction', alt: 'Residential Housing' },
  { id: 9, src: polesImg, category: 'Products', alt: 'Concrete Utility Poles' },
];

export function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-sm font-bold tracking-wider text-primary uppercase mb-3">Visual Tour</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
            Mediwa In Action
          </h3>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                onClick={() => setSelectedImg(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                  <ZoomIn className="w-8 h-8 mb-2" />
                  <span className="text-sm font-bold text-center">{item.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImg} onOpenChange={() => setSelectedImg(null)}>
          <DialogContent className="max-w-4xl p-1 bg-transparent border-0 shadow-none">
            <DialogTitle className="sr-only">Image view</DialogTitle>
            <DialogDescription className="sr-only">Viewing gallery image fullscreen</DialogDescription>
            {selectedImg && (
              <div className="relative">
                <img 
                  src={selectedImg.src} 
                  alt={selectedImg.alt} 
                  className="w-full max-h-[85vh] object-contain rounded-md"
                />
                <DialogClose className="absolute -top-12 right-0 bg-black/50 hover:bg-black p-2 rounded-full text-white transition-colors">
                  <X className="w-6 h-6" />
                </DialogClose>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
