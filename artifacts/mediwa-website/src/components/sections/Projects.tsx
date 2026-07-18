import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import residentialImg from '@assets/generated_images/planned-residential.jpg';
import commercialImg from '@assets/generated_images/planned-commercial.jpg';
import concreteImg from '@assets/generated_images/planned-concrete.jpg';
import metalworksImg from '@assets/generated_images/planned-metalworks.jpg';

const PROJECTS = [
  {
    title: 'Residential Community Development',
    description: 'Affordable, quality housing estates for families in Gulu City and surrounding areas — built with our own concrete blocks and structural metalwork.',
    type: 'Residential',
    horizon: 'Near-term',
    highlights: ['Concrete block construction', 'Steel-framed roofing', 'Community-scale delivery'],
    image: residentialImg,
    accent: 'bg-blue-600',
  },
  {
    title: 'Commercial Real Estate Projects',
    description: "Multi-storey commercial buildings, retail complexes, and office developments — delivering turnkey construction for Gulu's growing business district.",
    type: 'Commercial',
    horizon: 'Near-term',
    highlights: ['Reinforced concrete frames', 'Steel structure fabrication', 'Full project management'],
    image: commercialImg,
    accent: 'bg-amber-500',
  },
  {
    title: 'Concrete Works Supply & Contracts',
    description: 'Large-scale supply of hollow blocks, pavers, and precast elements to construction sites, government projects, and developers across Northern Uganda.',
    type: 'Concrete Works',
    horizon: 'Active',
    highlights: ['Hollow blocks & pavers', 'Precast concrete poles', 'Bulk project supply'],
    image: concreteImg,
    accent: 'bg-stone-600',
  },
  {
    title: 'Metal Works Fabrication & Installation',
    description: 'Custom steel gates, structural frames, roofing trusses, and security grills fabricated in-house and installed across residential, commercial, and institutional sites.',
    type: 'Metal Works',
    horizon: 'Active',
    highlights: ['Custom steel gates & grills', 'Structural trusses', 'On-site installation'],
    image: metalworksImg,
    accent: 'bg-slate-700',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-wider text-secondary uppercase mb-3">What We're Building</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Planned & Active Projects
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            We are a company in motion. Here are the categories of work we are actively pursuing and planning — a clear signal of where Mediwa General Holdings is headed.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 ${project.accent} text-white text-xs font-bold rounded-full`}>
                    {project.type}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {project.horizon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-secondary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">Have a project in mind? Let's talk.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-full transition-colors text-lg"
          >
            Discuss Your Project <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
